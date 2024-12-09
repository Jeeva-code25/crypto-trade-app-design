import React from 'react'
import { Stack } from 'react-bootstrap'

const CurrentSituation = () => {
    return (
        <div className='p-3 rounded-4 bg-secondary my-3'>
            <h5 className="text-light">Current Situation</h5>
            <Stack>
                <Stack direction='horizontal' className='justify-content-between my-3'>
                    <p className='text-light m-0'>Symbol</p>
                    <h6 className='text-light m-0'>GALAUSDT</h6>
                </Stack>
                <Stack direction='horizontal' className='justify-content-between my-3'>
                    <p className='text-light m-0'>Leverage|Direction</p>
                    <h6 className='text-light m-0'>20X | <span className='text-success'>Long</span></h6>
                </Stack>
                <Stack direction='horizontal' className='justify-content-between my-3'>
                    <p className='text-light m-0'>Size</p>
                    <h6 className='text-light m-0'>9786.423 USDT</h6>
                </Stack>
                <Stack direction='horizontal' className='justify-content-between my-3'>
                    <p className='text-light m-0'>Entry Price</p>
                    <h6 className='text-light m-0'>485.00</h6>
                </Stack>
                <Stack direction='horizontal' className='justify-content-between my-3'>
                    <p className='text-light m-0'>Mark Price</p>
                    <h6 className='text-light m-0'>585.00</h6>
                </Stack>
                <Stack direction='horizontal' className='justify-content-between my-3'>
                    <p className='text-light m-0'>Margin</p>
                    <h6 className='text-light m-0'>9780.280</h6>
                </Stack>
                <Stack direction='horizontal' className='justify-content-between my-3'>
                    <p className='text-light m-0'>PNL(ROE%)</p>
                    <h6 className='m-0 text-danger'>-73.67USDT(-2315)</h6>
                </Stack>
            </Stack>
        </div>
    )
}

export default CurrentSituation