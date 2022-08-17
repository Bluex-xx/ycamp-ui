<template>
  <div ref="swiperbg" class="y-swiper">
    <div v-if="vague" class="y-swiper-btn-bg"></div>
    <div ref="btn_left" class="btn-left" @click="left_btn_change">
      <font-awesome-icon :icon="['far', 'arrow-alt-circle-left']" />
    </div>
    <div v-if="vague" ref="swiperimg" class="y-swiper-img"></div>
    <div v-if="vague" class="y-swiper-btn-bg"></div>
    <div ref="btn_right" class="btn-right" @click="right_btn_change">
      <font-awesome-icon :icon="['far', 'arrow-alt-circle-right']" />
    </div>
    <div v-if="indicator" class="y-swiper-select">
      <div
        v-for="(value, index) in imgList"
        :key="index"
        @click="select_change(index, value, $event)"
        class="y-swiper-select-btn"
        ref="select_btn"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "YSwiper",
  props: {
    list: {
      type: Array,
      default: ["https://y.qq.com/music/common/upload/MUSIC_FOCUS/4400772.png?max_age=2592000"]
    },
    vague: {
      type: Boolean,
      default: false
    },
    indicator: {
      type: Boolean,
      default: true
    },
    height: {
      type: Number,
      default: 260
    },
    width: {
      type: Number,
      default: 700
    }
  },
  methods: {
    select_change(index, imgUrl, e) {
      this.select_btn_color_change();
      e.target.style.background = "grey";
      this.currentIndex = index;
      this.change(imgUrl);
    },
    left_btn_change() {
      if (this.currentIndex == 0) {
        this.currentIndex = this.imgList.length - 1;
      } else {
        this.currentIndex--;
      }
      this.select_btn_color_change();
      this.$refs.select_btn[this.currentIndex].style.background = "grey";
      this.change(this.imgList[this.currentIndex]);
    },
    right_btn_change() {
      if (this.currentIndex == this.imgList.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      this.select_btn_color_change();
      this.$refs.select_btn[this.currentIndex].style.background = "grey";
      this.change(this.imgList[this.currentIndex]);
    },
    select_btn_color_change() {
      for (let i = 0; i < this.imgList.length; i++) {
        this.$refs.select_btn[i].style.background = "";
      }
    },
    change(imgUrl) {
      this.$refs.swiperbg.style.background = `url(${imgUrl})`;
      if (this.vague) {
        this.$refs.swiperimg.style.background = `url(${imgUrl})`;
      }
    }
  },
  data() {
    return {
      imgList: this.list,
      currentIndex: 0
    };
  },
  mounted() {
    if (this.vague) {
      this.$refs.swiperimg.style.background = `url(${this.imgList[this.currentIndex]})`;
    }
    this.$refs.swiperbg.style.background = `url(${this.imgList[this.currentIndex]})`;
    if (this.width < 500) {
      this.width = 500;
    }
    if (this.height < 200) {
      this.height = 200;
    }
    this.$refs.swiperbg.style.height = this.height + "px";
    this.$refs.swiperbg.style.width = this.width + "px";
    this.$refs.btn_left.style.top = (this.height - 30) / 2 + "px";
    this.$refs.btn_right.style.top = (this.height - 30) / 2 + "px";
    this.$refs.select_btn[this.currentIndex].style.background = "grey";
  }
};
</script>
<style scoped lang="scss">
.y-swiper {
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background: #f6f6f6;
  overflow: hidden;
  position: relative;
  .btn-left {
    position: absolute;
    left: -30px;
    top: 120px;
    color: rgba(255, 255, 255, 0.424);
    font-size: 30px;
    transition: 0.5s;
  }
  .btn-right {
    position: absolute;
    right: -30px;
    top: 120px;
    color: rgba(255, 255, 255, 0.424);
    font-size: 30px;
    transition: 0.5s;
  }
}
.y-swiper:hover {
  .btn-left {
    left: 30px;
    transition: 0.5s;
  }
  .btn-right {
    right: 30px;
    transition: 0.5s;
  }
}
.y-swiper-img {
  width: 70%;
  height: 100%;
  z-index: 999;
  background: #b6b6b6;
  display: inline-block;
  position: relative;
}
.y-swiper-btn-bg {
  width: 15%;
  height: 100%;
  display: inline-block;
  backdrop-filter: blur(10px);
}
.y-swiper-select {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0;
  z-index: 999;
}
.y-swiper-select-btn {
  width: 20px;
  height: 3px;
  background: white;
  margin: 0 2px;
}
.y-swiper-select-btn:hover {
  background: rgba(128, 128, 128, 0.761);
}
</style>
