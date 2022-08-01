# ycamp-ui

## 简介



>字节青训营项目，一款 Vue2.x 组件库，项目结构参考 element-ui ，目标简化配置项 ，美化高频组件



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
  faSmile,
  faEye，
  faArrowAltCircleLeft,
  faArrowAltCircleRight
} from '@fortawesome/free-regular-svg-icons'
library.add(
  faSmile,
  faEye,
  faArrowAltCircleLeft,
  faArrowAltCircleRight
)
import { faCheck } from '@fortawesome/free-solid-svg-icons'
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
```



---



## 组件

### 按钮 (Button)

| 属性     | 值               | 描述                                |
| -------- | ---------------- | ----------------------------------- |
| type     | String           | 按钮类型：simple,neon,glare,zoom    |
| disabled | Boolean          | 是否禁用按钮，默认为 false          |
| round    | Boolean          | 是否为圆角按钮，默认为 false        |
| circle    | Boolean          | 是否为圆形按钮，默认为 false        |
| icon     | Array 或 Boolean | font-awesome 字体数组，默认为 false |



### 单选框(YRudio)

要使用 YRadio 组件，只需要设置`v-model`绑定变量，选中意味着绑定变量的值变为单一radio组件相应  `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。

| 属性     | 值                          | 描述                                              |
| -------- | --------------------------- | ------------------------------------------------- |
| type     | String                      | 单选框类型：audiotype1,audiotype1，默认audiotype2 |
| disabled | Boolean                     | 是否禁用，默认为 false                            |
| rounded  | Boolean                     | 是否为圆角，默认为 false                          |
| icon     | Array 或 Boolean            | font-awesome 字体数组，默认为 false               |
| label    | String`、`Number`或`Boolean | 被选中的label对应的值                             |
| name     | String                      | 单选框名称                                        |



### 单选框组(YRudioGroup)

结合``y-radio-group`元素和子元素`y-radio`可以实现单选框组，在`y-radio-group`中绑定`v-model`，在`y-radio`中设置好`label`，无需再给每一个`y-radio`绑定变量

| 属性 | 值     | 描述                                                |
| ---- | ------ | --------------------------------------------------- |
| type | String | 单选框组类型：audiotype1,audiotype1，默认audiotype2 |



### 复选框(YCheckbox)

在`y-checkbox`元素中定义`v-model`绑定变量，可以绑定的变量类型为Boolean类型或者Array类型，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`

| 属性     | 值                          | 描述                     |
| -------- | --------------------------- | ------------------------ |
| name     | String                      | 复选框名称               |
| disabled | Boolean                     | 是否禁用，默认为 false   |
| rounded  | Boolean                     | 是否为圆角，默认为 false |
| label    | String`、`Number`或`Boolean | 被选中的checkbox对应的值 |



### 复选框组(YCheckboxGroup)

`y-checkbox-group`元素能把多个 `y-checkbox`  管理为一组，只需要在`y-checkbox-group`中使用`v-model`绑定`Array`类型的变量即可，绑定的变量类型为Array类型。 `y-checkbox` 的 `label`属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。`label`与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。



### 输入框(YInput)

| 属性         | 值      | 描述                                            |
| ------------ | ------- | ----------------------------------------------- |
| type         | String  | 输入框类型，可选值为text、password，默认为text  |
| disabled     | Boolean | 是否禁用，默认为 false                          |
| name         | String  | 输入框名称                                      |
| placeholder  | String  | 输入框默认值                                    |
| clearable    | Boolean | 是否清空输入值，默认为 false                    |
| showPassword | Boolean | 是否展示密码切换，默认为false                   |
| inputTop     | String  | 输入框上方展示文字，示例中为INPUT，可修改为其它 |
|              |         |                                                 |



### 轮播图 (Swiper)

| 属性      | 值      | 描述                                |
| --------- | ------- | ----------------------------------- |
| list      | Array   | 轮播的图片地址                      |
| height    | Number  | 轮播图高度，最小值为200             |
| width     | Number  | 轮播图宽度，最小值为500             |
| vague     | Boolean | 是否开启高斯模糊效果，默认值为false |
| indicator | Boolean | 是否开启底部指示器,默认值为true     |

