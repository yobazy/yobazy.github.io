import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';



export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.ScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.addEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  return (
    <Navbar expand="lg" className="navbar-backdrop">
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src={logo} alt="Welcome"/> */}
          <Nav.Link href="#home" className={activeLink == 'home' ? 'active navbar-link' : 'navbar-link'} style={{ color: 'white' }}onClick={() => onUpdateActiveLink('home')}>Welcome</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span class="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink == 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink == 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink == 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            {/* <Nav.Link href="#blog" className={activeLink == 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blog')}>Blog (coming soon)</Nav.Link> */}

          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/bazilkhan" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt=""></img></a>
              <a href="https://github.com/yobazy" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" className="nav-icon"></img></a>
            </div>
            <a href="https://www.linkedin.com/in/bazilkhan" target="_blank" rel="noopener noreferrer">
              <button className="vvd"><span>Let's connect</span></button>
            </a>          
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
