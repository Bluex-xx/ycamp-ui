import Vue from 'vue'
import alert from './alert.vue'

let MyWarningComponent = Vue.extend(alert)
let instance
let instances = [];
function open(options = {}){
    console.log('进入组件');
    console.log(options);

    instance = new MyWarningComponent({
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
    simple:(options) =>{
        let _options = Object.assign({},options,{type:'simple'})
        return open(_options)
    },
    neon:(options) =>{
        let _options = Object.assign({},options,{type:'neon'})
        return open(_options)
    },
    glare:(options) =>{
        let _options = Object.assign({},options,{type:'glare'})
        return open(_options)
    },
    zoom:(options) =>{
        let _options = Object.assign({},options,{type:'zoom'})
        return open(_options)
    }
}