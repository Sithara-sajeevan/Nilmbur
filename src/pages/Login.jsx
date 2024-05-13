import React from 'react'

//import { loginAPI, registerAPI } from '../../services/allAPI'
import { Button, Form } from 'react-bootstrap'


//import 'react-toastify/dist/ReactToastify.css';



function Login() {
  return (
    <>
    <div className='d-flex ' style={{marginTop:'2rem',color:'white'}}>
    <div className='col-lg-4'></div>

    <div className='col-lg-4' style={{marginTop:'150px',width:'500px' ,alignItems:'center',backgroundColor:'darkgreen',height:'300px'}}>
    <h2 style={{textAlign:'center'}} >Welcome Admin</h2>
    <Form className='form  ms-5' >
      <Form.Group style={{}} controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Enter email"  style={{width:'25rem'}}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="Password" style={{width:'25rem'}} />
      </Form.Group>
     
      <Button variant="" style={{backgroundColor:'maroon'}} type="submit">
        Login
      </Button>
    </Form>
    </div>
    <div className='col-lg-4'></div>

    </div>
 

        </>
  )
}

export default Login

