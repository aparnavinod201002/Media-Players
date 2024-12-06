import { server_url} from "./server_url"
import { commonAPI } from "./commonAPI"


// upload video Api
export const uploadVideoAPI =async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}
// getAllUpload Video API
export const getAllVideosAPI =async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}

// getvideo API
export const getVideosAPI =async(id)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,"")
}

// delete videoAPI
export const deleteVideosAPI =async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}
// add video history
export const addVideoHistoryAPI =async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
}
// getvideohistory
export const getVideoHistoryAPI =async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}
// deletevideohistory
export const deleteVideoHistoryAPI =async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}
// add category api
export const addCategoryAPI =async(category)=>{
    return await commonAPI("POST",`${server_url}/category`,category)
}
// get category
export const getCategoryAPI =async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
}
// delete category
export const deleteCategoryAPI =async(id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}
//update
export const updateCatgoryAPI =async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}