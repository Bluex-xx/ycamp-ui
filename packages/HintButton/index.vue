<template>
  
    <!-- 为这个组件添加title鼠标悬停  attrs获取父组件传递过来的属性 子组件内可以要用的话props先获取 父组件引用传递属性 -->
    <a href="javascript:;" :title="title">
    <el-button v-bind="$attrs" v-on="$listeners" ></el-button>
    </a>
    <!-- <el-tooltip :content="title" placement="bottom">
        <el-button v-bind="$attrs" v-on="$listeners" ></el-button>
    </el-tooltip> -->
  
</template>

<script>
export default {
  name: 'HintButton',
  mounted(){
    // console.log(this.$attrs,this.$listeners)
  },
  props:['title']
}
</script>

<style >
  a{
    margin:0 5px;
  }
</style>