<template>
  <label :class="['y-checkbox', { disabled: disabled }]">
    <span :class="['y-checkbox-outter']">
      <span
        :class="['y-checkbox-inner', { 'y-checkbox-active': isChecked }, { 'is-rounded': rounded }]"
        ><font-awesome-icon :icon="['fas', 'check']" v-show="isChecked" :class="['icon']"
      /></span>
      <input
        type="checkbox"
        :name="name"
        :disabled="disabled"
        :value="label"
        v-model="checkboxValue"
      />
    </span>
    <span :class="['y-checkbox_label', { 'y-checkbox-active': isChecked }]">
      <slot :class="[{ 'y-checkbox-active': rounded }]"></slot>
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>

<script>
export default {
  name: "YCheckbox",
  data() {
    return {};
  },
  inject: {
    checkboxGroup: {
      default: "",
    },
  },
  computed: {
    isChecked() {
      return this.isCheckboxGroup || Array.isArray(this.value)
        ? this.checkboxValue.includes(this.label)
        : this.checkboxValue;
    },
    checkboxValue: {
      get() {
        return this.isCheckboxGroup ? this.checkboxGroup.value : this.value;
      },
      set(value) {
        this.isCheckboxGroup
          ? this.checkboxGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    isCheckboxGroup() {
      return !!this.checkboxGroup;
    },
  },

  methods: {},
  components: {},
  props: {
    value: {
      type: [Boolean, Array],
      default: true,
    },
    label: {
      type: [Boolean, String, Number],
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
$checkbox_size: 15px;
.y-checkbox {
  margin: 20px 20px;
  .y-checkbox-outter {
    margin-right: 10px;
    .y-checkbox-inner {
      display: inline-block;
      width: $checkbox_size;
      height: $checkbox_size;
      border: 1px solid rgb(54, 111, 77);
      text-align: center;
      align-items: center;
      vertical-align: middle;
      line-height: 15px;
      border-radius: 2px;
      .icon {
        width: 80%;
        height: 80%;
        color: #fff;
      }
      &.y-checkbox-active {
        border-radius: $checkbox_size;
        background: rgb(109, 173, 218);
      }
      &.is-rounded {
        border-radius: 15px;
      }
    }
    input {
      opacity: 0;
      display: none;
      width: 15px;
      height: 15px;
    }
    input:checked {
      background-color: green;
    }
  }
  &.disabled {
    cursor: not-allowed;
    color: rgb(164, 167, 176);
  }
}
</style>
