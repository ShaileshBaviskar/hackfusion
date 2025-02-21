import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaVoteYea, FaHospital, FaBuilding, FaFileAlt, 
         FaGraduationCap, FaComments, FaWallet, FaUserCircle } from 'react-icons/fa';
import '../styles/theme.css';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <Navbar bg="white" expand="lg" className="navbar-modern sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/logo.svg"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
            alt="College Logo"
          />
          <div>
            <div className="fw-bold">College Management</div>
            <div className="text-muted small">System</div>
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link 
              as={Link} 
              to="/elections"
              className={`nav-link-modern mx-1 ${isActive('/elections')}`}
            >
              <FaVoteYea className="me-2" /> Elections
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/health"
              className={`nav-link-modern mx-1 ${isActive('/health')}`}
            >
              <FaHospital className="me-2" /> Health
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/facilities"
              className={`nav-link-modern mx-1 ${isActive('/facilities')}`}
            >
              <FaBuilding className="me-2" /> Facilities
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/applications"
              className={`nav-link-modern mx-1 ${isActive('/applications')}`}
            >
              <FaFileAlt className="me-2" /> Applications
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/academic"
              className={`nav-link-modern mx-1 ${isActive('/academic')}`}
            >
              <FaGraduationCap className="me-2" /> Academic
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/complaints"
              className={`nav-link-modern mx-1 ${isActive('/complaints')}`}
            >
              <FaComments className="me-2" /> Complaints
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/budget"
              className={`nav-link-modern mx-1 ${isActive('/budget')}`}
            >
              <FaWallet className="me-2" /> Budget
            </Nav.Link>

            <div className="ms-2 d-flex align-items-center">
              <Button 
                variant="outline-primary" 
                className="btn-modern d-flex align-items-center"
              >
                <FaUserCircle className="me-2" /> Login
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
