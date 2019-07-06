module.exports = {
    parserOptions: {
        ecmaVersion: 2019
    },
    rules: {
        // [1] Four space indent warning
        "indent": ["warn", 4],
        // [2] Single quotes '' always but allow ``
        "quotes": ["error", "single", {
            "allowTemplateLiterals": true
        }],
        // [3] Error on unused variables
        "no-unused-vars": "error",
        // [4, 5, 6] Error on spacing
        "keyword-spacing": "error",
        "space-before-function-paren": ["error", "always"],
        "space-infix-ops": ["error", {
            "int32Hint": true
        }],
        // [7] Enforce triple equal opperators !==, ===, ...
        "eqeqeq": ["error", "always"],
        // [8] Enforce space after comma: x, y
        "comma-spacing": ["error", { "before": false, "after": true }],
        // [9] Enforce '1tbs' brace style
        "brace-style": "error",
        // [10] Enforce curly brackets on all statements that may have them.
        "curly": "warn",
        // [11] Always handle 'err' on callback
        "handle-callback-err": "error",
        // [12] Error on undefined variables. (enforcement of global declarations)
        "no-undef": ["error", { "typeof": true }],
        // [13] No newline spam
        "no-multiple-empty-lines": "error",
        // [14] Enforce consistent linebreak style for operators (before operators) ---> 'let x = "str1"\n+ "str2"\n+ "str3"'
        "operator-linebreak": ["error", "before"],
        // [15] Disallow assignment operators in conditional statements but accept if they are in parethesis. ---> while ((x=5) && x < 10) {}
        "no-cond-assign": ["error", "except-parens"],
        // [16] Disallow or enforce spaces inside of blocks after opening block and before closing block
        "block-spacing": "error",
        // [17] Enforces camelcase style for property and variable names
        "camelcase": "error",
        // [18] Disallows trailing comma
        "comma-dangle": ["error", "never"],
        // [19] The dot in a member expression should be on the same line as the object portion
        "dot-location": ["warn", "object"],
        // [20] Enforce files end with EOF \n
        "eol-last": ["error", "always"],
        // [21] No space between function identifiers and their invocations
        "func-call-spacing": ["error", "never"],
        // [22] Error on stupid use of super
        "constructor-super": "error",
        // [23] Error on modifying 'const' variables
        "no-const-assign": "error",
        // [24] Error on duplicate arguments in functions
        "no-dupe-args": "error",
        // [25] Error on duplicate import statements
        "no-duplicate-imports": "error",
        // [26] Error on extra function binding
        "no-extra-bind": "warn",
        // [27] Error on unecessary parethesis around functione expressions
        "no-extra-parens": "warn",
        // [28] Error on fallthrough in switch statements
        "no-fallthrough": "error",
        // [29] Error on invalid regexp constructors
        "no-invalid-regexp": "error",
        // [30] Error on irregular whitespace
        "no-irregular-whitespace": "error",
        // [31] Error on label VS var identifier matching
        "no-label-var": "error",
        // [32] Error on self assignments
        "no-self-assign": "error",
        // [33] NO TABS!!!!!!
        "no-tabs": "warn",
        // [34] Enforce, 'super' must be called before 'this' in constructor
        "no-this-before-super": "error",
        // [35] Error on unreachable code
        "no-unreachable": "error",
        // [36] Error on empty contructors (may omit)
        "no-useless-constructor": "warn",
        // [37] Error on useless var renames
        "no-useless-rename": "error",
        // [38] Error on useless escape characters
        "no-useless-escape": "error",
        // [39] Error on padding within blocks (start and end of block space)
        "padded-blocks": ["warn", "never"],
        // [40, 41, 42, 43, 44, 45, 46] Spacing
        "rest-spread-spacing": ["error", "never"],
        "semi-spacing": "error",
        "space-before-blocks": "error",
        "space-in-parens": ["error", "never"],
        "space-unary-ops": "error",
        "spaced-comment": ["error", "always"],
        "template-curly-spacing": "error",
        // [47] Use isNaN() instead of x === NaN
        "use-isnan": "error",
        // [48] Enforce parenthesis in IIFEs
        "wrap-iife": ["error", "outside"],
        // [49] Avoid magic numbers of left side of expressions
        "yoda": "warn",
        // [50] Always semicolon!
        "semi": [2, "always"],
        // [51] Error on loop counter moving oposing direction of expression
        "for-direction": "warn",
        // [52] Enforce return statements in getters
        "getter-return": "error",
        // [53] Error on executor function in promises from being async (so that promise always rejects)
        "no-async-promise-executor": "error",
        // [54] Warn -0 comparisons. Code like x === -0 will pass for both +0 and -0. This is better: Object.is(x, -0).
        "no-compare-neg-zero": "warn",
        // [55] Error on extra semicolons
        "no-extra-semi": "error",
        // [56] Warn about race conditions
        "require-atomic-updates": "warn",
        // [57] It is usually a typing mistake to compare the result of a typeof operator to other string literals.
        "valid-typeof": "error"
    }
};