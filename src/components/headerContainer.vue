<!-- 网页头部组件 -->
<template>
    <div v-for="fit in fits" :key="fit" class="block">
        <el-image :src="url" :fit="fit" />
    </div>
    <div id="div-input">
        <el-input v-model="mySearch.toFindData" placeholder="输入内容" @keyup.enter="search('searchContent')"/>
        <el-button :icon="Search" circle @click="search('searchContent')"/>
    </div>
    <div id="user-icon" @click="showToast()">
        <div>
          <el-popover placement="top-start" :width="100" trigger="hover">
      <template #reference>
        <div v-show="status">
          <el-avatar :size="50" :src="userAllInformation.avatarUrl" />
            <!-- <el-image :src="userAllInformation.avatarUrl" :fit="'fill'" /> -->
            <span class="explanation">{{ userAllInformation.nickName }}</span>
        </div>
        
      </template>
      <div>
        粉丝：{{indicies.followerCount}}
        关注：{{indicies.followingCount}}
      </div>
      <el-button type="success"  @click="quit">退出登录</el-button>
    </el-popover>
    <div v-show="!status">
            <el-image :src="userAllInformationDefault.avatarUrl" :fit="'fill'" />
            <span class="explanation">{{ userAllInformationDefault.nickName }}</span>
        </div>   
        </div>
    </div>
</template>

<script lang="ts" setup>
//导入插件
import bus from '@/utils/bus';
import { ref } from 'vue';
import {
  Search
} from '@element-plus/icons-vue'

//导入页面组件
//导入数据源
import { userAllInformation, userAllInformationDefault } from '@/data/user';
import { mySearch } from '@/data/search'
import { toFindBloggerRequestDataArgu, toFindBlogRequestDataArgu } from '@/data/search'
import { storage } from '@/data/storage';
import { status } from '@/data/storage';
import { indicies } from '@/data/userIndicies';
import { hobby, changeHobbyArgu } from '@/data/hobby';
//导入方法
import { findBlog, findBlogger} from '@/api/search';
import { changeHobby } from '@/api/hobby';



const fits = ['fill']
const url = '/logo2.png' //如果加载不到图片，一定是路径有问题，网址路径一般没问题，绝对路径加载不到，相对路径写错了，也加载不到
// const url_avatar = '../src/assets/user_photo_simple.png'


const input = ref('')



const showToast = ()=>{
  if(storage.value.status) {
    console.log(storage.value.status);   
    //已登录
  } else {
    //未登录，弹出登录页
    bus.emit('toastMsg')
  }
}

const search = async(id: string)=>{
    await findBlogger(toFindBloggerRequestDataArgu.value, mySearch.value)
    await findBlog(toFindBlogRequestDataArgu.value, mySearch.value)
    bus.emit('hobbyMsg',mySearch.value.toFindData)
    bus.emit('sendMsg', id)
}

const quit = ()=>{
  storage.value.status = false
  localStorage.setItem("id",'')
  localStorage.setItem("status", '0')
  localStorage.setItem("nickName",'')
  localStorage.setItem("account",'')
  localStorage.setItem("token",'')
}

</script>


<style>

#div-input {
  width: 30%;
  height: 50%;
  box-sizing: border-box;
  /* margin: 20%; */
  /* margin-top: 10%;
  margin-bottom: 10%; */
  /* margin-right: 10%; */
  margin-left: 35%;
  margin-right: 10%;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* background-color: blueviolet; */

}

.block {
  /* padding: 30px 0; */
  text-align: left;
  border-right: solid 1px var(--el-border-color);
  display: inline-flex;
  width: 20%;
  height: 60%;
  line-height: 100%;
  box-sizing: border-box;
  vertical-align: top;
}

#user-icon {
  display: inline-flex;
  width: 5%;
  height: 50%;
  align-items: center;
}
</style>