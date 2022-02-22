import React from 'react'

//import images
import HeroImage from '../images/cakespread.png';
import BakerySet from '../images/bakery-ingret.jpg';

//import components
import StyledHero from '../components/StyledHero/StyledHero';
import Fade from '../components/BackgroundFade/BackgroundFade'
import Banner from '../components/Banner/Banner';
import WrappedImage from '../components/WrappedImage/WrappedImage';
import SubTitle from '../components/SubTitle/SubTitle';
import PositionTag from '../components/PositionTag/PositionTag'
import ContactForm from '../components/ContactForm/ContactForm'

export default function Careers() {
    return (
        <div>
            <StyledHero img={HeroImage} parax="fixed">
                <Fade/>
                <Banner>
                    <h1>Careers</h1>
                </Banner>
            </StyledHero>

            <WrappedImage img={BakerySet} mgAlt="Table set with Bakery kitchen ware">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </WrappedImage>

            <SubTitle>
                <h2>Current Open Positions</h2>
            </SubTitle>

            <PositionTag 
            title='Bakery Production - Process Worker + Pick Packer'
            pay='55k per year'
             />

            <PositionTag 
            title="Apprentice Baker - (X2)"
            pay='45k per year'
             />

            <PositionTag 
            title='Qualified Baker (X2)'
            pay='65k per year'
             />

            <PositionTag 
            title='Bakery Manager - Production'
            pay='80k per year'
             />

            <div className="Container">
            <SubTitle>
                <h2>Submit Application Form</h2>
            </SubTitle>

            <ContactForm>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />

                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Your Email" />

                <label htmlFor="position">Your Chosen Position</label>
                <input type="text" id="position" placeholder="Chosen Position" />

                <label htmlFor="remuse">Upload Remuse</label>
                <input type="file" id="remuse" placeholder="Your remuse" />

                <label htmlFor="cover">Upload Cover Letter</label>
                <input type="file" id="cover" placeholder="Your Cover Letter" />

                <label htmlFor="message">Message</label>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                    
                <button type="submit">Submit</button>
            </ContactForm>

            </div>


        </div>
    )
}
