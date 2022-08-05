<template>
  <!-- label负责bg；y-radio-type区分大小 -->
  <label :class="['y-radio']">
    <span
      :class="[
        'y-radio-outter',
        `y-radio--${type}`,
        { 'is-round': rounded },
        { 'y-radio-active': label === value },
      ]"
    >
      <span :class="['y-radio-inner']">
        <font-awesome-icon
          :icon="icon"
          v-if="icon && label === radioValue"
          :class="['icon']"
        />
        <input
          type="radio"
          class="y-radio-origional"
          :name="name"
          :value="label"
          v-model="radioValue"
          :disabled="disabled"
        />

        <div class="mask" v-show="disabled"></div>
      </span>
      <span>
        <slot v-if="radiotype === 'radiotype1'"></slot>
        <template v-if="!$slots.default">
          {{ label }}
        </template>
      </span>
    </span>
    <span :class="'y-radio_label'">
      <slot v-if="radiotype === 'radiotype2'"></slot>
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>

<script>
export default {
  name: "YRadio",
  data() {
    return {
     
    };
  },
  inject: {
    radioGroup: {
      default: '',
    },
  },
  computed: {
    radioValue: {
      get() {
        // alert(this.radioGroup.value)
        return this.isRadioGroup ? this.radioGroup.value : this.value;
      },
      set(value) {
        this.isRadioGroup ? this.radioGroup.$emit("input", value) : this.$emit("input", value);
      },
    },
    isRadioGroup() {
      return !!this.radioGroup;
    },
    radiotype(){
      return this.isRadioGroup?this.radioGroup.type:this.type
    }
  },
  methods: {},
  components: {},
  props: {
    type: {
      type: String,
      default: "radiotype2",
      validator: function (value) {
        return ["radiotype1", "radiotype2"].indexOf(value) !== -1;
      },
    },
    value:null,
    label: {
      type: [String, Number,Boolean],
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
    icon: {
      type: [Array, Boolean],
      default: false,
    },
  },

};
</script>
<style lang="scss" scoped>
$button_padding: -1px;
$font_options: Monaco, system-ui, "Segoe UI", Roboto, Helvetica, Arial,serif,cursive,fantasy,monospace, sans-serif;
// 霓虹颜色
$neon_color: linear-gradient(to bottom right, #ef4765, #ff9a5a);
$radio_size: 20px;
.y-radio {
  display: inline-block;
  .y-radio--radiotype1 {
    width: $radio_size;
    height: $radio_size;

    &.y-radio-active {
      background-color: rgb(207, 217, 236);
      color: #fff;
    }
    color: rgb(119, 150, 203);
  }
  .y-radio--radiotype2 {
    background: $neon_color;
    border: 0;
    color: #ffffff;
    display: inline-block;
    outline: transparent;
    padding: $button_padding;
    transition: box-shadow 0.38s cubic-bezier(0.4, 0, 1, 1);
    .icon {
      color: white;
    }
  }
  .y-radio-outter {
    display: inline-block;
    padding: $button_padding;
    margin: 20px;
    position: relative;
    width: $radio_size;
    height: $radio_size;
    border: 2px solid #fff;
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
    background-color: rgb(233, 239, 246);
    vertical-align: middle;
    align-items: center;
    text-decoration: none;
    touch-action: manipulation;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    text-align: center;
    // font-size: 0.7*$radio_size;
    font-weight: 500;
    line-height: $radio_size;
    // letter-spacing: 1px;
  }
  .is-round {
    border-radius: $radio_size;
  }
  .y-radio_label {
    font-size: $radio_size;
    
    // font-family: $font_options;
  }
}
.mask {
  background: grey;
  opacity: 0.4;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  left: 0;
  top: 0;
  cursor: not-allowed;
}

.y-radio-origional {
  opacity: 0;
  display: none;
}

.y-radio-active {
  position: absolute;
  // left: 1px;
  // top: 1px;
  cursor: pointer;
  background-color: rgb(76, 103, 153);
  color: white;
  padding: 2px;
}
</style>