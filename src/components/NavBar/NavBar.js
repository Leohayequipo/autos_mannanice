
import Navbar    from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav       from 'react-bootstrap/Nav'
import Cartwidget from '../CartWidget/Cartwidget'
import { Link,NavLink } from 'react-router-dom'

const NavBar = (children) => {
    console.log(children)
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand >
               <Link to='/'>
                    AUTOMOTORES
               </Link>
            </Navbar.Brand>   
            {/*<Navbar.Brand href="#home"></Navbar.Brand>*/}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link> 
                    <NavLink to='/categoria/motos' >Motos</NavLink>
                </Nav.Link>
                <Nav.Link>
                   <NavLink to='/categoria/autos' >Autos</NavLink>
                </Nav.Link>
                <Nav.Link>
                     <NavLink to='/categoria/pickUp' >Pick-Up</NavLink>
                </Nav.Link>
                <Nav.Link>
                      <NavLink to='/categoria/offRoad' >Off-Road</NavLink>      
                </Nav.Link>
                    
                    
                    
               
                </Nav>
                <Nav>
                    <NavLink to='/cart'>
                        <Cartwidget/>
                    </NavLink>
               
                </Nav>
            </Navbar.Collapse>
            </Container>
           </Navbar>
        </div>
    )
}

export default NavBar 

 