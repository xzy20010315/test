<!-- 其他用户的详细信息展示页面组件 -->
<template>
    <div class="informationArea" v-show="othersInformationShow">
        <div style="display: box;">
            <div id="userIcon" style="display: inline-flex;vertical-align: middle;vertical-align: middle;">
                <el-avatar :size="50" :src="othersInformation.avatarUrl" />
            </div>
            <div style="display: inline-flex;padding-left: 10px;">
                <el-button type="success" v-show="!status" @click="follow">关注</el-button>
                <el-button type="success" v-show="status" @click="unFollow">取消关注</el-button>
            </div>
        </div>

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
                {{ othersInformation.nickName }}
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
                {{ othersInformation.account }}
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
                {{ othersInformation.bornDay }}
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
                {{ othersInformation.age }}
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
                {{ othersInformation.degree }}
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
                {{ othersInformation.graduateUniversity }}
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
                {{ othersInformation.graduateDay }}
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
                {{ othersInformation.brief }}
            </el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script setup lang="ts">
//导入插件
import { computed, ref } from 'vue';
    import { ElMessage } from 'element-plus'
    import bus from '@/utils/bus'
//导入页面组件
//导入数据源
import { userAllInformation, followingData } from '@/data/user'
import { othersInformation } from '@/data/others';
import { followingCount, change, updateFollowingCountArgu } from '@/data/userIndicies';
import { follower, followArgu, unFollowArgu, status } from '@/data/userFollower';
import { indicies as indicies_userIndicies } from '@/data/userIndicies';
import { indicies as indicies_othersIndicies, updateFollowerCountArgu } from '@/data/othersIndicies';

//导入方法
import { follow as follow_follower, unFollow as unfollow_follower } from '@/api/follower';
import { updateFollowingCount, updateFollowerCount } from '@/api/indicies';
const blogger = ref()
//定义本页面组件显隐控制标识
const othersInformationShow = ref(false)
//定义关注和取关按钮显隐
const btnFollow = ref(true)
const btnUnFollow = ref(false)
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
const follow = async()=>{
    if (userAllInformation.value.id == othersInformation.value.id ) {
        ElMessage.error('不能自己关注自己')
    } else {
        //装配数据
        follower.value.followingId = othersInformation.value.id
        follower.value.followTime = new Date()
        follower.value.status = true
        change.value = 1
        await follow_follower(followArgu.value,othersInformation.value, followingData)
        await updateFollowingCount(updateFollowingCountArgu.value, indicies_userIndicies.value)
        await updateFollowerCount(updateFollowerCountArgu.value, indicies_othersIndicies.value)
    }
}

const unFollow = async ()=>{
    if (userAllInformation.value.id == othersInformation.value.id ) {
        ElMessage.error('不能自己取关自己')
    } else {
        //装配数据
        follower.value.followingId = othersInformation.value.id
        follower.value.followTime = new Date()
        follower.value.status = false
        change.value = -1
        await unfollow_follower(unFollowArgu.value, followingData)
        await updateFollowingCount(updateFollowingCountArgu.value, indicies_userIndicies.value)
        await updateFollowerCount(updateFollowerCountArgu.value, indicies_othersIndicies.value)
    }
}

/* ************************************************************************
************************************************************************
订阅事件控制显隐
************************************************************************
*/

bus.on('sendMsg',id =>{

    if(id == "othersInformationShow") {
        othersInformationShow.value = true
    } else {
        othersInformationShow.value = false
    }

})
</script>