import React from 'react'
import { connect } from 'react-redux'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from './../../store/user/user-reducer'
import { AppState } from '../../store/store';
import IUser from '../../models/User';

interface IProps {
  logout: Function,
  user: IUser
}

const Navigation = (props: IProps) => {
  const loggedIn = !props.user ? false : props.user.username ? true : false
  const notLoggedInNavItems = () => {
    return (
      <Nav className="mr-auto">
        <LinkContainer exact to="/login">
          <Nav.Link eventKey="/login">Login</Nav.Link>
        </LinkContainer>
        <LinkContainer exact to="/signup">
          <Nav.Link eventKey="/signup">Sign Up</Nav.Link>
        </LinkContainer>
      </Nav>
    )
  }
  const loggedInNavItems = () => {
    return (
      <Nav className="mr-auto">
        <LinkContainer exact to="/home">
          <Nav.Link eventKey="/home">Home</Nav.Link>
        </LinkContainer>
        <Nav.Link onClick={() => props.logout()}>Logout</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    )
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <LinkContainer exact to="/">
          <Navbar.Brand>Fitness App</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {loggedIn ? loggedInNavItems() : notLoggedInNavItems()}
        </Navbar.Collapse>
      </Navbar >
    </div >
  )
}
const mapDispatchersToProps = {
  logout
}
const mapStateToProps = (state: AppState) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, mapDispatchersToProps)(Navigation)