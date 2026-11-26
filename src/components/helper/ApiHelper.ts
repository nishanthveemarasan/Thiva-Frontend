import axios, { AxiosResponse, AxiosInstance, AxiosRequestConfig, RawAxiosRequestHeaders} from "axios";
import { backendParams } from "@/types/http-request";

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

  static async clientTokenRequest () {

    const params: backendParams = {
      clientId: process.env.BACKEND_CLIENT_ID as string,
      clientSecret: process.env.BACKEND_SECRET_ID as string,
      type: process.env.BACKEND_GRANT_TYPE as string,
      scope: process.env.BACKEND_SCOPE as string,
      endpoint: process.env.BACKEND_AUTH_URL as string
    };

 
    let response: AxiosResponse;
    let responseCounter = 0;
    do {
      let formData = new FormData();
        formData.append("client_id", params.clientId);
        formData.append("client_secret", params.clientSecret);
        formData.append("grant_type", params.type);
        formData.append("scope", params.scope);
  
        response = await this.axiosInstance.request({
          url: params.endpoint,
          method: "POST",
          headers:{},
          data: formData
        });
        if(response?.data?.access_token){
          break;
        }
        responseCounter++
  
   }while (responseCounter < 3)
  
    return response
  }
   
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
      const tokenResponse = await this.clientTokenRequest();
      if (!tokenResponse?.data?.access_token) {
        throw new Error("Failed to obtain access token");
      }
     
      const result: AxiosResponse = await this.axiosInstance.request({
        url: endpoint,
        method,
        headers:{
          ...headers,
          "Authorization": "Bearer " + (tokenResponse as any)?.data?.access_token,
        },
        data: body
      });
      return {
        success: true,
        result: result.data
      }
      
    } catch (e:any) {
      console.log('API Request Error:', e?.response || "No response from server");
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
}

export default ApiHelper;


