import { FunctionComponent } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { BsPersonFill } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'

import { useLogOut } from '../../../auth'

import './styles.css'

export const AppNavBar: FunctionComponent = () => {
  const logout = useLogOut()

  return (
    <Navbar variant="dark" bg="primary" expand="lg" id="navbar">
      <Container>
        <Navbar.Brand id="nav-brand">My App</Navbar.Brand>
        <Navbar.Collapse>
          <Nav id="main-nav">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <NavDropdown title={<BsPersonFill color="white" size={25} />}>
          <NavDropdown.Item onClick={logout}>
            <FiLogOut className="icon" />
            <span className="label">Log Out</span>
          </NavDropdown.Item>
        </NavDropdown>
        <Navbar.Toggle></Navbar.Toggle>
      </Container>
    </Navbar>
  )
}
