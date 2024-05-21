import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"


export const loginAPI = async(admins)=>{
    return await commonAPI('POST',`${BASE_URL}/admin/login`,admins,"")
  }

  export const userCourceAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${BASE_URL}/user/allproject`,"",reqHeader)
}

  export const addCourceAPI = async()=>{
/*     return await commonAPI('POST',`${BASE_URL}/cource/add`,reqBody,reqHeader)
 */  }



 export const   deleteCourceAPI = async(projectId,reqHeader)=>{
  //id is passed as path parameter
  return await commonAPI('DELETE',`${BASE_URL}/cource/remove/${projectId}`,{},reqHeader)
}