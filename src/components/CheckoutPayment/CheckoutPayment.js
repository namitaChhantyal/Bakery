import React from 'react'
import TextInput from '../TextInput/TextInput';

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';

export default function CheckoutPayment() {

    return (
    
        <>
            <TextInput name={"cardName"} placeholder={"Card name"} label="Your card name" />
            <TextInput name={"cardNumber"} placeholder={"Card number"} label="Your card number" />
            <Form.Row>
                <Col>
                    <TextInput name={"expirationDate"} placeholder={"Expiration date"} label="Your expiration date" />
                </Col>
                <Col>
                    <TextInput name={"verifNumber"} placeholder={"CVV number"} label="Your CVV number" />
                </Col>
            </Form.Row>
        </>   
        

    )
}
