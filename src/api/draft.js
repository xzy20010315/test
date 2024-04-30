//导入插件
import request from "@/request";
import { ElMessage } from 'element-plus'
import bus from "@/utils/bus";
//导入页面组件
//导入数据源
import { draft } from "@/data/draft";
import { article } from "@/data/article";
//导入方法


//方法
//获取draft数据
export const draftsDataGet = async (findAllPara, draftPara) => {
    let result = await findAllDraftService(findAllPara)
    draftPara.draftsData = Object.values(result.data)
    console.log(draftPara.draftsData);
    draftPara.draftsCount = draftPara.draftsData.length;
}

//向draftData中，插入新数据，并存入数据库
export const draftDataSave = async (saveDraftPara, draftPara) => {
    saveDraftPara.date = new Date()
    draftPara.draftsData.push(saveDraftPara)
    draftPara.draftsCount = draftPara.draftsData.length;
    let result = await saveService(saveDraftPara)
    return result
}

//向draftData中，更新数据，并更新数据库
export const draftDataUpdate = async (updateDraftPara, draftPara) => {
    updateDraftPara.date = new Date()
    let temp = draftPara.draftsData.filter((p) => {
        return p.id = updateDraftPara.id
    })
    temp[0].draftTitle = updateDraftPara.draftTitle
    temp[0].draftContent = updateDraftPara.draftContent
    temp[0].draftLabel = updateDraftPara.draftLabel
    let result = await updateDraftByIdService(updateDraftPara)
    return result
}

//判断文章是否存在
export const exists = async (idPara) => {
    if (Object.is(idPara.id, '')) {
        //不存在
        return false
    } else {
        let result = await findDraftByIdService(idPara);
        if (result.data != null) {
            //存在
            return true;
        } else {
            //不存在
            return false
        }
    }
}

//编辑
export const edit = (row, draftPara) => {
    //点击编辑按钮，进入草稿修改
    //1、把当前行的内容放进write的对应值中
    draftPara.id = row.id
    draftPara.draftContent = row.draftContent
    draftPara.draftTitle = row.draftTitle
    draftPara.draftLabel = row.draftLabel
    //2、打开write界面，关闭draft界面
    bus.emit('sendMsg', "itemWrite")
}

//删除
export const deleteDraft = async (row, draftPara, idPara) => {
    //1、设定请求参数值
    draftPara.id = row.id
    //2、从数据库中删除
    let result = await deleteDraftByIdService(idPara)
    if (result.code == 0) {
        //删除成功
        //3、从draftsData中删除该项数据
        let temp = draftPara.draftsData.filter((p) => {
            return p.id = draftPara.id
        })
        //获取index
        let index = draftPara.draftsData.indexOf(temp[0])
        //删除
        draftPara.draftsData.splice(index, 1)
        ElMessage({
            message: result.msg,
            type: 'success',
        })
    } else {
        ElMessage.error(result.msg)
    }
}





//接口
//保存draft接口
export const saveService = (saveDraftPara) => {
    return request.post("api/draft/save", saveDraftPara)
}

//根据用户id,查询某个用户的所有draft接口
export const findAllDraftService = (findAllPara) => {
    return request.post("api/draft/findAllDraft", findAllPara)
}

//根据文章id,查询某篇draft接口
export const findDraftByIdService = (idPara) => {
    return request.post("api/draft/findDraftById", idPara)
}

//根据文章id,删除某篇draft接口
export const deleteDraftByIdService = (idPara) => {
    return request.post("api/draft/deleteDraftById", idPara)
}

//根据文章id,传入draft信息，更新某篇draft接口
export const updateDraftByIdService = (updateDraftPara) => {
    return request.post("api/draft/updateDraftById", updateDraftPara)
}