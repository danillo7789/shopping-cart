import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import Notification from "./components/Notification";
// import { showNotification } from "./redux/muiSlice";
import { sendCardData } from "./redux/cartSlice";

let isFirstRender = true;

function App() {
  const { itemsList } = useSelector(state => state.cart);
  console.log(itemsList);

  const { isLoggedIn } = useSelector(state => state.auth);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const { notification } = useSelector(state => state.mui);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    
    dispatch(sendCardData(cart))
  }, [cart, dispatch])


  return (
    <div className="App">
    { notification &&  <Notification type={notification.type} message={notification.message} />}
      {!isLoggedIn && <Auth />}
     {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
