<template>
  <div class="home">
    <div class="home-wrapper">
      <header class="header">
        <div class="title">Vue3 Glassmorphism</div>
      </header>
      <main class="body">
        <div class="show">
          <div class="icon icon1" v-glassmorphism=config>🚀</div>
          <div class="icon icon2" v-glassmorphism=config>🔥</div>
          <div class="box" v-glassmorphism=config>
            <div class="logo">
              <img src="./assets/logo.png" alt="">
            </div>
            <div class="name">Vue</div>
            <div class="describe">渐进式 JavaScript 框架</div>
          </div>
          <div class="icon icon3" v-glassmorphism="{blur:blur, opacity: transparency, color: currentColor}">😍</div>
        </div>
        <div class="generator">
          <div class="blur">
            <div class="value">
              <span>模糊值</span>
              <span>{{blur}}</span>
            </div>
            <vue-slider v-model="blur" :min="0" :max="20" :interval="0.5" :tooltip="'none'" @change="blurChangeEvent"></vue-slider>
          </div>
          <div class="transparency">
            <div class="value">
              <span>透明度</span>
              <span>{{transparency}}</span>
            </div>
            <vue-slider v-model="transparency" :min="0.01" :max="1" :interval="0.01" :tooltip="'none'" @change="transparencyChangeEvent"></vue-slider>
          </div>
          <div class="color">
            <input type="color" id="head" v-model="currentColor" @input="colorChangeEvent()">
          </div>
        </div>
      </main>
      <footer class="footer">
        <h2>什么是 Glassmorphism ?</h2>
        <p>Glassmorphism 是流行的磨砂玻璃美学的统一名称. 该效果具有透明度的背景模糊, 并使用堆叠的图层显示界面的深度和上下文.</p>
        <h3>使用方法: <a href="">官网文档</a></h3>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    VueSlider
  },
  setup () {
    const blur = ref(3)
    const transparency = ref(0.2)
    const color = ref('255,255,255')
    const currentColor = ref('#ffffff')
    const config = reactive({
      blur: 3,
      opacity: 0.2,
      color: '#ffffff'
    })

    function blurChangeEvent (e: number) {
      config.blur = e
    }

    function transparencyChangeEvent (e: number) {
      config.opacity = e
    }

    function hex2Rgba (hex: string) {
      const color = []
      for (let i = 1; i < 7; i += 2) {
        color.push(parseInt('0x' + hex.slice(i, i + 2)))
      }
      return color.join(', ')
    }

    function colorChangeEvent () {
      color.value = hex2Rgba(currentColor.value)
      config.color = currentColor.value
    }

    return {
      blur,
      transparency,
      color,
      currentColor,
      blurChangeEvent,
      transparencyChangeEvent,
      colorChangeEvent,
      config
    }
  }
})
</script>

<style>
html,body, #app{
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}
.home{
  height: 100%;
  background-image: linear-gradient(to top, #336fd1 0%, #5597e2 100%);
}
.home-wrapper{
  width: 1024px;
  margin: 0 auto;
}
.header{
  color: #fff;
  font-size: 24px;
  text-shadow: 0 2px 4px rgb(71 97 206 / 36%);
  padding: 15px 0;
}
.show{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}
.icon{
  width: 80px;
  height: 80px;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  position: absolute;
}
.box{
  width: 380px;
  height: 260px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.box{
  transform: rotate(-15deg);
}
.box .logo img{
  width: 100px;
  height: auto;
}
.box .name{
  color: #fff;
  font-size: 36px;
  text-shadow: 0 2px 4px rgb(71 97 206 / 36%);
}
.box .describe{
  color: #fff;
  font-size: 18px;
  text-shadow: 0 2px 4px rgb(71 97 206 / 36%);
}
.icon1{
  margin-left: -500px;
  margin-top: 220px;
  transform: rotate(-15deg);
}
.icon2{
  margin-left: -320px;
  margin-top: -260px;
  transform: rotate(15deg);
}
.icon3{
  margin-left: 300px;
  margin-top: 260px;
  transform: rotate(15deg);
}
.generator{
  background-color: #213a5a;
  max-width: 400px;
  margin: 0 auto;
  padding: 15px 20px;
  border-radius: 10px;
  color: #fff;
}
.blur, .transparency{
  margin-bottom: 20px;
}
.value{
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer{
  max-width: 600px;
  margin: 0 auto;
  color: #fff;
}
.footer a{
  color: #fff;
  text-decoration: none;
}
</style>