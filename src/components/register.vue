<!-- 注册组件 -->
<template>
    <div id="register" class="view" v-show="registerPage">
        <div style="padding-top: 20%;padding-left: 20%;"><span style="color: beige;">输入昵称：</span><el-input
                v-model="userAllInformation.nickName" style="width: 240px" placeholder="Pick a date" /></div>
        <div style="padding-top: 5%;padding-left: 20%;"><span style="color: beige;">输入账号：</span><el-input v-model="userAllInformation.account"
                style="width: 240px" placeholder="Type something" /></div>
        <div style="padding-top: 5%;padding-left: 20%;"><span style="color: beige;">输入密码：</span><el-input
                v-model="userAllInformation.password" style="width: 240px" placeholder="Type something" /></div>
        <div style="padding-top: 5%;padding-left: 20%;"><span style="color: beige;">确认密码：</span><el-input
                v-model="userAllInformation.passwordVerify" style="width: 240px" placeholder="Type something" /></div>
        <div style="padding-top: 5%;padding-left: 40%;"><el-button type="primary" @click="register(registerArgu)">确认注册</el-button></div>
    </div>
</template>

<script setup lang="ts">
//导入插件
import bus from '@/utils/bus'
import { ref } from 'vue'
//导入页面组件
//导入数据源
import { userAllInformation, registerArgu } from '@/data/user'
//导入方法
import { register } from '@/api/user'

const registerPage = ref(false)

/* ************************************************************************
************************************************************************
订阅事件控制显隐
************************************************************************
*/
bus.on('lrMsg',id =>{
    if(id == "registerPage") {
        registerPage.value = true
    } else {
        registerPage.value = false
    }
})
</script>



<style scoped>
.view {
    border: solid;
    border-color: beige;
    border-radius: 5%;
    width: 600px;
    height: 600px;
}
</style>