import React from 'react'

import HeroImage from '../images/setocake.jpg';
import StyledHero from '../components/StyledHero/StyledHero';
import Fade from '../components/BackgroundFade/BackgroundFade';
import Banner from '../components/Banner/Banner';
import SubTitle from '../components/SubTitle/SubTitle';
import TextBlock from '../components/TextBlock/TextBlock'

export default function Faq() {
    return (
        <div>
            <StyledHero img={HeroImage} parax="fixed">
                <Fade/>
                <Banner>
                    <h1>FAQ</h1>
                </Banner>
            </StyledHero>

            <SubTitle>
                <h2>
                    Here are some of the common questions 
                    we get from our valued customers
                </h2>
            </SubTitle> 


            <TextBlock>
                <div>
                    <h3>Does Dipankar Inn use real ingredients?</h3>
                    <p>
                    We only use the very best ingredients like 100% traditional custard made the old fashioned way with real eggs. 
                    Why? Because everyone knows they taste better than that fake, watery custard you find in so many custard tarts! 
                    When it comes to fresh cream, we use only the very best fresh cream available.
                    </p>
                    
                    <p>
                    Fresh ingredients are the secret to award-winning cakes. 
                    We use fresh ingredients wherever possible, like the apple in our Apple Shortcakes & Apple Slices. 
                    As a result they won 1st Place in the 2007 National Baking Competition. 
                    </p>
                </div>

                <div>
                    <h3>Where does Dipankar Inn source its ingedients from?</h3>
                    
                    <p>
                    As much as possible we like to source our ingredients locally. For example, our pies are proudly made with 100% Victoria Beef.
                    We proudly source only the best Australian lean beef from Kyneton, Geelong & the Warrnambool rain belt areas. 
                    </p>
                </div>

                <div>
                    <h3>Do you offer delivery?</h3>
                    <p>
                    Yes we do deliver cupcakes to all Metro areas in Melbourne except on Sat ,Sun and Public holidays. 
                    You can place order to be delivered on Friday if your occasion is on Saturday.
                    </p>
                </div>

                <div>
                    <h3>How do I arrange corporate or bulk orders?</h3>
                    <p>
                    Please go to our corporate page and complete the form. 
                    Alternatively just send us an email info@thecupcakedesire.com.au and one of our team members will give you a call to discuss your enquiry and to work out the best price for you.
                    </p>
                </div>

                <div>
                    <h3>Can I purchase a gift voucher?</h3>
                    <p>YES</p>
                </div>

                <div>
                    <h3>How will I know my order has gone through to you?</h3>

                    <p>
                    You will receive an email receipt and order confirmation from us confirming your order has been processed within a few minutes of placing your order.
                    </p>
                </div>

                <div>
                    <h3>How long do your cupcakes stay fresh?</h3>
                    <p>
                    If kept at room temperature or in the fridge, our cupcakes will stay fresh for up to 4 days.
                     However, we encourage you to enjoy your cupcakes at their freshest, on the day of delivery.
                    </p>
                </div>
            </TextBlock>

        </div>
    )
}
