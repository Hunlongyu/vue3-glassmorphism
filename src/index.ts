import { App } from "vue";
import directive from './components/directive'

const plugin = {
  install(Vue: App) {
    Vue.directive('glassmorphism', directive)
  }
};

export default plugin;

if (window.Vue) {
  window.Vue.use(plugin);
}

declare global {
  interface Window {
    Vue: App;
  }
}