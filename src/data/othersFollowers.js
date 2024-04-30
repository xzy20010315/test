import { ref } from "vue"
import { id as id_others } from './others'
//数据源js
export var followerId = ref()
export var followingId = ref()
export var followTime = ref()
export var status = ref()

//数据绑定
followerId = id_others

export var follower = ref({
    followerId : followerId,
    followingId : followingId,
    followTime : followTime,
    status : status
})