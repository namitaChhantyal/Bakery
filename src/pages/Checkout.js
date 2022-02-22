import React, {useState} from 'react'
import {Link} from 'react-router-dom'

// components imports
import StyledHero from '../components/StyledHero/StyledHero';
import Fade from '../components/BackgroundFade/BackgroundFade'
import Banner from '../components/Banner/Banner';
import HeroImage from '../images/short-cakes.jpg';
import SubTitle from '../components/SubTitle/SubTitle'

import CheckoutBillingAddress from '../components/CheckoutBillingAdress/CheckoutBillingAddress'
import CheckoutPayment from '../components/CheckoutPayment/CheckoutPayment';
import CheckoutComfirmation from '../components/CheckoutComfirmation/CheckoutComfirmation';
import CheckoutOrderSummary from '../components/CheckoutOrderSummary/CheckoutOrderSummary';

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

import {Form, Formik} from 'formik';
import * as Yup from 'yup';


const billingAddressSchema = Yup.object().shape({
    firstName: Yup.string().required("Your Name is required"),
    lastName: Yup.string().required("Your Name is required"),
    email: Yup.string().required("Your email is required").email(),
    // city: Yup.string().required("Your city name is required"),
    // state: Yup.string().required(),
    // postCode: Yup.string().required(),
    // country: Yup.string().required(),
    number: Yup.number().required()
})

const paymentSchema = Yup.object().shape({
    cardName: Yup.string().required("Your card name is required"),
    cardNumber: Yup.number().required("Your card number is required"),
    expirationDate: Yup.string().required("Your expiration date is required"),
    verifNumber: Yup.number().required("Your CVV number is required")
})


export default function Checkout() {


    return(
        <>
            <StyledHero img={HeroImage} parax='fixed' position="bottom">
                <Fade/>
                <Banner title="Contact Us"/>
            </StyledHero>  
            <SubTitle>
                <h2>Contact Form</h2>
            </SubTitle>
                <FormikStepper
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    address: "",
                    number: "",
                    cardName: "",
                    cardNumber: "",
                    expirationDate: "",
                    verifNumber: ""
                }}
            
                onSubmit={(values) => {
                    console.log('values', values)
                    return 
                }}>
                    <FormikStep  validationSchema={billingAddressSchema}>
                        <Container>
                            <Row>
                                <Col sm={8}>
                                    <h2>Billing info</h2>
                                    <CheckoutBillingAddress />
                                </Col>
                                <Col sm={4}>
                                    <CheckoutOrderSummary />
                                </Col>
                            </Row>
                            </Container>
                    </FormikStep>
                    <FormikStep validationSchema={paymentSchema} >
                        <Container>
                            <Row>
                                <Col sm={8}>
                                    <h2>Payment details</h2>
                                    <CheckoutPayment />
                                </Col>
                                <Col sm={4}>
                                    <CheckoutOrderSummary />
                                </Col>
                            </Row>
                        </Container>
                        
                    </FormikStep>
                    <FormikStep>
                        <Container>
                            <Row>
                                <Col sm={8}>
                                    <h2>Comfirm purchase</h2>
                                    <CheckoutComfirmation />
                                </Col>
                                <Col sm={4}>
                                    <CheckoutOrderSummary />
                                </Col>
                            </Row>
                        </Container>
                        
                    </FormikStep>
                </FormikStepper>
        </>
    )
}


export function FormikStep({ children }) {
    return <>{children}</>;
}

export function FormikStepper({children, ...props}){
    const childrenArray = React.Children.toArray(children);
    console.log(childrenArray)
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];
    console.log(step)
    console.log(currentChild)
    const [setCompleted] = useState(false)
    console.log(children)
    
    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    return(
   
            <Formik {...props} validationSchema={currentChild.props.validationSchema} onSubmit={async (values, helpers) => {
                if(isLastStep()) {
                    await props.onSubmit(values, helpers);
                    setCompleted(true);
                    helpers.resetForm();

                } else {
                    setStep(s => s+1);
                }
            }}>
                {({isSubmitting}) => (
                <Container>
                    <Form autoComplete="off">
                        <Container>
                            {currentChild}
                                <Container>
    
                                    {step > 0 ? <Button style={{backgroundColor: "var(--primary-color)", width: "8rem", border: "none", marginRight: "1rem"}} disabled={isSubmitting} color="primary" onClick={() => setStep(s => s-1)}>Back</Button> : null}
                                    <Button style={{backgroundColor: "var(--primary-color)", width: "8rem", border: "none"}} disabled={isSubmitting} varient="contained" color="primary" type="submit">
                                    {isSubmitting ? 'Submitting' : isLastStep() ? <Link style={{color: "white"}} to="/">Submit</Link> : 'Next'}
                                    </Button>
                            </Container>
                        </Container>
                    </Form>
                </Container>
                )}
            </Formik>
      

    )
}