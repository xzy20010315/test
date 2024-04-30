<!-- 头像上传组件 -->
<template>
  <div v-show="uploadAvatar">
    <el-upload
    class="avatar-uploader"
    action="api/user/changeAvatarPic"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
    :data="{account: userAllInformation.account}"
    :headers="{'Authorization':storage.token}"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
  </div>
   
</template>
<script setup lang="ts">
//导入插件
import bus from '@/utils/bus'
//导入页面组件
//导入数据源
//导入方法

import type { UploadProps } from 'element-plus'
import { ref } from 'vue'
import { userAllInformation } from '@/data/user'
import { ElMessage } from 'element-plus'
import { storage } from '@/data/storage';

const uploadAvatar = ref(false)
const imageUrl = ref()
const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
    alert(response.msg)
    userAllInformation.value.avatarPicName = response.data
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
    ElMessage.error('Avatar picture must be JPG or PNG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}

bus.on('infoChanMsg',(id)=>{
  if (id == 'uploadAvatar') {
    uploadAvatar.value = true
  } else {
    uploadAvatar.value = false
  }
})
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>