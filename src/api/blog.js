//导入插件
import request from "@/request";
//导入页面组件
//导入数据源
//导入方法


//获取blog数据
export const blogsDataGet = async(findAllPara, blogPara)=>{
    let result = await findAllArticleService(findAllPara)
    blogPara.blogsData = Object.values(result.data)
    blogPara.blogsCount = blogPara.blogsData.length;
    return result
}

//向blogData中，插入新数据，并存入数据库
export const blogDataSave = async(saveBlogPara, blogPara)=>{
    saveBlogPara.date = new Date()
    blogPara.blogsData.push(saveBlogPara)
    blogPara.blogsCount = blogPara.blogsData.length;
    let result = await saveBlogService(saveBlogPara)
    return result
}

//保存blog接口
export const saveBlogService = (saveBlogPara)=>{
    return request.post("api/blog/save",saveBlogPara)
}
//根据用户id,查询某个用户的所有blog接口
export const findAllArticleService= (findAllPara)=>{
    return request.post("api/blog/findAllArticle",findAllPara)   
}
//获取blog的count的接口
export const countBlogService = (findAllPara)=>{
    return request.post("api/blog/count",findAllPara)
}

//根据文章id,查询某篇blog接口
export const findArticleByIdService= (idPara)=>{
    return request.post("api/blog/findArticleById",idPara)   
}
//根据文章id,删除某篇blog接口
export const deleteArticleByIdService= (idPara)=>{
    return request.post("api/blog/deleteArticleById",idPara)   
}
//根据文章id,传入blog信息，更新某篇blog接口
export const updateArticleByIdService= (updateBlogPara)=>{
    return request.post("api/blog/updateArticleById",updateBlogPara)   
}