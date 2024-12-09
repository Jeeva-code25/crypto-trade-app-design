import { LineChart } from '@mui/x-charts'
import React from 'react'
import { Container, Dropdown, Nav, Stack } from 'react-bootstrap'

const Performance = () => {
  return (
    <div className='p-3 rounded-4 bg-secondary my-3'>
      <h4 className="text-light">Performance</h4>
      <Stack direction='horizontal' className='gap-3 my-3'>

        <Dropdown className='bg-dropBg rounded-4 border-0 p-2'>
          <Dropdown.Toggle id="dropdown-basic" className='bg-dropBg rounded-4 border-0 text-textCol'>
            Total PNL  <i className="bi bi-chevron-down text-textCol"></i>
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

      <Container className='ms-0 mt-3' style={{ width: "70%" }}>
        <p className='text-textCol m-1'>TOTAL PNL(USD)</p>
        <p className='d-inline m-0 text-success fw-bold'>+751,23,489590%</p>
      </Container>

      <LineChart
        
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            color: '#1565FF',
            showMark: false,
          
          },
          
        ]
        
      }
        
        width={500}
        height={300}
        sx={{stroke:"5"}}
        leftAxis={null}
        bottomAxis={null}
      />
    </div>
  )
}

export default Performance