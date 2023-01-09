import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from 'react-redux';
import { setShowCart } from "../redux/cartSlice";


const Cart = () => {
  const quantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const showCart = () => [
    dispatch(setShowCart())
  ]

  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
