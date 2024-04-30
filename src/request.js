import axios from "axios";

const request = axios.create({
        // baseURL:''
        transformRequest: [function (data) {
            // 将数据转换为表单数据
            let ret = ''
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }],
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
    });

// 响应拦截器
request.interceptors.response.use(
  (res)=>{
    let code = res.data.code
    if(code===200) {
      return res.data.data
    } else {
      return res.data
    }
  },
  (error)=>{
    return promiseTimeout.reject(error)
  }
)
//请求拦截器
request.interceptors.request.use(
  (req)=> {
    const token = localStorage.getItem("token")
    if(token) {
      req.headers.Authorization = token
    }
    return req
  },
  (error)=> {
    return Promise.reject(error)
  }
)

export default request