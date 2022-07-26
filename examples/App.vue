<template>
  <div id="app">
    <div class="title">
      Button demo
    </div>
    <y-button round="true" @click="tips">demo</y-button>
    <y-button type="neon" round="true">demo</y-button>
    <y-button type="glare" round="true">demo</y-button>
    <y-button type="zoom" disabled :icon="['far', 'smile']">demo</y-button>
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
</style>
