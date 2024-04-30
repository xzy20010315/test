import { ref } from "vue";
import { id as id_user, account as account_user, nickName as nickName_user } from "./user";

export var status = ref(false)
export var id = ref()
export var account = ref()
export var token = ref()
export var nickName = ref('登录/注册')

//数据绑定
id = id_user
account = account_user
nickName = nickName_user

//向外暴露
export var storage = ref({
    status: status,
    id: id,
    account: account,
    token: token,
    nickName: nickName
})