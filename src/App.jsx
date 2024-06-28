import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Register from './components/Register';
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { sendCardData } from "./redux/cartSlice";
import "./App.css";

let isFirstRender = true;

function App() {
  const { isLoggedIn } = useSelector(state => state.auth);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const { notification } = useSelector(state => state.mui);
  console.log(isLoggedIn)

  // useEffect(() => {
  //   if (isFirstRender) {
  //     isFirstRender = false;
  //     return;
  //   }

  //   dispatch(sendCardData(cart));
  // }, [cart, dispatch]);

  return (
    <Router>
      <div className="App">
        {notification && <Notification type={notification.type} message={notification.message} />}
        
        <Routes>
          <Route path="/login" element={isLoggedIn ? <Navigate to="/layout" /> : <Auth />} />
          <Route path="/register" element={<Register />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/" element={isLoggedIn ? <Navigate to="/layout" /> : <Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
