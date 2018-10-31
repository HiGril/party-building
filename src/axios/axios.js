import axios from "axios"

const baseURL = "/api/hhdj"
const instance = axios.create({
    baseURL,
    timeout:15000
})
//请求拦截器
const qs = require('querystring')
instance.interceptors.request.use(function (config) {
    if (window.localStorage.vuex) {
        let token = localStorage.getItem("token")   //从localStrong里面获取token
        config.headers.token = token
    }
    if (config.method == 'post') {
        config.data = qs.stringify(config.data)
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config
}, function (error) {
    return Promise.reject(error)
})
const xhr = {
    get(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.get(url,{params:data},config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    fetch(url,data,config,menthod){
        return new Promise((resolve,reject)=>{
            instance[menthod](url,data,config).then(res=>{
                if(res.code==1){
                    console.log(res)
                    resolve(res)
                }
            })

        })
    },
    
    // post(url,data,config){
    //     return this.fetch(url, data, config,"post")
    // }
    post(url, data, config) {
        return new Promise((resolve, reject) => {
            instance.post(url, data, config).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

export const $axios = xhr