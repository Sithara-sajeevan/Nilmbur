import React from 'react'
import img1 from '../image/logo.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
     <>
           
     
      {[ 'sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary  fixed-top mb-3">
          <Container fluid>
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
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/cources" >Courses</Nav.Link>
                  <Nav.Link href="#action2">Hostel</Nav.Link>
                  <Nav.Link href="#action2">News</Nav.Link>
                  <Nav.Link href="#action2">Contact</Nav.Link>
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
           <div style={{display:'flex'}}>
        <a >   <i class="icon  fa-solid fa-phone "></i></a>
        <Nav.Link href="#link" style={{fontSize:'15px'}}>
     
     +91123456
     </Nav.Link>
  <a ><i  class="icon fa-brands fa-instagram"></i></a>
  <a ><i class=" icon fa-brands fa-youtube"></i></a>

       </div>
          </Container>
        </Navbar>
 ))}
    </> 
 )
}

export default Header