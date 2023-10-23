import axios from 'axios';
import {message} from 'antd';
const api_name = "/api/v1";
/*创建一个 Axios 实例，并进行基本的配置，例如设置基本 URL 和超时时间*/
const api = axios.create({
    baseURL: 'https://api.dasenic.com'+api_name,
    timeout: 5000,
});

/*添加请求拦截器，用于在发送请求之前进行一些处理，例如添加请求头信息*/
api.interceptors.request.use(
    config => {
        // 在这里可以添加请求头信息等
        return config;
    },
    error => {
        // 对请求错误做些处理
        return Promise.reject(error);
    }
);

/*添加响应拦截器，用于对响应进行处理，例如统一处理错误信息*/
api.interceptors.response.use(
    response => {
        // 对响应数据做些处理
        return response.data;
    },
    error => {
        // 对响应错误做些处理
        message.error('请求出错，请稍后重试').then(r => {

        });
        return Promise.reject(error);
    }
);

/*定义封装的请求方法，例如 get、post 等*/
export const get = async (url, params) => {
    try {
        return await api.get(url, {params});
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const post = async (url, data) => {
    try {
        return await api.post(url, data);
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

/*导出封装好的请求方法。*/
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get,
    post,
};