<!-- 弹出层，展示登录和注册 -->
<template>
    <div class="toast" id="toast" @dblclick="hideToast()" v-show="toast">
            <login></login>
            <register></register>        
    </div>
</template>
<script setup lang="ts">
//导入插件
import { ref } from 'vue'
import bus from '@/utils/bus'
//导入页面组件
import login from './login.vue';
import register from './register.vue';
//导入数据源
//导入方法

const toast = ref(false)

//订阅显示toast
bus.on('toastMsg',()=> {
    toast.value = true
})

//订阅隐藏toast
bus.on('loginSuccessMsg',()=> {
    toast.value = false
})
bus.on('registerSuccessMsg',()=> {
    toast.value = false
})

//双击隐藏Toast
function hideToast(){
    //  this.$refs.toast.style.display = 'none'
    toast.value = false
}
</script>

<style scoped>
.toast {
    /* 默认隐藏 */
    display: flex; 
    align-items: center;
    justify-content: center;
    position: fixed; /* 固定定位 */
    z-index: 1; /* 设置在顶层 */
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.3); 
}
</style>
