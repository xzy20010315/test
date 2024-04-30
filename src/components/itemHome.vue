<!-- 用户默认页面展示组件 -->
<template>
    <!-- 首页推荐 -->
    <div class="wrapper" v-show="itemHome">
        <div class="title"><span style="font-size: large;">推荐博主</span></div>

        <div id="content1" class="content">
            <div v-for="blogger in rmdBlogger" class="content-block">
                <el-avatar :size="50" :src="baseAvatarUrl+blogger.avatarPicName" />
                <span>{{ blogger.nickName }}</span>
                <span>{{ blogger.brief }}</span>
            </div>
        </div>

        <div class="title"><span style="font-size: large;">推荐文章</span></div>

        <div id="content2" class="content">
            <div v-for="blog in rmdBlog " class="content-block">
                <span class="content">
                    {{ blog.blogTitle }}
                </span>
                <span class="content">
                    {{ blog.blogContent }}
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
//导入插件
import bus from '@/utils/bus'
import { ref } from 'vue';
//导入页面组件
//导入数据源
import { rmdBlog, rmdBlogger} from '@/data/user';
import { baseAvatarUrl } from '@/config/config';
import { hobby, changeHobbyArgu } from '@/data/hobby';

//导入方法
import { changeHobby } from '@/api/hobby';

const itemHome = ref(true)
const bloggers = ['1', '2', '3', '4', '5']
const articles = ['1', '2', '3', '4', '5']
const introduce = "deDevilcod"
const url_user = '../src/assets/user_photo_simple.png'
const nickName = 'codeDevil'
const articleName = '前端学习'
const brief = 'deDevilcod'

//收集爱好信息
bus.on('hobbyMsg',async(content)=>{
    hobby.value.content = content
    hobby.value.date = new Date()
    await changeHobby(changeHobbyArgu.value)
})


/* ************************************************************************
************************************************************************
订阅事件控制显隐
************************************************************************
*/
bus.on('sendMsg', id => {
    if (id == "itemHome") {
        itemHome.value = true
    } else {
        itemHome.value = false
    }
})


</script>

<style scoped>
.wrapper {
    width: 100%;
    height: 100%;
}
.title {
    width: 10%;
    height: 10%;
    padding: auto;
    /* 设置宽高包含padding */
    box-sizing: border-box;
}

.content {
    width: 100%;
    height: 40%;
    height: 30%;
    min-width: 100%;
    min-height: 40%;
    max-width: 100%;
    max-height: 40%;
    padding: auto;
    box-sizing: border-box;
}

.content-block {
    width: 20%;
    height: 100%;
    max-width: 20%;
    max-height: 100%;
    min-width: 20%;
    min-height: 100%;
    display: inline-block;
    padding: auto;
    box-sizing: border-box;
    overflow: hidden;
}

.tuijian-img {
    width: 20%;
    height: 30%;
    float: left;
}
</style>