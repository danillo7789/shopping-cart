import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/userSlice.js';
import { setUser } from '../redux/cartSlice.js';
import { Link } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const [formData, setFormData] = useState({ email: '', password: '' });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSignUp = (e) => {
      e.preventDefault();
      const { email, password } = formData;
      try {
        dispatch(registerUser({ email, password }));
      } catch (err) {
        console.error('Registration failed:', err);
      }
    };

  
    useEffect(() => {
      if (user) {
        dispatch(setUser(user));
      }
    }, [user, dispatch]);
  
    return (
      <div className='containa'>
        <h1 className='h1'>Register</h1>
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button className='butn' type="submit">Register</button>
          <p>Already have an account? <Link className='login-link' to="/login">Login</Link></p>
        </form>
      </div>
    );
  };
  

export default Register;
