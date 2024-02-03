import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Apitype, Response } from '../Type/type'




const apifunction=async (obj:Apitype): Promise<AxiosResponse<Response>> => {
   const config: AxiosRequestConfig={
    url: obj.url,
    method: obj.method,
    data: obj.payload,
   }
 const response=await axios(config);
 return response; 


  }
export default apifunction