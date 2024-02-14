import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {Home,Products,SingleProduct,About,Cart,Error,Checkout,Private} from './pages';
import styled from "styled-components";

// const Button = styled.button`
//   background: green;
//   color: white;
// `;

// const Container = styled.div`
// background:red;
// color:white;
// .hero{
//   font-size: 8rem;
// }
// `

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/products">
          <Products/>
        </Route>

        <Route exact path="/product/id" children={<SingleProduct/>}>
          <SingleProduct/>
        </Route>

        <Route exact path="/About">
          <About/>
        </Route>

        <Route exact path="/cart">
          <Cart/>
        </Route>

        <Route exact path="/checkout">
          <Checkout/>
        </Route>

        <Route path="*">
          <Error/>
        </Route>

      </Switch>
      <Footer/>
    </Router>
     )
}

export default App;
