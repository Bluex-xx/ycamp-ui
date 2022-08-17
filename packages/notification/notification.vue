<template>
  <transition name="notice-fade">
    <div
      class="y-notice"
      :class="[computedClass]"
      v-if="visible"
      :style="{ width, marginTop: top }"
    >
      <div class="inner">
        <header>
          <h1>
            {{ title }}
            <button class="y-dialog__headerbtn" @click="operatenotice(false)">
              <i> x </i>
            </button>
          </h1>
        </header>
        <div class="content">
          <p>{{ content }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const typeMap = ["simple", "success", "error", "warning"];

export default {
  name: "YNotice",
  props: {
    type: {
      type: String,
      default: "simple",
      validator(value) {
        return typeMap.includes(value) !== -1
      },
      width: {
        type: String,
        default: "30%",
      },
      top: {
        type: String,
        default: "15vh",
      },
    },
    content: {
      type: String,
      dafault: "",
    },
    title: {
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
    operatenotice(isShow) {
      if (!!!isShow) {
        this.$emit("confirm");
      }
      this.visible = isShow;
    },
  },
  computed: {
    computedClass() {
      return {
        [`y-notice-${this.type}`]: this.type,
      };
    },
  },
};
</script>

<style lang="scss">
.y-notice {
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
    right: 0;
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
      height: 35px;
      padding: 0 15px;
      line-height: 35px;
      box-sizing: border-box;

      .y-dialog__headerbtn {
        position: absolute;
        top: 8px;
        right: 20px;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        i {
          color: #080808;
        }
      }
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

.y-notice-simple {
    header {
      background: linear-gradient(to bottom right, rgb(86, 149, 220), #4155a8);
      color: #fff;
    }
  }

  .y-notice-success {
    header {
      background: linear-gradient(to bottom right, rgb(95, 162, 117), #044b2c);
      color: #fff;
    }
  }

  .y-notice-error {
    header {
      background: linear-gradient(to bottom right, rgba(111, 22, 4, 0.932), #ea9883);
      color: #fff;
    }
  }

  .y-notice-warning {
    header {
      background: linear-gradient(to bottom right, rgb(229, 110, 120), #a19435);
      color: #fff;
    }
  }

.notice-fade-enter-active {
  animation: fade 0.3s;
}

.notice-fade-leave-acive {
  animation: fade 0.3s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  100% {
    opacity: 1;
    transform: 0;
  }
}
</style>