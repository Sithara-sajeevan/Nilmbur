import React from 'react'
import Card from 'react-bootstrap/Card';
import img from '../image/image4.avif'




function Cources() {
  return (
  <>
  <div  style={{backgroundColor:'maroon',height:'100px',textAlign:'center' ,width:'100%',color:'white',alignContent:'center'}} >
   
    <h1 className='' style={{marginTop:'150px'}} >Cources</h1>

</div>


     <div className='ms-5' style={{ padding:'30px', marginTop:'40px'}}  > 
   
      
      <Card className='c2'  style={{ width: '22rem',height:'22rem' ,backgroundColor:'maroon'}}>
      <Card.Img variant="top" src={img}  />
      <Card.Body >
        <Card.Text>PG Diploma in Logistics & <br /> Supply chain management</Card.Text>
       
      </Card.Body>
    </Card>
        
    <Card className='c2' style={{ width: '22rem',height:'22rem' ,backgroundColor:'maroon' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body >
        <Card.Text>	PG Diploma in English <br />Language Teaching</Card.Text>
       
      </Card.Body>
    </Card>
       <Card className='c2' style={{ width: '22rem',height:'22rem' ,backgroundColor:'maroon' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body >
        <Card.Text>		PG Diploma in <br /> Hotel Management</Card.Text>
       
      </Card.Body>
    </Card>
     
  

   <Card className='c2' style={{ width: '22rem',height:'22rem' ,backgroundColor:'maroon' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body >
        <Card.Text>	3 Months Medical  <br />coding& Billing course</Card.Text>
       
      </Card.Body>
    </Card>
 
       
<Card className='c2' style={{ width: '22rem',height:'22rem' ,backgroundColor:'maroon' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body  >
        <Card.Text >	CMA INDIA INTERMIDIATE Cost <br />and management accountant</Card.Text>
       
      </Card.Body>
    </Card>


<Card className='c2' style={{ width: '22rem',height:'22rem',marginTop:'10px' ,backgroundColor:'maroon' }}>
      <Card.Img variant="top" src={img}  />
      <Card.Body  >
        <Card.Text  >1 year  diploma in EV service technician,EV <br /> assembly  operator, EV charging station technician</Card.Text>
       
      </Card.Body>
    </Card>


      
        
    
   
  
    </div>
    
    
    
 
  </>
  )
}

export default Cources

