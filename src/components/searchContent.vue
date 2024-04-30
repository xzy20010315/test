<!-- 搜索结果展示页面组件 -->
<template>
    <div v-show="searchContent" id="searchContent">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="User" name="first">
                <el-table :data="mySearch.usersData" :table-layout="tableLayout" :show-header="false" :style="{ cursor: 'pointer' }" @row-click="showIinfo">
                    <el-table-column prop="nickName" label="NickName" />             
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="Blog" name="Blog">
                <el-table :data="mySearch.blogsData" :table-layout="tableLayout" :show-header="false" :style="{ cursor: 'pointer' }" @row-click="showBlog">
                    <el-table-column prop="blogTitle" label="BlogTitle" />
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts" setup>
//导入插件
import bus from '@/utils/bus'
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
//导入页面组件
//导入数据源
import { mySearch  } from '@/data/search';
import { othersInformation} from '@/data/others';
import { blogContentShowData } from '@/data/othersBlog'
import { baseAvatarUrl } from '@/config/config';
import { follower, isFollowArgu } from '@/data/userFollower';
//导入方法
import { isFollow } from '@/api/follower';


//显示信息
const showIinfo = async(row)=>{
    //填充该用户详细数据
    othersInformation.value.id =  row.id
    othersInformation.value.nickName =  row.nickName
    othersInformation.value.account =  row.account
    othersInformation.value.bornDay =  row.bornDay
    othersInformation.value.age =  row.age
    othersInformation.value.degree =  row.degree
    othersInformation.value.graduateUniversity =  row.graduateUniversity
    othersInformation.value.graduateDay =  row.graduateDay
    othersInformation.value.brief =  row.brief
    othersInformation.value.avatarPicName =  row.avatarPicName
    othersInformation.value.avatarUrl =  baseAvatarUrl + row.avatarPicName
    //填充关注关系
    await isFollow(isFollowArgu.value, follower.value)
    //隐藏本页面，显示其他用户的信息展示页
    bus.emit('sendMsg','othersInformationShow')
}
//显示文章
const showBlog = (row)=>{
    // 填充信息
    blogContentShowData.value = row.blogContent
    bus.emit('hobbyMsg',row.blogTitle)
    bus.emit('hobbyMsg',row.blogLabel)
    //隐藏本页面，显示其他文章内容展示页
    bus.emit('sendMsg','othersBlogContentShow')
}
const activeName = ref('first')
//控制显隐的变量
const searchContent = ref(false)

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}

const tableLayout = ref('fixed')


//订阅事件,控制显隐
bus.on('sendMsg', id => {
    if (id == 'searchContent') {
        searchContent.value = true
    } else {
        searchContent.value = false
    }
})

</script>
<style>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>