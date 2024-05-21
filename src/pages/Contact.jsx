import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function Contact() {


const [details,setDetails]=useState({
    name:"",
    email:"",
    number:"",
    subject:"",
    message:""
})



  return (

    
    < >
       
    <div  className='' style={{backgroundColor:'maroon',height:'200px',textAlign:'center' ,width:'100%',color:'white'}} >
   
   <h1 className='' style={{marginTop:'10rem'}} >Cources</h1>  </div>
    <h1  className='ms-5' style={{color:'black'}}>Send Your Enquiries</h1>
  
<div className='ms-5 mt-5 me-5' >
<Form >
    <div className='row '>
      <div className='col '>
 
        <Form.Control className='contact' type="text" placeholder="Name" />
        

      </div>
      <div className="col">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className='contact' type="text" placeholder="Email Address" />
        
      </Form.Group>
      </div>
    </div>
    <div className='row '>
      <div className='col '>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className='contact' type="text" placeholder="Telephone No" />
        
      </Form.Group>

      </div>
      <div className="col">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className='contact' type="text" placeholder="Subject" />
        
      </Form.Group>

      </div>
    </div>
    <Form.Control className='contact' type="text" placeholder="Message" style={{height:'5rem'}} />
      
    <Button className='ms-5 mt-5 rounded' variant="" style={{backgroundColor:'green' }} type="submit">
        SEND NOW <i class="fa-solid fa-arrow-right"></i>
      </Button>
      </Form>
      </div>

<div  style={{marginTop:'10rem'}} className='row mb-5 d-flex ms-5'>

  <div className='col-sm-4 '>
  <Card style={{ width: '20rem',  color:'black'}}>
      <Card.Body>
        <Card.Title>Corporate Office</Card.Title>
        <hr />
        <div className='row'>
        <div className='col-sm-2'>
        <i class="icon fa-solid fa-location-dot">
        </i>
        </div>
        <div className='col'>
       
          <Card.Text>
            <h4>Address</h4> 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti praesentiume?
        </Card.Text>
        </div>
        </div>
        <hr />
       
  
        <div className='row'>
        <div className='col-sm-2'>
        <i class="icon fa-solid fa-envelope"></i>
        </div>
        <div className='col-sm-9'>
          <Card.Text>
            <h4>Email</h4> 
          <p>nilamburskillfoundation000@gamil.com</p>

        </Card.Text>
        </div>
        </div>
        <hr />
        <div className='row'>
        <div className='col-sm-2'>
        <i class="icon fa-solid fa-phone"></i>
        </div>
        <div className='col-sm-9'>
          <Card.Text>
            <h4>Centralised Call centre</h4> 
          <p>0495-2727355 / 0495-2722008
+91 8129 241 616</p>

        </Card.Text>
        </div>
        </div>
      
      </Card.Body>
    </Card>
  </div>
  <div className=' col-sm-8'>

  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4016727.006359551!2d73.49627234133274!3d10.533318477276934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1716133606628!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

</div>
    </>
  )
}
