import React from 'react'

import TextInput from '../TextInput/TextInput';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';

export default function CheckoutComfirmation() {
  return (
    <>
      <Form.Row>
        <Col>
          <TextInput disabled name={"firstName"} label={"Your First Name"} />
        </Col>
        <Col>
          <TextInput disabled name={"lastName"} label={"Your Last Name"} />
        </Col>
      </Form.Row>

      <TextInput disabled name={"email"} />
      <TextInput disabled name={"address"} />

      {/* <Form.Row>
                <Col>
                  <TextInput disabled name={"country"}  />
                </Col>
                <Col> 
                  <TextInput disabled name={"state"}  />
                </Col>
                <Col>
                  <TextInput disabled name={"city"} />
                </Col>
              </Form.Row> */}

      <Form.Row>
        {/* <Col>
                  <TextInput disabled name={"postCode"} />
                </Col> */}
        <Col>
          <TextInput disabled name={"number"} />
        </Col>
      </Form.Row>

      <TextInput disabled name={"cardName"} />
      <TextInput disabled name={"cardNumber"} label="Your card number" />
      <Form.Row>
        <Col>
          <TextInput disabled name={"expirationDate"} label="Your expiration date" />
        </Col>
        <Col>
          <TextInput disabled name={"verifNumber"} label="Your CVV number" />
        </Col>
      </Form.Row>
      <div>
        <button onclick="myFunction()">Upload</button>
        <script>
          function myFunction() {
            alert("Your order has been placed")
          }
        </script>

      </div>
    </>
  )
}
