import React from 'react'
import {  Card } from 'react-bootstrap'
import image from '../image/img4.jpg';
import  image2 from '../image/image2.avif'
import Carousel from 'react-bootstrap/Carousel';
import image3 from '../image/100.avif'
import image4 from '../image/image4.avif'
function Home() {
  return (
    <div> 
<Carousel data-bs-theme="dark" style={{padding:'50px',marginTop:'100px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt=""
        />
        <Carousel.Caption>
          <h5></h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5></h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5></h5>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

{/* card */}


  <div className='card2'>
  <Card  style={{ width: '20rem',height:'20rem',backgroundColor:'black' }}>

<Card.Body style={{marginTop:'70px'}}>
  <Card.Title><h4>Nilambur Skill <br /> Foundation</h4></Card.Title>
  <Card.Text style={{backgroundColor:'red',marginLeft:'15rem'}} className='icon ' >
  <i  class="fa-solid fa-arrow-right " ></i>
  </Card.Text>

</Card.Body>
<div className='inner'>
<Card.Img variant="top" style={{marginTop:'5rem'}} className='cardimg' src={image3}/>

</div>

</Card>




<Card style={{ width: '20rem',height:'25rem',backgroundColor:'maroon' }}>

<Card.Body style={{marginTop:'70px'}}>
<Card.Title> <h4>Nilambur  Online  <br />Classes</h4> </Card.Title>
<Card.Text style={{backgroundColor:'red',marginLeft:'15rem'}} className='icon ' >
<i  class="fa-solid fa-arrow-right " ></i>

</Card.Text>

</Card.Body>
<div className='inner'>
<Card.Img variant="top" style={{marginTop:'5rem'}} className='cardimg' src={image4}/>

</div>
</Card>






<Card style={{ width: '20rem',height:'25rem',backgroundColor:'black' }}>

<Card.Body  style={{marginTop:'70px'}}>
<Card.Title><h4>Pg Diploma <br /> Cources</h4></Card.Title>
<Card.Text   style={{backgroundColor:'red',marginLeft:'15rem'}} className='icon2 '>
<i  class="fa-solid fa-arrow-right " ></i>

</Card.Text>

</Card.Body>
<div className='inner'>
<Card.Img variant="top" style={{marginTop:'5rem'}} className='cardimg' src={image3}/>

</div>
</Card>

  </div>

</div>


  )
}

export default Home