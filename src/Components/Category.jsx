import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getCategoryAPI, getVideosAPI ,updateCatgoryAPI} from '../../services/allAPI';
import VideoCard from './VideoCard'

function Category({dropVideoResponse}) {
  const[CategoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);
const[allCategories,setAllCategories]=useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd =async()=>{
    if(CategoryName){
      const result=await addCategoryAPI({CategoryName,allVideos:[]})
      console.log(result)
      if(result.status >=200 && result.status<300){
        handleClose()
      setCategoryName("")
      getCategories()
    }
    else{
      alert(result.messege)
    }
  }
    else{
      alert("Please fill missing field")
    }
  }
useEffect(()=>{
  getCategories()
},[dropVideoResponse])

const getCategories=async()=>{
  const {data}=await getCategoryAPI()
  setAllCategories(data)
  
}
console.log(allCategories);

const removeCategory=async(id)=>{
  await deleteCategoryAPI(id)
  getCategories()
}

const dragOver=(e)=>{
  console.log("video card dragging over the category");
  e.preventDefault()
  
}

const videoDrop=async (e,categoryId)=>{
  const videoId=e.dataTransfer.getData("videoId")
  console.log("video dropped inside "+videoId+" video dropped inside category "+categoryId);
  const {data}=await getVideosAPI(videoId)
  // console.log(data);

  const selectedCategory=allCategories.find(item=>item.id===categoryId)
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);
  await updateCatgoryAPI(categoryId,selectedCategory)
  getCategories()
  
  
}

const videodragStarted=(e,videoId,categoryId)=>{
  let dataShare={videoId,categoryId}
  e.dataTransfer.setData("data",(JSON.stringify(dataShare)))
}
  return (
    <>
      <div className='d-grid'>
        <button className='btn btn-info' onClick={handleShow}>Add Category</button>
      </div>
    
      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <input type='text' className='form-control' placeholder='Enter Category Name' onChange={e=>setCategoryName(e.target.value)}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
        Cancel
        </Button>
        <Button variant="primary" onClick={handleAdd}>Add</Button>
      </Modal.Footer>
    </Modal>
    {
      allCategories?.length>0?allCategories.map(category=>(
  <div className='border rounded mt-3 p-3' droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category.id)}>
    <div className='d-flex justify-content-between align-items-center'>
      <h5>{category.CategoryName}</h5>
      <button className='btn' onClick={()=>removeCategory(category.id)}><i className='fa-solid fa-trash text-danger'></i></button>
  
    </div>

    <Row>
      {
        category?.allVideos?.length>0?category.allVideos.map(card=>(
<Col sm={12} draggable onDragStart={e=>videodragStarted(e,card.id,category.id)}>
<VideoCard video={card} insideCategory={true}/>
</Col>
        )):null
      }
    </Row>
  </div>
  )):<p className='text-danger fw-bolder'>Nothing to Display</p>
}
  </>
  )
}


export default Category
