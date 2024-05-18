import React from 'react'
import {  Card, Col, Row } from 'react-bootstrap'
import image from '../image/img4.jpg';
import  image2 from '../image/image2.avif'
import Carousel from 'react-bootstrap/Carousel';
import image3 from '../image/100.avif'
import image4 from '../image/image4.avif'
import img6 from '../image/images6.jpg'
import img7 from '../image/letters.png'
import img8 from '../image/girl2.png'
import img9 from '../image/codding-removebg-preview.png'
function Home() {


  return (
    <> 
    <section>
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

    </section>

 
<section>
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

</section>

 

 
<section>
<div className='container   ' style={{alignItems:'center',textAlign:'center',justifyContent:'center',fontSize:'2rem' }}>
<ul className='li d-flex p-5 ' >
    <li>Nilambur</li>
    <li>Nilambur</li>
    <li>Nilambur</li>

  </ul>

 
</div>
</section>
{/*
<section>
  


<div className='row d-flex'>
<div className=' col-lg-2 mt-5'>
</div>
<div className=' col-lg-10' id='container'>
  
<img className='circle' src="https://rayseducation.org/wp-content/themes/rays/images/emblem.png"    style={{marginLeft:'750px',marginTop:'px'}} alt="" />
<img style={{width:'100%'}} src={img6} alt="" />
{/* <div className='container'>


</div> 
<div class="centered d-flex">
  <div className='col-lg-6'>
    <img src={img7} style={{width:'35rem',marginRight:'50rem'}} alt="" />
  </div>
  <div className='col-lg-4' style={{color:'white'}}>
  <h4>RAYS – Making every student a success story</h4>
  <p>
RAYS Education was established in 2005 with the aim of providing and enhancing excellent education in the disciplines of engineering and medical. With its corporate office in Calicut, Kerala, RAYS has now grown to include Kannur, Vadakara, and Trivandrum.
</p>
  </div>

</div>

</div>

</div>

</section>

<section>

  */}

 
 


  <div className="parent d-flex">
    <div className='col-lg-2'></div>
    <div className='col-lg-10'>
    <img className="image1 "  src={img6}  style={{width:'65rem',height:'45rem',marginTop:'6rem'}}/>

    <img className="image2" id='circle' md={{ span: 4, offset: 4 }} src="https://rayseducation.org/wp-content/themes/rays/images/emblem.png" style={{}}/>
    
  

    <div className='container   ' style={{alignItems:'center',textAlign:'center',justifyContent:'center', }}>
<ul className='list d-flex  ' style={{fontSize:'30px',gap:'40px'}} >
    <li>1000+ <br /> students</li>
    <li>100+ <br />  teachers</li>
    <li>1000+ <br /> students</li>
    <li>100+ <br /> teachers</li>

  </ul>

 
</div> 
    


    <div class="centered d-flex mt-5">
  <div className='col-lg-8'>
    <img src={img7} className='' style={{width:'40rem',marginRight:'30rem'}} alt="" />
  </div>
  <div className='col-lg-4' style={{color:'white'}}>
  <h2 style={{fontWeight:"bolder"}}>Nilambur Making every student a success story</h2>
  <p>
NSF Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem porro optio a inventore quas ut, velit culpa aliquam numquam, impedit repudiandae autem assumenda dignissimos ad dicta vitae fugit in.
</p>
<a href=""> Read More</a>

    </div>
    </div>    
     </div>
</div>



<div class="centered d-flex " style={{marginTop:'10rem',textAlign:'center',alignItems:'center'}} id='container'>
<div className='d-flex'>
<div className='col-lg-4 d-flex'>
<div className='centered  ' style={{fontSize:'100px',fontWeight:'bolder',fontFamily:'serif'}} >PLANNING FOR PG </div>
<div className='col-lg-8 '>
<img src={img8} id='img8' style={{width:'50rem',}} 
alt="" />
 
 </div> 

</div>
</div>

   
</div>








<section>
<h1 style={{color:'maroon'}}>Students Testimonoial</h1>

  <Carousel className=' container ' >
  


      <Carousel.Item interval={1000}>
        <div className='d-flex'>
        <div className='col-lg-6' >
          <h3 style={{color:'black'}}>first slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
      </div>
      <div className='col-lg-6 '>
          <img className=' mb-5'style={{marginLeft:'300px'}}  src={img9} width={'150px'} alt="" />
        </div>
        </div>
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div className='d-flex'>
        <div className='col-lg-6' >
          <h3 style={{color:'black'}}>sec slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
      </div>
      <div className='col-lg-6 mb-5 '>
          <img style={{marginLeft:'300px'}}  src={img9} width={'150px'}  alt="" />
        </div>
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex'>
        <div className='col-lg-6' >
          <h3 style={{color:'black'}}>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
      </div>
      <div className='col-lg-6 '>
          <img style={{marginLeft:'300px'}} src={img9}  width={'150px'} alt="" />
        </div>
        </div>
        
        
      </Carousel.Item>
    </Carousel>






</section>


</>


  )
}

export default Home