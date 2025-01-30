# Monorepo including api, web, and common paths

> [!NOTE]
> You can say me "Thanks!" on my bitcoin wallet - **38sALvUH4ggKHfrK7Yd2fYiixBNhPu53hw**.

## NodeJs - Required version is ^v18.20.6

```bash
node --version
```

## Environment

> See [env files](./env) to set project variables (such as base url, db, jwt, etc)

## VS Code Intellisense issue:

> To eliminate Typescript (React) errors caused by Intellisense of VS Code,
> you need:
>
> 1. Select Workspace version of Typescript
> 2. Restart TS Server
>    - Close all files
>    - Open [dummy.ts](./apps/web/dummy.ts)
>    - Restart TS server by clicking the key combination **Ctrl+Shift+P**, and next choose **TypeScript: Restart TS Server**.
>
> If the problem is not solved, restart VS Code and follow 1,2 steps.

## Could not load the "sharp" module issue

```bash
npm install --include=optional sharp
```

## Common apps:

> If you add a new common package (like "packages") into root directory [./](./), please don't forget to add:
>
> 1.  Paths into **paths** section into [tsconfig.common.json](./tsconfig.common.json)
> 2.  Paths into **resolve** section into every common config of webpack.
> 3.  Paths into **moduleNameMapper** section in [jest.config.js](./apps/web/__config__/jest//jest.config.js)
>     and [jest.config.js](./apps/api/__config__/jest//jest.config.js).

## Run some command from list:

### Bundling monorepo in DEV environment with response to changes in code

```bash
npm run start:dev
```

### Bundling monorepo in PROD environment with response to changes in code

```bash
npm run start:prod
```

### Getting DEV build

```bash
npm run build-api:dev
```

```bash
npm run build-web:dev
```

### Getting PROD build

```bash
npm run build-api:prod
```

```bash
npm run build-web:prod
```

### Remove build

```bash
npm run clean
```

### Compare js with rules of linter

```bash
npm run lint
```

### Compare js with rules of linter and then fix all errors

```bash
npm run lint-fix
```

### Running all tests (see jest config)

```bash
npm run test-web
```

### Running all tests using watch mode

```bash
npm run test-web-watch
```

### Running all tests using coverage mode

```bash
npm run test-web-coverage
```
