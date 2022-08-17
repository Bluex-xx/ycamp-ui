import Vue from 'vue'
import notification from './notification.vue'

let MyNotificationComponent = Vue.extend(notification)
let instance
let instances = [];

function open(options = {}){
    console.log('进入组件');
    console.log(options);

    instance = new MyNotificationComponent({
        el:document.createElement('div'),
        propsData:options,
        data:{}
    });

    instance.visible = true
    
    instances.push(instance)

    document.body.appendChild(instance.$el)

    return instance
}

export default{
    open:(options = {}) => {
        return open(options)
    },
    success:(options) =>{
        let _options = Object.assign({},options,{type:'success'})
        return open(_options)
    },
    error:(options) =>{
        let _options = Object.assign({},options,{type:'error'})
        return open(_options)
    },
    warning:(options) =>{
        let _options = Object.assign({},options,{type:'warning'})
        return open(_options)
    },
    simple:(options) =>{
        let _options = Object.assign({},options,{type:'simple'})
        return open(_options)
    }
}