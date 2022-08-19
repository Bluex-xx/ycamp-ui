<template>
  <transition name="message-fade" @before-leave="destroy()">
    <div class='y-message'  :class="[computedClass,{center}]" :style="{ top: top + 'px' }" v-if="visible">
        <div class="y-message__content">
            {{ title }}
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      top: null,
      onClose:null
    };
  },
  props: {
    //传入的文字
    title: {
      type: String,
      dafault: "",
    },
    //是否居中
    center: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'success',
      validator: function(value) {
        return ['success', 'error', 'info', 'warning'].includes(value) !== -1
      }
    },
    //关闭
    time:{
        type:Number,
        default:2000
    }
  },
  mounted() {
    console.log(this.title);
    setTimeout(() => {
      this.visible = false
    }, this.time);
  },
  computed:{
    computedClass() {
      return {
        [`y-message--${this.type}`]: this.type
      };
    },
  },
  methods:{
    destroy(){
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
    },
    close(){
        if(typeof this.onClose == 'function'){
            this.onClose()
        }
    }
  },
  watch:{
    visible(newVal,oldVal){
        if(!newVal){
            this.close()
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.y-message {
  width: 380px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: red;
  line-height: 20px;
  padding: 10px;
  transition: top 0.5s;
  display: flex;
  //transform: translateX(-50%);
  position: fixed;
  top: 20px;
  left: 40%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 5px;

  &.center{
    justify-content: center;
  }
}

.message-fade-enter,
.message-fade-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.message-fade-enter-active,
.message-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}


.y-message--success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

.y-message--success .y-message__content {
  color: #67c23a;
}

.y-message--warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
}

.y-message--warning .y-message__content {
  color: #e6a23c;
}

.y-message--error {
  background-color: #fef0f0;
  border-color: #fde2e2;
}

.y-message--error .y-message__content {
  color: #f56c6c;
}


.y-message--info {
  background-color: #dcdfda;
  border-color: #e1f3d8;
}

.y-message--info .y-message__content {
  color: #909399;
}
</style>