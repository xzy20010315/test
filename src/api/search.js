//导入插件
import request from "@/request";
import { ElMessage } from "element-plus";
//导入页面组件
//导入数据源
//导入方法



//模糊查询博主并存入数据
export const findBlogger = async(toFindBloggerRequestDataPara, searchPara)=>{
    let result = await request.post("api/user/findBlogger",toFindBloggerRequestDataPara)
    searchPara.usersData = Object.values(result.data)
} 

//模糊查询博客并存入数据
export const findBlog = async(toFindBlogRequestDataPara, searchPara)=>{
    let result = await request.post("api/blog/findBlog",toFindBlogRequestDataPara)
    searchPara.blogsData = Object.values(result.data)
} 

//接口
//模糊查询博主接口
export const findBloggerService = async(toFindBloggerRequestDataPara)=>{
    return await request.post("api/user/findBlogger",toFindBloggerRequestDataPara) 
}                                                                                         
//模糊查询博客接口
export const findBlogService = async(toFindBlogRequestDataPara)=>{
    return await request.post("api/blog/findBlog",toFindBlogRequestDataPara)  
} 