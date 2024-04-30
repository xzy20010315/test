//导入插件
import request from "@/request";
import { async } from "@kangc/v-md-editor";
import { ElMessage } from "element-plus";
//导入页面组件
//导入数据源
//导入方法

//初始化WebSocket用来监听推荐
export var webSocketRmd = null
export const initWebSocketRmd = (rmdBlog, rmdBlogger, userAllInformationPara)=>{
    if(typeof(WebSocket) == 'undefined') {
        console.log("您的浏览器不支持WebSocket,请更换浏览器访问");
    } else {
        console.log("您的浏览器支持WebSocket");
        let socketUrl = "ws://120.53.102.235:8080/rmd/"+userAllInformationPara.id 
        // let socketUrl = "ws://localhost:8080/rmd/"+userAllInformationPara.id
        webSocketRmd = new WebSocket(socketUrl)

        webSocketRmd.onmessage = (res)=> {
            let result = JSON.parse(res.data)
            // console.log(result.rmdBlogger);
            // console.log(result.rmdBlog);
            rmdBlogger.value = result.rmdBlogger
            rmdBlog.value = result.rmdBlog
        }
        webSocketRmd.onclose = ()=>{
            console.log("链接已关闭");
        }
        webSocketRmd.onopen = ()=>{
            //建立成功后回调
            webSocketRmd.send("请求推荐")
        }
    }
}

//方法
//改变hobby记录
export const changeHobby = async(changeHobbyPara)=>{
    let result = await changeService(changeHobbyPara)  
}

//接口
export const changeService = (changeHobbyPara)=>{
    return request.post("api/hobby/change",changeHobbyPara);
}