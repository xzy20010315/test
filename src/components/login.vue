<!-- 登录组件 -->
<template>
    <div id="login" class="view" v-show="loginPage">
        <div style="padding-top: 20%;padding-left: 20%;"><span style="color: beige;">输入账号：</span><el-input
                v-model="userAllInformation.account" style="width: 240px" placeholder="Pick a date" /></div>
        <div style="padding-top: 5%;padding-left: 20%;"><span style="color: beige;">输入密码：</span><el-input
                v-model="userAllInformation.password" style="width: 240px" placeholder="Type something" /></div>
        <div style="padding-top: 5%;padding-left: 40%;"><el-button type="primary" @click="login(loginArgu)">登录</el-button><el-button
                type="primary" @click="goRegister()">注册</el-button></div>
    </div>
</template>

<script setup lang="ts">
//导入插件
import { ref } from 'vue'
import bus from '@/utils/bus'
//导入页面组件
//导入数据源
import { userAllInformation, loginArgu, getInformationArgu, followingData, rmdBlog, rmdBlogger } from '@/data/user';
import { findAllArgu, blog } from '@/data/blog'
import { draft } from '@/data/draft';
import { findAllFollowingArgu } from '@/data/userFollower';
import { indicies, selectIndiciesArgu } from '@/data/userIndicies';
import { follower } from '@/data/userFollower';
//导入方法
import { login, userAllInformationGet } from '@/api/user';
import { draftsDataGet } from '@/api/draft';
import { blogsDataGet } from '@/api/blog';
import { findAllFollowing } from '@/api/follower';
import { selectIndicies } from '@/api/indicies';
import { initWebSocket } from '@/api/indicies';
import { initWebSocketRmd, webSocketRmd } from '@/api/hobby';



//v-show绑定的属性
const loginPage = ref(true)

//去注册页面
function goRegister() {
    loginPage.value = false
    bus.emit('lrMsg', "registerPage")
}


bus.on('loginSuccessMsg',async ()=>{
    await userAllInformationGet(getInformationArgu.value)
    await draftsDataGet(findAllArgu.value, draft.value)
    await blogsDataGet(findAllArgu.value, blog.value)
    follower.value.status = true
    // await findAllFollowing(findAllFollowingArgu.value, userAllInformation.value)
    await findAllFollowing(findAllFollowingArgu.value, followingData)   
    await selectIndicies(selectIndiciesArgu.value, indicies.value)
    initWebSocket(indicies.value, userAllInformation.value)
    initWebSocketRmd(rmdBlog, rmdBlogger, userAllInformation.value)
    // if(webSocketRmd.readyStatus === 1) {
    //     webSocketRmd.send("请求推荐")
    // } else {

    // }
    

})
/* ************************************************************************
************************************************************************
订阅事件控制显隐
************************************************************************
*/
bus.on('lrMsg', id => {
    if (id == "loginPage") {
        loginPage.value = true
    } else {
        loginPage.value = false
    }
})

</script>

<style>
.view {
    border: solid;
    border-color: beige;
    border-radius: 5%;
    width: 600px;
    height: 600px;
}
</style>