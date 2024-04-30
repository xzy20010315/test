//他人空间页面的数据和他人信息请求参数
import { ref } from "vue";
import { baseAvatarUrl } from "@/config/config";

export var avatarPicName = ref('user_photo_simple.png')
export var avatarUrl = ref(baseAvatarUrl + avatarPicName.value)
export var id = ref()
export var nickName = ref("登录/注册")
export var account = ref("114514")
export var bornDay = ref("请输入您的出生日期")
export var age = ref("请输入您的年龄")
export var degree = ref("请输入您的学历")
export var graduateUniversity = ref("请输入您的毕业院校")
export var graduateDay = ref("请输入您的毕业日期")
export var brief = ref("菜鸟一枚")




export var othersInformation = ref({
    id : id,
    nickName : nickName,
    account : account,
    bornDay : bornDay,
    age : age,
    degree : degree,
    graduateUniversity : graduateUniversity,
    graduateDay : graduateDay,
    brief : brief,
    avatarPicName : avatarPicName,
    avatarUrl: avatarUrl, 
})


//按数据封装
//封装账号请求参数
export var accountArgu = ref({
    account: account
})
//按功能封装
// //封装注册请求参数
// export var registerArgu = ref({
//     nickName: nickName,
//     account: account,
//     password: password
// })
// //封装登录请求参数
// export var loginArgu = ref({
//     account: account,
//     password: password
// })
// //封装更改密码请求参数
// export var changePasswordArgu = ref({
//     account: account,
//     password: password
// })
// //封装更改头像请求参数
// export var changeAvatarPicArgu = ref({
//     account: account,
// })
// //封装更改资料请求参数
// export var changeInformationArgu = ref({
//     account: account,
//     nickName: nickName,
//     bornDay: bornDay,
//     age: age,
//     degree: degree,
//     graduateUniversity: graduateUniversity,
//     graduateDay: graduateDay,
//     brief: brief
// })
//封装获取资料请求参数
export var getInformationArgu = ref({
    account: account
})
// //封装搜索博主请求参数
// export var findBloggerArgu = ref({
//     nickName: nickName
// })

// //封装自动登录的参数信息
// export var autoLoginArgu = ref({
//     id: localStorage.getItem("id"),
//     account: localStorage.getItem("account"),
//     token: localStorage.getItem("token")
// })