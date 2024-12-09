import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Overview from './Overview'
import Performance from './Performance'
import TradedPairs from './TradedPairs'
import UserInfo from './UserInfo'
import CurrentSituation from './CurrentSituation'
import logo from '../assets/logo.svg'

const MainPage = () => {
    return (
        <Container fluid className='m-0'>
            <Row className="m-4 gap-3">
                <Col md={5}>
                    <Overview />
                    <Performance />
                </Col>
                <Col md={4}>
                    <TradedPairs />
                </Col>
                <Col>
                    <UserInfo />
                    <CurrentSituation />
                </Col>
            </Row>
            <Container fluid className='text-center justify-content-center'>
                <Image src={logo} width="60" height="60" />
                <hr style={{ borderTop: "2px solid #FFF" }} />
                <p className="text-textCol">Copyrights c 2024 BULL-EYES are Reserved</p>
            </Container>

        </Container>
    )
}

export default MainPage