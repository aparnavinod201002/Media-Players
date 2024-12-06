import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
   const navigateByUrl=useNavigate()
  return (
    <>
     <Row className="mt align-items-center justify-content-between w-100 ">
        <Col></Col>
        <Col lg={5}><h1 style={{fontSize:'40px'}}>Welcome to <span className='text-warning'>Media-player</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur quasi, dignissimos omnis iure cupiditate ab numquam nam voluptas itaque tempore deleniti culpa eos. Nesciunt unde numquam quis ullam est.
      Officiis quia et soluta sed quos minus eligendi, provident minima a esse repudiandae sequi laborum ab, harum ratione odit aut praesentium blanditiis maxime atque aliquid laudantium culpa optio fugit? Esse.
      Est ab, alias reprehenderit non maxime quae sint iste accusamus qui doloribus voluptas corporis quo aspernatur, dolorem sunt. Voluptate, adipisci ex culpa vitae officiis blanditiis laborum repellat assumenda ratione provident!</p>
   <button className='btn btn-info mt-4' onClick={()=>navigateByUrl('/Home')}>Get Started</button> </Col>
        
        
   
   <Col lg={5} sm={12} md={6} >
   <img src="https://media.tenor.com/1h1DEs5fNNEAAAAC/music-beat.gif" alt='1'/>
   </Col>
   <Col></Col>
   </Row>
   <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column' sm={12} md={6} lg={5}>
    <h3>Features</h3>
    <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100' sm={12} md={6} lg={5}>
      <Card style={{width:'22rem'}} className='p-4 bg-info'>
        <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif"/>
        <Card.Body>
          <Card.Title className='text-primary'>Managing Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the cards content
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{width:'22rem'}} className='p-4 bg-info'>
        <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif"/>
        <Card.Body>
          <Card.Title className='text-primary'>Managing Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the cards content
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{width:'22rem'}} className='p-4 bg-info'>
        <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif"/>
        <Card.Body>
          <Card.Title className='text-primary'>Managing Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the cards content
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
   </div>
   <div className='container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100'>
    <div className='col-lg-5'>
      <h4 className='text-warning'>Simple Powerful & Fast</h4>
      <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fuga. Sit et possimus consectetur vel beatae, quisquam enim molestiae dolorum a quos laborum quia pariatur alias, corrupti odio aliquid suscipit!</h6>
      <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fuga. Sit et possimus consectetur vel beatae, quisquam enim molestiae dolorum a quos laborum quia pariatur alias, corrupti odio aliquid suscipit!</h6>
      <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fuga. Sit et possimus consectetur vel beatae, quisquam enim molestiae dolorum a quos laborum quia pariatur alias, corrupti odio aliquid suscipit!</h6>
    
    </div>
    <div className='video col-lg-5'>
      <iframe width="100%" height="400" src="https://www.youtube.com/embed/ccpVpcP8m44" title='Best of Sushin Shyam 2023 | Audio Jukebox | Hits of Sushin Shyam | OST' frameBorder="0" allow="accelerometer; autoplay; clipboard-write;encrypted-media;gyroscope;picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
   </div>
   
    </>
  )
}

export default LandingPage
