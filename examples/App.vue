<template>
  <div id="app">
    <div>
      <div class="title">
        Button
      </div>
      <y-button @click="tips">Demo</y-button>
      <y-button type="neon">Demo</y-button>
      <y-button type="glare">Demo</y-button>
      <y-button type="zoom" :icon="['far', 'smile']">Demo</y-button>
    </div>
    <div>
      <div class="title">
        Round Button
      </div>
      <y-button @click="tips" round>Demo</y-button>
      <y-button type="neon" round>Demo</y-button>
      <y-button type="glare" round>Demo</y-button>
      <y-button type="zoom" round :icon="['far', 'smile']">Demo</y-button>
    </div>
    <div>
      <div class="title">
        Disabled Button
      </div>
      <y-button @click="tips" disabled>Demo</y-button>
      <y-button type="neon" disabled>Demo</y-button>
      <y-button type="glare" disabled>Demo</y-button>
      <y-button type="zoom" disabled :icon="['far', 'smile']">Demo</y-button>
    </div>
    <div>
      <div class="title">
        Circle Button
      </div>
      <y-button @click="tips" circle>好</y-button>
      <y-button type="neon" circle>赞</y-button>
      <y-button type="glare" circle>X</y-button>
      <y-button type="zoom" :icon="['far', 'smile']" circle=true></y-button>
    </div>
    <div class="title">
        Swiper
      </div>
    <div class="swiper">
        <y-swiper></y-swiper>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    tips() {
      alert('demo')
    }
  }
}
</script>

<style lang="scss">
.title {
  color: gray;
  margin: 20px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
}
.swiper
{
  margin:10px 0;
  width: 700px;
  height: 280px;
}
</style>
