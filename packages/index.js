// 整个包的入口
import Button from './button'
import Swiper from './swiper.vue'
import Radio from './radio.vue'
import RadioGroup from './radio-group.vue'
import Checkbox from './checkbox.vue'
import CheckboxGroup from './checkbox-group.vue'
import Input from './input.vue'
import Drawer from './Drawer.vue'
const components = [
  Button,
  Swiper,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Input,
  Drawer
]

const install = function(Vue, options) {
  if (options && options.components) {
    components = options.components
  }
  components.forEach(item => {
    // 往全局注册组件
    Vue.component(item.name, item)
  })
}

// script直接引用
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Button,
  Swiper,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Input,
  Drawer
}
export default { install }
