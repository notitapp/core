import globals from "globals";
import tseslint from "typescript-eslint";


export default [
  js.configs.recommended,
    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    },
    {files: ["**/*.{js,mjs,cjs,ts}"]},
    {languageOptions: { globals: globals.browser }},
];