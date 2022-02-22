import React from 'react'

import StackDonuts from '../../images/dipankar/Cake-Achyut.jpg'; 
import ChocolateShavingCupcake from '../../images/dipankar/chocochipsmuffin.jpg';
import ChocolateCupcake from '../../images/dipankar/Coconutcookie.jpg';
import PancakeTower from '../../images/dipankar/coffebeancookies.jpg';
import BlueBerry from '../../images/dipankar/milkcookies.jpg';
import Macroos from '../../images/dipankar/TripleChocolateCookies.jpg';
import ChocolateTopCake from '../../images/dipankar/wedding.jpg';
import ShortCakes from '../../images/dipankar/mobile.jpg';

export default function Gallery() {
    return (
        <div className="Gallery HomePageGallery">
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
        </div>
    )
}
