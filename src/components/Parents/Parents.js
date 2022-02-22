import React,{useState} from 'react'
import classes from './Parents.module.css';

import activision from '../../images/Partners Logo/activision-logo.jpg'
import adidas from '../../images/Partners Logo/Adidas_Logo.png'
import chisholm from '../../images/Partners Logo/chisholm-institute.png'
import deakin from '../../images/Partners Logo/deakin-logo.png'
import melbourneUni from '../../images/Partners Logo/melbourne-uni.png'
import westfield from '../../images/Partners Logo/Westfield-logo.png'
import nike from '../../images/Partners Logo/nike-logo.png'

export default function Parents() {
    const [parents] = useState([
        activision,
        adidas,
        chisholm,
        deakin,
        melbourneUni,
        westfield,
        nike
    ])

    return (
        <div className={classes.Container}>
            {parents.map((item, index) => {
                return (
                    <img className={classes.img} key={index} src={item} alt={`${item}`} />
                )
            })}
        </div>
    )
}
