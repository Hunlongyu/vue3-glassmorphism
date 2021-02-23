# Vue 3 + Glassmorphism

由 Vue3 和 Typescript 编写的透明高斯模糊背景.

[官网 & 示例](https://hunlongyu.github.io/vue3-glassmorphism/)

### 截图
![screen.jpg](https://i.loli.net/2021/02/23/841YsaUbeJIfPW7.jpg)

### 安装

```bash
$ npm i vue3-glassmorphism

or

$ yarn add vue3-glassmorphism
```


### 使用

全局注册 / Global registration (main.ts/js)
```js
import glassmorphism from 'vue3-glassmorphism'
app.use(glassmorphism)
```

<!-- 局部注册 / Partial registration (*.vue)
```js
import { directive } from 'vue3-glassmorphism'
directive: {
  glassmorphism: directive
}
``` -->

使用:
```html
<div v-glassmorphism="{ blur: 3, opacity: 0.2, color: '#fff' }">...</div>

// 或者 or

<div v-glassmorphism=config>...</div>

setup () {
  const config = reactive({
    blur: 3,
    opacity: 0.2,
    color: '#fff'
  })
  return { config }
}
```

### 说明

| 参数     | 说明                 | 类型    | 默认值  |
| -------- | -------------------- | ------- | ------- |
| blur    | 背景模糊值 | Number  | `3`  |
| opacity | 背景透明度 | Number | `0.2` |
| color  | 背景颜色, 只支持十六进制字符串 | String | `#ffffff` or `#fff` |

## Project setup

```
yarn

yarn dev

yarn build
```
