import React from 'react';
import ItemFilter from '../../components/ItemFilter/ItemFilter';
import ItemList from '../../components/ItemList/ItemList';

import HeroImage from '../../images/dipankar/gomu.jpg'
import Banner from '../../components/Banner/Banner';
import StyledHero from '../../components/StyledHero/StyledHero';
import Fade from '../../components/BackgroundFade/BackgroundFade';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Shop() {
    return (
        <div>
            <StyledHero img={HeroImage} parax="fixed">
                <Fade/>
                <Banner>
                    <h1>The Shop</h1>
                </Banner>
            </StyledHero>

            <Container fluid className="mt-5" >
                <Row> 
                    <Col xs={1}></Col>      
                    <Col sm={10} md={10} lg={10} xl={2}>
                        <ItemFilter />
                    </Col>
                    <Col sm={12} md={12} lg={12} xl={6} className="mt-5">
                        <ItemList  />
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
