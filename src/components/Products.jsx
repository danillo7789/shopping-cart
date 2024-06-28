import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 30,
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL: "/assets/lenovo-yoga-brand-puresight-pro-oled.avif",
    price: 20,
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL:
      "/assets/dell-latitude-2.jpg",
    price: 25,
  },
  {
    id: 4,
    name: "HP Pavillion",
    imgURL:
      "/assets/HP-Pavilion-13.jpeg",
    price: 25,
  },
  {
    id: 5,
    name: "Acer Aspire",
    imgURL:
      "/assets/Acer.jpg",
    price: 28,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
