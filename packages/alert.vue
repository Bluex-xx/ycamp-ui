<template>
  <transition name="alert-fade">
    <div :class="['y-alert', `alert-${type}`]" v-show="visible" :style="{ width, marginTop: top }">
      <div class="inner">
        <header>
          <h1><slot name="header"></slot></h1>
        </header>
        <div class="content">
          <p><slot name="content"></slot></p>
          <div>
            <y-button @click="operateAlert(false)" :type="type"
              ><slot name="btnText"></slot
            ></y-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const typeMap = ["simple", "neon", "glare", "zoom"];

export default {
  name: "YAlert",
  props: {
    type: {
      type: String,
      default: "simple",
      validator(value) {
        return typeMap.includes(value);
      },
      width: {
        type: String,
        default: "50%",
      },
      top: {
        type: String,
        default: "15vh",
      },
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    operateAlert(isShow) {
      if (!!!isShow) {
        this.$emit("confirm");
      }
      this.visible = isShow;
    },
  },
};
</script>

<style lang="scss">
.y-alert {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  .inner {
    position: absolute;
    top: 50px;
    left: 50%;
    width: 400px;
    margin-left: -200px;
    border-radius: 5px;
    background-color: #fff;
    overflow: hidden;
    h1,
    p {
      margin: 0;
      font-weight: normal;
      font-size: 16px;
    }
    header {
      height: 44px;
      padding: 0 15px;
      line-height: 44px;
      box-sizing: border-box;
    }

    .content {
      padding: 15px;
      box-sizing: border-box;

      button {
        float: right;
        margin: 15px;
      }
    }
  }

  &.alert-simple {
    header {
      background-color: rgb(121, 121, 183);
      color: #fff;
    }
  }

  &.alert-neon {
    header {
      background-color: orangered;
      color: #fff;
    }
  }

  &.alert-glare {
    header {
      background-color: rgb(148, 68, 68);
      color: #fff;
    }
  }

  &.alert-zoom {
    header {
      background-color: rgb(132, 85, 234);
      color: #fff;
    }
  }
}

.alert-fade-enter-active {
  animation: fade 0.3s;
}

.alert-fade-leave-acive {
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