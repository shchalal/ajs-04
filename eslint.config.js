const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const globals = require("globals");
const jest = require("eslint-plugin-jest");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        "ecmaVersion": "latest",
        "sourceType": "module",
        parserOptions: {},
    },

    "extends": "eslint:recommended",
    "rules": {},
}, {
    files: ["**/*/*.test.js"],

    plugins: {
        jest,
    },

    extends: compat.extends("plugin:jest/recommended"),

    "rules": {
        "jest/prefer-expect-assertions": "off",
    },
}, globalIgnores(["**/node_modules", "**/dist", "**/coverage", "**/docs"])]);
