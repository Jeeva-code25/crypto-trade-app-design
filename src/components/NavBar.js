import React from 'react'
import './NavBar.css'
import { Container, Form, Image, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {

    return (
        <Navbar bg="dark" data-bs-theme="dark" className='px-3'>
            <Container fluid>
                <Navbar.Brand>
                    <Image
                        src={require('../assets/logo.png')}
                        width='60'
                        height='60'
                        alt='logo' 
                        
                        />
                </Navbar.Brand>
                <Nav className="m-auto gap-5 text-light">
                    <Nav.Link href="#copytrade">Copytrade</Nav.Link>
                    <Nav.Link href="#markets">Markets</Nav.Link>
                    <Nav.Link href="#trade">Trades</Nav.Link>
                    <Nav.Link href="#earn" className='position-relative'>
                        Earn
                        <span style={{ fontSize: "0.5rem" }} className="position-absolute start-100 badge rounded-pill bg-primary">
                            NEW
                            <span className="visually-hidden" >unread messages</span>
                        </span>

                    </Nav.Link>
                </Nav>

                <Form className='d-flex flex-row gap-2 w-auto'>
                    <div className='d-flex flex-row border border-1 rounded-pill align-items-center px-1 gap-1'>
                        <Image src={require("../assets/ellipse.png")} width="20" height="20" />
                        <Form.Select size="sm" className='text-light border-0 rounded-pill nav-select'>
                            <option value="1">Small select</option>
                            <option value="2">Small select 2</option>
                        </Form.Select>
                    </div>

                    <div className='d-flex flex-row border border-1 rounded-pill py-1 pe-3 gap-1'>
                        <Image src={require("../assets/check.png")} width="25" height="25" />
                        <span className='text-light'>username</span>
                    </div>
                </Form>
            </Container>
        </Navbar>
    )
}

export default NavBar