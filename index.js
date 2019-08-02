const commentExceptions = ['-', '+', '*', '=', '-', '|', '>', '<', '/'];
const variableTypes     = ['const', 'let', 'var'];

module.exports = {
    parserOptions: {
        ecmaVersion: 2019
    },
    rules: {
        /****** Possible Errors ******/

        // Enforce “for” loop update clause moving the counter in the right direction.
        'for-direction': 'warn',
        // Enforces that a return statement is present in property getters 
        'getter-return': 'error',
        // Disallow using an async function as a Promise executor
        'no-async-promise-executor': 'error',
        // Disallow await inside of loops
        'no-await-in-loop': 'warn',
        // Disallow comparing against -0
        'no-compare-neg-zero': 'error',
        // Disallow assignment operators in conditional statements
        'no-cond-assign': 'warn',
        // Diallow use of console
        'no-console': 'off',
        // Disallow onstant expressions in conditions
        'no-constant-condition': 'off',
        // Disallow control characters in regular expressions
        'no-control-regex': 'warn',
        // Disallow use of debugger
        'no-debugger': 'warn',
        // Disallow duplicate arguments in function definitions
        'no-dupe-args': 'error',
        // Disallow duplicate keys in object literals
        'no-dupe-keys': 'error',
        // Disallow duplicate case labels
        'no-duplicate-case': 'error',
        // Disallow empty block statements
        'no-empty': 'error',
        // Disallow empty character classes in regular expressions
        'no-empty-character-class': 'error',
        // Disallow reassigning exceptions in catch clauses
        'no-ex-assign': 'warn',
        // Disallow unnecessary boolean casts
        'no-extra-boolean-cast': 'warn',
        // Disallow unnecessary parethesis
        'no-extra-parens': 'off',
        // Disallow extra semi colons
        'no-extra-semi': 'error',
        // disallow reassigning function declarations
        'no-func-assign': 'warn',
        // Disallow variable or function declarations in nested blocks
        'no-inner-declarations': 'off',
        // Disallow invalid regular expression strings in RegExp constructors
        'no-invalid-regexp': 'warn',
        // Disallow irregular whitespace
        'no-irregular-whitespace': ['error', { skipStrings: true, skipComments: true, skipRegExps: true, skipTemplates: true }],
        // Disallow characters which are made with multiple code points in character class syntax
        'no-misleading-character-class': 'warn',
        // Disallow calling global object properties as functions
        'no-obj-calls': 'warn',
        // Disallow calling some Object.prototype methods directly on objects
        'no-prototype-builtins': 'off',
        // Disallow multiple spaces in regular expressions
        'no-regex-spaces': 'warn',
        // Disallow sparse arrays
        'no-sparse-arrays': 'warn',
        // Dsallow template literal placeholder syntax in regular strings
        'no-template-curly-in-string': 'warn',
        // Disallow confusing multiline expressions
        'no-unexpected-multiline': 'error',
        // Disallow unreachable code after return, throw, continue, and break statements
        'no-unreachable': 'error',
        // Disallow control flow statements in finally blocks
        'no-unsafe-finally': 'warn',
        // Disallow negating the left operand of relational operators
        'no-unsafe-negation': 'error',
        // Disallow assignments that can lead to race conditions due to usage of await or yield
        'use-isnan': 'error',
        // Enforce comparing typeof expressions against valid strings
        'valid-typeof': 'error',
        // JSDOC rules
        'valid-jsdoc': 'off',

        /****** Best Practices ******/
        
        // Enforce getter and setter pairs in objects
        'accessor-pairs': 'off',
        // Enforce return statements in callbacks of array methods
        'array-callback-return': 'warn',
        // Enforce the use of variables within the scope they are defined
        'block-scoped-var': 'warn',
        // Enforce that class methods utilize this
        'class-methods-use-this': 'warn',
        // Enforce a maximum cyclomatic complexity allowed in a program
        'complexity': 'off',
        // Require return statements to either always or never specify values
        'consistent-return': 'off',
        // Enforce consistent brace style for all control statements
        'curly': 'error',
        // Require default cases in switch statements
        'default-case': 'error',
        // Enforce consistent newlines before and after dots
        'dot-location': ['error', 'property'],
        // Enforce dot notation whenever possible
        'dot-notation': ['warn', { allowKeywords: true, allowPattern: '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)' }],
        // Require the use of === and !==
        'eqeqeq': ['error', 'smart'],
        // Require for-in loops to include an if statement
        'guard-for-in': 'warn',
        // Enforce a maximum number of classes per file
        'max-classes-per-file': 'off',
        // Disallow the use of alert, confirm, and prompt
        'no-alert': 'warn',
        // Disallow the use of arguments.caller or arguments.callee
        'no-caller': 'warn',
        // Disallow lexical declarations in case clauses
        'no-case-declarations': 'warn',
        // Disallow division operators explicitly at the beginning of regular expressions
        'no-div-regex': 'off',
        // Disallow else blocks after return statements in if statements
        'no-else-return': 'warn',
        // Disallow empty functions
        'no-empty-function': 'error',
        // Disallow empty destructuring patterns
        'no-empty-pattern': 'error',
        // Disallow null comparisons without type-checking operators
        'no-eq-null': 'warn',
        // Disallow the use of eval()
        'no-eval': 'warn',
        // Disallow extending native types
        'no-extend-native': 'warn',
        // Disallow unnecessary calls to .bind()
        'no-extra-bind': 'warn',
        // Disallow unnecessary labels
        'no-extra-label': 'warn',
        // Disallow fallthrough of case statements
        'no-fallthrough': 'off',
        // Disallow leading or trailing decimal points in numeric literals
        'no-floating-decimal': 'error',
        // Disallow assignments to native objects or read-only global variables
        'no-global-assign': 'off',
        // Disallow shorthand type conversions
        'no-implicit-coercion': 'error',
        // Disallow variable and function declarations in the global scope
        'no-implicit-globals': 'off',
        // Disallow the use of eval()-like methods
        'no-implied-eval': 'warn',
        // Disallawthis keywords outside of classes or class-like objects
        'no-invalid-this': 'warn',
        // Disallow the use of the __iterator__ property
        'no-iterator': 'off',
        // Disallow labeled statements
        'no-labels': 'off',
        // Disallow unnecessary nested blocks
        'no-lone-blocks': 'off',
        // Disallow function declarations that contain unsafe references inside loop statements
        'no-loop-func': 'off',
        // Disallow magic numbers
        'no-magic-numbers': 'off',
        // Disallow multiple spaces
        'no-multi-spaces': 'off',
        // Disallow multiline strings
        'no-multi-str': 'warn',
        // Disallow new operators outside of assignments or comparisons
        'no-new': 'off',
        // Disallow new operators with the Function object
        'no-new-func': 'warn',
        // Disallow new operators with the String, Number, and Boolean objects
        'no-new-wrappers': 'warn',
        // Disallow octal literals
        'no-octal': 'error',
        // Disallow octal escape sequences in string literals
        'no-octal-escape': 'error',
        // Disallow reassigning function parameters
        'no-param-reassign': 'off',
        // Disallow the use of the __proto__ property
        'no-proto': 'off',
        // Disallow variable redeclaration
        'no-redeclare': 'error',
        // Disallow certain properties on certain objects
        'no-restricted-properties': 'off',
        // Disallow assignment operators in return statements
        'no-return-assign': 'off',
        // Disallow unnecessary return await
        'no-return-await': 'warn',
        // Disallow javascript: urls
        'no-script-url': 'off',
        // Disallow assignments where both sides are exactly the same
        'no-self-assign': 'error',
        // Disallow comparisons where both sides are exactly the same
        'no-self-compare': 'error',
        // Disallow comma operators
        'no-sequences': 'off',
        // Disallow throwing literals as exceptions
        'no-throw-literal': 'error',
        // Disallow unmodified loop conditions
        'no-unmodified-loop-condition': 'off',
        // Disallow unused expressions
        'no-unused-expressions': 'off',
        // Disallow unused labels
        'no-unused-labels': 'error',
        // Disallow unnecessary calls to .call() and .apply()
        'no-useless-call': 'warn',
        // Disallow unnecessary ccatch
        'no-useless-catch': 'warn',
        // Disallow unnecessary concatenation of literals or template literals
        'no-useless-concat': 'warn',
        // Disallow unnecessary escape characters
        'no-useless-escape': 'warn',
        // Disallow redundant return statements
        'no-useless-return': 'error',
        // Disallow void operators
        'no-void': 'warn',
        // Disallow specified warning terms in comments
        'no-warning-comments': 'off',
        // Disallow with statements
        'no-with': 'error',
        // Enforce using named capture group in regular expression
        'prefer-named-capture-group': 'off', 
        // Require using Error objects as Promise rejection reasons
        'prefer-promise-reject-errors': 'off',
        // Enforce the consistent use of the radix argument when using parseInt()
        'radix': 'error',
        // Disallow async functions which have no await expression
        'require-await': 'off',
        // enforce the use of u flag on RegExp
        'require-unicode-regexp': 'warn', 
        // Require var declarations be placed at the top of their containing scope
        'vars-on-top': 'off',
        // Require parentheses around immediate function invocations
        'wrap-iife': ['error', 'inside'],
        // Require or disallow “Yoda” conditions
        'yoda': 'warn',

        /****** Strict Mode ******/

        // Require or disallow strict mode directives
        'strict': ['warn', 'never'],

        /****** Variables ******/

        // Require or disallow initialization in variable declarations
        'init-declarations': 'warn',
        // Disallow deleting variables
        'no-delete-var': 'error',
        // Disallow labels that share a name with a variable
        'no-label-var': 'error',
        // Disallow specified global variables
        'no-restricted-globals': 'off',
        // Disallow variable declarations from shadowing variables declared in the outer scope
        'no-shadow': 'off',
        // Disallow identifiers from shadowing restricted names
        'no-shadow-restricted-names': 'error',
        // Disallow the use of undeclared variables unless mentioned in /*global */ comments
        'no-undef': 'error',
        // Disallow initializing variables to undefined
        'no-undef-init': 'off',
        // Disallow the use of undefined as an identifier
        'no-undefined': 'error',
        // Disallow unused variables
        'no-unused-vars': ['error', { 'args': 'after-used' }],
        // Disallow the use of variables before they are defined

        /****** Stylistic Issues ******/
        
        // Enforce linebreaks after opening and before closing array brackets
        'array-bracket-newline': ['error', 'consistent'],
        // Disallow or enforce spaces inside of brackets
        'array-bracket-spacing': ['error', 'never', { singleValue: false, objectsInArrays: false, arraysInArrays: false }],
        // Enforce line breaks between array elements
        'array-element-newline': 'off',
        // Disallow or enforce spaces inside of blocks after opening block and before closing block
        'block-spacing': ['error', 'always'],
        // Require Brace Style
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        // Require CamelCase
        'camelcase': 'error',
        // Enforce or disallow capitalization of the first letter of a comment
        'capitalized-comments': ['warn', 'always'],
        // Require or disallow trailing commas
        'comma-dangle': ['error', 'never'],
        // Enforce consistent spacing before and after commas
        'comma-spacing': ['error', { before: false, after: true }],
        // Enforce consistent comma style
        'comma-style': ['error', 'last'],
        // Disallow or enforce spaces inside of computed properties 
        'computed-property-spacing': ['error', 'never'],
        // Require Consistent This
        'consistent-this': ['warn', 'self'],
        // Require or disallow newline at the end of files
        'eol-last': ['error', 'always'],
        // Require or disallow spacing between function identifiers and their invocations
        'func-call-spacing': ['error', 'never'],
        // Require function names to match the name of the variable or property to which they are assigned
        'func-name-matching': ['warn', 'always'],
        // Require or disallow named function expressions
        'func-names': 'off',
        // Enforce the consistent use of either function declarations or expressions
        'func-style': 'off',
        // Enforce consistent line breaks inside function parentheses
        'function-paren-newline': ['warn', 'consistent'],
        // Disallow specified identifiers
        'id-blacklist': 'off',
        // Enforce minimum and maximum identifier lengths
        'id-length': ['warn', { 'min': 0, 'max': 25 }],
        // Require identifiers to match a specified regular expression
        'id-match': 'off',
        // SPACES REEEEEEEEEEEEEEEE
        'indent': ['error', 4, { SwitchCase: 1 }],
        // Single quotes or die!
        'jsx-quotes': ['error', 'prefer-single'],
        // Enforce consistent spacing between keys and values in object literal properties
        'key-spacing': ['error', { 'align': 'colon' }],
        // Enforce consistent spacing before and after keywords
        'keyword-spacing': ['error', { before: true, after: true }],
        // Enforce position of line comments
        'line-comment-position': 'off',
        // Enforce consistent linebreak style
        'linebreak-style': ['error', 'windows'],
        // Require empty lines around comments
        'lines-around-comment': 'off',
        // Require or disallow an empty line between class members
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        // Enforce a maximum depth that blocks can be nested
        'max-depth': ['warn', 5],
        // Enforce a maximum line length
        'max-len': ['warn', 140],
        // Enforce a maximum file lines number
        'max-lines': ['warn', 1000],
        // Enforce a maximum nested callbacks
        'max-nested-callbacks': ['warn', 4],
        // Enforce a maximum parameter number
        'max-params': ['warn', 5],
        // Enforce a maximum statements number
        'max-statements': 'off',
        // Enforce a maximum statements per line
        'max-statements-per-line': ['error', { max: 1 }],
        // Enforce multiline comment style
        'multiline-comment-style': 'off',
        // Enforce newlines between operands of ternary expressions
        'multiline-ternary': ['error', 'always-multiline'],
        // Require constructor names to begin with a capital letter
        'new-cap': 'warn',
        // Enforce or disallow parentheses when invoking a constructor with no arguments
        'new-parens': 'error',
        // Require a newline after each call in a method chain
        'newline-per-chained-call': 'off',
        // Disallow Array constructors
        'no-array-constructor': 'warn',
        // Disallow bitwise operators
        'no-bitwise': 'off',
        // Disallow continue statements
        'no-continue': 'off',
        // Disallow inline comments after code
        'no-inline-comments': 'off',
        // Disallow if statements as the only statement in else blocks
        'no-lonely-if': 'error',
        // Disallow mixed binary operators
        'no-mixed-operators': 'off',
        // Disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        // Disallow use of chained assignment expressions
        'no-multi-assign': 'off',
        // Disallow multiple empty lines
        'no-multiple-empty-lines': 'error',
        // Disallow negated conditions
        'no-negated-condition': 'off',
        // Disallow nested ternary expressions
        'no-nested-ternary': 'off',
        // Disallow Object constructors
        'no-new-object': 'error',
        // Disallow the unary operators ++ and --
        'no-plusplus': 'off',
        // Disallow specified syntax
        'no-restricted-syntax': 'off',
        // Disallow all tabs
        'no-tabs': 'error',
        // Disallow ternary operators
        'no-ternary': 'off',
        // Disallow trailing whitespace at the end of lines
        'no-trailing-spaces': 'error',
        // Disallow dangling underscores in identifiers
        'no-underscore-dangle': 'off',
        // Disallow ternary operators when simpler alternatives exist
        'no-unneeded-ternary': 'off',
        // Disallow whitespace before properties
        'no-whitespace-before-property': 'error',
        // Enforce the location of single-line statements
        'nonblock-statement-body-position': ['error', 'below'],
        // Enforce consistent line breaks inside braces
        'object-curly-newline': ['error', { multiline: true, consistent: true }],
        // Enforce consistent spacing inside braces
        'object-curly-spacing': ['error', 'always'],
        // Enforce placing object properties on separate lines
        'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
        // Enforce variables to be declared either together or separately in functions
        'one-var': ['error', 'never'],
        // Require or disallow newlines around variable declarations
        'one-var-declaration-per-line': 'off',
        // Require or disallow assignment operator shorthand where possible
        'operator-assignment': ['error', 'always'],
        // Enforce consistent linebreak style for operators
        'operator-linebreak': ['error', 'before'],
        // Require or disallow padding within blocks
        'padded-blocks': ['error', 'never'],
        // Require or disallow padding lines between statements
        'padding-line-between-statements': [
            'error',
            { 'blankLine': 'always', 'prev': '*',           'next': 'return'      }, 
            { 'blankLine': 'always', 'prev': variableTypes, 'next': '*'           }, 
            { 'blankLine': 'any',    'prev': variableTypes, 'next': variableTypes }, 
            { 'blankLine': 'always', 'prev': 'directive',   'next': '*'           }, 
            { 'blankLine': 'any',    'prev': 'directive',   'next': 'directive'   }
        ],
        // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
        'prefer-object-spread': 'warn',
        // Require quotes around object literal property names
        'quote-props': ['warn', 'consistent-as-needed', { keywords: true, unnecessary: true, numbers: false }],
        // Enforce the consistent use of either backticks, double, or single quotes
        'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        // Require or disallow semicolons instead of ASI
        'semi': ['error', 'always'],
        // Enforce consistent spacing before and after semicolons
        'semi-spacing': ['error', { before: false, after: true }],
        // Enforce location of semicolons
        'semi-style': ['error', 'last'],
        // Require object keys to be sorted
        'sort-keys': 'off',
        // Require variables within the same declaration block to be sorted
        'sort-vars': 'off',
        // Enforce consistent spacing before blocks
        'space-before-blocks': ['error', 'always'],
        // Enforce consistent spacing before function definition opening parenthesis
        'space-before-function-paren': ['error', 'always'],
        // Enforce consistent spacing inside parentheses
        'space-in-parens': ['error', 'never'],
        // Require spacing around infix operators
        'space-infix-ops': ['error', { int32Hint: true }],
        // Enforce consistent spacing before or after unary operators
        'space-unary-ops': ['error', { words: true, nonwords: false }],
        // Enforce consistent spacing after the // or /* in a comment
        'spaced-comment': ['error', 'always', { 'exceptions': commentExceptions }],
        // Enforce spacing around colons of switch statements
        'switch-colon-spacing': ['error', { after: true, before: false }],
        // Require or disallow spacing between template tags and their literals
        'template-tag-spacing': ['error', 'never'],
        // Require or disallow Unicode byte order mark (BOM)
        'unicode-bom': ['error', 'never'],
        // require parenthesis around regex literals
        'wrap-regex': 'off',

        /****** ECMAScript 6 ******/

        // Require braces around arrow function bodies
        'arrow-body-style': ['error', 'as-needed'],
        // Require parentheses around arrow function arguments
        'arrow-parens': ['error', 'always'],
        // Enforce consistent spacing before and after the arrow in arrow functions
        'arrow-spacing': ['error', { before: true, after: true }],
        // Require super() calls in constructors
        'constructor-super': 'error',
        // Enforce consistent spacing around * operators in generator functions
        'generator-star-spacing': ['error', 'before'],
        // Disallow reassigning class members
        'no-class-assign': 'warn',
        // Disallow arrow functions where they could be confused with comparisons
        'no-confusing-arrow': 'off',
        // Disallow reassigning const variables
        'no-const-assign': 'error',
        // Disallow duplicate class members
        'no-dupe-class-members': 'error',
        // Disallow duplicate module imports
        'no-duplicate-imports': ['error', { includeExports: false }],
        // Disallow new operators with the Symbol object
        'no-new-symbol': 'warn',
        // Disallow specified modules when loaded by import
        'no-restricted-imports': 'off',
        // Disallow this/super before calling super() in constructors
        'no-this-before-super': 'error',
        // Disallow unnecessary computed property keys in object literals
        'no-useless-computed-key': 'error',
        // Disallow unnecessary constructors
        'no-useless-constructor': 'error',
        // Disallow renaming import, export, and destructured assignments to the same name
        'no-useless-rename': 'error',
        // Require let or const instead of var
        'no-var': 'error',
        // Require or disallow method and property shorthand syntax for object literals
        'object-shorthand': ['error', 'consistent'],
        // Require using arrow functions for callbacks
        'prefer-arrow-callback': 'error',
        // Require const declarations for variables that are never reassigned after declared
        'prefer-const': ['warn', { destructuring: 'all' }],
        // Require destructuring from arrays and/or objects
        'prefer-destructuring': 'warn',
        // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
        'prefer-numeric-literals': 'off',
        // Require rest parameters instead of arguments
        'prefer-rest-params': 'warn',
        // Require spread operators instead of .apply()
        'prefer-spread': 'error',
        // Require template literals instead of string concatenation
        'prefer-template': 'off',
        // Require generator functions to contain yield
        'require-yield': 'warn',
        // Enforce spacing between rest and spread operators and their expressions
        'rest-spread-spacing': ['error', 'never'],
        // Enforce sorted import declarations within modules
        'sort-imports': 'off',
        // Require symbol descriptions
        'symbol-description': 'warn',
        // Require or disallow spacing around embedded expressions of template strings
        'template-curly-spacing': ['error', 'never'],
        // Require or disallow spacing around the * in yield* expressions
        'yield-star-spacing': ['error', 'before']
    }
};
