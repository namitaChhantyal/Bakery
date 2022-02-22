import React from 'react';

// Import images
import StackDonuts from '../images/dipankar/Cake-Achyut.jpg'; 
import ChocolateShavingCupcake from '../images/dipankar/chocochipsmuffin.jpg';
import ChocolateCupcake from '../images/dipankar/Coconutcookie.jpg';
import PancakeTower from '../images/dipankar/coffebeancookies.jpg';
import BlueBerry from '../images/dipankar/milkcookies.jpg';
import Macroos from '../images/dipankar/TripleChocolateCookies.jpg';
import ChocolateTopCake from '../images/dipankar/wedding.jpg';
import ShortCakes from '../images/dipankar/mobile.jpg';

import TierCake from '../images/dipankar/engagement.jpg';
import CakeDisplay from '../images/dipankar/cookie.jpg';
import SpongeCake from '../images/dipankar/light.jpg';
import StrawBerryCupcake from '../images/dipankar/black.jpg';
import CakeSpread from '../images/dipankar/beer.jpg';

import SubTitle from '../components/SubTitle/SubTitle';

export default function Gallery() {
    return (
        <div>
            <SubTitle color="var(--primary-color)" >
                <h1>Gallery</h1>
            </SubTitle>
                    
                <div className="Gallery">
                    <figure className="Gallery__Item--1">
                        <img src={StackDonuts} alt="Multi Tier cake" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--2">
                        <img src={ChocolateShavingCupcake} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--3">
                        <img src={ChocolateCupcake} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--4">
                        <img src={PancakeTower} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--5">
                        <img src={BlueBerry} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--6">
                        <img src={Macroos} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--7">
                        <img src={ChocolateTopCake} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--8">
                        <img src={ShortCakes} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--9">
                        <img src={Macroos} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--10">
                        <img src={CakeDisplay} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--11">
                        <img src={StrawBerryCupcake} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--12">
                        <img src={TierCake} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--13">
                        <img src={SpongeCake} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--14">
                        <img src={CakeSpread} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                </div>

        </div>
    )
}
