<template>
  <div id="app">
    <div>
      <div class="title">Button</div>
      <y-button @click="tips">Demo</y-button>
      <y-button type="neon">Demo</y-button>
      <y-button type="glare">Demo</y-button>
      <y-button type="zoom" :icon="['far', 'smile']">Demo</y-button>
    </div>
    
    <div>
      <div class="title">Round Button</div>
      <y-button @click="tips" round>Demo</y-button>
      <y-button type="neon" round>Demo</y-button>
      <y-button type="glare" round>Demo</y-button>
      <y-button type="zoom" round :icon="['far', 'smile']">Demo</y-button>
    </div>
    <div>
      <div class="title">Disabled Button</div>
      <y-button @click="tips" disabled>Demo</y-button>
      <y-button type="neon" disabled>Demo</y-button>
      <y-button type="glare" disabled>Demo</y-button>
      <y-button type="zoom" disabled :icon="['far', 'smile']">Demo</y-button>
    </div>
    <div>
      <div class="title">Circle Button</div>
      <y-button @click="tips" circle>好</y-button>
      <y-button type="neon" circle>赞</y-button>
      <y-button type="glare" circle>X</y-button>
      <y-button type="zoom" :icon="['far', 'smile']" circle></y-button>
    </div>
    <div class="title">Radio</div>
    <div>
      <y-radio v-model="radio1" label="1" type="radiotype1">开</y-radio>
      <y-radio v-model="radio1" label="2" type="radiotype1">关</y-radio>
    </div>
    <div>
      <y-radio v-model="radio1" label="1" type="radiotype2" :icon="['fas', 'check']">男</y-radio>
      <y-radio v-model="radio1" label="2" type="radiotype2" :icon="['fas', 'check']">女</y-radio>
    </div>
    <div>
      <y-radio v-model="radio1" label="1" type="radiotype2" :icon="['fas', 'circle']">男</y-radio>
      <y-radio v-model="radio1" label="2" type="radiotype2" :icon="['fas', 'circle']">女</y-radio>
    </div>
    <div>
      <y-radio v-model="radio1" label="1" type="radiotype1" rounded>开</y-radio>
      <y-radio v-model="radio1" label="2" type="radiotype1" rounded>关</y-radio>
    </div>
    <div>
      <y-radio v-model="radio1" label="1" type="radiotype2" rounded :icon="['fas', 'circle']"
        >男</y-radio
      >
      <y-radio v-model="radio1" label="2" type="radiotype2" rounded :icon="['fas', 'circle']"
        >女</y-radio
      >
    </div>
    <div>
      <y-radio v-model="radio1" label="1" type="radiotype2" rounded :icon="['fas', 'heart']"
        >男</y-radio
      >
      <y-radio v-model="radio1" label="2" type="radiotype2" rounded :icon="['fas', 'heart']"
        >女</y-radio
      >
    </div>
    <div>
      <y-radio v-model="radio1" label="1" disabled>开</y-radio>
      <y-radio v-model="radio1" label="2" disabled>关</y-radio>
    </div>
    <div class="title">RadioGroup</div>
    <div>
      <y-radio-group v-model="radio2" type="radiotype2">
        <y-radio label="1" rounded :icon="['fas', 'circle']">选项1</y-radio>
        <y-radio label="2" rounded :icon="['fas', 'circle']">选项2</y-radio>
        <y-radio label="3" rounded :icon="['fas', 'circle']">选项3</y-radio>
        <y-radio label="4" rounded :icon="['fas', 'circle']">选项4</y-radio>
      </y-radio-group>
    </div>
    <!-- yyy-checkbox -->

    <div class="title">Checkbox</div>
    <div>
      <y-checkbox v-model="checked" rounded><span>是否同意该协议</span></y-checkbox>
    </div>
    <div>
      <y-checkbox v-model="checked" disabled><span>是否同意该协议</span></y-checkbox>
    </div>
    <div>
      <y-checkbox v-model="checkList1" label="1">吃饭</y-checkbox>
      <y-checkbox v-model="checkList1" label="2">睡觉</y-checkbox>
      <y-checkbox v-model="checkList1" label="3">打豆豆</y-checkbox>
    </div>
    <div>
      <y-checkbox-group v-model="checkList1">
        <y-checkbox label="1">吃饭</y-checkbox>
        <y-checkbox label="2">睡觉</y-checkbox>
        <y-checkbox label="3">打豆豆</y-checkbox>
      </y-checkbox-group>
    </div>
    <y-checkbox-group v-model="checkList2">
      <y-checkbox label="篮球">篮球</y-checkbox>
      <y-checkbox label="排球">排球</y-checkbox>
      <y-checkbox label="乒乓球">乒乓球</y-checkbox>
    </y-checkbox-group>
    <y-checkbox-group v-model="checkList2">
      <y-checkbox disabled label="篮球">篮球</y-checkbox>
      <y-checkbox disabled label="排球">排球</y-checkbox>
      <y-checkbox disabled label="乒乓球">乒乓球</y-checkbox>
    </y-checkbox-group>

    <div class="title">Input</div>
    <div>
      <y-input v-model="username" placeholder="默认输入"></y-input>
      <y-input v-model="username" placeholder="默认输入" disabled></y-input>
      <y-input v-model="password" placeholder="默认输入" showPassword></y-input>
      <y-input v-model="username" placeholder="默认输入" clearable></y-input>
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
      <y-swiper :list="demo" vague width=600 height=100></y-swiper>
    </div>
    
    <!--alert-->
    <div class="title">
      Alert
    </div>

    <div class="alert">
      <y-alert
        @confirm="confirmAlert"
        ref="myAlert"
        type="simple"
      >
        <template v-slot:header>
          This is a title for ALERT
        </template>
        <template v-slot:content>
          This is content for ALERT
        </template>
        <template v-slot:btnText>
          Confirm
        </template>
      </y-alert>
      <y-button 
        type="simple"
        @click="openAlert"
      > OPEN ALERT</y-button>
    </div>

    <div class="alert">
      <y-alert
        @confirm="confirmAlert"
        ref="myAlert2"
        type="neon"
      >
        <template v-slot:header>
          This is a title for ALERT
        </template>
        <template v-slot:content>
          This is content for ALERT
        </template>
        <template v-slot:btnText>
          Confirm
        </template>
      </y-alert>
      <y-button 
        type="neon"
        @click="openAlert2"
      > OPEN ALERT</y-button>
    </div>

    <div class="alert">
      <y-alert
        @confirm="confirmAlert"
        ref="myAlert3"
        type="glare"
      >
        <template v-slot:header>
          This is a title for ALERT
        </template>
        <template v-slot:content>
          This is content for ALERT
        </template>
        <template v-slot:btnText>
          Confirm
        </template>
      </y-alert>
      <y-button 
        type="glare"
        @click="openAlert3"
      > OPEN ALERT</y-button>
    </div>
    
    <div class="alert">
      <y-alert
        @confirm="confirmAlert"
        ref="myAlert4"
        type="zoom"
      >
        <template v-slot:header>
          This is a title for ALERT
        </template>
        <template v-slot:content>
          This is content for ALERT
        </template>
        <template v-slot:btnText>
          Confirm
        </template>
      </y-alert>
      <y-button 
        type="zoom"
        @click="openAlert4"
      > OPEN ALERT</y-button>
    </div>


    <!--dialog-->
    <div class="title">
      dialog
    </div>
    <div class="dialog">
      <y-button type="zoom" @click="visible = true">Show Dialog</y-button>
      <y-dialog width="50%" margin-top="10px" :visible="visible" @close="close">
        <div>这是一段提示信息</div>
        <template v-slot:footer>
          <y-button type="zoom" @click="visible = false">确定</y-button>
          <y-button @click="visible = false">取消</y-button>
        </template>
      </y-dialog>
    </div>

    <div class="dialog">
      <y-button type="glare" @click="visible = true">Show Dialog</y-button>
      <y-dialog width="50%" margin-top="10px" :visible="visible" @close="close">
        <ul>
          <li>相关文字</li>
          <li>相关文字</li>
          <li>相关文字</li>
        </ul>
      </y-dialog>
    </div>
  </div>

  
