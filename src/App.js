import React from 'react';
import './App.css';

import {Switch, Route} from "react-router-dom";
import {BlogProvider} from './Context/BlogContext'
import {StockProvider} from './Context/StockContext'
 
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// pages imports
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import Blogs from './pages/Blogs'
import SingleBlog from './pages/SingleBlog/SingleBlog'
import Shop from './pages/Shop/Shop'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
    <StockProvider>
      <BlogProvider>

        <Navbar/>
          <Route>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path="/about" exact component={About}/>
              <Route path="/contact" exact component={Contact}/>
              <Route path="/faq" exact component={Faq}/>
              <Route path="/gallery" exact component={Gallery}/>
              <Route path="/careers" exact component={Careers}/>
              <Route path='/blogs' exact component={Blogs} />
              <Route path='/blogs/:slug' exact component={SingleBlog} />
              <Route path='/shop' exact component={Shop}/>\
              <Route path='/shopping-cart' exact component={ShoppingCart}/>
              <Route path='/checkout' exact component={Checkout}/>
            </Switch>
          </Route>
        <Footer/>

       </BlogProvider>
     </StockProvider>
    </div>
  );
} 

export default App;
