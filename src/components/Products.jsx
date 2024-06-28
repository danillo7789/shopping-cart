import React from "react";
import Product from "./Product.jsx";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 34,
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVub3ZvJTIwbGFwdG9wfGVufDB8fDB8fHww",
    price: 35,
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsbCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    price: 25,
  },
  {
    id: 4,
    name: "HP Pavillion",
    imgURL:
      "https://images.unsplash.com/photo-1583223667854-e0e05b1ad4f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHAlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
    price: 30,
  },
  {
    id: 5,
    name: "Acer Aspire",
    imgURL:
      "https://images.unsplash.com/photo-1693206578613-144dd540b892?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWNlciUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3Dhttps://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-white-table-uYDXcEv8Cs4",
    price: 20,
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
