import { FloatingLabel, Form, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { uploadVideoAPI } from '../../services/allAPI';

function Add(setUploadVideoResponse) {

  const[uploadVideo,setUploadVideo]=useState({
    id:"",caption:"",url:"",link:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () =>{ setShow(false);
  setUploadVideo({
    id:"",caption:"",url:"",link:""
  })
  }
  const handleShow = () => setShow(true);
console.log(uploadVideo);

const getYoutubeLink =(e)=>{
  const {value}=e.target
  if(value.includes("v=")){
    let vID = value.split("v=")[1].slice(0,11)
    console.log({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`});
   
    setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
  }
  else{
    setUploadVideo({...uploadVideo,link:""})
  }
}
const handleAdd=async()=>{
  const{id,caption,url,link}=uploadVideo
  if(!id ||!caption ||!url ||!link){
    alert("Please fill missing fields")
  }else{
    const result =await uploadVideoAPI(uploadVideo)
    console.log(result)
    if(result.status>=200 && result.status<300){
      handleClose()
      alert("Video Added Successfully")
      //after getting successfull response
      setUploadVideo({
        id:"",caption:"",url:"",link:""
      })
      setUploadVideoResponse(result.data)
    }else{
      console.log(result.messege);
      alert(result.messege)
    }
  }
}

  return (
    <>
      <div className="d-flex align-items-center">
<h5>Upload Video</h5>
<button className='ms-2'  onClick={handleShow} style={{color:'blueviolet', backgroundColor:'black' ,border:'none' ,fontSize:'30px'}} ><i class="fa-solid fa-arrow-up-from-bracket fa-bounce mb-2 "></i></button>
</div>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Video Title">
        <Form.Control type="text" placeholder="Video Title" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})}/>
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Image Url"
        className="mb-3 mt-3"
      >
        <Form.Control type="text" placeholder="Image Url" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Video Url"
        className="mb-3 mt-3"
      >
        <Form.Control type="text" placeholder="Video Url" onChange={getYoutubeLink}/>
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add Video</Button>
        </Modal.Footer>
      </Modal>
      
     
    </>
  )
}

export default Add
