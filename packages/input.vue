<template>
  <div class="input_container" :style="{ width: width }">
    <!-- 设置前置字体图标 -->
    <template v-if="icon">
      <div :class="['icon', `icon_${size}`]">
        <font-awesome-icon :icon="['far', icon]" />
      </div>
    </template>
    <!-- 后置字体图标 -->
    <template v-if="rearIcon">
      <div :class="['rear_icon', `rear_icon_${size}`]">
        <font-awesome-icon :icon="['far', rearIcon]" />
      </div>
    </template>
    <input
      :type="type"
      :class="['input', `input_${size}`, { input_border: bordered }]"
      :maxlength="maxlength"
      :disabled="disabled"
      :style="{ paddingLeft: icon ? '32px' : '5px' }"
      :value="inputValue"
      @input="handleChange"
    />
  </div>
</template>

<script type="javascript/text">
export default {
  name:'YInput',
  props:{
    // 输入框类型
    type:{
      type:String,
      default:"text"
    },
    // 输入框尺寸
    size:{
      type:String,
      default:"mini",
    },
    // 前置图标
    icon:{
      type:String,
      default:""
    },
    // 后置图标
    rearIcon:{
      type:String,
      default:""
    },
    // 最大输入
    maxlength:{
      type:Number,
      default:16
    },
    minlength:{
      type:Number,
      default:5
    },
    // 是否带有边框
    bordered:{
      type:Boolean,
      default:true
    },
    // 是否禁用
    disabled:{
      type:Boolean,
      default:false
    },
    // 输入的值
    value:{
      type:String,
      default:""
    },
    onChange:{
      type:Function,
      default:()=>{}
    },
    width:{
      type:String,
      default:"100%"
    }
  },
  computed:{
    inputValue:function(){
      return this.value
    }
  },
  methods:{
    // 通知父组件修改value
    handleChange(e){
      this.$emit("onChange",e.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
$defaultFontSize: 14px;
$largeFontSize: 16px;
$miniFontSize: 12px;
.input_container {
  width: 100%;
  position: relative;
  .icon {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 100%;
    &_mini {
      font-size: $miniFontSize;
    }
    &_small {
      font-size: $defaultFontSize;
    }
    &_large {
      font-size: $largeFontSize;
    }
  }
  .rear_icon {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 100%;
    &_mini {
      font-size: $miniFontSize;
    }
    &_small {
      font-size: $defaultFontSize;
    }
    &_large {
      font-size: $largeFontSize;
    }
  }
  .input {
    width: 100%;
    outline: none;
    border: none;
    padding-left: 32px;
    color: #000000d9;
    box-sizing: border-box;
    &:hover {
      border-color: #40a9ff;
    }
    &:focus {
      border-color: #40a9ff;
      box-shadow: 0 0 0 1px #40a9ff;
    }
    &_border {
      border: 1px solid #d9d9d9;
    }
    &_mini {
      height: 24px;
      font-size: $miniFontSize;
    }
    &_small {
      height: 32px;
      font-size: $defaultFontSize;
    }
    &_large {
      height: 40px;
      font-size: $largeFontSize;
    }
  }
}
</style>
