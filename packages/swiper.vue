<template>
<div class="y-swiper">
    <div class="y-swiper-btn-bg"></div>
    <div class="btn-left">
         <font-awesome-icon :icon="['far','arrow-alt-circle-left']" />
    </div>
   <div class="y-swiper-img">
    <div class="y-swiper-select">
        <div v-for="i in 7" :key="i" class="y-swiper-select-btn"></div>
    </div>
   </div>
   <div class="y-swiper-btn-bg"></div>
    <div class="btn-right">
         <font-awesome-icon :icon="['far','arrow-alt-circle-right']" />
    </div>
</div>
</template>
<script>
export default {
  name: 'YSwiper',
  methods: {

  }
}
</script>
<style scoped lang="scss">
.y-swiper
{
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background: url(https://p1.music.126.net/TDWLsfgiS6biNAyVCFilHg==/109951167717976681.jpg?imageView&quality=89);
    overflow: hidden;
    position: relative;
    .btn-left{
        position: absolute;
        left: -30px;
        top: 120px;
        color: rgba(255, 255, 255, 0.424);
        font-size:30px;
        transition: 0.5s;
    }
    .btn-right
    {
        position: absolute;
        right: -30px;
        top: 120px;
        color: rgba(255, 255, 255, 0.424);
        font-size:30px;
        transition: 0.5s;
    }
}
.y-swiper:hover
{
    .btn-left{
        left: 30px;
        transition: 0.5s;
    }
    .btn-right
    {
        right: 30px;
        transition: 0.5s;
    }
}
.y-swiper-img
{
    width: 70%;
    height: 100%;
    z-index: 999;
    background: url(https://p1.music.126.net/TDWLsfgiS6biNAyVCFilHg==/109951167717976681.jpg?imageView&quality=89);
    display: inline-block;
    position: relative;
}
.y-swiper-btn-bg
{
    width: 15%;
    height: 100%;
    display: inline-block;
    backdrop-filter: blur(10px);
}
.y-swiper-select
{
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px 0;
}
.y-swiper-select-btn:first-child
{
    background: grey;
}
.y-swiper-select-btn
{
    width: 20px;
    height: 3px;
    background: white;
    margin:0 2px;
}
</style>
