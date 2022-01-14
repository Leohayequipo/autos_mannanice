
import Navbar    from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav       from 'react-bootstrap/Nav'
import Cartwidget from '../CartWidget/Cartwidget'

const NavBar = () => {
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">AUTOMOTORES</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">Motos</Nav.Link>
                <Nav.Link href="#pricing">Autos</Nav.Link>
                <Nav.Link href="#pricing">Pick-Up</Nav.Link>
                <Nav.Link href="#pricing">Off-Road</Nav.Link>
               
                </Nav>
                <Nav>
               
                <Nav.Link eventKey={2} href="#memes">
                   <Cartwidget/>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
           </Navbar>
        </div>
    )
}

export default NavBar 

 