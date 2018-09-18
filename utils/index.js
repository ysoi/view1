import axios from 'axios';
const baseURL='/api/admin';
import router from '../router';
import {Message} from 'element-ui';
//创建axios实例
const instance=axios.create({
  baseURL,
  timeout:10000,
  // headers:{'X-Custom-Header':'foobar'}
})
const xhr={
  get(url,data,config){
    return new Promise((resolve,reject)=>{
      instance.get(url,{params:data},config).then(res=>{
        if(res.data.code==401){
           Message.error('登录状态失效,正在跳转到登录页');
           router.push('/login');
        }else{
          resolve(res.data);
        }

      }).catch(err=>{
        reject(err);
      })
    })
  },
  post(url,data,config){
    return new Promise((resolve,reject)=>{
      instance.post(url,data,config).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
  }

}
export const $axios=xhr;

