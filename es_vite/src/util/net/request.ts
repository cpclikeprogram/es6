import axios from "axios";
import qs from "qs"



const instance = axios.create({
    baseURL: '',
    timeout: 2000,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})

instance.interceptors.request.use(
    (config: any) => {
        return config;
    }, (error: any) => {
        console.error(error)
    });

instance.interceptors.response.use(
    (res: any) => {
        return res.data;
    }, (error: any) => {
        console.error(error);
    });

export function get(url:string,params:any){
    return instance.get(url,params);
}

export function post(url:string,data:any){
    return instance.post(url,qs.stringify(data));
}

export function postJSON(url:string,data:any){
    return instance.post(url,data);
}

export default instance;