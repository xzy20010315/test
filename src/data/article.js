//和写作页面双向绑定的数据，写作页面的数据源
import { ref } from 'vue'
import { id, nickName } from './storage'
//写文章页面双向绑定的数据
export var text = ref('')
export var title = ref('')
export var label = ref('')
export var authorId = ref('')
export var authorName = ref('')

//数据绑定
authorId = id
authorName = nickName

//封装文章数据，并暴露
export var article = ref({
    text: text,
    title: title,
    label: label,
    authorId: authorId,
    authorName: authorName
})