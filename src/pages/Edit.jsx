import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import EditDetails from './EditDetails'
import AddCource from './AddCource'
import { deleteCourceAPI, userCourceAPI } from '../sevices/allApi'

function Edit() {

const [userCourse,setUserCource]=useState()

const getUserCource = async()=>{

  const token = sessionStorage.getItem("token")
  const reqHeader = {
    "Content-Type": "application/json",
   }
   const result = await userCourceAPI(reqHeader)
   console.log(result.data);
   setUserCource(result.data)
   }
   


  const handleDelete = async(id)=>{
    const reqHeader = {
      "Content-Type": "application/json",
     }
     const result = await deleteCourceAPI(id,reqHeader)
     console.log(result);
     if(result.status=== 200){
      getUserCource()
     }
     else{
      console.log(result.response.data);
     }
    }



  return (
    <>

<div className='form shadow w-75 ms-5  ' style={{height:'20rem',marginTop:'10rem',justifyContent:'center',alignItems:'center'}}>
      <div className='d-flex'style={{alignContent:'center',alignItems:'center' , justifyContent:'center'}}>
    <h3 className='text-success '>Cources</h3>
    <div className='ms-auto'>
      <AddCource/>
    </div>
    </div>
    <div className="mt-5 " style={{height:'30rem'}}>
    <div className='border align-items-center  d-flex  bg-light'>
      <h5>Course Name</h5>


      <div className='icon1 ms-auto ' >
      
      <button  className='btn me-2'style={{backgroundColor:'maroon'}} ><i class="fa-solid fa-pen-to-square" ></i></button>
     
    <button  className='btn 'style={{backgroundColor:'maroon'}} ><i class="fa-solid fa-trash" onClick={()=>handleDelete()} ></i></button>
      </div>
      
   
    </div>
     
      <p className='text-danger fs-3 '><b>No Cource upload yet</b></p>
    </div>
    </div>


   
    </>
  )
}

export default Edit

//nilamburskillfoundation000
//nilamburskillfoundation@gmail.com