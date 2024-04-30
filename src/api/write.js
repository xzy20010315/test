//导入插件
import request from "@/request";
import bus from "@/utils/bus";
import { ElMessage } from 'element-plus'
//导入页面组件
//导入数据源
//导入方法
import { blogDataSave } from "../api/blog"
import { draftDataSave, exists, draftDataUpdate } from "../api/draft"

//方法
//发布的方法
export const publish = async(saveBlogPara, blogPara) => {
  let result = await blogDataSave(saveBlogPara, blogPara)
  bus.emit('hobbyMsg',saveBlogPara.blogTitle)
  bus.emit('hobbyMsg',saveBlogPara.blogLabel)
  if (result.code == 0) {
    ElMessage({
      message: result.msg,
      type: 'success',
    })
  }
}

//保存到草稿的方法
export const save = async (idPara, updateDraftPara, saveDraftPara, draftPara ) => {
  //先判断该文章是否存在
  if (await exists(idPara)) {
    //存在则更新 
    //1、更改draftData中本条数据
    //2、向服务器发起update请求     
    let result = await draftDataUpdate(updateDraftPara, draftPara)
    if(result.code == 0) {
      id.value = ''
      ElMessage({
        message: result.msg,
        type: 'success',
      })
    } else {
      ElMessage.error(result.msg)
    }
  } else {
    //不存在则保存
    let result = await draftDataSave(saveDraftPara, draftPara)
    if(result.code == 0) {
      ElMessage({
        message: result.msg,
        type: 'success',
      })
    } else {
      ElMessage.error(result.msg)
    }
  }
}