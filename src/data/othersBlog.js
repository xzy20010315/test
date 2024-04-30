import { ref } from 'vue'
import { id as id_others, nickName as nickName_others } from './others'

//blog数据
//封装blog数据，itemblog中的数据从这里拿
export var blogsData = ref([])
//封装blog记录数
export var blogsCount = ref()
export var blogContentShowData = ref('')
//article 数据
export var id = ref('')
export var blogTitle = ref()
export var blogContent = ref('')
export var blogLabel = ref('')
export var authorId = ref()
export var authorName = ref('')
export var date = ref()

//数据绑定
authorId = id_others
authorName = nickName_others
//本文件中变量必须是左值
// authorId = auId
// authorName = nickName

//封装blog并向外暴露
export var blog = ref({
    blogsData: blogsData,
    blogsCount: blogsCount,
    id: id,
    blogTitle: blogTitle,
    blogContent: blogContent,
    blogLabel: blogLabel,
    authorId: authorId,
    authorName: authorName,
    date: date
})
//查询用户所有draft或者blog
export var findAllArgu = ref({
    authorId: authorId
})
//查询,删除某篇draft或者blog
export var idArgu = ref({
    id: id
})
