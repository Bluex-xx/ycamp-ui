<template>
  <div class="y-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
import YCheckbox from "./checkbox.vue";
export default {
  name: "YCheckboxGroup",
  data() {
    return {};
  },
  provide() {
    return {
      checkboxGroup: this,
    };
  },
  computed: {},
  methods: {},
  components: { YCheckbox },
  props: {
    value: {
      type: Array,
    },
  },
};
</script>
<style lang="scss" scoped>
.y-checkbox-group {
  padding: 10px;
  padding-left: 0px;
}
</style>
