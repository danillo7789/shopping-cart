import { React, Fragment } from "react";
import Header from "./Header";
import Products from "./Products";
import Cartitems from './CartItems'
import "./Layout.css";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, sendCardData } from "../redux/cartSlice";

const Layout = () => {
  let total = 0;
  const dispatch = useDispatch();
  const { showCart, itemsList } = useSelector(state => state.cart);
  const cart = useSelector(state => state.cart);
  itemsList.forEach(item => {total += item.totalPrice});

  const handlePlaceOrder = () => {
    dispatch(sendCardData(cart));
    dispatch(clearCart());
  }

  return (
    <Fragment>
      <div className="layout">
        <Header />
        <div className="products"><Products /></div>
       {showCart && <Cartitems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button onClick={handlePlaceOrder} className="orderBtn">Place Order</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
