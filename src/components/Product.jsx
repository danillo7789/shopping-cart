import React from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../redux/cartSlice.js";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(addToCart({
      name,
      id,
      price
    }))
  }

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addCart}>Add to cart</button>
    </div>
  );
};

export default Product;
