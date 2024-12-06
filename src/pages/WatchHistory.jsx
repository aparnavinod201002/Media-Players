import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteCategoryAPI, deleteVideoHistoryAPI, getVideoHistoryAPI } from '../../services/allAPI'

function WatchHistory() {
  const [history,setHistory]=useState([])
    useEffect(()=>{
      getHistory()
    },[])
    
    const getHistory=async ()=>{
      const result=await getVideoHistoryAPI()
      console.log(result)
      if(result.status==200){
        setHistory(result.data)
      }else{
        console.log("API Failed")
        console.log(result.messege);

      }
    }
console.log(history)
const removeHistory=async(id)=>{
  await deleteVideoHistoryAPI(id)
  getHistory()
}
  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <h2>Watch History</h2>

        <Link style={{textDecoration:'none',color:'blueviolet' ,fontSize:'25px'}}to={'/Home'}>Back To Home
<i className='fa-solid fa-arrow-rotate-left fa-beat-fade'></i></Link>      </div>
<table className='table mb-5 container shadow w-100'>
    <thead>
        <tr>
            <th>#</th>
            <th>caption</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
      {
        history?.length>0?history.map((video,index)=>(
          <tr key={index}>

          <td>{`${index+1}`}</td>
          <td>{`${video.caption}`}</td>
          <td><a href={`${video.link}`} target='_blank'>{`${video.link}`}</a></td>
          <td>{`${video.timeStamp}`}</td>
          <td><button className='btn' onClick={()=>removeHistory(video.id)}><i className='fa-solid fa-trash text-danger'></i></button></td>
      </tr>
        )):<p className='text-danger fw-bolder'>Nothing to Display</p>
      }
    
    </tbody>
</table>
    </>
  )
}

export default WatchHistory
