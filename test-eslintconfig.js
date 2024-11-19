// @see: http://eslint.cn

import globals from 'globals'
import pluginJs from '@eslint/js'
import standard from 'eslint-config-standard'
import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  // 指定文件匹配模式
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,vue}']
  },

  // 指定全局变量和环境
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 12, // 使用最新的 ECMAScript 语法
      sourceType: 'module' // 代码是 ECMAScript 模块
    }
  },

  // 使用的扩展配置
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,
  eslintPluginPrettierRecommended,
  standard,

  // 自定义规则
  {
    rules: {
      // eslint (http://eslint.cn/docs/rules)
      'no-undef': 'off',
      'no-irregular-whitespace': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境中警告 console 使用，开发环境中关闭规则
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境中警告 debugger 使用，开发环境中关闭规则

      // typeScript (https://typescript-eslint.io/rules)
      '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量

      // vue (https://eslint.vuejs.org/rules)
      'vue/multi-word-component-names': 'off'
    }
  },

  // 配置忽略项
  {
    ignores: [
      '**/node_modules/',
      '**/.vscode/',
      '**/.husky/',
      '**/.husky/**',
      '**/public/**'
    ]
  }
]

/*
  "@eslint/js": "^9.15.0",
  "@vue/eslint-config-prettier": "^10.1.0",
  "@vue/eslint-config-typescript": "^14.1.3",
  "eslint": "^9.14.0",
  "eslint-config-standard": "^17.1.0",
  "eslint-plugin-import": "^2.31.0",
  "eslint-plugin-node": "^11.1.0",
  "eslint-plugin-prettier": "^5.2.1",
  "eslint-plugin-vue": "^9.30.0",
*/
