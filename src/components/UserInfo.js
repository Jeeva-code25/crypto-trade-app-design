import React from 'react'
import { Button, Image, Stack } from 'react-bootstrap'

const UserInfo = () => {
    return (
        <div className='p-3 rounded-4 bg-secondary'>
            <Stack direction='horizontal'>
                <Image
                    src={require('../assets/logo.png')}
                    width='60'
                    height='60'
                    alt='logo'
                />
                <Stack className='ms-2 align-items-start justify-content-center'>
                    <h6 className='text-light mb-1'>John cena</h6>
                    <span className='m-0' style={{ fontSize: "0.8rem" }}>john***@****</span>
                </Stack>
            </Stack>
            <Stack direction='horizontal' className='justify-content-between my-3'>
                    <h6 className='text-light'>4 following</h6>
                    <h6 className='text-light'>500 followers</h6>
            </Stack>
            <Stack direction='horizontal' className='justify-content-between mt-5 mb-1'>
                    <Button variant='primary' className='rounded-pill'>Follow</Button>
                    <Button variant='dropBg' className='rounded-pill text-textCol'>Share</Button>
            </Stack>
        </div>
    )
}

export default UserInfo