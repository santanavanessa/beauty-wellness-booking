// eslint.config.mjs
import js from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import nextPlugin from "@next/eslint-plugin-next"

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "@next/next": nextPlugin,
    },
    rules: {
      // Regras recomendadas do Next
      ...nextPlugin.configs.recommended.rules,

      // Regras recomendadas do React
      ...pluginReact.configs.recommended.rules,

      // Regras do React Hooks
      ...pluginReactHooks.configs.recommended.rules,

      // Suas personalizações
      "react/react-in-jsx-scope": "off", // Next já injeta React
      "react/prop-types": "off", // usando TypeScript, não precisa de PropTypes
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]
