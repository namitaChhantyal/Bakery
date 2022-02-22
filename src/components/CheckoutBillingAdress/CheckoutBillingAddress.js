import React from 'react'

import TextInput from '../TextInput/TextInput';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';


export default function CheckoutBillingAddress() {

    return (
   
            <>
              <Form.Row>
                <Col>
                  <TextInput name={"firstName"} placeholder={"First name"} label="Your First name" />
                </Col>
                <Col>
                  <TextInput name={"lastName"} placeholder={"Last name"} label="Your Last name" />
                </Col>    
              </Form.Row>
              
                <TextInput name={"email"} placeholder={"E-mail"} label="Your E-mail" />
                <TextInput name={"address"} placeholder={"address"} label="Your address" />

              {/* <Form.Row>
                <Col>
                  <TextInput name={"country"} placeholder={"Country"} label="Country" />
                </Col>
                <Col> 
                  <TextInput name={"state"} placeholder={"State"} label="State" />
                </Col>
                <Col>
                  <TextInput name={"city"} placeholder={"City"} label="City" />
                </Col>
              </Form.Row> */}
              
              <Form.Row>
                {/* <Col>
                  <TextInput name={"postCode"} placeholder={"Post code"} label="Post code" />
                </Col> */}
                <Col> 
                  <TextInput name={"number"} placeholder={"Number"} label="Number" />
                </Col>
              </Form.Row> 
         
            </>  

    )
}

