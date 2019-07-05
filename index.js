module.exports = {
    parserOptions: {
        ecmaVersion: 2019
    },
    rules: {
        "indent": ["error", 4],
        "quotes": ["error", "single", {
            "allowTemplateLiterals": true
        }],
        "no-unused-vars": "error",
        "keyword-spacing": "error",
        "space-before-function-paren": ["error", "always"],
        "eqeqeq": ["error", "always"],
        "space-infix-ops": ["error", {
            "int32Hint": true
        }],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "brace-style": "error",
    }
};