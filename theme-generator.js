 
const postcss = require('postcss');

// A custom property is any property whose name starts with two dashes (U+002D HYPHEN-MINUS)
// `--foo`
// See: http://dev.w3.org/csswg/css-variables/#custom-property
const RE_VAR_FUNC = (/var\((--.+?)\)/);
const RE_VAR_DECL = (/(--.+)/);
const RE_THEME = (/theme=\"(.*?)\"/);

module.exports = postcss.plugin('theme-generator', function plugin() {
    return function generator(css) {

        DeconstructMultipleSelectors(css);

        const {themes, themeNodes} = ExtractThemes(css);

        themeNodes.forEach(themeNode => css.removeChild(themeNode));

        var newRules = [];

        css.walkRules(rule => {
            themes.forEach((themeDefinitions, themeName) => {
                newRules.push(GenerateNewRule(rule, themeDefinitions, themeName, themes.get("default")));
            });
        });

        css.removeAll();

        themeNodes.forEach(themeNode => css.append(themeNode))

        newRules.forEach(newRule => css.append(newRule));
    }
});

/**
 * Returns a map representing the themes found in the given css file.
 * A theme is a set of css variables defined in a ':root' selector, which 
 * includes a theme attribute where :root[theme="themeName"]. The keys of the 
 * map are the theme names found and the values are another map of the evaluated 
 * css variables that the theme defines.
 * 
 * @param css The css file. 
 */
function ExtractThemes(css) {
    var themes = new Map();
    var themeNodes = new Map();

    css.walkDecls(decl => {
        if (!RE_VAR_DECL.test(decl.prop)) {
            return;
        }

        var themeName = RE_THEME.exec(decl.parent.selector) ? RE_THEME.exec(decl.parent.selector)[1] : "default";

        if (!themes.get(themeName)) {
            themes.set(themeName, new Map());
            themeNodes.set(themeName, decl.parent);
        }

        themes.get(themeName).set(decl.prop, decl.value);
    });

    themes.forEach((value, key) => evaluateVariables(value));

    return {themes, themeNodes};
}

/**
 * Evaluates nested css variables.
 * 
 * @param themeVariables A map of variable, name -> value, pairs to be evaluated.
 */
function evaluateVariables(themeDefinitions) {
    let referencedValues = Array.from(themeDefinitions).filter(([k, v]) => RE_VAR_FUNC.test(v));

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
 * Transforms selectors that target multiple elemets.
 * I.E: .selector1, .selector2 {...} => .selector1 {...} .selector2 {...}.
 * 
 * @param css The css file. 
 */
function DeconstructMultipleSelectors(css) {
    css.walkRules(rule => {
        var rulesArr = rule.selector.split(',');
        rule.selector = rulesArr[0];

        for (var i = 1; i < rulesArr.length; i++) {
            var newRule = postcss.rule({ selector: rulesArr[i] });
            
            rule.walkDecls(decl => {
                newRule.append(decl.clone());
            });

            rule.after(newRule);
        }

    });
}

/**
 * For a given 'rule', create new rules that will be styled according to the given 
 * themeDefinitions when the :root element has an attribute 'theme' set to 'themeName'.
 * 
 * @param rule A map of variable, name -> value, pairs to be evaluated.
 * @param themeVariables A map of variable, name -> value, pairs to be evaluated.
 * @param themeName A map of variable, name -> value, pairs to be evaluated.
 */
function GenerateNewRule(rule, themeDefinitions, themeName, defaultThemeDefinitions) {
    var selector = themeName == "default" ? rule.selector : ':root[theme="' + themeName + '"] ' + rule.selector;
    
    var newRule = postcss.rule({ selector: selector });

    rule.walkDecls(decl => {
        var isVariableDeclaration = RE_VAR_DECL.test(decl.prop);
        var referencesVariable = RE_VAR_FUNC.test(decl.value);

        if (isVariableDeclaration) {
            newRule.append(decl.clone());
        }
        else if (referencesVariable) 
        {
            newDecl = decl.clone();
            newDecl.value = ReplaceVariables(newDecl.value, themeDefinitions, defaultThemeDefinitions);

            newRule.append(newDecl);
        }

        newRule.append({prop: decl.prop, value: decl.value});
    });

    // if (newRule.nodes.length > 0) {
    //     rule = newRule;
    // }
    return newRule;
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
function ReplaceVariables(declValue, themeDefinitions, defaultThemeDefinitions) {
    const parts = [];

    let match = null;
    while (match = GetFirstMatch(declValue)) {
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
 * Gets first css variable it finds in text.
 * 
 * @param text The text to search.
 */
function GetFirstMatch(text) {
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