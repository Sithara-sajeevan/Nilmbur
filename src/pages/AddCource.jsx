import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCourceAPI } from '../sevices/allApi';



function AddCource() {

const [courceDetails,setCourceDetails]=useState({
  content:"",
  image:""

})


    const [show, setShow] = useState(false);
     const [preview,setPreview]=useState("")
    useEffect(()=>{
      courceDetails.image &&
      setPreview(URL.createObjectURL(courceDetails.image))
    },[courceDetails.image])
console.log(preview);
console.log(courceDetails);


 const handleClose = () => {
  setShow(false)
  handleClose1()

}
const handleClose1 = () => {

  setCourceDetails({
    content:"",
    courceImage: ""
  })
  setPreview("")
};

const handleCource=async(e)=>{
  e.preventDefault()
  const{content,image}=courceDetails

  if(!content,!image){
    alert('please fill compleatdly')
  }
  else{
    const result =await addCourceAPI()
    console.log(result);
  }
}


    const handleShow = () => setShow(true);
  
  return (
    <div>

<Button variant="primary" onClick={handleShow}>
       Add Cource
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <div className='row'>
   
           <div className='col-lg-6'>
              <label htmlFor="upload">
                <input type="file" id='upload' style={{ display: 'none' }} onChange={(e)=> setCourceDetails({ ...courceDetails, image: e.target.files[0] })}/>
                <img className='img-fluid' src={preview?preview: "https://cdn-icons-png.flaticon.com/512/4211/4211763.png"} alt=""  />
              </label>
            </div>
          <div className='col-lg-6'>
            <div className='mb-3 mt-3'>
              <input type="text" placeholder='enter cource name' style={{width:'13rem',height:'50px'}} name="" id=""   value={courceDetails.content} onChange={(e) => setCourceDetails({ ...courceDetails, content: e.target.value })}  />
            </div>
          </div>
        </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
           Cancel
          </Button>
          <Button variant="primary" onClick={handleCource}>
           Add 
          </Button>
        </Modal.Footer>
      </Modal>




    </div>
  )
}

export default AddCource