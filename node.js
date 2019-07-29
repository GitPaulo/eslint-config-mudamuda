module.exports = {
    extends: require('path').join(__dirname, 'index.js'),
    env: {
        es6: true,
        node: true
    },
    rules: {
        // Enforce valid js doc statements
        'valid-jsdoc': ['warn', {
            requireReturn: false,
            requireReturnDescription: false,
            preferType: {
                'String': 'string',
                'Number': 'number',
                'Boolean': 'boolean',
                'Symbol': 'symbol',
                'function': 'Function',
                'object': 'Object',
                'date': 'Date',
                'error': 'Error'
            }
        }],
        // If we forget to write return statement in a callback for the array lib methods, it’s probably a mistake!
        'array-callback-return': 'error',
        // Enforce that object shorthand will be used whenever possible.
        'object-shorthand': ['error', 'always'],
        // Warn prefering destructuring
        'prefer-destructuring': ['warn', {
            VariableDeclarator: {
                array: false,
                object: true
            },
            AssignmentExpression: {
                array: true,
                object: false
            }
        }],
        // It is considered good practice to only pass instances of the built-in Error object to the reject() function for user-defined errors in Promises.
        'prefer-promise-reject-errors': 'error',
    }
};