module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
        'eslint:recommended',
        'prettier',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['prettier', 'react', 'react-hooks'],
    rules: {
        'global-require': 0,
        'new-cap': 0,
        'import/no-extraneous-dependencies': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/button-has-type': 'off',
        'react-hooks/rules-of-hooks': 0,
        'no-console': 0,
        'react/state-in-constructor': 0,
        indent: 0,
        'linebreak-style': 0,
        'react/prop-types': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'no-shadow': 'off',
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx'],
            },
        ],
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                singleQuote: true,
                printWidth: 100,
                tabWidth: 4,
                semi: true,
                endOfLine: 'auto',
            },
        ],
    },
};
