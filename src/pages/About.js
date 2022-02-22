import React from 'react'

//image imports
import Front from '../images/front7.jpg';

import Cake from '../images/dicake.jpg';


// components imports
import StyledHero from '../components/StyledHero/StyledHero';
import Fade from '../components/BackgroundFade/BackgroundFade'
import Banner from '../components/Banner/Banner';
import WrappedImage from '../components/WrappedImage/WrappedImage'
import SubTitle from '../components/SubTitle/SubTitle';


export default function About() {
  return (
    <div>
       <StyledHero img={Front} parax="fixed" position="bottom">
          <Fade/>
          <Banner title='About Us' />
       </StyledHero>

       <WrappedImage img={Cake} mgAlt="A display of varying cakes">
        <p>
        We embarked on our journey, providing guests room services
         with the best amenities. Dipankar is located in the midst 
         of Kathmandu valley, within walking distance from Thamel, and 
         on the way to The Swoyambhu Stupa. We aim to make you feel at 
         home once you step into the peaceful and friendly atmosphere of Dipankar, 
         and true to our Nepali tradition, you will be treated like a special 
         guest of honor at our hotel.
          </p>

          <p>
          Over the years, we have expanded to a restaurant by 
          handpicking the best food recipes. We have put the utmost
           effort into prepping meals that are super delicious, healthy, 
           and hygienic with a hint of rich homemade taste - And we cant
            wait to share this with you all! We aspire to be an excellent host
             to our guests from all over the world and provide incredible food for
              all the food lovers out there.
           Make your visit memorable with us, at Dipankar Inn & Restaurant.
          </p>

      </WrappedImage>

      <SubTitle>
        <h2>our work speaks for itself</h2>
        <p>Enjoy our fresh baked products made with love and care with the best 
          colours and decorations to match your occasion</p>
      </SubTitle>  

    </div>
  )
}
