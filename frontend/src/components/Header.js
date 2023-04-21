import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useDispatch , useSelector} from 'react-redux'
import { NavDropdown } from 'react-bootstrap';
import {logout} from '../actions/userAction'
import { useNavigate,useLocation} from 'react-router-dom'


const Header = () => {
  const  dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin


  const navigate = useNavigate()
  const redirectLoc = useLocation().search
  const redirect = redirectLoc ? redirectLoc.split('=')[1] : '/'


  const logoutHandler = () =>{
    dispatch(logout())
    navigate(redirect)
  }

  return (
    <header>
    <Navbar bg="dark" variant= 'dark' collapseOnSelect expand="lg">
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand>Book Store</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ml-auto'>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fas fa-shopping-cart'></i>Cart
              </Nav.Link>
            </LinkContainer>
            { userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            ): 
            <LinkContainer to ='/login'>
              <Nav.Link>
                <i className='fas fa-user'></i>SignIn
              </Nav.Link>
            </LinkContainer>
            }
            <LinkContainer to='/about'>
            <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
