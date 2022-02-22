import React,{useState} from 'react'
import classes from './IconDisplay.module.css'

//import icons
import MacaronsIcon from '../../images/icons/macarons.svg'
import CakeIcon from '../../images/icons/cake.svg';
import WeddingIcon from '../../images/icons/cake-1.svg';
import CupCake from '../../images/icons/cup-cake.svg';
// import Shipping from '../../images/icons/shipping.svg'
import Oven from '../../images/icons/oven.svg';
import Bakery from '../../images/icons/bakery.svg';

export default function IconDisplay() {
  const [services] = useState([
    {
      icon: CakeIcon,
      title: "Cakes"
    },
    {
      icon: WeddingIcon,
      title: "Wedding Cakes"
    },
    {
      icon: CupCake,
      title: "Cupcakes"
    },
    // {
    //   icon: Shipping,
    //   title: "48 Hours Delivery"
    // },
    {
      icon: Oven,
      title: "Freshly Baked"
    },
    {
      icon: Bakery,
      title: "Visit Our Store"
    },
  ])


    return (
        <div className={classes.Grid}>
  
            <div className={classes.IconContainer}>
                {services.map((item,index) => {
                  return (
                    <article key={index} className={classes.IconCard}>
                      <img className={classes.Icon} src={item.icon} alt=""/>
                      <h3>{item.title}</h3>
                    </article>
                  )
                })}
            </div>
        </div>
    )
}
