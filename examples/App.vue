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
      <y-button type="zoom" :icon="['far', 'smile']" :circle="true"></y-button>
    </div>
    <div class="title">
      Swiper
    </div>
    <div class="swiper">
      <y-swiper :list="demo"></y-swiper>
    </div>
    <div class="title">
      vague Swiper
    </div>
    <div class="swiper">
      <y-swiper :list="demo" vague :width="600" :height="100"></y-swiper>
    </div>
    <div class="input">
      <YInput @onChange="change" width="300px" :value="value"> </YInput>
      <YInput width="300px" icon="user" :value="value"> </YInput>
      <YInput width="300px" rearIcon="window-close" :value="value"> </YInput>
      <!-- 不带边框 -->
      <YInput width="300px" :bordered="false" :value="value"> </YInput>
      <YInput width="300px" :value="value"> </YInput>
    </div>
    <div class="data_picker">
      <date-picker></date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      demo: [
        "https://p1.music.126.net/hpeWjudOwRy2-bX-KHCzIQ==/109951167728885463.jpg?imageView&quality=89",
        "https://p1.music.126.net/Ou0rXNzdmuZVN9TzETaZjw==/109951167728896546.jpg?imageView&quality=89",
        "https://p1.music.126.net/1JaeZ2zfM_j2I1sOCFg77g==/109951167728843228.jpg?imageView&quality=89",
        "https://y.qq.com/music/common/upload/MUSIC_FOCUS/4404907.jpg?max_age=2592000",
        "https://y.qq.com/music/common/upload/MUSIC_FOCUS/4400772.png?max_age=2592000"
      ],
      value: ""
    };
  },
  methods: {
    tips() {
      alert("demo");
    },
    change(e) {
      // 修改value
      this.value = e;
      console.log(this.value);
    }
  },
  mounted() {
    setTimeout(() => {
      this.value = "111";
    }, 4000);
  }
};
</script>

<style lang="scss">
#app {
  padding-bottom: 300px;
}
.title {
  color: gray;
  margin: 20px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
}
.swiper {
  margin: 10px 0;
  width: 900px;
  height: 280px;
}
</style>
