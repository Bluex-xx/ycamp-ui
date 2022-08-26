<template>
  <div class="pagination">
    <button :disabled="currentPage==1" @click="$emit('changePage',currentPage-1)">上一页</button>
    <button v-if="startEnd.start!==1"  @click="$emit('changePage',1)">1</button>
    <!-- ...出现的条件是必须是最起码是中间有一个间隔数 -->
    <!-- <button v-if="startEnd.start>2">···</button> -->


    <!-- <button v-for="page in startEndArr" :key="page" 
        @click="$emit('changePage',page)" :class="{ active: page===currentPage} ">{{page}}</button> -->
          <button v-for="item in listArr" :key="item" 
      :class="{active: item===currentPage}" @click="$emit('changePage',item)">{{item}}</button>

     <!-- <button v-for="page in startEndArr" :key="page" 
      :class="{active: page===currentPage}" @click="setCurrentPage(page)">{{page}}</button> -->

  
    
    
    <!-- <button  v-if="startEnd.end<currentTotalPage-1">···</button> -->
    <button v-if="startEnd.end!==currentTotalPage"  @click="$emit('changePage',currentTotalPage)">{{startEnd.end}}</button>
    <button :disabled="currentPage==currentTotalPage"  @click="$emit('changePage',currentPage+1)">下一页</button>
    
    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    // :currentPage="options.pageNo" :total="total" :currentSize="options.pageSize"  :continueNum='5'
    props:['currentPage','total','currentSize','continueNum'],
    //接收数据 父组件需要传递数据 以及一个自定义事件 改变页码changePage产生的回调
    // props:{
    //     currentPage:Number,当前页
    //      total:Number,总数
    //      currentSize:Number,当前页显示条数
    //      continueNum:Number, 连续页码数

    // },
    //计算一下总的页码数
    data(){
      return{
      
      }
    },
    computed:{
         startEndArr(){
         let arr = []
         let {start, end} = this.startEnd
         for (let  item = start; item <=end; item++) {
          arr.push(item)
      }
      return arr
    },

    listArr(){
      return this.startEndArr.filter(item=>{
          return item>=this.startEnd.start
      })
    },


        currentTotalPage(){
            return Math.ceil(this.total/this.currentSize)
        },
      //判断开始位置和结束位置的数量计算 有问题
        startEnd(){
            let {currentPage,currentTotalPage,continueNum}=this
            //定义开始位置和结束位置
            let start,end;
        //1.开始位置 和结束位置 与连续的页码数对应相比较

        //总页数位置与连续页数的比较 
        if(continueNum<=currentTotalPage){
            start=1;
            end=currentTotalPage
            //总页数大于当前页   分几种情况
            //1 在中间位置
        }else{
            start=currentTotalPage-(currentPage-1)/2;
             end=currentTotalPage+(currentPage-1)/2;
        
       
        //总页数大于当前页  修正两端位置
           //开始位置小于1
           if(start<1){
            start=1;
            end=continueNum;
           }
          
          //结束位置大于总页数
           if(end>currentTotalPage){
            end=currentTotalPage;
            start=currentTotalPage-continueNum
           }

      }
      
             return {start,end}


        }

      //   startEnd () {
      // let start, end , disNum
      // const {currentPage, continueNum, currentTotalPage} = this
      // if(continueNum > currentTotalPage){
      //   start = 1
      //   end = currentTotalPage
      // }else{
      //   start = currentPage - Math.floor(continueNum/2)
      //   end = currentPage + Math.floor(continueNum/2)
      //   if(start < 1){
      //     disNum = 1 - start
      //     start += disNum
      //     end += disNum
      //   }
      //   if(end > currentTotalPage){
      //     disNum = totalPages - end
      //     start -= disNum
      //     end -= disNum
      //   }
      // }

      // return {start,end}
      //   }
    },
    methods: {
    /* 
    设置新的当前页码
    */
    // setCurrentPage (page) {
    //   // 如果页码没有变化, 直接结束
    //   if (page===this.currentPage) return
    //   // 更新当前页码
    //   this.currentPage = page

    //   // 分发自定义事件通知父组件
    //   this.$emit('changePage', page)
    // }
  }
    
  }
  
</script>

<style lang="less" scoped>
  .pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>