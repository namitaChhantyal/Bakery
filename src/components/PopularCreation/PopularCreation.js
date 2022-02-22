import React,{useContext} from 'react';
import {StockContext} from '../../Context/StockContext';  
import classes from './PopularCreation.module.css'
import Card from '../ItemCard/ItemCard';
import Container from 'react-bootstrap/Container';

export default function PopularCreation() {
    const context = useContext(StockContext);
    let items = context.itemData.popular;
    let cart = context.addToCart;

    return (
        <Container className={classes.itemContainer}>
            {items.map((item, index) => {
                 return (
                     <div key={index} className={classes.item}>
                         <Card img={item.image} price={item.price} name={item.name} cart={cart} />
                     </div>
                 )
            })}
        </Container>
        
    )
}
