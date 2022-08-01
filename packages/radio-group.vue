<template>
  <div class="y-radio-group">
    <slot></slot>
  </div>
</template>

<script>
import YRadio from './radio.vue'
export default {
  name: "YRadioGroup",
  data() {
    return {};
  },

  computed: {
  },
  methods: {},
  components: {YRadio},
  props: {
    value:null,
    type: {
      type: String,
      default: "radiotype2",
      validator: function (value) {
        return ["radiotype1", "radiotype2"].indexOf(value) !== -1;
      },
    },
 
  },
  provide(){
    return{
        radioGroup:this
    }
  },
};
</script>
<style lang="scss" scoped>
.y-radio-group {
  padding: 10px;
  // margin: 20px;
}
  
</style>
