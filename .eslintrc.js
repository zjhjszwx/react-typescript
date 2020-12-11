module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["eslint-config-alloy", "eslint-config-alloy/react", "eslint-config-alloy/typescript"],
  globals: {},
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: "module"
  },
  rules: {

    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 不允许使用未使用的变量
    "@typescript-eslint/no-unused-vars": ["warn", {
      "vars": "all", "args": "after-used", "ignoreRestSiblings": false
    }],
    // 不允许使用未使用的表达式
    "@typescript-eslint/no-unused-expressions": ["error", {
      "allowShortCircuit": true,
      "allowTernary": true,
      "allowTaggedTemplates": true
    }],
    // 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好
    "@typescript-eslint/explicit-member-accessibility": 0,
    // 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
    "@typescript-eslint/consistent-type-assertions": 0,

  },
  overrides: []
}
