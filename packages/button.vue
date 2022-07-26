<template>
  <button
    :class="[
      'y-button',
      `y-button--${type}`,
      round ? 'is-round' : '',
      disabled ? 'is-disabled' : ''
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <div class="mask" v-if="disabled"></div>
    <fai :icon="icon" v-if="icon" class="icon"/>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'YButton',
  data() {
    return {}
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  },
  components: {},
  props: {
    type: {
      type: String,
      default: 'simple',
      validator: function(value) {
        return ['simple', 'neon', 'glare', 'zoom'].indexOf(value) !== -1
      }
    },
    // round按钮
    round: {
      type: Boolean
    },
    icon: {
      type: [Array, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {},
  mounted() {},
  computed: {},
  watched: {}
}
</script>
<style scoped lang="scss">
$button_padding: 10px 30px;
$font_options: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial,
  sans-serif;
$zoom_shadow: rgb(35 51 160 / 20%) 0 -25px 18px -14px inset,
  rgb(35 51 160 / 15%) 0 1px 2px, rgb(35 51 160 / 15%) 0 2px 4px,
  rgb(34 51 160 / 15%) 0 4px 8px, rgb(35 51 160 / 15%) 0 8px 16px,
  rgb(35 51 160 / 15%) 0 16px 32px;
$zoom_hover_shadow: rgb(35 51 160 / 35%) 0 -25px 18px -14px inset,
  rgb(35 51 160 / 25%) 0 1px 2px, rgb(35 51 160 / 25%) 0 2px 4px,
  rgb(35 51 160 / 25%) 0 4px 8px, rgb(35 51 160 / 25%) 0 8px 16px,
  rgb(35 51 160 / 25%) 0 16px 32px;
$neon_color: linear-gradient(to bottom right, #ef4765, #ff9a5a);
$glare_color: linear-gradient(45deg, #ff512f 0%, #f09819 51%, #ff512f 100%);
.y-button {
  padding: $button_padding;
  margin: 0 10px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 5px;
  font-family: $font_options;
  align-items: center;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}
.y-button.is-round {
  border-radius: 100px;
}
.y-button .icon
{
  margin-right: 2px;
}
.y-button:active {
  transform: scale(0.9);
}
.y-button--simple {
  color: rgba(26, 127, 199, 0.598);
  background: #fff;
  border: 2px solid #f6f6f6;
}

.y-button--simple:hover {
  background: #f6f9fe;
  color: #174ea685;
}

.y-button--simple:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
    0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}
.y-button--simple:not(:disabled) {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.y-button--simple:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0 2px 3px 0,
    rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
}

.y-button--simple:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.y-button--simple:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, 0.3) 0 4px 4px 0,
    rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
}

.y-button--simple:disabled {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}
.y-button--zoom {
  background-color: #3e3ee3b8;
  box-shadow: $zoom_shadow;
  color: white;
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  transition: all 250ms;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.y-button--zoom:hover {
  box-shadow: $zoom_hover_shadow;
  transform: scale(1.05) rotate(-1deg);
}
.y-button--neon {
  background: $neon_color;
  border: 0;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: $font_options;
  font-size: 16px;
  font-weight: 500;
  outline: transparent;
  padding: $button_padding;
  transition: box-shadow 0.38s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}
.y-button--neon:hover {
  box-shadow: 0 0 0.25rem rgb(0 0 0 / 50%),
    -0.125rem -0.125rem 1rem rgb(239 71 101 / 50%),
    0.125rem 0.125rem 1rem rgb(255 154 90 / 50%);
}
.y-button--glare {
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  display: inline-block;
  border: 0px;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: $glare_color;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-family: $font_options;
}
.y-button--glare:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>
