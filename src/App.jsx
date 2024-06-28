import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Register from './components/Register';
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import "./App.css";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const notification = useSelector(state => state.mui.notification);

  return (
    <Router>
      <div className="App">
        {notification && <Notification type={notification.type} message={notification.message} />}
        <Routes>
          <Route path="/layout" element={isLoggedIn ? <Layout /> : <Navigate to="/login" />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/layout" /> : <Auth />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={isLoggedIn ? <Navigate to="/layout" /> : <Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
