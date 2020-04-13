import axios from 'axios'
export function request (config,success, failure){
    //1.创建axios 的实例
    const instance=axios.create({
        baseURL:'http://123.307.32.32:8000',
        timeout:5000
    })
    //2.axios的拦截器
    instance.interceptors.request.use(config=>{
        console.log(config)// 拦截了请求必须返回，不然就走失败的路线
        //1.比如config中的一些信息不符合服务器的要求
        //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
        //3.某些网络请求（比如登录（token）),必须携带一些特殊的信息
        return config
    },err=>{
        console.log(err)

    })
//2.2响应拦截
instance.interceptors.response.use(res=>{
    console.log(res)
    return res.data
},err=>{
    console.log(err)
}
)
  //3.发送真正的网络请求,这是第一个方法
    // instance (config)
    // .then(res=>{
    //     resolve(res)
    // })
    // .catch(err=>{
    //     reject(err)
    // })

    //方法二：返回一个Promise实例，包裹了，直接
return instance(config)
    }

//发送请求，实例使用
    request({
        url:'/home/multidata'
    }).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })