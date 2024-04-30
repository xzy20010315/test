import { ref } from 'vue'
import { title, text, label, authorId as authorId_article, authorName as authorName_article} from './article'

//blog数据
//封装blog数据，itemblog中的数据从这里拿
export var blogsData = ref([])
//封装blog记录数
export var blogsCount = ref()
//某篇blog内容数据
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
blogTitle = title
blogContent = text
blogLabel = label
authorId = authorId_article
authorName = authorName_article

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
//保存
export var saveBlogArgu = ref({
    blogTitle: blogTitle,
    blogContent: blogContent,
    blogLabel: blogLabel,
    authorId: authorId,
    authorName: authorName,
    date: date
})
//更新
export var updateBlogArgu = ref({
    id: id,
    blogTitle: blogTitle,
    blogContent: blogContent,
    blogLabel: blogLabel,
    authorId: authorId,
    authorName: authorName,
    date: date 
})