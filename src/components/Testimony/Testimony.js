import React, {useState} from 'react'
import classes from './Testimony.module.css'

import PancakeTower from '../../images/pancake-tower.jpg';
import TierCake from '../../images/4-tier-cake.jpg';
import Macroose from '../../images/macroos.jpg';



export default function Testimony() {

    const [Testimony] = useState([
        {
            image: PancakeTower,
            title: "Quick Delivery",
            text: "I needed a quick turn around cake & boy did Ruwi’s Cakes deliver! We work-shopped the look and flavours together & it was the most beautiful & scrumptious cake ever. Exactly what I wanted! From now on, ordering all my cakes from Ruwi <3",
            person: "Kata || Facebook"
        },
        {
            image: TierCake,
            title: "Super Pleased!",
            text: "Ruwi custom made an absolutely gorgeous 21st Birthday cake to fit my pink-themed party. I heard so many complements from my friends, and I was super pleased with the taste, service and aesthetics. I could easily see the great amount of effort and detail that went into making this customised cake, and could not thank Ruwi enough. Would highly recommend!",
            person: "Melinda || Google"
        },
        {
            image: Macroose,
            title: "Beautiful & Tasty",
            text: "Ruwi made the cake for my wedding. It was really beautiful and tasty! I didn’t have to worry about the cake at all on the day. Ruwi also helped me order the cake topper and provided me with any suggestions and advise I needed. She always answered my questions promptly. Highly recommended!",
            person: "Li || Facebook"
        }
    ])

    return (
        <div className={classes.TestimonyContainer}>
            
            {Testimony.map((item,index) => {
                return (
                    <article className={classes.Card} key={index}>
                        <figure className={classes.ImageContainer}>
                            <img className={classes.CardImage} src={item.image} alt=""/>
                        </figure>                     
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        <h4>{item.person}</h4>
                    </article>
                )
            })}
        </div>
    )
}
