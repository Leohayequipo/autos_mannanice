
import Navbar    from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav       from 'react-bootstrap/Nav'
import Cartwidget from '../CartWidget/Cartwidget'
import { LinkContainer } from 'react-router-bootstrap'
import ima from './Imagenes/logo1.jpg'

const NavBar = (children) => {
    console.log(children)
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to='/'>
                    
                    <Navbar.Brand >
                    <img
                        src={ima}
                        width="100"
                        height="100"
                        className="d-inline-block align-middle"
                        alt="AUTOMOTORES"
                    />
                        AUTOMOTORES
                    </Navbar.Brand>   
                </LinkContainer>  
                
            {/*<Navbar.Brand href="#home"></Navbar.Brand>*/}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to='/categoria/motos'>
                        <Nav.Link>Motos</Nav.Link>
                   </LinkContainer>    
                    <LinkContainer to='/categoria/autos'>
                        <Nav.Link  >Autos</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/categoria/pickUp'>
                        <Nav.Link>Pick-Up</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/categoria/offRoad'>
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

 