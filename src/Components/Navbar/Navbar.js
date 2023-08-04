import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css';
import ham from '../../assets/img/ham.png';

const Nnavbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <>
      
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand} className={`fixed-top mb-3 ${scrolled ? 'scrolled' : ''}`} >
            <Container fluid>
              <Navbar.Brand></Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{border: 'none'}}><img src={ham} alt="" height={'15px'}  /></Navbar.Toggle>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                className='blurry'
              >
                {/* <Offcanvas.Header closeButton style={{ backgroundColor: 'rgb(12,12,12)' }}>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    
                  </Offcanvas.Title>
                </Offcanvas.Header> */}
                <Offcanvas.Body className='offcanvas_class'>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active nav-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#statusquo" className={activeLink === 'statusquo' ? 'active nav-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('statusquo')}>Status Quo</Nav.Link>
                    <Nav.Link href="#work" className={activeLink === 'work' ? 'active nav-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('work')}>Work</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active nav-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active nav-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href="#about" className={activeLink === 'about' ? 'active nav-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                    <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active nav-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
                    
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      
    </>
  )
}

export default Nnavbar;