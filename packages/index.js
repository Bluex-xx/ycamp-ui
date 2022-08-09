// 整个包的入口
import Button from "./button";
import Swiper from "./swiper.vue";
import Input from "./input.vue";
import DatePicker from "./datePicker.vue";
var components = [Button, Swiper, Input, DatePicker];

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

export { Button, Swiper };
export default { install };
