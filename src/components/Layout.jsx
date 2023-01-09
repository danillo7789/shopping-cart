import React from "react";
import Header from "./Header";
import Products from "./Products";
import Cartitems from './CartItems'
import "./Layout.css";
import { useSelector } from 'react-redux';

const Layout = () => {
  let total = 0;
  const { showCart } = useSelector(state => state.cart);
  const { itemsList } = useSelector(state => state.cart);
  itemsList.forEach(item => {
    total += item.totalPrice
  })

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
       {showCart && <Cartitems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
