<template>
<!-- 改变export中的值并打印 -->
<button class="btn" type="button" name="export" value="export" @click="changeExportOut">
    export
</button>

<!-- 改变import中的值并打印 -->
<button class="btn" type="button" name="import" value="import" @click="changeImportOut">
    import
</button>

</template>
<script lang="ts" setup>
import { test1 } from "./api/test"
import {changeExport} from "./api/test"
import {outExport} from "./api/test"
const changeExportOut = ()=>{
    changeExport()
    console.log("import中的test1为"+test1.value.a+test1.value.b)
}

const changeImportOut = ()=>{
    test1.value.a = 'e'
    test1.value.b = 'f'
    outExport()
    console.log("import中的test1为"+test1.value.a+test1.value.b)
}
</script>

<style>
.btn {
    width: 200px;
    height: 200px;
}
</style>