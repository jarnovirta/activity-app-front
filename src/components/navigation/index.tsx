import React from 'react'
import { connect } from 'react-redux'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from './../../store/user/user-reducer'

interface IProps {
  logout: Function
}

const Navigation = (props:IProps) => (
  <div>
    <Navbar bg="light" expand="lg">
      <LinkContainer exact to="/">
        <Navbar.Brand>Fitness App</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer exact to="/">
            <Nav.Link eventKey="/">Home</Nav.Link>
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
      </Navbar.Collapse>
    </Navbar>
  </div>
)
const mapDispatchersToProps = {
  logout
}
export default connect(null, mapDispatchersToProps)(Navigation)