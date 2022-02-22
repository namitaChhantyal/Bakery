import React,{useContext} from 'react'
import {StockContext} from '../../Context/StockContext';

import {NavLink} from 'react-router-dom'

import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Store from '../../images/Logo/di.jpg'
import ShoppingCart from '../../images/icons/shopping-cart.svg'

export default function NavbarComponent() {
  const context = useContext(StockContext)
  const items = context.itemData.shoppingCart
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/" href="#home">

        <img src={Store} alt=""/>
        {/* <div>
          Dipankar
        </div>
        <div>
          Inn
        </div> */}
        
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

          <Nav.Link as={NavLink} to="/shop" >Shop</Nav.Link>
          <Nav.Link as={NavLink} to="/about" >About</Nav.Link>
          {/* <Nav.Link as={NavLink} to="/blogs" >Blogs</Nav.Link> */}
          {/* <Nav.Link as={NavLink} to="/contact" >Contact</Nav.Link> */}
          <Nav.Link as={NavLink} to="/faq" >FAQ</Nav.Link>
          <Nav.Link as={NavLink} to="/gallery" >Gallery</Nav.Link>
          {/* <Nav.Link as={NavLink} to="/careers" >Careers</Nav.Link> */}
        </Nav>
        <Nav className="">
          <Nav.Link as={NavLink} to="/shopping-cart" >
            Shopping cart
            <img src={ShoppingCart} alt=""/>
    <span className="badge badge-dark">{items.length}</span>
          </Nav.Link>
          
      </Nav>

      </Navbar.Collapse>
      

    </Navbar>
  )
}
