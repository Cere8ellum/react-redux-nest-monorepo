module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: 2015,
    // Solves WARNING: You are currently running a version of TypeScript which is not officially supported
    // by @typescript-eslint/typescript-estree.
    warnOnUnsupportedTypeScriptVersion: false,
  },
  env: {
    es6: true,
    node: true,
  },
  ignorePatterns: ["__config__/webpack", "node_modules", "build"],
  rules: {
    "max-len": ["error", { code: 130, ignoreUrls: true, comments: 150 }],
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-explicit-any": "off",
    // To avoid of error: "Require statement not part of import statement", if ES modules are used
    "@typescript-eslint/no-var-requires": "off",
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: "off",
    "no-fallthrough": "off", // disallow fallthrough of case statements
    "no-multiple-empty-lines": [
      1,
      {
        max: 2,
      },
    ], // disallow multiple empty lines (off by default)
    "no-nested-ternary": 1, // disallow nested ternary expressions (off by default)
    eqeqeq: 2, // require the use of === and !==
    "react/prop-types": "off", // Prevent missing props validation in a React component definition
  },
};
