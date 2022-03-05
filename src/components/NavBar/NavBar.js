
import {Navbar,Container,Nav}    from 'react-bootstrap'
import Cartwidget from '../CartWidget/Cartwidget'
import { LinkContainer } from 'react-router-bootstrap'
import logo from './Images/logo.jpg'
const NavBar = (children) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand >
                        <img
                            src={logo}
                            width="120"
                            height="120"
                            className="d-inline-block align-middle"
                            alt="AUTOMOTORES"
                        />
                            AUTOMOTORES
                        </Navbar.Brand>   
                    </LinkContainer>  
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to='/category/motos'>
                                    <Nav.Link>Motos</Nav.Link>
                                </LinkContainer>    
                                <LinkContainer to='/category/autos'>
                                    <Nav.Link  >Autos</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/category/pickUp'>
                                    <Nav.Link>Pick-Up</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/category/offRoad'>
                                    <Nav.Link> Off-Road </Nav.Link>
                                </LinkContainer>
                            </Nav>
                            <Nav>
                                <LinkContainer to='/cart'>
                                    <Nav.Link>  <Cartwidget/> </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar 

 