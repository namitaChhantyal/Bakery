import React from 'react'
import classes from './Footer.module.css';

import FacebookIcon from '../../images/icons/facebook.svg';
import TwitterIcon from '../../images/icons/twitter.svg';
import InstagramIcon from '../../images/icons/instagram.svg';
import PinterestIcon from '../../images/icons/pinterest.svg';

export default function Footer() {
  return (
    <>
      <footer>
        <div className={classes.Container}>

          <div className={classes.Sect}>
            <h3>About Us</h3>
            <p>
              Over the years, we have expanded to a
              restaurant by handpicking the best food recipes.
             We aspire to be an excellent
              host to our guests from all over the world and provide
              incredible food for all the food lovers
              out there. Make your visit memorable with us, at Dipankar Inn & Restaurant.
            </p>
          </div>

          <div className={classes.Sect}>
            <h3>Our Address</h3>
            <p>
              Dhalko, Kathmandu, Nepal
            </p>
          </div>

          <div className={classes.Sect}>
            <h3>Contact Detail</h3>
            <p>
              Contact us:
              +977 9849596133 , +977 01 4254194
            </p>
            <p>
              Our Email: dipankarinn@gmail.com
            </p>
            <h3>Connect With Us</h3>
            <div className={classes.Icon}>
              <img src={FacebookIcon} alt="facebook icon" />
              <img src={TwitterIcon} alt="twitter icon" />
              <img src={InstagramIcon} alt="instagram icon" />
              <img src={PinterestIcon} alt="pinterest icon" />
            </div>

          </div>

        </div>
      </footer>
      <div className={classes.Bottom}>
        <h4>Dipankar
          Dhalko, Kathmandu, Nepal
          All Rights Reserved</h4>
      </div>
    </>
  )
}
