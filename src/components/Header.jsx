import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { logout } from "../redux/authSlice";
import { useDispatch } from "react-redux";


const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li className="header-cart"><Cart /></li>
          <li>
            <button onClick={() => dispatch(logout())} className="logout-btn">Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
