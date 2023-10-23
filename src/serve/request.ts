import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface ApiResponse<T> {
    code: number;
    message: string;
    data: T;
}

class ApiClient {
    private instance: AxiosInstance;

    constructor(baseURL: string) {
        this.instance = axios.create({ baseURL });
    }

    private handleResponse<T>(response: AxiosResponse<ApiResponse<T>>): T {
        const { code, message, data } = response.data;
        if (code === 200) {
            return data;
        } else {
            throw new Error(message);
        }
    }

    public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.get<ApiResponse<T>>(url, config).then(response => this.handleResponse(response));
    }

    public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.post<ApiResponse<T>>(url, data, config).then(response => this.handleResponse(response));
    }

    // 封装其他请求方法，例如 PUT、DELETE 等
}
const api_name = "/api/v1";
const apiClient = new ApiClient('https://api.dasenic.com'+api_name);

export default apiClient;
