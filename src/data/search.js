import { ref } from "vue"
//封装search数据，search中的数据从这里拿
const searchData = ref([])
//封装draft记录数
const searchCount = ref()

//封装search，并暴露
export var search2 = ref({
    searchData: searchData,
    searchCount: searchCount
})

export var usersData = ref([])
export var blogsData = ref([])
export var toFindData = ref()


//封装，暴露
export var mySearch = ref({
    usersData: usersData,
    blogsData: blogsData,
    toFindData: toFindData
})

//封装请求参数
export var toFindBloggerRequestDataArgu = ref({
    nickName: toFindData
})
export var toFindBlogRequestDataArgu = ref({
    blogTitle: toFindData
})