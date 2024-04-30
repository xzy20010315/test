<!-- 用户和个人详细信息展示页 -->
<template>
    <div class="wrapper" v-show="itemInformation">
        <div v-show="status">
        <informationInput></informationInput>
        <informationShow></informationShow>
        <uploadAvatar></uploadAvatar>
        <div class="btn-area">
            <el-button type="success" class="btn" @click="changeInfo('inputArea')">修改资料</el-button>
            <el-button type="success" class="btn" @click="submit('showArea',changeInformationArgu)">保存修改</el-button>
            <el-button type="success" class="btn" @click="giveup('showArea',accountArgu)">放弃修改</el-button>
        </div>
        </div>  
        <div v-show="!status">
            <informationShow v-show="showArea"></informationShow>
        </div>     
    </div>
</template>


<!-- 
**************************************************
*****************脚本*****************************
**************************************************
 -->

<script lang="ts" setup>
//导入插件
import bus from '@/utils/bus'
import { computed, ref } from 'vue'
import {
    Iphone,
    Location,
    OfficeBuilding,
    Tickets,
    User,
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
//导入页面组件
import informationInput from './informationInput.vue';
    import informationShow from './informationShow.vue';
    import uploadAvatar from './uploadAvatar.vue';
//导入数据源
import { accountArgu, changeInformationArgu, userAllInformation, userAllInformationInput} from '@/data/user';
import { status } from '@/data/storage';
import { baseAvatarUrl } from "@/config/config";
//导入方法
import { changeInformation, userAllInformationGet } from '@/api/user';

// import { changeInformation, userAllInformationGet } from '@/api/user';
const itemInformation = ref(false)
const inputArea = ref(false)
const showArea = ref(true)
const upload = ref(false)
//隐藏展示页，显示修改页
const change = ()=>{
    showArea.value = false
    inputArea.value = true
}
//提交修改
const submit = async(tag:string, changeInformationPara)=>{
    //提交
    // 装配数据
    changeInformationPara.account = userAllInformationInput.value.account
    changeInformationPara.nickName = userAllInformationInput.value.nickName
    changeInformationPara.bornDay = userAllInformationInput.value.bornDay
    changeInformationPara.age = userAllInformationInput.value.age
    changeInformationPara.degree = userAllInformationInput.value.degree
    changeInformationPara.graduateUniversity = userAllInformationInput.value.graduateUniversity
    changeInformationPara.graduateDay = userAllInformationInput.value.graduateDay
    changeInformationPara.brief = userAllInformationInput.value.brief
    console.log(changeInformationPara);
    
    await changeInformation(changeInformationPara)
        bus.emit('infoChanMsg', tag)


}

//放弃修改
const giveup = async(tag, accountPara)=>{
    //获取原信息
    userAllInformationInput.value.nickName = userAllInformation.value.nickName
    userAllInformationInput.value.account = userAllInformation.value.account
    userAllInformationInput.value.bornDay = userAllInformation.value.bornDay
    userAllInformationInput.value.age = userAllInformation.value.age
    userAllInformationInput.value.degree = userAllInformation.value.degree
    userAllInformationInput.value.graduateUniversity = userAllInformation.value.graduateUniversity
    userAllInformationInput.value.graduateDay = userAllInformation.value.graduateDay
    userAllInformationInput.value.brief = userAllInformation.value.brief
    userAllInformationInput.value.avatarPicName = userAllInformation.value.avatarPicName
    userAllInformationInput.value.avatarUrl = baseAvatarUrl + userAllInformation.value.avatarPicName
    //隐藏修改页，显示展示页

        //查询成功
        bus.emit('infoChanMsg', tag)

}

const changeInfo = (tag)=>{
    bus.emit('infoChanMsg', tag)
}
//切换本组件内页面
// const handoff = (tag: string)=> {
//     switch (tag) {
//         case 'inputArea':
//             inputArea.value = true
//             showArea.value = false
//             upload.value = false
//             break
//         case 'showArea':
//             inputArea.value = false
//             showArea.value = true
//             upload.value = false
//             break
//         case 'upload':
//             inputArea.value = false
//             showArea.value = false
//             upload.value = true
//             break
//         default:
//     }
// }
/* ************************************************************************
************************************************************************
订阅事件控制显隐
************************************************************************
*/
bus.on('sendMsg', id => {
    if (id == "itemInformation") {
        itemInformation.value = true
    } else {
        itemInformation.value = false
    }
})
</script>

<!-- 
**************************************************
*****************样式*****************************
**************************************************
 -->
<style scoped>
.wrapper {
    width: 100%;
    height: 100%;
}

.cell-item {
    display: flex;
    align-items: center;
}

.informationArea {
    width: 100%;
    height: 80%;
}






.btn-area {
    margin-top: 40px;
    width: 50%;
    height: 5%;
}

.btn {
    font-size: 10px;
}


.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
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