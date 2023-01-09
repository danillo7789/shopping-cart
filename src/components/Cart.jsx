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
    <div>
      <h3 className="cartIcon" onClick={showCart}>Show Cart Items: {quantity}</h3>
    </div>
  );
};

export default Cart;
