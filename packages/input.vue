<template>
  <div class="y-input y-label">
    <input
      name=""
      id=""
      :class="['y-input-inner', { disabled: disabled }]"
      :placeholder="placeholder"
      v-model="inputValue"
      :disabled="disabled"
      :type="showPassword ? (passwordLabel ? 'password' : 'text') : type"
    />
    <label class="input-top">{{ inputTop }}</label>
    <span class="label">
      <font-awesome-icon
        :icon="['fas', 'eye-slash']"
        :class="['icon', { password: passwordLabel }]"
        v-show="showPassword"
        @click="changeType"
      />
      <font-awesome-icon
        :icon="['fa', 'times-circle']"
        v-show="clearable"
        :class="['icon']"
        @click="clearInput"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: "YInput",
  data() {
    return {
      passwordLabel: true,
    };
  },

  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },

  methods: {
    changeType() {
      this.passwordLabel = !this.passwordLabel;
    },
    clearInput() {
      this.$emit("input", "");
    },
  },
  components: {},
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    closed: {
      type: Boolean,
      default: false,
    },
    inputTop: {
      type: String,
      default: "INPUT",
    },
  },
};
</script>
<style lang="scss" scoped>
$inputLength: 40px;
.y-input {
  margin: 20px;
  position: relative;
  // border:1px solid blue;
  width: 300px;
  height: $inputLength;
  // overflow: hidden;
  box-shadow: 0 4px 2px 0 rgba(168, 191, 208, 0.8), 0 8px 12px 6px rgba(150, 197, 236, 0.1);
  border-radius: 5px;
  color: rgb(207, 217, 236);
  .input-top {
    position: absolute;
    top: -10px;
    pointer-events: none;
  }
  input:focus ~ .input-top,
  input:valid ~ .input-top {
    transform: translateY(-0px);
    font-size: 15px;
    color: rgb(36, 157, 194);
  }
  .label {
    .y-input-inner {
      padding-right: 20px;
    }
    position: absolute;
    right: 10px;
    top: 0;
    height: 100%;
    line-height: 30px;
    text-align: center;
    align-items: center;
    vertical-align: middle;
    transition: all 0.3s;
    .icon {
      width: 20px;
      height: 100%;
      color: rgb(207, 217, 236);
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      &.password {
        color: rgb(36, 157, 194);
      }
    }
  }
  .y-input-inner {
    position: relative;
    width: 100%;
    height: 100%;
    border: 0px;
    border-bottom: 1px solid rgb(36, 157, 194);
    border-radius: 5px;
    outline: none;
    font-size: 0.4 * $inputLength;
    line-height: 21px;
    color: #333;
    cursor: pointer;
    &:focus {
      border-bottom: 3px solid rgb(36, 157, 194);
    }
    &.disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

</style>