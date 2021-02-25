# Vue 3 + Glassmorphism

由 Vue3 和 Typescript 编写的透明高斯模糊背景.

[Home & Demo & Github](https://hunlongyu.github.io/vue3-glassmorphism/)

[官网 & 示例 & 国内](http://hunlongyu.gitee.io/vue3-glassmorphism/)

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

局部注册 / Partial registration (*.vue)
```js
import { directive } from 'vue3-glassmorphism'
directive: {
  glassmorphism: directive
}
```

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


## 🌏 浏览器支持

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :---: | :---: | :---: | :---: | :---: |
| Yes | No | 17+ | 9+ | No |

## Project setup

```
yarn

yarn dev

yarn build
```
