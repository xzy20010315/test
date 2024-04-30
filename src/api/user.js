//导入插件
import request from "@/request";
import bus from "@/utils/bus";
import { ElMessage } from 'element-plus'
//导入页面组件
//导入数据源
import { baseAvatarUrl } from "@/config/config";
import { userAllInformation, userAllInformationInput } from "@/data/user";
import { storage } from "@/data/storage";
import { article } from "@/data/article";
import { findAllArgu } from "@/data/blog";
import { getInformationArgu } from "@/data/user";
//导入方法
import { draftsDataGet } from "../api/draft"
import { blogsDataGet } from "../api/blog"



//方法
//注册
export const register = async(registerPara)=>{
    //判断两次输入密码是否一致
    if(userAllInformation.value.password != userAllInformation.value.passwordVerify) {
        //不一致
        ElMessage({
            message: '两次密码不一致,请检查.',
            type: 'warning',
          })
    } else {
        //一致
        let result = await registerService(registerPara)
        if(result.code == 0) {
            ElMessage({
                message: '注册成功.',
                type: 'success',
              })
            bus.emit('lrMsg','loginPage')
            bus.emit('registerSuccessMsg')
        }
    }
}
//登录
export const login = async(loginPara)=>{
    let result = await loginService(loginPara)
    if (result.code === 0) {
        //登录成功
        //将token存入localStorage
        localStorage.setItem("status", true)
        storage.value.status = true
        localStorage.setItem("token", result.data)
        storage.value.token = result.data
        //将account存入localStorage
        localStorage.setItem("account", loginPara.account)
        storage.value.account = loginPara.account
        //更新页面头部的用户头像和文字
        //弹出登录成功提示
        ElMessage({
            message: result.msg,
            type: 'success',
        })
        //关闭登录页面,更新页面全体数据展示
        bus.emit('loginSuccessMsg')
    } else {
        //登录失败
        ElMessage.error(result.msg)
    }
}

//自动登录
export const autoLogin = async(autoLoginPara)=>{
    let result = await autoLoginService(autoLoginPara)
    if (result.code === 0) {
        //登录成功
        //将token存入localStorage
        // alert(result.data)
        localStorage.setItem("status", true)
        storage.value.status = true
        localStorage.setItem("token", result.data)
        storage.value.token = result.data
        //下面这行自动登录中不用
        // localStorage.setItem("account", loginPara.account)
        storage.value.account = localStorage.getItem("account")
        console.log(storage.value.account);
        console.log(userAllInformation.value.account);
        // authorId.value = localStorage.getItem("id")
        //更换页面头部的用户头像和文字
        //更新页面全体数据展示
        //弹出登录成功提示
        ElMessage({
            message: result.msg,
            type: 'success',
        })
        //关闭登录页面,更新页面全体数据展示
        bus.emit('loginSuccessMsg')
    } else {
        //登录失败
        ElMessage.error(result.msg)
    }
}
//获取用户除密码外所有信息方法
export const userAllInformationGet = async(accountPara)=> {
    if (accountPara===null) {

    }   else {
        await request.post("api/user/getInformation",accountPara).then(
            (result)=> {
                console.log(result.data.nickName);
                userAllInformation.value.id = result.data.id
                userAllInformation.value.nickName = result.data.nickName
                userAllInformation.value.account = result.data.account
                userAllInformation.value.bornDay = result.data.bornDay
                userAllInformation.value.age = result.data.age
                userAllInformation.value.degree = result.data.degree
                userAllInformation.value.graduateUniversity = result.data.graduateUniversity
                userAllInformation.value.graduateDay = result.data.graduateDay
                userAllInformation.value.brief =result.data.brief
                userAllInformation.value.avatarPicName = result.data.avatarPicName
                userAllInformation.value.avatarUrl = baseAvatarUrl + userAllInformation.value.avatarPicName
                localStorage.setItem("id",result.data.id)
                localStorage.setItem("nickName",result.data.nickName)
                //设置authorId,authorName
                article.value.authorId = result.data.id
                article.value.authorName = result.data.nickName

                //装配userinfoInput数据
                // userAllInformationInput.value.nickName = result.data.nickName
                // userAllInformationInput.value.account = result.data.account
                // userAllInformationInput.value.bornDay = result.data.bornDay
                // userAllInformationInput.value.age = result.data.age
                // userAllInformationInput.value.degree = result.data.degree
                // userAllInformationInput.value.graduateUniversity = result.data.graduateUniversity
                // userAllInformationInput.value.graduateDay = result.data.graduateDay
                // userAllInformationInput.value.brief =result.data.brief
                // userAllInformationInput.value.avatarPicName = result.data.avatarPicName
                // userAllInformationInput.value.avatarUrl = baseAvatarUrl + userAllInformation.value.avatarPicName
                userAllInformationInput.value.nickName = userAllInformation.value.nickName
                userAllInformationInput.value.account = userAllInformation.value.account
                userAllInformationInput.value.bornDay = userAllInformation.value.bornDay
                userAllInformationInput.value.age = userAllInformation.value.age
                userAllInformationInput.value.degree = userAllInformation.value.degree
                userAllInformationInput.value.graduateUniversity = userAllInformation.value.graduateUniversity
                userAllInformationInput.value.graduateDay = userAllInformation.value.graduateDay
                userAllInformationInput.value.brief = userAllInformation.value.brief
                userAllInformationInput.value.avatarPicName = userAllInformation.value.avatarPicName
                userAllInformationInput.value.avatarUrl = baseAvatarUrl + userAllInformation.value.avatarPicName
            }).catch((error)=> {
                
            })

    }
}

//更改用户资料
export const changeInformation = async(changeInformationPara)=>{
    let result = await changeInformationService(changeInformationPara)
    if(result.code == 0) {
        ElMessage({
            message: result.msg,
            type: 'success',
          })
    } else {
        ElMessage.error(result.msg)
    }
}



//接口
//用户注册接口
export const registerService =  (registerPara)=>{
    return request.post("api/user/register",registerPara);
}

//用户登录接口
export const loginService = (loginPara)=>{
    return request.post("api/user/login",loginPara);
}

//用户更改密码接口
export const changePasswordService = (changePasswordPara)=>{
    return request.post("api/user/changePassword",changePasswordPara);
}

//用户更改头像接口
export const changeAvatarPicService = (changeAvatarPicPara)=>{
    return request.post("api/user/changeAvatarPic",changeAvatarPicPara);
}

//用户更改信息接口
export const changeInformationService = (changeInformationPara)=>{
    return request.post("api/user/changeInformation",changeInformationPara);
}

//用户获取资料接口
export const getInformationService = (getInformationPara)=>{
    return request.post("api/user/getInformation",getInformationPara);
}

//搜索博主接口
export const findBloggerService = (findBloggerPara)=>{
    return request.post("api/user/findBlogger",findBloggerPara);
}
//自动登录接口
export const autoLoginService = (autoLoginPara)=>{
    return request.post("api/user/autoLogin",autoLoginPara);
}