<!-- 用户个人信息修改页面组件 -->
<template>
    <div id="inputArea" class="informationArea" v-show="inputArea">


            <el-avatar class="avatar" :size="50" :src="userAllInformation.avatarUrl" />
            <el-button type="success" class="btn" @click="changeAvatar('uploadAvatar')">更改头像</el-button> 
        <el-descriptions class="margin-top" title="" :column="3" :size="size" border>

            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                        <el-icon :style="iconStyle">
                            <user />
                        </el-icon>
                        昵称：
                    </div>
                </template>
                <el-input style="" v-model="userAllInformationInput.nickName" placeholder="userAllInformation.nickName" />
            </el-descriptions-item>

            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                        <el-icon :style="iconStyle">
                            <user />
                        </el-icon>
                        账号：
                    </div>
                </template>
                <el-input style="" v-model="userAllInformationInput.account" placeholder="userAllInformation.account" />
            </el-descriptions-item>

            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                        <el-icon :style="iconStyle">
                            <user />
                        </el-icon>
                        出生日期：
                    </div>
                </template>
                <el-date-picker v-model="userAllInformationInput.bornDay" type="date"
                    placeholder="userAllInformation.bornDay" :size="size" />
            </el-descriptions-item>

            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                        <el-icon :style="iconStyle">
                            <user />
                        </el-icon>
                        年龄：
                    </div>
                </template>
                <el-input style="" v-model="userAllInformationInput.age" placeholder="userAllInformation.age" />
            </el-descriptions-item>

            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                        <el-icon :style="iconStyle">
                            <user />
                        </el-icon>
                        学历：
                    </div>
                </template>
                <el-input style="" v-model="userAllInformationInput.degree" placeholder="userAllInformation.degree" />
            </el-descriptions-item>

            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                        <el-icon :style="iconStyle">
                            <user />
                        </el-icon>
                        毕业院校：
                    </div>
                </template>
                <el-input style="" v-model="userAllInformationInput.graduateUniversity"
                    placeholder="userAllInformation.graduateUniversity" />
            </el-descriptions-item>

            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                        <el-icon :style="iconStyle">
                            <user />
                        </el-icon>
                        毕业日期：
                    </div>
                </template>
                <el-date-picker v-model="userAllInformationInput.graduateDay" type="date"
                    placeholder="userAllInformation.graduateDay" :size="size" />
            </el-descriptions-item>

            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                        <el-icon :style="iconStyle">
                            <user />
                        </el-icon>
                        个人简介：
                    </div>
                </template>
                <el-input style="" v-model="userAllInformationInput.brief" placeholder="userAllInformation.brief" />
            </el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script setup lang="ts">
//导入插件
import bus from '@/utils/bus'
import { computed,ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
//导入页面组件
//导入数据源
import { userAllInformation, userAllInformationInput } from '@/data/user'
//导入方法


const inputArea = ref(false)
//对日期选择器的设置
const size = ref<'default' | 'large' | 'small'>('default')
const value1 = ref('')

//禁用掉的日期
const disabledDate = (time: Date) => {
    return time.getTime() > Date.now()
}
const iconStyle = computed(() => {
    const marginMap = {
        large: '8px',
        default: '6px',
        small: '4px',
    }
    return {
        marginRight: marginMap[size.value] || marginMap.default,
    }
})

const changeAvatar = (tag)=>{
    bus.emit('infoChanMsg', tag)
}
bus.on('infoChanMsg',(id)=>{
  if (id == 'inputArea') {
    inputArea.value = true
  } else {
    inputArea.value = false
  }
})
</script>

<style scoped>
.avatar{
    margin-bottom: 40px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
}

.btn{
    margin-bottom: 40px;
    display: inline-block;
    vertical-align: middle;
}

</style>