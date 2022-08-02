<template>
  <div ref="y_drawer_mask" class="y-drawer--mask">
    <div ref="y_drawer" class="y-drawer--content" :class="[`at-${position}`]">
      <div v-if="title" class="y-drawer--title">
        {{ title }}
      </div>
      <div class="icon" @click="change">
        <font-awesome-icon :icon="['far', 'times-circle']" />
      </div>
      <div class="y-drawer--main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "YDrawer",
  props: {
    position: {
      type: String,
      default: "right"
    },
    state: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    width:{
      type:String,
      default:'399px'
    },
    height:{
      type:String,
      default:'100%'
    }
  },
  data() {
    return {};
  },
  methods: {
    change() {
      this.$emit("change");
    },
    closed() {
      switch (this.position) {
        case "right":
          this.$refs.y_drawer.style.right = "-500px";
          break;
        case "left":
          this.$refs.y_drawer.style.left = "-500px";
          break;
        case "top":
          this.$refs.y_drawer.style.top = "-500px";
          break;
        case "bottom":
          this.$refs.y_drawer.style.bottom = "-500px";
          break;
      }
      this.$refs.y_drawer_mask.style.height = "0";
    },
    opened() {
      switch (this.position) {
        case "right":
          this.$refs.y_drawer.style.right = "0";
          break;
        case "left":
          this.$refs.y_drawer.style.left = "0";
          break;
        case "top":
          this.$refs.y_drawer.style.top = "0";
          break;
        case "bottom":
          this.$refs.y_drawer.style.bottom = "0";
          break;
      }
      this.$refs.y_drawer_mask.style.height = "100%";
    }
  },
  mounted() {
    if (this.state) {
      this.opened();
    } else {
      this.closed();
    }
    this.$refs.y_drawer.style.width = this.width;
    this.$refs.y_drawer.style.height = this.height;
  },
  watch: {
    state() {
      if (this.state == false) {
        this.closed();
      } else {
        this.opened();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.y-drawer--mask {
  background: rgba(0, 0, 0, 0.566);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
.y-drawer--content {
  background: #fff;
  position: fixed;
  transition: 0.3s;
  z-index: 99999;
  overflow: hidden;
  .y-drawer--title {
    width: 100%;
    padding: 7px;
    line-height: 30px;
    border-bottom: 1px solid #b6b6b6a5;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.456);
  }
  .y-drawer--main {
    width: 96%;
    margin: 2%;
    color: grey;
    word-wrap: break-word;
  }
  .icon {
    position: absolute;
    right: 10px;
    top: 12px;
    color: grey;
  }
  .icon:hover {
    color: rgb(86, 126, 236);
  }
}
.y-drawer--content.at-right {
  top: 0;
  right: -500px;
}
.y-drawer--content.at-left {
  top: 0;
  left: -500px;
}
.y-drawer--content.at-bottom {
  bottom: -500px;
  left: 0;
}
.y-drawer--content.at-top {
  top: -500px;
  left: 0;
}
</style>
