import React from 'react'
import {  Card } from 'react-bootstrap'
import image from '../image/img4.jpg';
import  image2 from '../image/image2.avif'
import Carousel from 'react-bootstrap/Carousel';
import image3 from '../image/100.avif'
import image4 from '../image/image4.avif'


function Home() {


  return (
    <> 
<Carousel className='container-fluid' data-bs-theme="dark" style={{marginTop:'100px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt=""
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>



<div className='c3 container mt-5' style={{justifyContent:'center'}}>
  <div className='c1 '>

  <Card.Title className='c2' style={{ width:'20rem',height:'15rem'}} >   
   <div style={{width: '20rem',height:'15rem',marginTop:'6rem',textAlign:'center',color:'white'}}>
  <h4>Pg Diploma <br /> Cources</h4>
  <Card.Text    style={{backgroundColor:'red',marginLeft:'15rem'}} className='icon2 '>
<i  class="fa-solid fa-arrow-right " ></i>
</Card.Text>
  </div>
  </Card.Title>
<div className='inner'>
<Card.Img variant="top" style={{  width:'20rem',height:'15rem'}} className='cardimg' src={image4}/>

</div>
  </div>



  
  <div className='c1'>

<Card.Title className='c2' style={{ width:'20rem',height:'15rem'}}>
      <div style={{width: '20rem',height:'15rem',marginTop:'6rem',textAlign:'center',color:'white'}}>
<h4>Pg Diploma <br /> Cources</h4>
<Card.Text    style={{backgroundColor:'red',marginLeft:'15rem'}} className='icon2 '>
<i  class="fa-solid fa-arrow-right " ></i>
</Card.Text>
</div>
</Card.Title>
<div className='inner'>
<Card.Img variant="top" style={{  width:'20rem',height:'15rem'}} className='cardimg' src={image4}/>
</div>
</div>

<div className='c1'>
  <Card.Title className='c2' style={{ width:'20rem',height:'15rem'}} >
        <div style={{width: '20rem',height:'15rem',marginTop:'6rem',textAlign:'center',color:'white'}}>
  <h4>Pg Diploma <br /> Cources</h4>
  <Card.Text    style={{backgroundColor:'red',marginLeft:'15rem'}} className='icon2 '>
<i  class="fa-solid fa-arrow-right " ></i>
</Card.Text>
  </div>
  </Card.Title>
<div className='inner'>
<Card.Img variant="top" style={{  width:'20rem',height:'15rem'}} className='cardimg' src={image4}/>

</div>
  </div>
  </div>



  




</>


  )
}

export default Home