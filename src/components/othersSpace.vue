<!-- 其他用户文章数据展示页面组件 -->
<template>
    <div class="wrapper" v-show="othersSpace">
      <el-table :data="blog.blogsData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" stripe style="width: 100%"
        @row-click="showBlog">
        <el-table-column type="index" :index="indexMethod" width="40" />
        <el-table-column type="selection" prop="select" label="Select" width="40" />
        <el-table-column prop="blogTitle" label="BlogTitle" width="180" />
        <el-table-column prop="blogLabel" label="BlogLabel" width="180" />
        <el-table-column prop="authorName" label="AuthorName" width="180" />
        <el-table-column prop="authorId" label="AuthorId" width="180" />
        <el-table-column prop="date" label="Date" width="180" />
      </el-table>
      <el-pagination class="el-pag" v-model:current-page="currentPage" v-model:page-size="pageSize"
        :page-sizes="[5, 10, 15, 20]" :small="small" :disabled="disabled" :background="background"
        layout="total, sizes, prev, pager, next, jumper" :total="blog.blogsCount" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>
  </template>
    
  <script lang="ts" setup>
  //导入插件
import bus from '@/utils/bus'
import { ref } from 'vue'
//导入页面组件
//导入数据源
import { blog } from '@/data/othersBlog'
import { blogContentShowData } from '@/data/othersBlog'
//导入方法

  const othersSpace = ref(false)
  
  const indexMethod = (index: number) => {
    // alert(index)
    return index * 2
  }

  const showBlog = (row, event, column) => {
    blogContentShowData.value = row.blogContent
    bus.emit('hobbyMsg',row.blogTitle)
    bus.emit('hobbyMsg',row.blogLabel)
    bus.emit('sendMsg',"othersBlogContentShow")
  }
  
  
  /* ************************************************************************
  ************************************************************************
  分页表的相关变量和方法
  ************************************************************************
  */
  const currentPage = ref(1)
  const pageSize = ref(5)
  const small = ref(false)
  const background = ref(false)
  const disabled = ref(false)
  const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
  }
  const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
  }
  
  
  /* ************************************************************************
  ************************************************************************
  订阅事件控制显隐
  ************************************************************************
  */
  bus.on('sendMsg', id => {
    if (id == "othersSpace") {
      othersSpace.value = true
    } else {
      othersSpace.value = false
    }
  })
  
  </script>
  
  <style scoped>
  .wrapper {
    width: 100%;
    height: 100%;
  }
  .el-pag {
    margin-top: 20px;
    justify-content: flex-end;
  }
  </style>