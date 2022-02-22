import React from 'react'

// import ContainerGrid from '../components/ContainerGrid/ContainerGrid';
import Background from '../components/Background/Background';
import SubTitle from '../components/SubTitle/SubTitle';

import IconDisplay from '../components/IconDisplay/IconDisplay';
import Gallery from '../components/Gallery/Gallery';
// import Testimony from '../components/Testimony/Testimony';
// import PopularCreation from '../components/PopularCreation/PopularCreation'
// import Parents from '../components/Parents/Parents';

export default function Home() {
  return (
    <div>

      <div className="Hero">
        <div className="HeroContainer">
          <div className="HeroText">
            <h1>Dipankar Inn</h1>
          </div>
        </div>
      </div>

      <Background color="var(--primary-color)">
        <SubTitle color="white">
          <h2>Our Services</h2>
        </SubTitle>
        <IconDisplay/>
      </Background>

      <Background color="var(--tertiary-color)">
        <SubTitle color="var(--primary-color)">
          <h2>Our Gallery</h2>
        </SubTitle>
        <Gallery />
      </Background>

      {/* <Background color="white">
        <SubTitle color="var(--secondary-color)">
          <h2>Our Customer Testimony</h2>
        </SubTitle>
        <Testimony />
      </Background> */}

      {/* <Background color="var(--primary-color)">
        <SubTitle color="white">
          <h2>Host Popular Creations</h2>
        </SubTitle>
        <PopularCreation />
      </Background> */}
{/* 
      <Background color="white">
        <SubTitle color="var(--primary-color)">
          <h2>Partners & Clients</h2>
        </SubTitle>
        <Parents />
      </Background> */}
    </div>
  )
}
