<template>
  <transition name="alert-fade">
    <div class='y-alert' :class="[computedClass]" v-if="visible" :style="{ width, marginTop: top }">
      <div class="inner">
        <header>
          <h1>{{ header }}</h1>
        </header>
        <div class="content">
          <p>{{ content }}</p>

          <div>
            <y-button @click="operateAlert(false)" :type="type"
              >{{btnText}}
            </y-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      default: "simple",
      validator(value) {
        return ["simple", "neon", "glare", "zoom"].includes(value) !== -1
      },
    },
      /*
      width: {
        type: String,
        default: "50%",
      },
      top: {
        type: String,
        default: "15vh",
      },
      */
      
     header: {
        type: String,
        dafault: "",
      },
      content: {
        type: String,
        dafault: "",
      },
      btnText: {
        type: String,
        dafault: "",
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
  mounted() {
    console.log(this.content)
  },
  computed:{
    computedClass() {
      return {
        [`y-alert-${this.type}`]: this.type
      };
  }
  }
};
</script>

<style lang="scss">
.y-alert {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.338);
  backdrop-filter: blur(10px);
  z-index: 9999;

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
}

.y-alert-simple {
    header {
      background: linear-gradient(to bottom right, rgb(86, 149, 220), #4155a8);
      color: #fff;
    }
  }

  .y-alert-neon {
    header {
      background: linear-gradient(to bottom right, rgb(199, 121, 62), #f36071);
      color: #fff;
    }
  }

  .y-alert-glare {
    header {
      background: linear-gradient(to bottom right, rgb(185, 153, 10), #f36071);
      color: #fff;
    }
  }

  .y-alert-zoom {
    header {
      background: linear-gradient(to bottom right, rgb(44, 21, 111), #cbcfea);
      color: #fff;
    }
  }

.alert-fade-enter-active {
  animation: fade1 0.3s;
}

.alert-fade-leave-acive {
  animation: fade1 0.3s reverse;
}

@keyframes fade1 {
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