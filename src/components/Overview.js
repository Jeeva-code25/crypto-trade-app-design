import React from 'react'
import './Overview.css'
import { Button, Container, Dropdown, Nav, Stack } from 'react-bootstrap'

const Overview = () => {
    return (
        <div className='p-3 rounded-4 bg-secondary'>
            <h4 className="text-light">Overview</h4>
            <Stack direction='horizontal' className='gap-3 my-3'>

                <Dropdown className='bg-dropBg rounded-4 border-0 p-2'>
                    <Dropdown.Toggle id="dropdown-basic" className='bg-dropBg rounded-4 border-0 text-textCol'>
                        USDT Payments  <i className="bi bi-chevron-down text-textCol"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <div className="divh" ></div>

                <Nav variant="pills" className='gap-2'>
                    <Nav.Item>
                        <Nav.Link href="#24h" className='rounded-4'>24H</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#7d" className='rounded-4'>7D</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#30d" className='rounded-4'>30D</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#1y" className='rounded-4'>1Y</Nav.Link>
                    </Nav.Item>
                </Nav>

            </Stack>

            <Container className='ms-0 mt-3' style={{width:"70%"}}>
                
                    <div className='d-flex justify-content-between'>
                        <p className='d-inline text-textCol'>ROI(%)</p>
                        <p className='d-inline text-textCol me-2'>TOTAL PNL(USD)</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='d-inline text-success fw-bold'>+5,123,489590%</p>
                        <p className='d-inline text-success fw-bold'>+751,23,489590%</p>
                    </div>
                    <div className='d-flex'>
                        <p className='d-inline text-textCol text-danger'>Win Rate</p>
                        <p className='d-inline text-textCol' style={{marginLeft:"120px"}}>Trades</p>
                    </div>
                    <div className='d-flex'>
                        <p className='d-inline text-textCol fw-bold'>60%</p>
                        <p className='d-inline text-textCol fw-bold' style={{marginLeft:"150px"}}>235</p>
                    </div>

            </Container>
            <Button variant='primary' className='rounded-pill fs-4 fw-bold px-4 mt-2'>COPYTRADE</Button>
        </div>
    )
}

export default Overview