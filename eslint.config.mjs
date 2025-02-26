import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react';


export default tseslint.config(
  js.configs.recommended,
  tseslint.configs.recommended,
  react.configs.flat['jsx-runtime']
)
