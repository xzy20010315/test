import { ref } from "vue"
import { baseAvatarUrl } from "@/config/config"

export var avatarPicName = ref('user_photo_simple.png')
export var id = ref()
export var nickName = ref("登录/注册")
export var account = ref("114514")
export var bornDay = ref("请输入您的出生日期")
export var age = ref("请输入您的年龄")
export var degree = ref("请输入您的学历")
export var graduateUniversity = ref("请输入您的毕业院校")
export var graduateDay = ref("请输入您的毕业日期")
export var brief = ref("菜鸟一枚")
export var avatarUrl = ref(baseAvatarUrl + avatarPicName.value)
export var password = ref()
export var passwordVerify = ref()
//用户的关注数据
export var followingData = ref([])

//用户的被关注数据，即粉丝数据
//暂时不用
export var followerData = ref([])

export var rmdBlogger = ref([])
export var rmdBlog = ref([])
//封装用户默认信息,并暴露
export var userAllInformationDefault = ref({
    id : 0,
    nickName : "登录/注册",
    account : "114514",
    bornDay : "请输入您的出生日期",
    age : "请输入您的年龄",
    degree : "请输入您的学历",
    graduateUniversity : "请输入您的毕业院校",
    graduateDay : "请输入您的毕业日期",
    brief : "菜鸟一枚",
    avatarPicName : 'user_photo_simple.png',
    avatarUrl: baseAvatarUrl + 'user_photo_simple.png',

})

//封装用户信息,并暴露
export var userAllInformation = ref({
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
    password: password,
    passwordVerify: passwordVerify,
    followingData: followingData
})


//封装用户提交信息,并暴露
export var userAllInformationInput = ref(
    {
        nickName : nickName.value,
        account: account.value,
        bornDay : bornDay.value,
        age : age.value,
        degree : degree.value,
        graduateUniversity : graduateUniversity.value,
        graduateDay : graduateDay.value,
        brief : brief.value,
        avatarPicName : avatarPicName.value,
        avatarUrl: avatarUrl.value
    }
)

//按数据封装
//封装账号请求参数
export var accountArgu = ref({
    account: account
})
//按功能封装
//封装注册请求参数
export var registerArgu = ref({
    nickName: nickName,
    account: account,
    password: password
})
//封装登录请求参数
export var loginArgu = ref({
    account: account,
    password: password
})
//封装更改密码请求参数
export var changePasswordArgu = ref({
    account: account,
    password: password
})
//封装更改头像请求参数
export var changeAvatarPicArgu = ref({
    account: account,
})
//封装更改资料请求参数
export var changeInformationArgu = ref({
    account: null,
    nickName: null,
    bornDay: null,
    age: null,
    degree: null,
    graduateUniversity: null,
    graduateDay: null,
    brief: null
})
//封装获取资料请求参数
export var getInformationArgu = ref({
    account: account
})
//封装搜索博主请求参数
export var findBloggerArgu = ref({
    nickName: nickName
})

//封装自动登录的参数信息
export var autoLoginArgu = ref({
    id: localStorage.getItem("id"),
    account: localStorage.getItem("account"),
    token: localStorage.getItem("token")
})