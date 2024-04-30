<!-- 页面各种主要内容展示区域 -->
<template ref="main">
    <div class="div-main">
        <itemHome></itemHome>
        <itemWrite></itemWrite>
        <itemDraft></itemDraft>
        <itemSpace></itemSpace>
        <itemNoticeList></itemNoticeList>
        <itemInformation></itemInformation>
        <itemImportAndExport></itemImportAndExport>
        <searchContent></searchContent>
        <blogContentShow></blogContentShow>
        <othersBlogContentShow></othersBlogContentShow>
        <othersInformationShow></othersInformationShow>
        <othersSpace></othersSpace>
    </div>
</template>

<script lang="ts" setup>
//导入插件
import bus from '@/utils/bus'
//导入页面组件
import itemHome from './itemHome.vue';
import itemWrite from './itemWrite.vue';
import itemDraft from './itemDraft.vue';
import itemSpace from './itemSpace.vue';
import itemNoticeList from './itemNoticeList.vue';
import itemInformation from './itemInformation.vue';
import itemImportAndExport from './itemImportAndExport.vue';
import searchContent from './searchContent.vue';
import blogContentShow from './blogContentShow.vue'
import othersBlogContentShow from './othersBlogContentShow.vue';
import othersInformationShow from './othersInformationShow.vue';
import othersSpace from './othersSpace.vue';
//导入数据源
//导入方法

var recorder: string = 'itemHome'
// bus.on('sendMsg',id => {
//     if(recorder ==  id) {

//     } else {
//         document.getElementById(recorder).style.display = 'none'
//     }
//     document.getElementById(id).style.display = 'block'
//     recorder = id

// })
</script>

<style>
.div-main {
    width: 100%;
    height: 100%;
}

.item {
    width: 100%;
    height: 100%;
    display: none;
}

#itemHome {
    display: none;
}
</style>