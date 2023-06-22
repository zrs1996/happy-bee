---
title: 快速开始
order: 2
group:
  path: /
nav:
  title: 文档
  path: /docs
---

# 快速上手

## 安装

**使用 npm 或 yarn 安装**

```shell
npm install @zrs/happy-bee
```

```shell
yarn add @zrs/happy-bee
```

## 示例

```js
import Alert from '@zrs/happy-bee/es/alert'; // 手动按需加载 js
import '@zrs/happy-bee/es/alert/style'; // 手动按需加载 less

ReactDOM.render(<Alert kind="warning">这是一条警告提示</Alert>, mountNode);
```

### 自动按需加载

使用 [babel-plugin-import ](https://www.npmjs.com/package/babel-plugin-import) 优化引入方式，如下：

```js
import { Alert } from '@zrs/happy-bee'; // 与上述示例等价

ReactDOM.render(<Alert kind="warning">这是一条警告提示</Alert>, mountNode);
```

安装 `babel-plugin-import`

```
yarn add babel-plugin-import --dev
```

配置`.babelrc` 或 `babel-loader`

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "@zrs/happy-bee",
        "libraryDirectory": "esm", // default: lib
        "style": true // or 'css'
      }
    ]
  ]
}
```