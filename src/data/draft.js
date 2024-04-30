import { ref } from 'vue'
import { title, text, label, authorId as authorId_article, authorName as authorName_article} from './article'
//draft数据
//封装draft数据，itemDraft中的数据从这里拿
var draftsData = ref([])
//封装draft记录数
var draftsCount = ref()
//article 数据
var id = ref('')
var draftTitle = ref('')
var draftContent = ref('')
var draftLabel = ref('')
var authorId = ref()
var authorName = ref('')
var date = ref()

//数据绑定
draftTitle = title
draftContent = text
draftLabel = label
authorId = authorId_article
authorName = authorName_article

//封装draft并向外暴露
export var draft = ref({
    draftsData: draftsData,
    draftsCount: draftsCount,
    id: id,
    draftTitle: draftTitle,
    draftContent: draftContent,
    draftLabel: draftLabel,
    authorId: authorId,
    authorName: authorName,
    date: date
})

//查询用户所有draft或者draft
export var findAllArgu = ref({
    authorId: authorId
})
//查询,删除某篇draft或者draft
export var idArgu = ref({
    id: id
})
//保存
export var saveDraftArgu = ref({
    draftTitle: draftTitle,
    draftContent: draftContent,
    draftLabel: draftLabel,
    authorId: authorId,
    authorName: authorName,
    date: date
})
//更新
export var updateDraftArgu = ref({
    id: id,
    draftTitle: draftTitle,
    draftContent: draftContent,
    draftLabel: draftLabel,
    authorId: authorId,
    authorName: authorName,
    date: date 
})