import React from 'react';
import ImageDisplay from '../ImageDisplay/ImageDisplay';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export default function ItemCard({img, price, name, cart}) {
    return (
        <Card style={{background: "var(--tertiary-color)", color: "var(--primary-color)"}}>
            <ImageDisplay width="100%" img={img} />
            <Card.Body style={{textAlign: "center"}}>
            <Card.Title>Rs {price}</Card.Title>
            <Card.Text>{name}</Card.Text>
            <Button style={{
                background: "white", 
                color: "var(--primary-color)",
                border: "2px solid var(--primary-color)"

            }} 
                onClick={cart} variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}
