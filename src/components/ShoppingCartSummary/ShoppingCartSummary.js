import React, {useContext}  from 'react'
import {StockContext} from '../../Context/StockContext';
import {Link} from 'react-router-dom';
import classes from './ShoppingCartSummary.module.css';

export default function ShoppingCartSummary() {

    const context = useContext(StockContext);
    let totalPrice = 0;

    totalPrice = context.itemData.shoppingCart.map(item => {
        let price = item.price * item.count;
        return totalPrice + price
    })

    totalPrice = totalPrice.reduce((a, b) => a + b, 0)

    return (
        <div className={classes.Summary}>
            <h3>Shopping Cart Summary</h3>
            <p>Delivery: Rs 100</p>
            <p>Total price: Rs {totalPrice + 100}</p>
            <button>
                <Link to="/checkout">
                    Process to Checkout
                </Link>
            </button>
        </div>
    )
}
