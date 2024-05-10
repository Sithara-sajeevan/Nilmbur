import React from 'react'
function Footer() {
  return (

      <>
      <div className=' row  '  style={{height:'700px',marginTop:'500px',backgroundColor:'black',color:'white'}}>

     <div className='main'>
      <marquee behavior="" direction="left">
        <div style={{fontSize:'100px'}}><h6 style={{color:'black'}}>_</h6>  NILAMBUR SKILL  
        FOUNDATION_   <i class="fa-solid  fa-pen-fancy" style={{fontSize:'90px'}}></i>_  
        NILAMBUR SKILL  
        FOUNDATION  </div>   
       
   
      </marquee>
     </div>
        <div className='row ms-5' >
        <div className='col-lg-4  ' >
      <h3 >For more in-depth course descriptions, feel free to reach out.</h3>
      <button className='btn ' style={{backgroundColor:'maroon'}}>Read All News</button>
      </div>
      <div className='col-lg-2'>
        <h4>QUICKLINKS</h4>
        <h6>
        About <br />
        Courses <br />
        Hostel <br />
        News <br /> 
        Contact <br />
        </h6>
      </div>
      <div className='col-lg-2'>
        <h4>CONTACT US</h4>
        <h6>
               Rays Med/Entrance Coaching
           Corporate Office,
             3rd Floor, KKKM2 Tower,
            Thondayad, Kozhikode,
            Kerala 673016
             +91 8129 241 616
                 0495-2727355 /</h6>    
                    </div>
        <div className='col-lg-3'>
          <h4>REQUEST CALLBACK</h4>
          <h6>
                Please give us a number and we’ll call back at your convenience.</h6>     

               <div className='d-flex'>
                    <input type="number" className='form-control w-100' placeholder='Enter Yor Ph No'/>
                    <button style={{backgroundColor:'maroon'}} className='btn ms-2'>   <i  class="fa-solid fa-arrow-right " ></i>
                </button>
                </div>
            </div>
            </div>
            </div>

      </>



    
  )
}

export default Footer


