import axios, { AxiosResponse, AxiosInstance, AxiosRequestConfig, RawAxiosRequestHeaders} from "axios";
import { generateSignature } from "./signature";

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
  static baseUrl: string = process.env.APP_BACKEND_URL as string;
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
      const hash = generateSignature(method, endpoint);

      const result: AxiosResponse = await this.axiosInstance.request({
        url: endpoint,
        method,
        headers:{
          ...headers,
          "X-Signature": hash.signature,
          "X-Randomstring": hash.randomString,
        },
        data: body
      });
      console.log(result)
      return {
        success: true,
        result: result.data
      }
      
    } catch (e:any) {
      console.log('inside  catch')
      console.log(e.message || "something went wrong")
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