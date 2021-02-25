import { 
  DirectiveBinding,
  ObjectDirective,
  Plugin,
  App
} from 'vue'

function hex2Rgba (color: string) {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  let hex = color.toLowerCase()
  const rgb = []
  if (reg.test(hex)) {
    if (hex.length === 4) {
      let newHex = '#'
      for (let i = 1; i < 4; i+= 1) {
        newHex += hex.slice(i, i+1).concat(hex.slice(i, i+1))
      }
      hex = newHex
    }
    for (let i = 1; i < 7; i += 2) {
      rgb.push(parseInt('0x' + hex.slice(i, i + 2)))
    }
    return rgb.join(', ')
  } else {
    console.warn('颜色值错误, 应该为: #fff 或者 #ffffff. The color value should be #fff or #ffffff.')
    return '255, 255, 255'
  }
}
const onMounted = (el: HTMLElement, binding: DirectiveBinding) => {
  const d = binding.value
  let color = hex2Rgba(d.color)
  let blur = d.blur || 3
  let opacity = d.opacity || 0.2
  el.style['background'] = `rgba(${color}, ${opacity})`
  el.style['backdrop-filter'] = `blur(${blur}px)`
}

const onUpdated = (el: HTMLElement, binding: DirectiveBinding) => {
  const d = binding.value
  let color = hex2Rgba(d.color)
  let blur = d.blur || 3
  let opacity = d.opacity || 0.2
  el.style['background'] = `rgba(${color}, ${opacity})`
  el.style['backdrop-filter'] = `blur(${blur}px)`
}

export const directive: ObjectDirective = {
  mounted: onMounted,
  updated: onUpdated
}

const plugin: Plugin = {
  install(Vue: App) {
    Vue.directive('glassmorphism', directive)
  }
}

export default plugin

if (window.Vue) {
  window.Vue.use(plugin);
}

declare global {
  interface Window {
    Vue: App;
  }
}
