<!-- 用户文章数据的导入导出 -->
<template>
  <div class="wrapper" v-show="itemImportAndExport">
    <el-button type="primary" class="btn">导入</el-button>
    <el-button type="success" class="btn">导出</el-button>
  </div>
</template>

<script lang="ts" setup>
//导入插件
import { ref } from 'vue'
import bus from '@/utils/bus';
//导入页面组件
//导入数据源
//导入方法


const itemImportAndExport = ref(false)


/* ************************************************************************
************************************************************************
订阅事件控制显隐
************************************************************************
*/
bus.on('sendMsg', id => {
  if (id == "itemImportAndExport") {
    itemImportAndExport.value = true
  } else {
    itemImportAndExport.value = false
  }
})
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}

.btn {
  width: 40%;
  height: 40%;
}
</style>