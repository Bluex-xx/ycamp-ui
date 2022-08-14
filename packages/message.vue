<template>
  <transition name="message">
    <div class="y-message__wrapper" v-show="visible" @click.self="handleClose">
      <div class="y-message" :style="{ width, marginTop: top }">
        <div class="y-message-body">
            <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "YMessage",
  props: {
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