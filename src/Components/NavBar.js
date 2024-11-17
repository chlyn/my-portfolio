import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../Assets/Img/Logo.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const NavBar = () => {

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
    
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>

        <Container>

            <Nav className="me-auto">
                <Nav.Link href="#works" className={activeLink === 'works' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('works')}>Works</Nav.Link>
                <Nav.Link href="/about-me" className={activeLink === 'about-me' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about-me')}>About Me</Nav.Link>
                <Nav.Link href="https://drive.google.com/file/d/1dTsTg18_iPSg571QYmDMX6ywfSKjYZ2L/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
            </Nav>

            
            <Navbar.Brand href="/" className="mx-auto">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
                
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="mailto:chlynespined@gmail.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-envelope-fill"></i></a>
                    <a href="https://linkedin.com/in/chenilyn/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
                    <a href="https://github.com/chlyn" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
                </div>
            </span>

        </Container>

      </Navbar>
    
  )

}
