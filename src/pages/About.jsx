import React from 'react'
import img from '../image/img5.webp'
function About() {
  return (
    <>
     <div  style={{backgroundColor:'maroon',marginTop:'10rem',height:'200px',textAlign:'center' ,width:'100%',color:'white'}} >
    <h1 style={{marginTop:'50px'}}  >About Us</h1>
    </div>
    <div className='row mt-5  ms-3'>
        <div className='col-lg-6'>
            <h2>Nilambur  Making every student a success story</h2>
            <h5 style={{letterSpacing:'1px'}}>  NSF is a National level accredited Skill training center and Skill assessment& certification body under the central government of India(NSDC), that functions alongside Amal College of Advanced Studies, Myladi. <br /> 
NSF is associated with CAMBRIDGE and other major organizations across the world. The motto behind bringing an institution like NSF to Nilambur, Kerala is to train our youth for better employment across this competitive world and cater to the increasing demand for trained labor. <br /> We envision building a secure future for our students by giving them promising education through the introduction of world-class skill development programs, thereby creating inspired and skilled employees who can build successful careers and contribute to society.

</h5>
        </div>
        <div className='col-lg-6'>
            <img src={img} alt="" />
        </div>

    </div>
    
    
    </>
  )
}

export default About