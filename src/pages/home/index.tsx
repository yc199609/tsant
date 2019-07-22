import React from 'react'
import Axios from 'axios'
import { Button } from 'antd'
import Cookie from 'js-cookie'

const request = Axios.create({
    baseURL: "/",
    headers:{
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest'
    }
})

const Home: React.SFC =() => {
    const get =()=>{
        request.get('api/get')
            .then(res=>{
                console.log(res)
            })
        Cookie.set('yc','dsd')
    }
    const post = () =>{
        request.post('api/post')
            .then(res=>{
                console.log(res)
            })
    }
    return (
        <div>
            首页
            <Button onClick={get}>发送get请求</Button>
            <Button onClick={post}>发送post请求</Button>
        </div>
    )
}
export default Home