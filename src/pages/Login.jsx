 import React, { useState } from 'react'

//import { loginAPI, registerAPI } from '../../services/allAPI'
import { Button, Form } from 'react-bootstrap'
import { loginAPI } from '../sevices/allApi';
import Swal from 'sweetalert2';
import { Link, Navigate, useNavigate } from 'react-router-dom';

//import 'react-toastify/dist/ReactToastify.css';



function Login() {
  const [adminData, setAdminData] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate() 


  console.log(adminData);

/* const handlelogin=async(e)=>{
  e.preventDefault()
  const {email,password}=adminData
  if(!email || !password){
      alert('please fill the form completely')
  }
  else{
      const result=await loginAPI(adminData)
      console.log(result);
      if (result.data.email==="admin@gmail.com" && result.data.password==="adin123") {
          navigate('/edit')
          
      }
      else{
         navigate('/home')
      }
      if(result.status===200){
          Swal.fire({
              icon: 'success',
              title: 'Login Successfull!',
             
             
            })
          /*  setauthtoken(true) 
          

          sessionStorage.setItem(" existuser",JSON.stringify(result.data.existuser))
          sessionStorage.setItem("token",(result.data.token))
         

          setAdminData({
             
              email:"",
              password:""

          })
      }
      else{
          alert(result.response.data)
      }
    
  }

}  */
 
const handlelogin = async(e)=>{
  e.preventDefault()
  const { value: password } = await Swal.fire({
    title: "Enter your OTP",
    input: "password",
    inputLabel: "Password",
    inputPlaceholder: "Enter your OTP",
    inputAttributes: {
      maxlength: "10",
      autocapitalize: "off",
      autocorrect: "off"
    }
  });

  navigate('/edit')


}
  
  return (
    <>
   <div className='d-flex ' style={{marginTop:'2rem',color:'white'}}>

  
    
    <div className='col-lg-4'></div>

    <div className='col-lg-4' style={{marginTop:'150px',width:'500px' ,alignItems:'center',backgroundColor:'darkgreen',height:'300px'}}>
    <h2 style={{textAlign:'center'}} >Welcome Admin</h2>
    <Form className='form  ms-5' >
      <Form.Group style={{}} controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Enter email"  style={{width:'25rem'}}  value={adminData.email} onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="Password" style={{width:'25rem'}}  value={adminData.password} onChange={(e) => setAdminData({ ...adminData, password: e.target.value })}/>
      </Form.Group>
     
      <Button variant="" style={{backgroundColor:'maroon'}} type="submit"   onClick={handlelogin}   >
        <Link to={'/edit'}>Login</Link>
      </Button>
    </Form>
    </div>
    <div className='col-lg-4'></div>

      </div>


        </>
  )
}

export default Login

 