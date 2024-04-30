<!-- 侧边导航组件 -->

<template>
    <el-col :span="16">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-menu-item index="1" @click="showContent('itemHome')">
                <el-icon>
                    <House />
                </el-icon>
                <span>首页推荐</span>
            </el-menu-item>
            <el-menu-item index="2" @click="showContent('itemWrite')">
                <el-icon>
                    <Document />
                </el-icon>
                <span>写文章</span>
            </el-menu-item>
            <el-menu-item index="3" @click="showContent('itemDraft')">
                <el-icon>
                    <Files />
                </el-icon>
                <span>草稿箱</span>
            </el-menu-item>
            <el-menu-item index="4" @click="showContent('itemSpace')">
                <el-icon>
                    <Reading />
                </el-icon>
                <span>我的空间</span>
            </el-menu-item>
            <el-menu-item index="5" @click="showContent('itemNoticeList')">
                <el-icon>
                    <ChatRound />
                </el-icon>
                <span>关注列表</span>
            </el-menu-item>
            <el-menu-item index="6" @click="showContent('itemInformation')">
                <el-icon>
                    <User />
                </el-icon>
                <span>个人信息</span>
            </el-menu-item>

            <el-menu-item index="6" @click="showContent('itemImportAndExport')">
                <el-icon>
                    <Coin />
                </el-icon>
                <span>导入和导出</span>
            </el-menu-item>
        </el-menu>
    </el-col>
</template>

<script lang="ts" setup>
//导入插件
import bus from '@/utils/bus'
//导入页面组件
//导入数据源
//导入方法


const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
// 声明变量的同时指明类型，解决变量类型不一致的问题
// var recorder: String = "1"
// const showContent = (index: String) => {
//   if (index == recorder) {
//   } else {
//     document.getElementById("item" + recorder).style.display = "none"
//     document.getElementById("item" + index).style.display = "block"
//     recorder = index
//     // this.style.display = "hidden" 箭头函数没有独立的 this、arguments 和 super 绑定 (en-US)，并且不可被用作方法。
//     //  document.getElementById("item1").style.display="flex"
//   }
// }

function showContent(id:string) {
    bus.emit('sendMsg', id)
}

</script>

<style>
    .el-col, .el-menu {
        height: 100%;
        margin-left: 1%;
    }
    .el-menu-item {
        height: 15%;
    }
</style>