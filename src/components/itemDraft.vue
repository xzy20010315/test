<!-- 用户草稿展示页面组件 -->
<template ref="itemDraft" class="item">
  <div class="wrapper" v-show="itemDraft">
    <div v-show="status">
      <el-table :data="draft.draftsData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" stripe style="width: 100%"
       :style="{cursor: 'pointer'}">
      <el-table-column type="index" :index="indexMethod" width="40" />
      <el-table-column type="selection" prop="select" label="Select" width="40" />
      <el-table-column prop="draftTitle" label="draftTitle" width="180" />
      <el-table-column prop="draftLabel" label="draftLabel" width="180" />
      <el-table-column prop="authorName" label="AuthorName" width="180" />
      <el-table-column prop="authorId" label="AuthorId" width="180" />
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column label="操作" width="180" >
        <template #default="scope">
          <el-row>
          <el-button type="danger" :icon="Edit" circle  @click.native.stop="edit(scope.row, draft)"/>
          <el-button type="danger" :icon="Delete" circle @click.native.stop="deleteDraft(scope.row, idArgu)"/>
        </el-row>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="el-pag" v-model:current-page="currentPage" v-model:page-size="pageSize"
      :page-sizes="[5, 10, 15, 20]" :small="small" :disabled="disabled" :background="background"
      layout="total, sizes, prev, pager, next, jumper" :total="draft.draftsCount" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
    </div>
    
    <div v-show="!status">
      <el-table :data="draftsDataDefault.slice((currentPage - 1) * pageSize, currentPage * pageSize)" stripe style="width: 100%"
       :style="{cursor: 'pointer'}">
      <el-table-column type="index" :index="indexMethod" width="40" />
      <el-table-column type="selection" prop="select" label="Select" width="40" />
      <el-table-column prop="draftTitle" label="draftTitle" width="180" />
      <el-table-column prop="draftLabel" label="draftLabel" width="180" />
      <el-table-column prop="authorName" label="AuthorName" width="180" />
      <el-table-column prop="authorId" label="AuthorId" width="180" />
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column label="操作" width="180" >
        <template #default="scope">
          <el-row>
          <el-button type="danger" :icon="Edit" circle  @click.native.stop="edit(scope.row, draft)"/>
          <el-button type="danger" :icon="Delete" circle @click.native.stop="deleteDraft(scope.row, idArgu)"/>
        </el-row>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="el-pag" v-model:current-page="currentPage" v-model:page-size="pageSize"
      :page-sizes="[5, 10, 15, 20]" :small="small" :disabled="disabled" :background="background"
      layout="total, sizes, prev, pager, next, jumper" :total="draftsCountDefault" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script lang="ts" setup>
//导入插件
import bus from '@/utils/bus'
import { ref } from 'vue'
import {
  Delete,
  Edit,
} from '@element-plus/icons-vue'
//导入页面组件
//导入数据源
import { draft, idArgu } from '@/data/draft'
import { status } from '@/data/storage'
//导入方法
import { edit, deleteDraft } from '../api/draft'

const itemDraft = ref(false)
const draftsDataDefault = ref([])
const draftsCountDefault =  ref(0)

const indexMethod = (index: number) => {
  // alert(index)
  return index * 1
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
  if (id == "itemDraft") {
    itemDraft.value = true
  } else {
    itemDraft.value = false
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