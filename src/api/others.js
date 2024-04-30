//导入插件
import request from "@/request";
import { ElMessage } from "element-plus";
//导入页面组件
//导入数据源
//导入方法
import { findAllArticleService } from './blog'

//方法
//查询某个用户的所有文章
export const findAllBlog = async (findAllPara, blogPara) => {
    let result = await findAllArticleService(findAllPara)
    if (result.code === 0) {
        //成功
        blogPara.blogsData = Object.values(result.data)
        blogPara.blogsCount = blogPara.blogsData.length;
    } else {
        //失败
    }
}