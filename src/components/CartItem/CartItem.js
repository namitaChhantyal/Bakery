import React from 'react'
import classes from './CartItem.module.css';
import ImageDisplay from '../ImageDisplay/ImageDisplay';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default function CartItem({img, name, price, count, totalPrice, removeItem, itemCountControl}) {
    return (
            <Container className={classes.CardContainer}>
                <Row>
                    <Col xs={1} className={classes.CardDelete}>
                        <Button className={classes.CardButton} variant="danger" data-name={name} onClick={removeItem}>X</Button>
                    </Col>
                    <Col className={classes.ImageContainer} xs={3}>
                        <Container>
                            <Row>
                                <Col style={{padding: "0"}} xs={8}>
                                    <ImageDisplay width='8rem' height='7rem' img={img} />
                                </Col>
                                <Col xs={4}>   
                                    <div className={classes.CardControl} data-name={name}>
                                        <Button style={{backgroundColor: "var(--primary-color)", border: "none"}} className={classes.CardButton} onClick={itemCountControl}>+</Button>
                                        <p>{count}</p>
                                        <Button style={{backgroundColor: "var(--primary-color)", border: "none"}} className={classes.CardButton} onClick={itemCountControl}>-</Button>
                                    </div> 
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={8}>
                    <Card.Body className={classes.CardBody}>                                   
                        <p>{name}</p>
                        <p>Rs {price}</p>
                        <p>Rs {price * count}</p>
                    </Card.Body>
                    </Col>
                </Row>
            </Container>
            
    )
}
