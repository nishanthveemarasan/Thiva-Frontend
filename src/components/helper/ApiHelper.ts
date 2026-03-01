import axios, { AxiosResponse, AxiosInstance, AxiosRequestConfig, RawAxiosRequestHeaders} from "axios";
import CryptoJS from "crypto-js";

export type SetLoading = React.Dispatch<React.SetStateAction<boolean>>;
export interface ApiRequestOptions {
  endpoint: string;
  setLoading?: SetLoading;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  stopLoadingOnFinish?: boolean;
  body?: any;
  headers?: RawAxiosRequestHeaders;
}
class ApiHelper {
  static baseUrl: string = import.meta.env.VITE_BACKEND_URL;
  static axiosInstance: AxiosInstance = axios.create({
    baseURL: this.baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  static async request({
    endpoint,
    setLoading,
    method = "GET",
    stopLoadingOnFinish = true,
    body = null,
    headers = {},
  }: ApiRequestOptions): Promise<any> {
    setLoading?.(true);
    try {
      const timestamp = Date.now().toString();
      const secret = import.meta.env.VITE_APP_SERVICE_KEY; // Your random string
      let dataToSign = `${method}${endpoint}${timestamp}`;
      const hash = CryptoJS.HmacSHA256(dataToSign, secret);
      const signature = hash.toString(CryptoJS.enc.Hex);

      const result: AxiosResponse = await this.axiosInstance.request({
        url: endpoint,
        method,
        headers:{
          ...headers,
          "X-Signature": signature,
          "X-Timestamp": timestamp,
        },
        data: body
      });
      console.log(result)
      return {
        success: true,
        result: result.data
      }
      
    } catch (e) {
      console.log('inside  catch')
      console.log(e.response)
      return {
        success: false,
      };
    } finally {
      if (stopLoadingOnFinish) {
        setLoading?.(false);
      }
    }
  }

  static async authenticatedRequest(options: ApiRequestOptions): Promise<any> {
    const tokenRes = await this.request({
      endpoint: "api/client-token",
      method: "POST",
      setLoading: options.setLoading,
      stopLoadingOnFinish: false, 
    });
    if (!tokenRes.success || !tokenRes.result?.data?.access_token) {
      if (options.setLoading) options.setLoading(false);
      return { success: false};
    }
    const token = tokenRes.result.data.access_token;
    return await this.request({
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default ApiHelper;