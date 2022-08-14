<template>
  <transition name="dialog-fade">
    <div class="y-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="y-dialog" :style="{ width, marginTop: top }">
        <div class="y-dialog__header">
          <slot name="title">
            <span class="y-dialog__title">{{ title }}</span>
          </slot>
          <button class="y-dialog__headerbtn" @click="handleClose">
            <i> x </i>
          </button>
        </div>
        <div class="y-dialog__body">
          <slot></slot>
        </div>
        <div class="y-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "YDialog",
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    visible: {
      type: Boolean,
      defsult: false,
    },
  },
  methods: {
    handleClose() {
      this.$emit("close", false); 
    },
  },
};
</script>

<style lang="scss" scoped>
.y-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.5);

  .y-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .y-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .y-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        i {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .y-button:first-child {
        margin-right: 20px;
      }
    }
  }
}

.dialog-fade-enter-active {
  animation: fade 0.3s;
}

.dialog-fade-leave-acive {
  animation: fade 0.3s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: 0;
  }
}
</style>