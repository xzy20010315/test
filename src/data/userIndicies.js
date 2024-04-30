import { ref } from "vue"
import { id as id_storage } from './storage'
//数据源js
export var id = ref()
//关注，即偶像
export var followerCount = ref(0)
//被关注，即粉丝
export var followingCount = ref(0)
//关注或取关的数量改变
export var change = ref()

//数据绑定
id = id_storage

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
