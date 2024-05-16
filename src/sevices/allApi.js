import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"


export const loginAPI = async(admins)=>{
    return await commonAPI('POST',`${BASE_URL}/admin/login`,admins,"")
  }


  export const addCourceAPI = async()=>{
/*     return await commonAPI('POST',`${BASE_URL}/cource/add`,reqBody,"")
 */  }