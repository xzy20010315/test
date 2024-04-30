import { ref } from "vue"
import { id as id_others } from './others'
import { change as change_userIndicies } from "./userIndicies"
//数据源js
export var id = ref()
export var followerCount = ref()
export var followingCount = ref()
export var change = ref()

//数据绑定
id = id_others
change = change_userIndicies
export var indicies = ref({
    id : id,
    followerCount : followerCount,
    followingCount : followingCount,
    change: change  
})

//请求参数封装
//原始关注数据
export var idArgu = ref({
    id: id
})
//更新followerCount
export var updateFollowerCountArgu = ref({
    id: id,
    change: change
})
//更新followingCount
export var updateFollowingCountArgu = ref({
    id: id,
    change: change
})
//查询indicies
export var selectIndiciesArgu = ref({
    id: id
})