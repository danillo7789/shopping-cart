import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from 'react-redux';
import { setShowCart } from "../redux/cartSlice";


const Cart = () => {
  const quantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const showCart = () => {
    dispatch(setShowCart())
  }

  return (
    <div className="cart-layout">
      <button className="cartIcon" onClick={showCart}>Show Cart</button>
      <h3>{quantity} items</h3>
    </div>
  );
};

export default Cart;
