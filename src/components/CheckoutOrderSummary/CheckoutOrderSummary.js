import React,{useContext} from 'react'
import classes from './CheckoutOrderSummary.module.css';
import {StockContext} from '../../Context/StockContext';  

import ImageDisplay from '../ImageDisplay/ImageDisplay'

export default function CheckoutOrderSummary(props) {
    const context = useContext(StockContext);
    const shoppingCart = context.itemData.shoppingCart;

    return (
        <div className={classes.SummaryContainer}>
            <h3>Order Summary</h3>  
            {shoppingCart.map((item, index) => {
                return(
                <div className={classes.SummaryCard} key={index}>               
                    <ImageDisplay margin=".5rem"  width='6rem' height='6rem' img={item.image} />
                    <div className={classes.SummaryInfo}>
                        <h5>{item.name}</h5>
                        <p>Price: {item.price}</p>
                        <p>Quantity: {item.count}</p>
                        <p>Total: Rs {item.count * item.price} </p>
                    </div>
                    
                </div>

                )
            })}
        </div>  
    )
}
