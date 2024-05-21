import React from 'react'

function News() {
  return (
    <>
        <div  className='' style={{backgroundColor:'maroon',height:'150px',textAlign:'center' ,width:'100%',color:'white'}} >
    <h1 className='' style={{marginTop:'10rem'}} >News</h1> 
     </div>
     <div className=' ms-5 mt-5 p-5 me-5' style={{backgroundColor:'lightgrey'}}>
     <div className='row' >
      <h1>News And Events</h1>
      <div className='col'>
        <img src="https://rayseducation.org/wp-content/uploads/2024/02/AG_Malayalamanorama_33x47cm_V1_page-0001-scaled.jpg" style={{width:'400px'}} alt="" />
      </div>
      <div className='col'>
        <h2>Exam Result</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa beatae voluptatibus velit omnis sapiente excepturi
        </p>
      </div>
      
     </div>
     <div className='hover  ' >
     <div className=" row mt-4 ">
      <div className="col " style={{height:'10rem'}}> 
      <img className='mt-1' style={{width:'150px'}} src="https://rayseducation.org/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-10.05.33-AM.jpeg" alt="" />

      </div>
      <div className="col">
        <h5>Rays Young Genius Exam ( CBSE Syllabus Students)</h5>
      </div>

     </div>
     </div>
    
     <div className='hover  '>
     <div className=" row mt-4 ">
     <div className="col " style={{height:'10rem'}}> 
      <img className='mt-1' style={{width:'150px'}} src="https://rayseducation.org/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-10.05.33-AM.jpeg" alt="" />

      </div>
      <div className="col">
        <h5>Rays Young Genius Exam ( CBSE Syllabus Students)</h5>
      </div>

     </div>
     </div>
     </div>
 
     </>
  )
}

export default News