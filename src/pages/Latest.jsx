import React from 'react'
import img1 from '../image/WEB bg1 .jpg'
import '../STyle/latest.css'

function Latest() {
  return (
    <>
    <img src={img1} className='bg' alt="Snow" style={{width:'100%'}}/>
   
   <div class="centered"><h2>All Latest</h2></div>
  

   
   <div className='row d-flex'>
   <div className="col-lg-2"></div>


<div className="col-lg-8 shadow" style={{height:'600px'}}>
   <div className=' mt-5' id='container'>
<img  className='center ' src="https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg" alt="" />

   <h3 >PG & Diploma Admissions Open 
     <br />for 2024-25 at Amal College, Nilambur</h3>
      <h6>The Nilambur Skills Foundation is a Non-Profit Organization registered under the Section 8, Companies Act, 2013. NSF is a vocational training institution located on Amal College Campus, Nilambur, Kerala, India.</h6>
 </div>


 </div>






<div className="col-lg-2"></div>

   </div>

    </>
   
  )
}

export default Latest