</template>

<script>
export default {
  data() {
    return {
      radio1: "1",
      radio2: "1",
      checked: true,
      checked2: false,
      checkList: ["选中且禁用", "复选框 A"],
      checkList1: ["1", "2"],
      checkList2: ["篮球", "乒乓球"],
      username: "",
       demo: [
        "https://p1.music.126.net/hpeWjudOwRy2-bX-KHCzIQ==/109951167728885463.jpg?imageView&quality=89",
        "https://p1.music.126.net/Ou0rXNzdmuZVN9TzETaZjw==/109951167728896546.jpg?imageView&quality=89",
        "https://p1.music.126.net/1JaeZ2zfM_j2I1sOCFg77g==/109951167728843228.jpg?imageView&quality=89",
        "https://y.qq.com/music/common/upload/MUSIC_FOCUS/4404907.jpg?max_age=2592000",
        "https://y.qq.com/music/common/upload/MUSIC_FOCUS/4400772.png?max_age=2592000"
      ],
      visible:false
    };
  },
  methods: {
    tips() {
      alert("demo");
    },
    openAlert(){
      this.$refs.myAlert.operateAlert(true)
    },
    openAlert2(){
      this.$refs.myAlert2.operateAlert(true)
    },
    openAlert3(){
      this.$refs.myAlert3.operateAlert(true)
    },
    openAlert4(){
      this.$refs.myAlert4.operateAlert(true)
    },
    close(value){
      this.visible = value
    }
  },
};
</script>

<style lang="scss">
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
y-radio {
  font-family: "楷体";
  font-size: 40px;
  font-weight: bold;
}
.alert,.dialog{
  margin: 10px;
}

</style>
