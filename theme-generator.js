const fs = require('fs');

// A custom property is any property whose name starts with two dashes (U+002D HYPHEN-MINUS)
// `--foo`
// See: http://dev.w3.org/csswg/css-variables/#custom-property
const RE_VAR_FUNC = (/var\((--.+?)\)/);
const RE_VAR_DECL = (/(--.+)/);
const RE_THEME = (/theme="(.*?)"/);

/**
 * Evaluates nested css variables.
 *
 * @param themeVariables A map of variable, name -> value, pairs to be evaluated.
 */
function evaluateVariables(themeDefinitions) {
    let referencedValues = Array.from(themeDefinitions).filter(([, v]) => RE_VAR_FUNC.test(v));

    while (referencedValues.length > 0) {
        let i = 0;
        while (i < referencedValues.length) {
            const [k, v] = referencedValues[i];
            const variableName = RE_VAR_FUNC.exec(v)[1];

            if (RE_VAR_FUNC.test(themeDefinitions.get(variableName))) {
                ++i;
                continue;
            }

            themeDefinitions.set(k, themeDefinitions.get(variableName));
            referencedValues.splice(i, 1);
        }
    }
}

/**
 * Returns a map representing the themes found in the given css file.
 * A theme is a set of css variables defined in a ':root' selector, which
 * includes a theme attribute where :root[theme='themeName']. The keys of the
 * map are the theme names found and the values are another map of the evaluated
 * css variables that the theme defines.
 *
 * @param css The css file.
 * @param helper The postcss helper.
 */
function extractThemes(css, helper) {
    var themes = new Map();
    var themeNodes = new Map();

    css.walkDecls(thisDecl => {
        if (!RE_VAR_DECL.test(thisDecl.prop)) {
            return;
        }

        var themeName = RE_THEME.exec(thisDecl.parent.selector) ? RE_THEME.exec(thisDecl.parent.selector)[1] : 'default';

        if (!themes.get(themeName)) {
            themes.set(themeName, new Map());
            var newThemeNode = helper.rule({selector: thisDecl.parent.selector});
            themeNodes.set(themeName, newThemeNode);
            css.removeChild(thisDecl.parent);
        }

        themes.get(themeName).set(thisDecl.prop, thisDecl.value);
    });

    themes.forEach((themeDefinitions) => {
        themes.get('default').forEach((defaultDeclValue, defaultDeclProp) => {
            if (!themeDefinitions.get(defaultDeclProp)) {
                themeDefinitions.set(defaultDeclProp, defaultDeclValue);
            }
        });
    });

    themes.forEach((themeDefinitions, themeName) => {
        evaluateVariables(themeDefinitions);

        themeDefinitions.forEach((defaultDeclValue, defaultDeclProp) => {
            themeNodes.get(themeName).append(helper.decl({prop: defaultDeclProp, value: defaultDeclValue}));
        });
    });

    return {themes, themeNodes};
}

/**
 * Transforms selectors that target multiple elemets.
 * I.E: .selector1, .selector2 {...} => .selector1 {...} .selector2 {...}.
 *
 * @param css The css file.
 * @param helper The postcss helper.
 */
function deconstructMultipleSelectors(css, helper) {
    css.walkRules(thisRule => {
        var rulesArr = thisRule.selector.split(',');
        thisRule.selector = rulesArr[0];

        for (var i = 1; i < rulesArr.length; i++) {
            var newRule = helper.rule({ selector: rulesArr[i] });

            // eslint-disable-next-line no-loop-func
            thisRule.walkDecls(thisDecl => {
                newRule.append(thisDecl.clone());
            });

            thisRule.after(newRule);
        }
    });
}

/**
 * Gets first css variable it finds in text.
 *
 * @param text The text to search.
 */
function getFirstMatch(text) {
    const result = RE_VAR_FUNC.exec(text);

    if (!result) {
        return null;
    }

    return {
        index: result.index,
        length: result[0].length,
        variable: result[1]
    };
}

/**
 * Given a decleration, whose value contains css variable(s), replace the
 * css variables with their values, given the themeDefinitions supplied (or
 * the defaultThemeDefinitions if themeDefinitions doesnt contain a definition for
 * that variable).
 *
 * @param declValue The value of the decleration to evaluate.
 * @param themeDefinitions The variable definitions for a given theme.
 * @param defaultThemeDefinitions The default variable defintions.
 */
function replaceVariables(declValue, themeDefinitions, defaultThemeDefinitions) {
    const parts = [];

    let match = null;
    while ((match = getFirstMatch(declValue))) {
        const prefix = declValue.substring(0, match.index);
        parts.push(prefix);

        const substitution = themeDefinitions.get(match.variable) || defaultThemeDefinitions.get(match.variable);

        if (!substitution) {
            throw new Error(`Cannot replace variables in '${declValue}' as the variable '${match.variable}' has no value`);
        }

        parts.push(substitution);

        declValue = declValue.substring(match.index + match.length);
    }

    if (declValue.length) {
        parts.push(declValue);
    }

    return parts.join('');
}

/**
 * For a given 'rule', create new rules that will be styled according to the given
 * themeDefinitions when the :root element has an attribute 'theme' set to 'themeName'.
 *
 * @param rule A map of variable, name -> value, pairs to be evaluated.
 * @param themeVariables A map of variable, name -> value, pairs to be evaluated.
 * @param themeName A map of variable, name -> value, pairs to be evaluated.
 */
function updateRule(thisRule, themeDefinitions, themeName, defaultThemeDefinitions) {
    var selector = themeName === 'default' ? thisRule.selector : ':root[theme="' + themeName + '"] ' + thisRule.selector;

    thisRule.selector = selector;

    thisRule.walkDecls(thisDecl => {
        var referencesVariable = RE_VAR_FUNC.test(thisDecl.value);

        if (referencesVariable) {
            thisDecl.value = replaceVariables(thisDecl.value, themeDefinitions, defaultThemeDefinitions);
        }
    });

    return thisRule;
}

module.exports = ({importFrom}) => {
    console.log("asfdgfhgjhk");
    return {
        postcssPlugin: 'theme-generator',
        Once(root, helper) {
            const themeCss = importFrom ? helper.parse(fs.readFileSync(importFrom), { from: importFrom }) : root;

            deconstructMultipleSelectors(root, helper);

            const { themes } = extractThemes(themeCss, helper);

            var newRules = [];

            themes.forEach((themeDefinitions, themeName) => {
                root.each(node => {
                    const replacement = node.clone();

                    if (node.type === 'rule') {
                        updateRule(replacement, themeDefinitions, themeName, themes.get('default'));
                    } else if (node.type === 'atrule' && node.nodes && node.name !== 'keyframes') {
                        replacement.walkRules(thisRule => {
                            updateRule(thisRule, themeDefinitions, themeName, themes.get('default'));
                        });
                    }

                    newRules.push(replacement);
                });
            });

            root.removeAll();

            newRules.forEach(newRule => root.append(newRule));
        }
    };
};

module.exports.postcss = true;
