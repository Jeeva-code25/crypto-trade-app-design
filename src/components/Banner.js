import React from 'react'
import { Container, Image } from 'react-bootstrap'

const Banner = () => {
    return (
        <Container fluid>
            <div className='m-5 position-relative p-0'>
                <Image src={require("../assets/banner.png")} className='' width="100%" height="180" />
                <div className='w-100 position-absolute translate-middle start-50 top-50 text-center'>
                    <h1 className='fw-bold text-light'>Maximize your trading success</h1>
                    <div className='my-4 align-items-center d-flex justify-content-center gap-4'>
                        <div className='d-flex  flex-row align-items-center gap-2'>
                            <Image src={require("../assets/check_fill.png")} className='' width="30" height="30" />
                            <p className='fw-bold text-light m-0 p-0'>No hidden fees</p>
                        </div>
                        <div className='d-flex flex-row  align-items-center gap-2'>
                            <Image src={require("../assets/check_fill.png")} className='' width="30" height="30" />
                            <p className='fw-bold text-light m-0 p-0'>100% Safe</p>
                        </div>
                    </div>
                </div>

            </div>
        </Container>

    )
}

export default Banner