<!-- 用户个人信息展示页面组件 -->
<template>
    <div v-show="showArea">
        <div v-show="status">
        <div id="showArea" class="informationArea">
            <!-- <div class="avatar" style="display: box;">
                <div id="userIcon" style="display: inline-flex;vertical-align: middle;vertical-align: middle;">
                    <el-avatar :size="50" :src="userAllInformation.avatarUrl" />
                </div>
            </div> -->
            <el-avatar class="avatar" :size="50" :src="userAllInformation.avatarUrl" />
            <span class="name">{{ userAllInformation.nickName }}</span>
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
                    {{ userAllInformation.nickName }}
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
                    {{ userAllInformation.account }}
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
                    {{ userAllInformation.bornDay }}
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
                    {{ userAllInformation.age }}
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
                    {{ userAllInformation.degree }}
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
                    {{ userAllInformation.graduateUniversity }}
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
                    {{ userAllInformation.graduateDay }}
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
                    {{ userAllInformation.brief }}
                </el-descriptions-item>
            </el-descriptions>
        </div>
    </div>

    <div v-show="!status">
    <div id="showArea" class="informationArea">
        <div style="display: box;">
            <div id="userIcon" style="display: inline-flex;vertical-align: middle;vertical-align: middle;">
                <el-avatar :size="50" :src="userAllInformationDefault.avatarUrl" />
            </div>
        </div>

        <el-descriptions class="margin-top" title="With border" :column="3" :size="size" border>

            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                        <el-icon :style="iconStyle">
                            <user />
                        </el-icon>
                        昵称：
                    </div>
                </template>
                {{ userAllInformationDefault.nickName }}
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
                {{ userAllInformationDefault.account }}
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
                {{ userAllInformationDefault.bornDay }}
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
                {{ userAllInformationDefault.age }}
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
                {{ userAllInformationDefault.degree }}
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
                {{ userAllInformationDefault.graduateUniversity }}
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
                {{ userAllInformationDefault.graduateDay }}
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
                {{ userAllInformationDefault.brief }}
            </el-descriptions-item>
        </el-descriptions>
    </div>
    </div>
    
</div>
</template>
<script setup lang="ts">
//导入插件
import { computed, ref } from 'vue'
import bus from '@/utils/bus'
//导入页面组件
//导入数据源
import { userAllInformation, userAllInformationDefault } from '@/data/user'
import { status } from '@/data/storage';
//导入方法

const showArea = ref(true)
const size = ref<'default' | 'large' | 'small'>('default')
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

bus.on('infoChanMsg',(id)=>{
  if (id == 'showArea') {
    showArea.value = true
  } else {
    showArea.value = false
  }
})
</script>

<style scoped>
.avatar{
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    margin-bottom: 40px;
}
.name{
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 40px;

}
</style>