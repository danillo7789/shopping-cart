import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { addToCart,  removeFromCart } from "../redux/cartSlice";


const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(removeFromCart(id));
  };

  const addCartItem = () => {
    dispatch(addToCart({
        id,
        name,
        price,
      })
    );
  };
  
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeCartItem}> - </button>
      <button className="cart-actions" onClick={addCartItem}> + </button>
    </div>
  );
};

export default CartItem;
