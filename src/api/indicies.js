//导入插件
import request from "@/request";
import { ElMessage } from "element-plus";
//导入页面组件
//导入数据源
//导入方法

//初始化WebSocket用来监听followerCount的变化
var webSocket = null
export const initWebSocket = (indiciesPara, userAllInformationPara)=>{
    if(typeof(WebSocket) == 'undefined') {
        console.log("您的浏览器不支持WebSocket,请更换浏览器访问");
    } else {
        console.log("您的浏览器支持WebSocket");
        let socketUrl = "ws://120.53.102.235:8080/monitorFollowerCount/"+userAllInformationPara.id
        // let socketUrl = "ws://localhost:8080/monitorFollowerCount/"+userAllInformationPara.id 
        webSocket = new WebSocket(socketUrl)
        webSocket.onmessage = (res)=> {
            indiciesPara.followerCount = res.data
        }
        webSocket.onclose = ()=>{
            console.log("链接已关闭");
        }
    }
}




//方法
//插入，该方法应该在注册新用户时被调用
export const insertOrigin = async(insertOriginPara)=>{
    await insertOriginService(insertOriginPara)
}

//更新用户关注计数，该方法在关注或取消关注时应该被调用
export const updateFollowingCount = async(updateFollowingCountPara, indiciesPara)=>{
    await updateFollowingCountService(updateFollowingCountPara)
    indiciesPara.followingCount += updateFollowingCountPara.change
}

//更新用户粉丝计数，该方法在关注或取消关注时应该被调用
export const updateFollowerCount = async(updateFollowerCountPara, indiciesPara)=>{
    await updateFollowerCountService(updateFollowerCountPara)
    indiciesPara.followerCount += updateFollowerCountPara.change  
}
//查找关注和被关注者数量
export const selectIndicies = async(selectIndiciesPara, indiciesPara)=>{
    let result = await selectIndiciesService(selectIndiciesPara)
    if(result.code == 0) {
        indiciesPara.followerCount = result.data.followerCount
        indiciesPara.followingCount = result.data.followingCount
    }
}


//接口
//用户关注和粉丝数量接口
//插入原始数据
export const insertOriginService = (insertOriginPara)=>{
    return request.post("api/indicies/insertOrigin",insertOriginPara);
}
//更新 关注者计数
export const updateFollowerCountService = (updateFollowerPara)=>{
    return request.post("api/indicies/updateFollowerCount",updateFollowerPara);
}
//更新被关注者计数
export const updateFollowingCountService = (updateFollowingCountPara)=>{
    return request.post("api/indicies/updateFollowingCount",updateFollowingCountPara);
}

//查询Indicies数据
export const selectIndiciesService = (selectIndiciesPara)=>{
    return request.post("api/indicies/selectIndicies",selectIndiciesPara);
}

//监测followingCount(粉丝数量变化接口)
export const monitorFollowingCountService = (monitorFollowingCountPara)=>{
    return request.post("api/indicies/monitorFollowingCount",monitorFollowingCountPara);
}