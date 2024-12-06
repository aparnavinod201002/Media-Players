import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { useState } from 'react'
import { getAllVideosAPI, getCategoryAPI, updateCatgoryAPI } from '../../services/allAPI';

function View({uploadVideoResponse,setDropVideoResponse}) {

  const[allVideos,setAllVideos] =useState([])
const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)
  useEffect(()=>{
    getUploadedVideos()
    setDeleteVideoResponse(false)
  },[{uploadVideoResponse},deleteVideoResponse])



    const getUploadedVideos =async ()=>{
      const result =await getAllVideosAPI()
      
      if(result.status==200){
        setAllVideos(result.data)
        
      }else{
        setAllVideos([])
        console.log("API Failed")
      }
    }
 const videodragOver=(e)=>{
  e.preventDefault()
 }
const videoDropped=async(e)=>{
  const{videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
  // console.log(videoId,categoryId);
  const {data}=await getCategoryAPI()
  const selectedCategory=data.find(item=>item.id==categoryId)
  let result=selectedCategory.allVideos.filter(video=>video.id!==videoId)
  // console.log(result);
  let{id,categoryName}=selectedCategory
  let newCategory={id,categoryName,allVideos:result}
  console.log(newCategory);
 const res=await updateCatgoryAPI(categoryId,newCategory)
 setDropVideoResponse(res)
  
  
}

  return (
    <>
      <Row droppable="true" onDragOver={e=>videodragOver(e)} onDrop={e=>videoDropped(e)}>
        {
          allVideos?.length>0?allVideos.map(video=>(
        
        <Col sm={12} md={6} lg={4}>
         
        <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
       )):<p>Nothing to display</p>
      }
      </Row>
    </>
  )
}

export default View
