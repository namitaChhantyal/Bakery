import React from 'react'

import BgImage from '../images/strawberry-top-scones.jpg'
//component imports
import StyledHero from '../components/StyledHero/StyledHero';
import Fade from '../components/BackgroundFade/BackgroundFade';
import Banner from '../components/Banner/Banner';
import SubTitle from '../components/SubTitle/SubTitle';
import TextInput from '../components/TextInput/TextInput'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Formik } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    name: Yup.string().required("Your Name"),
    email: Yup.string().required("Your email is required").email(),
    phoneNumber: Yup.number().required("Your Phone number is required"),
    message: Yup.string().required("Your Message is required")
})


export default function Contact() {
    return (
        <div>
            <StyledHero img={BgImage} parax='fixed' position="bottom">
                <Fade />
                <Banner title="Contact Us" />
            </StyledHero>
            <SubTitle>
                <h2>Contact Form</h2>
            </SubTitle>

            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phoneNumber: "",
                    message: ""
                }}
                validationSchema={formSchema}
                onSubmit={(data) => console.log(data)}
            >
                {({
                    handleSubmit
                }) => {
                    return (
                        <Container>
                            <Form onSubmit={handleSubmit}>
                                <TextInput name="name" placeholder="Name" label="Your name" />
                                <TextInput name="email" placeholder="email" label="Your email" />
                                <TextInput name="phoneNumber" placeholder="phone Number" label="Your phone number" />
                                <TextInput name="message" placeholder="Message" label="Your message to us" />
                                <Button variant="primary" type="submit">Submit Your Message</Button>
                            </Form>
                        </Container>

                    )

                }}
            </Formik>

        </div>
    )
}
