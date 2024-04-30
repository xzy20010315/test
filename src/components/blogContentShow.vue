<!-- 文章内容显示页面 -->
<template>
    <v-md-preview :text="blogContentShowData" v-show="blogContentShow">
    </v-md-preview>
</template>

<script setup lang="ts">
//导入插件
import bus from '@/utils/bus';
import { ref } from 'vue';
//导入页面组件
//导入数据源
import { blogContentShowData } from '@/data/blog';
//导入方法


//v-show
const blogContentShow = ref(false)


bus.on('sendMsg', id => {
    if (id == "blogContentShow") {
        blogContentShow.value = true
    } else {
        blogContentShow.value = false
    }
})
</script>