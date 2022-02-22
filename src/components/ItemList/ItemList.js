import React, {useContext} from 'react'
import classes from './ItemList.module.css';
import {StockContext} from '../../Context/StockContext';
import Card from '../ItemCard/ItemCard';

export default function ItemList() {
    const context = useContext(StockContext);

    let cart = context.addToCart;
    let sortedItem = context.itemData.sortedItems;

    if(sortedItem.length === 0){
        return(
            <div className={classes.NoItems} >
                <h3>Unfortunately we have no Items that match your search parameters</h3>
            </div>
        )
    }

    return (
        <section className={classes.ItemList}>
            <div className={classes.ItemListCenter}>
                {sortedItem.map((item, index) => {
                    return <Card key={index} img={item.image} price={item.price} name={item.name} cart={cart} />
                })}
            </div>
        </section>
    )
}
