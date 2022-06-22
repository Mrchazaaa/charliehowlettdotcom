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
 * For a given 'rule', create new rules that will be styled according to the given
 * themeDefinitions when the :root element has an attribute 'theme' set to 'themeName'.
 *
 * @param rule A map of variable, name -> value, pairs to be evaluated.
 * @param themeVariables A map of variable, name -> value, pairs to be evaluated.
 * @param themeName A map of variable, name -> value, pairs to be evaluated.
 */
function updateRule(thisRule) {
    if (thisRule.selector.trim() == "html" || thisRule.selector.trim() == ":root")
    {
        thisRule.selector = ':root[theme="light"], :root[theme="dark"]'
    }

    thisRule.selector = thisRule.selector.includes("theme=") ? thisRule.selector : `:root[theme="light"] ${thisRule.selector}, :root[theme="dark"] ${thisRule.selector}`;

    return thisRule;
}

module.exports = () => {

    return {
        postcssPlugin: 'theme-generator',
        Once(root, helper) {
            deconstructMultipleSelectors(root, helper);

            var newRules = [];

            root.each(node => {
                const replacement = node.clone();

                if (node.type === 'rule')
                {
                    updateRule(replacement);
                }
                else if (node.type === 'atrule' && node.nodes && node.name !== 'keyframes')
                {
                    replacement.walkRules(thisRule => {
                        updateRule(thisRule);
                    });
                }

                newRules.push(replacement);
            });

            root.removeAll();

            newRules.forEach(newRule => root.append(newRule));
        }
    };
};

module.exports.postcss = true;
