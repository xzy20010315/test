<!-- 其他用户的文章内容展示页面组件 -->
<template>
    <v-md-preview :text="blogContentShowData" v-show="othersBlogContentShow">
    </v-md-preview>
</template>

<script setup lang="ts">
//导入插件
import bus from '@/utils/bus';
import { ref } from 'vue';
//导入页面组件
//导入数据源
import { blogContentShowData } from '@/data/othersBlog'
//导入方法

const othersBlogContentShow = ref(false)


bus.on('sendMsg', id => {
    if (id == "othersBlogContentShow") {
        othersBlogContentShow.value = true
    } else {
        othersBlogContentShow.value = false
    }
})
</script>