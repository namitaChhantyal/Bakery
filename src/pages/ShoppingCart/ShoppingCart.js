import React, {useContext} from 'react'
import classes from './ShoppingCart.module.css';
import {StockContext} from '../../Context/StockContext';    

import HeroImage from '../../images/cakespread.png'
import Banner from '../../components/Banner/Banner';
import StyledHero from '../../components/StyledHero/StyledHero';
import Fade from '../../components/BackgroundFade/BackgroundFade';
import CartItem from '../../components/CartItem/CartItem'
import ShoppingCartSummary from '../../components/ShoppingCartSummary/ShoppingCartSummary'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default function ShoppingCart() {
    const context = useContext(StockContext);

    const shoppingCart = context.itemData.shoppingCart;
    const removeItem = context.removeItem;
    const itemCountControl = context.itemCountControl;



    return (
        <div>
            <StyledHero img={HeroImage} parax="fixed">
                <Fade/>
                <Banner>
                    <h1>Shopping Cart</h1>
                </Banner>
            </StyledHero>

            <Container className="text-center mt-5">
                {shoppingCart.length === 0 ? <h2 className="mt-5">Your shopping cart is currently empty</h2> : null}

                    

                {shoppingCart.length > 0 ? 
                <>
                    <Container className={classes.Category}>
                        <Row>
                            <Col md={4}>
                             
                            </Col>
                            <Col className={classes.CategoryTitle} md={8}>
                                <p>Item Price</p>
                                <p>Total price</p>
                            </Col>
                        </Row>

                    </Container>      
                    {/* <div className={classes.container}> */}
                        {shoppingCart.map((item,index) => {
                            return(
                                <CartItem 
                                key={item.name}
                                img={item.image} 
                                name={item.name} 
                                price={item.price} 
                                count={item.count} 
                                removeItem={removeItem}
                                itemCountControl={itemCountControl}
                                />
                            )
                        })}
                        <ShoppingCartSummary />
                    {/* </div> */}
                </>
                : null }
            </Container>

     
        </div>
    )
}
