import Axios from 'axios'
import Cookie from 'js-cookie'
import { message } from 'antd'

const service = Axios.create({
    baseURL: '/',
    headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8'
    },
    withCredentials: true, // 跨域带cookie
    timeout: 20000
})

//request拦截器
service.interceptors.request.use(
    config => {
        if(Cookie.get()){
            config.headers['X-Token'] = Cookie.get()
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response =>{
        const res = response.data
        if(res.code !== 0){
            message.error({
                content:res.msg,
                duration:3
            })
            return Promise.reject('error')
        } else {
            return res
        }
    },
    error => {
        message.error({
            content:error.message,
            duration:3
        })
        return Promise.reject('error')
    }
)

export default service