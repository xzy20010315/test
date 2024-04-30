import { ref } from "vue"
import { id as id_storage } from './storage'
import { id as id_others } from './others'
//数据源js
export var followerId = ref()
export var followingId = ref()
export var followTime = ref()
export var status = ref(true)

//数据绑定
followerId = id_storage
followingId = id_others

export var follower = ref({
    followerId : followerId,
    followingId : followingId,
    followTime : followTime,
    status : status
})

//请求参数封装
//关注某用户
export var followArgu = ref({
    followerId : followerId,
    followingId : followingId,
    followTime : followTime,
    status : status
})
//取关
export var unFollowArgu = ref({
    followerId : followerId,
    followingId : followingId,
    followTime : followTime,
    status : status
})
//查关注
export var findAllFollowingArgu = ref({
    followerId : followerId,
    status : status
})

//
export var isFollowArgu = ref({
    followerId : followerId,
    followingId : followingId
})