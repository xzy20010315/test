<template>
  <div class="common-layout">
    <el-container style="width: 100%; height: 100%;">
      <!-- 顶部 -->
      <el-header>
        <headerContainer>
        </headerContainer>
      </el-header>
      <el-container style="height: 80%;">
        <!-- 边 -->
        <el-aside>
          <asideContainer>
          </asideContainer>
        </el-aside>
        <!-- 主要 -->
        <el-main>
          <mainContainer></mainContainer>
        </el-main>
      </el-container>
    </el-container>
  </div>
  <toast></toast>
</template>

<script lang="ts" setup>
//导入插件
import { ref } from 'vue'
import { onMounted, onBeforeMount } from 'vue'
//导入页面组件
import headerContainer from './components/headerContainer.vue'
import asideContainer from './components/asideContainer.vue'
import mainContainer from './components/mainContainer.vue'
import toast from './components/toast.vue'
//导入数据源
import { autoLoginArgu, userAllInformation } from './data/user'
import { indicies } from './data/userIndicies'
//导入方法
import { autoLogin } from "./api/user"
import { initWebSocket } from './api/indicies'
import { webSocketRmd } from './api/hobby'


// import login from './components/login.vue'
// import { draft } from './data/draft'
// import { blog } from './data/blog'
// import { article } from './data/article'
// import { initWebSocket } from './api/indicies'

onBeforeMount(async() => {
  //数据源绑定
      //draft<=>article
      // await new Promise((resolve) => {
      //   let timer = setInterval(() =>{
      //     if(article.value) {
      //       clearInterval(timer)
      //       resolve(true)
      //     }
      //   },100)
      // })     
      // draft.value.draftTitle = article.value.title
      // draft.value.draftContent = article.value.text
      // draft.value.draftLabel = article.value.label
      // draft.value.authorId = article.value.authorId
      //blog<=>article
      // blog.value.blogTitle = article.value.title
      // blog.value.blogContent = article.value.text
      // blog.value.blogLabel = article.value.label
      // blog.value.authorId = article.value.authorId     
      //<=>article
})
onMounted(async () => {
  console.log(localStorage.getItem("token"))
  console.log(autoLoginArgu.value)
  await autoLogin(autoLoginArgu.value)
  
})



</script>

<script lang="ts">
// import headerContainer from './components/headerContainer.vue'
// import asideContainer from './components/asideContainer.vue'
// import mainContainer from './components/mainContainer.vue'

// export default {
//   components: {
//     headerContainer: headerContainer,
//     asideContainer: asideContainer,
//     mainContainer: mainContainer
//   }
// }

const test1 = ref(1)
const test4 = ref(0)
var test5 = {
  test: test1
}
const test2 = ref({
  test: test1.value,
  te: test1,
  tes: test5.test
})

test2.value.test = 2
console.log(test1.value);
test1.value = 3
console.log(test2.value.test);
console.log(test2.value.tes);


//测试json 类型的ref对象，改变初始值的源ref是否影响键值
const tRes = ref(1)
const t1 = ref({
  t: tRes
})
tRes.value = 2
console.log("t1的t值："+t1.value.t);//conclusion:会改变键值

//测试json 类型的ref对象，改变键的值是否影响初始值的ref源，
const t2 = ref({
  t:tRes
})
t2.value.t = 3
console.log("ref源tRes值："+tRes.value);//conclusion:会改变源
//测试json 类型的ref对象，若初始值是ref.value的情况，改变初始值的源ref是否影响键值
const t3 = ref({
  t:tRes.value
})
tRes.value = 4
console.log("t3的t值："+t3.value.t);//conclusion:不会改变源
//测试json 类型的ref对象，若初始值是ref.value的情况，改变键的值是否影响初始值的ref源，
const t4 = ref({
  t:tRes.value
})
t4.value.t = 5
console.log("ref源tRes值："+tRes.value);//conclusion:不会改变源

//测试两个ref 对象，互相value赋值，改变其中一个，另外一个会不会变
const r1 = ref()
const r2 = ref()
r1.value = r2.value
//改变r1
r1.value = 2
console.log("r1:"+r1.value+"r2:"+r2.value);//改变左值，右不变
//改变r2
r2.value = 4
console.log("r1:"+r1.value+"r2:"+r2.value);//改变右值，左不变

//测试两个ref 对象，互相value赋值，改变其中一个，另外一个会不会变，const本身不能被赋值
var r3 = ref()
var r4 = ref()
r3 = r4
//改变r3
r3.value = 2
console.log("r3:"+r3.value+"r4:"+r4.value);//改变左值，右变
//改变r4
r4.value = 4
console.log("r3:"+r3.value+"r4:"+r4.value);//改变右值，左变
</script>

<style scoped>
.common-layout,
.el-container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

}

.el-header {
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 10%;
  padding-right: 10%;
  /* padding-top: 5%;
  padding-bottom: 5%; */
  /* background-color: aqua; */
}


.el-aside {
  padding-top: 0%;
  padding-left: 0%;
  width: 10%;
  height: 100%;
  box-sizing: border-box;
  /* background-color: blue; */
}

.el-main {
  padding-right: 10%;
  width: 90%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  /* background-color: antiquewhite; */
}
</style>
