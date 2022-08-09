// 整个包的入口
import Button from "./button";
import Swiper from "./swiper.vue";
import Calendar from "./calendar.vue";
var components = [Button, Swiper, Calendar];

const install = function(Vue, options) {
  if (options && options.components) {
    components = options.components;
  }
  components.forEach(item => {
    // 往全局注册组件
    Vue.component(item.name, item);
  });
};

// script直接引用
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { Button, Swiper, Calendar };
export default { install };
