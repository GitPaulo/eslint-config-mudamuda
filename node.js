module.exports = {
    extends: require('path').join(__dirname, 'index.js'),
    env: {
		es6: true,
		node: true
    },
    globals: {
        __dirname: true,
        __filename: true,
        console: true,
        process: true,
        buffer: true,
        setImmediate: true,
        setInterval: true,
        setTimeout: true,
        clearImmediate: true,
        clearInterval: true,
        clearTimeout: true,
    },
    rules: {
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
		'array-callback-return': 'error',
		'object-shorthand': ['error', 'always'],
		'prefer-destructuring': ['error', {
			VariableDeclarator: {
				array: false,
				object: true
			},
			AssignmentExpression: {
				array: true,
				object: false
			}
        }], 
        'prefer-promise-reject-errors': 'error',
    }
};
