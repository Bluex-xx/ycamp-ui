import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faEnvelope,
  faStar,
  faEdit,
  faTrashAlt,
  faSmile,
  faTimesCircle,
  faEye,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faEyeSlash,

} from '@fortawesome/free-regular-svg-icons'
import { 
    // fas
  faCheck ,
  faCircle,
  faHeart,
  faUser,
  faWindowClose,
  faCalendar
} from '@fortawesome/free-solid-svg-icons'


import DemoUI from "../packages/index";
// console.log('YcampUI:', YcampUI)

// 按需导入
// import Button from '../packages/button.vue'
// Vue.use(YcampUI, { components: [Button] })

Vue.use(DemoUI);

library.add(
    // fas
  faEnvelope,
  faStar,
  faEdit,
  faCheck,
  faTrashAlt,
  faSmile,
  faTimesCircle,
  faEye,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faEyeSlash,
  faCircle,
  faHeart,
  faUser,
  faWindowClose,
  faCalendar
);

Vue.config.productionTip = false;

// 全局注册字体图标组件
Vue.component("FontAwesomeIcon", FontAwesomeIcon);

new Vue({
  render: h => h(App)
}).$mount("#app");
