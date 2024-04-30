import { ref } from 'vue'
import {id as id_storage} from './storage'

//
export var id = ref()
export var content = ref()
export var date = ref()

//数据绑定
id = id_storage


//封装，向外暴露
export var hobby = ref({
    id: id,
    content: content,
    date: date
})
//封装请求参数
export var changeHobbyArgu = ref({
    id: id,
    content: content,
    date: date
})