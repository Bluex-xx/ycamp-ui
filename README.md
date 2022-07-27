# ycamp-ui

## 简介



>字节青训营项目，一款 Vue2.x 组件库，项目结构参考 element-ui



## 使用

1. 安装

```
npm i ycamp-ui
```

2. 全局注册

```js
import YcampUI from 'ycamp-ui'
Vue.use(YcampUI)
```

3. 按需导入

```js
import YcampUI, { Button} from 'ycamp-ui'
Vue.use(YcampUI, {
  components: [Button]
})
```

3. 导入样式

```js
import 'ycamp-ui/dist/ycamp-ui.css'
```

4. 导入 font-awesome 字体图标

```js
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faEnvelope,
  faStar,
  faEdit,
  faTrashAlt,
  faSmile,
  faTimesCircle,
  faEye
} from '@fortawesome/free-regular-svg-icons'

import { faCheck } from '@fortawesome/free-solid-svg-icons'
```



---



## 组件

### 按钮(Button)

| 属性     | 值               | 描述                                |
| -------- | ---------------- | ----------------------------------- |
| type     | String           | 按钮类型：simple,neon,glare,zoom    |
| disabled | Boolean          | 是否禁用按钮，默认为 false          |
| round    | Boolean          | 是否为圆角按钮，默认为 false        |
| circle    | Boolean          | 是否为圆形按钮，默认为 false        |
| icon     | Array 或 Boolean | font-awesome 字体数组，默认为 false |
