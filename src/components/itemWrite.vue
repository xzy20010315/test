<!-- 用户编辑文章组件 -->
<template>
  <div class="wrapper" v-show="itemWrite">
    标题：<el-input v-model="article.title" style="width: 15%" placeholder="标题" />
    标签：<el-input v-model="article.label" style="width: 15%" placeholder="标签" />
    <el-button type="primary" @click="save(idArgu, updateDraftArgu, saveDraftArgu, draft)">保存到草稿</el-button>
    <el-button type="primary" @click="publish(saveBlogArgu, blog)">发布</el-button>
    <v-md-editor v-model="article.text" width="100%" height="90%"  @save="publish(saveBlogArgu, blog)" ></v-md-editor>
  </div>   
</template>

<script lang="ts" setup>
//导入插件
import bus from '@/utils/bus';
import { ref } from 'vue';
//导入页面组件
//导入数据源
import { article } from '@/data/article';
import { idArgu, saveBlogArgu, blog } from '@/data/blog';
import { updateDraftArgu, saveDraftArgu, draft } from '@/data/draft';
//导入方法
import { publish, save } from "../api/write"

const itemWrite = ref(false)
/* ************************************************************************
************************************************************************
订阅事件控制显隐
************************************************************************
*/
bus.on('sendMsg',id =>{
    if(id == "itemWrite") {
        itemWrite.value = true
    } else {
        itemWrite.value = false
    }
})
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
</style>