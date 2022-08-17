import Vue from 'vue'
import message from './message.vue'

let instances = [];
let instance
let MymessageComponent = Vue.extend(message)
function open(options = {}){
    console.log(options);
    instance = new MymessageComponent({
        el:document.createElement('div'),
        propsData:options,
        data:{
            onClose(){
                onCloseFun()
            }
        }
    });

    instance.visible = true

    document.body.appendChild(instance.$el)

    let messageTop = 20;
    let count = 0
    
    instances.forEach(item => {
        messageTop += item.$el.offsetHeight+10
    });

    instance.id = 'mymessage' +count
    instance.top = messageTop

    instances.push(instance)

    return instance
}

function onCloseFun(){
    for(let i = 0;i<instance.length;i++){

    }
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
    info:(options) =>{
        let _options = Object.assign({},options,{type:'info'})
        return open(_options)
    }
}