//导入插件
import request from "@/request";
import { ElMessage } from "element-plus";
//导入页面组件
//导入数据源
//导入方法


//方法
//关注
export const follow = async(followPara, othersInformationPara, followingDataPara)=> {
    let result = await followService(followPara)    
    if (result.code == 0) {
        //关注成功
        //往关注数据源中添加新关注用户信息
        followingDataPara.value.push(othersInformationPara)
        followPara.status = true
        ElMessage({
            message: result.msg,
            type: 'success',
          })
    }
}

//取关
export const unFollow = async(unFollowPara, followingDataPara)=> {
    let result = await unFollowService(unFollowPara)
    if (result.code == 0) {
        //取关成功
        //从关注数据源中删除该用户信息
        let temp = followingDataPara.value.filter((p)=>{
            return p.id = unFollowPara.followingId
        })
        let index = followingDataPara.value.indexOf(temp[0])
        followingDataPara.value.splice(index, 1)
        unFollowPara.status = false
        ElMessage({
            message: result.msg,
            type: 'success',
          })
    }
}

//查询第一个用户是否关注了第二个用户
export const isFollow = async(isFollowPara, followersPara)=> {
    let result = await isFollowService(isFollowPara)
    if(result.code == 0) {
        if(result.data == 0) {
            //关注表中还不存在这样的关注数据
            followersPara.status = false
        } else {
            //关注表中已存在数据，进行数据填充
            followersPara.followerId = result.data.followerId
            followersPara.followingId = result.data.followingId
            followersPara.followTime = result.data.followTime
            followersPara.status = result.data.status
        }
    }
}

// //查找关注列表数据
// export const findAllFollowing = async(findAllFollowingPara, userAllInformationPara)=>{
//     let result = await findAllFollowingService(findAllFollowingPara)
//     console.log(result.code);
//     if (0 == result.code) {
//         //查找成功
//         userAllInformationPara.followingData = Object.values(result.data)
//         console.log(userAllInformationPara.followingData);
//     }
// }

//查找关注列表数据
export const findAllFollowing = async(findAllFollowingPara, followingDataPara)=>{
    let result = await findAllFollowingService(findAllFollowingPara)
    console.log(result.code);
    if (0 == result.code) {
        //查找成功
        followingDataPara.value = Object.values(result.data)
        console.log(followingDataPara);
    }
}

//接口
//关注接口
export const followService = (followPara)=>{
    return request.post("api/followers/follow",followPara);
}
//取消关注接口
export const unFollowService = (unFollowPara)=>{
    return request.post("api/followers/unFollow",unFollowPara);
}
//用户更改密码接口
export const findAllFollowingService = (findAllFollowingPara)=>{
    return request.post("api/followers/findAllFollowing",findAllFollowingPara);
}
//查询第一个用户是否关注了第二个用户
export const isFollowService = (isFollowPara)=>{
    return request.post("api/followers/isFollow",isFollowPara);
}
