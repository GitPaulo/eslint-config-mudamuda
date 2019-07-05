module.exports = {
    parserOptions: {
        ecmaVersion: 2019
    },
    rules: {
        // [1] Four space indent
        "indent": ["error", 4],
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
        "curly": "error",
        // [11] Always handle 'err' on callback
        "handle-callback-err": "error",
        // [12] Error on undefined variables. (enforcement of global declarations)
        "no-undef": ["error", { "typeof": true }],
        // [13] No newline spam
        "no-multiple-empty-lines": "error",
        // [14] Enforce consistent linebreak style for operators (before operators) ---> 'let x = "str1"\n+ "str2"\n+ "str3"'
        "eslint operator-linebreak": ["error", "before"],
        // [15] Disallow assignment operators in conditional statements but accept if they are in parethesis. ---> while ((x=5) && x < 10) {}
        "no-cond-assign": ["error", "except-parens"],
        // [16] Disallow or enforce spaces inside of blocks after opening block and before closing block
        "block-spacing": "error",
        // [17] Enforces camelcase style for property and variable names
        "camelcase": "error",
        // [18] Disallows trailing comma
        "comma-dangle": ["error", "never"],
        // [19] The dot in a member expression should be on the same line as the object portion
        "dot-location": ["error", "object"],
        // [20] Enforce files end with EOF \n
        "eol-last": ["error", "always"],
        // [21] No space between function identifiers and their invocations
        "func-call-spacing": ["error", "never"],
        // [22] Block stupid use of super
        "constructor-super": "error",
        // [23] Block modifying 'const' variables
        "no-const-assign": "error",
        // [24] Block duplicate arguments in functions
        "no-dupe-args": "error",
        // [25] Block duplicate import statements
        "no-duplicate-imports": "error",
        // [26] Block extra function binding
        "no-extra-bind": "error",
        // [27] Block unecessary parethesis around functione expressions
        "no-extra-parens": "error",
        // [28] Block fallthrough in switch statements
        "no-fallthrough": "error",
        // [29] Block invalid regexp constructors
        "no-invalid-regexp": "error",
        // [30] Block irregular whitespace
        "no-irregular-whitespace": "error",
        // [31] Block label VS var identifier matching
        "no-label-var": "error",
        // [32] Block self assignments
        "no-self-assign": "error",
        // [33] NO TABS!!!!!!
        "no-tabs": "error",
        // [34] Enforce, 'super' must be called before 'this' in constructor
        "no-this-before-super": "error",
        // [35] Block unreachable code
        "no-unreachable": "error",
        // [36] Block empty contructors (may omit)
        "no-useless-constructor": "error",
        // [37] Block useless var renames
        "no-useless-rename": "error",
        // [38] Block useless escape characters
        "no-useless-escape": "error",
        // [39] Block padding within blocks
        "padded-blocks": ["error", "always"],
        // [40, 41, 42, 43, 44, 45, 46] Spacing
        "rest-spread-spacing": ["error", "never"],
        "semi-spacing": "error",
        "pace-before-blocks": "error",
        "space-in-parens": ["error", "never"],
        "space-unary-ops": "error",
        "spaced-comment": ["error", "always"],
        "template-curly-spacing": "error",
        // [47] Use isNaN() instead of x === NaN
        "use-isnan": "error",
        // [48] Enforce parenthesis in IIFEs
        "wrap-iife": ["error", "outside"],
        // [49] Avoid magic numbers of left side of expressions
        "yoda": "error",
        // [50] Always semicolon!
        "semi": [2, "always"]
    }
};