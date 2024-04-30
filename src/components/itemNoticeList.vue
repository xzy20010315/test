<!-- 关注列表展示页组件 -->
<template ref="itemNoticeList" class="item">
  <div class="wrapper" v-show="itemNoticeList">
    <div v-show="status">
    <el-table :data="followingData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" stripe style="width: 100%"
       :style="{cursor: 'pointer'}">
      <el-table-column type="selection" prop="select" label="Select" width="40" />
      <el-table-column prop="id" label="id" width="40" />
      <el-table-column prop="nickName" label="nickName" width="100" />
      <el-table-column label="操作" width="400" >
        <template #default="scope">
          <el-row>
            <el-button type="primary" round @click.native.stop = "lookInfo(scope.row)">查看信息</el-button>
            <el-button type="primary" round @click.native.stop = "enterSpace(scope.row)">进入空间</el-button>
        </el-row>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="el-pag" v-model:current-page="currentPage" v-model:page-size="pageSize"
      :page-sizes="[5, 10, 15, 20]" :small="small" :disabled="disabled" :background="background"
      layout="total, sizes, prev, pager, next, jumper" :total="followingCount" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
    </div>

    <div v-show="!status">
      <el-button type="primary" >刷新</el-button>
    <el-table :data="followingDataDefault.slice((currentPage - 1) * pageSize, currentPage * pageSize)" stripe style="width: 100%"
       :style="{cursor: 'pointer'}">
      <el-table-column type="selection" prop="select" label="Select" width="40" />
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="nickName" label="nickName" width="180" />
      <el-table-column label="操作" width="180" >
        <template #default="scope">
          <el-row>
            <el-button type="primary" round @click.native.stop = "lookInfo(scope.row)">查看信息</el-button>
            <el-button type="primary" round @click.native.stop = "enterSpace(scope.row)">进入空间</el-button>
        </el-row>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="el-pag" v-model:current-page="currentPage" v-model:page-size="pageSize"
      :page-sizes="[5, 10, 15, 20]" :small="small" :disabled="disabled" :background="background"
      layout="total, sizes, prev, pager, next, jumper" :total="followingCountDefault" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
    </div>
    
  </div>
</template>
  
<script lang="ts" setup>
//导入插件
import { ref } from 'vue'
import bus from '@/utils/bus';
//导入页面组件
//导入数据源
import { followingData } from '@/data/user';
import { followingCount } from '@/data/userIndicies';
import { othersInformation } from '@/data/others';
import { baseAvatarUrl } from '@/config/config';
import { findAllArgu, blog, blogContentShowData } from '@/data/othersBlog';
import { status } from '@/data/storage';
//导入方法
import { blogsDataGet } from '@/api/blog';

// import { findBlog } from '@/api/others'
const itemNoticeList = ref(false)
const tableData = ref([])
const followingDataDefault = ref([])
const followingCountDefault = ref(0)
//查看关注人的信息
const lookInfo = (row)=>{
  //设置显示的数据源的值
  //填充数据
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
    status.value = true
    //隐藏本页面，显示其他用户的信息展示页
    bus.emit('sendMsg','othersInformationShow')
}
//进入关注人的空间
const enterSpace = async (row)=>{
  //1、获取该用户发布的博客数据
  othersInformation.value.id = row.id 
  let result = await blogsDataGet(findAllArgu.value, blog.value)
  //2、将获取的数据存入数据源
  if (result.code == 0) {
      //3、打开他人空间页面，展示文章
    bus.emit('sendMsg','othersSpace')
  //填充数据
  }
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
  console.log("关注："+followingData.value);
  
  if (id == "itemNoticeList") {
    itemNoticeList.value = true
  } else {
    itemNoticeList.value = false
  }
})
</script>


<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
</style>