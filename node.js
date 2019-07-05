module.exports = {
    extends: require('path').join(__dirname, 'index.js'),
    env: {
		es6: true,
		node: true
    },
    globals: {
        __dirname: true,
    },
    rules: {
        semi: [2, "always"]
    }
};
