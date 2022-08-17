import Vue from 'vue'
import message from '../packages/index'

//创建alert组建的构造类
const Message = Vue.extend(message)

//接收配置
const messageFun = function (options) {
     //实例化组件
    const Instance = new Message({
        // 给data的变量赋值
      data: { 
        title: (options && options.title) || '提示',
      }
    })
    //挂载
    let vm = Instance.$mount()
    // 插入body
    document.body.appendChild(vm.$el)
     // 执行初始化方法, 返回的是一个promise
    return vm.init()
}
  
export default{
    install:(Vue) =>{
        //挂到Vue原型上使用
        Vue.prototype.$message = messageFun
    }
}
  