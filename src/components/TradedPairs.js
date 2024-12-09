import React from 'react'
import { Container, Dropdown } from 'react-bootstrap';
import { PieChart } from '@mui/x-charts';


const TradedPairs = () => {
    return (
        <div className='p-3 rounded-4 bg-secondary'>
            <h4 className="text-light">Traded Pairs</h4>
            <Dropdown className='bg-dropBg rounded-4 border-0 p-2 my-3' style={{ width: "fit-content" }}>
                <Dropdown.Toggle id="dropdown-basic" className=' bg-dropBg rounded-4 border-0 text-textCol' style={{ width: "fit-content" }}>
                    Last 30 days  <i className="bi bi-chevron-down text-textCol"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Container className='postion-relative'>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 10, color: '#1565FF' },
                                { id: 1, value: 15, color: '#750077' },
                                { id: 2, value: 20, color: '#00FF00' },
                            ],
                            innerRadius: 70,
                            outerRadius: 120,
                            cornerRadius: 5,
                            paddingAngle: 5,
                            cx: 160,
                            cy: 180,
                            startAngle: -45,
                            endAngle: 225,

                        },
                    ]}
                    height={400}
                    sx={{ width: "100%"}}

                />

            </Container>

        </div>
    )
}

export default TradedPairs