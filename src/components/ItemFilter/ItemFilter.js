import React, {useContext} from 'react'
import {StockContext} from '../../Context/StockContext';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

//get all unique values
const getUnique = (item, value) => {
    return [...new Set(item.map(item => item[value]))]
}

export default function ItemFilter() {
    const context = useContext(StockContext)

    const handleChecked = context.handleChecked;
    const handlePrice = context.handlePrice;
    let price = context.itemData.price;
    const maxPrice = context.itemData.maxPrice;
    const minPrice = context.itemData.minPrice;
    let types = getUnique(context.itemData.items, "type");
    let flavour = getUnique(context.itemData.items, 'flavour')
    
    types = types.map((item,index) => {
        return (
            <InputGroup key={index} className="mb-3">
                <InputGroup.Prepend style={{borderRadius: "5px"}}>
                    <InputGroup.Checkbox name='type' value={item} id={item} type="checkbox" onChange={handleChecked}  />
                </InputGroup.Prepend>
                <label style={{color: "var(--primary-color)"}} className="ml-3" htmlFor={item}>{item}</label>
            </InputGroup>
        ) 
    })

    flavour = flavour.map((item, index) => {
        return (
            <InputGroup key={index} className="mb-3">
            <InputGroup.Prepend style={{borderRadius: "5px"}}>
                <InputGroup.Checkbox name='flavour' value={item} id={item} type="checkbox" onChange={handleChecked}  />
            </InputGroup.Prepend>
            <label className="ml-3" style={{color: "var(--primary-color)"}} htmlFor={item}>{item}</label>
            </InputGroup>
        )
    })

    return (
        <section>
            <h2>Categories</h2>
            <Accordion defaultActiveKey="0">
                <Card >
                    <Card.Header style={{background: "var(--primary-color)"}}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <h5 style={{color: "white"}}>
                            Types
                        </h5>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse style={{background: "var(--tertiary-color)"}} eventKey="0">
                        <Card.Body>
                        <fieldset>
                            {types}
                        </fieldset>
                        </Card.Body>

                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header style={{background: "var(--primary-color)"}}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        <h5 style={{color: "white"}}>
                            Main Flovours
                        </h5>

                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse style={{background: "var(--tertiary-color)"}} eventKey="1">
                    <Card.Body>
                        
                        <fieldset>
                            {flavour}
                        </fieldset>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header style={{background: "var(--primary-color)"}}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        <h5 style={{color: "white"}}>Price Range</h5>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse style={{background: "var(--tertiary-color)"}} eventKey="2">
                        <Card.Body>
                        <fieldset>
                            <h2 style={{color: "var(--primary-color)"}} >Rs 0 - {price === 0 ? "All": `Rs ${price}0`}</h2>
                            <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={handlePrice} />
                        </fieldset>
                        </Card.Body>

                    </Accordion.Collapse>
                </Card>
                </Accordion>            
        </section>
    )
}
