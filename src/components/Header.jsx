import React from 'react'
import img1 from '../image/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Header() {


  const navigate = useNavigate() 


  return (
     <>
           
     
      {[ 'sm'].map((expand) => (
        <Navbar key={expand} expand={expand}  className="bg-body-tertiary w-100  fixed-top mb-3">
          <Container >
            <Navbar.Brand href="/"><img src={img1} alt=""  width="290px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 ">
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/cources" >Courses</Nav.Link>
                  <Nav.Link href="#action2">Hostel</Nav.Link>
                  <Nav.Link href="#action2">News</Nav.Link>
                  <Nav.Link href="#action2">Contact</Nav.Link>
                  <Nav.Link href='/login' ><i class="fa-solid fa-user" ></i></Nav.Link>
                   <Nav.Link href="#link" style={{fontSize:'15px',marginTop:'5px'}}>
                    +91123456
                    </Nav.Link> 
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
           <div style={{display:'flex' }}>
        <a >   <i class="icon  fa-solid fa-phone "></i></a>
        <a  ><i  class="icon fa-brands fa-instagram ms-1"></i></a>
        <a ><i class=" icon fa-brands fa-youtube ms-1"></i></a>

       </div>
          </Container>
        </Navbar>
 ))}
    </> 
 )
}

export default Header