import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { Link } from "react-router-dom";
import "./Auth.css";
import { setUser } from "../redux/cartSlice";
import { loginUser } from "../redux/userSlice";

// const Auth = () => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({email: '', password: ''})
//   const user = useSelector(state => state.user.user)



//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const auth = getAuth();
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       return userCredential.user
//       console.log('logged user: ', User.user)
//       dispatch(login());
//     } catch (error) {
//       console.error("Error logging in:", error);
//       alert("Failed to log in. Please check your credentials.");
//     }
//   };

const Auth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [formData, setFormData] = useState({email: '', password: ''})

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]:value });
  }


  const handleLogin = async (e) => {
    e.preventDefault();
    const {email, password} = formData
    try {
      dispatch(loginUser({ email, password }));
      dispatch(login());
    } catch (error) {
      console.error('Login failed:', err);
    }
  };

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);



  return (
    <div className="containar">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          value={formData.email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name="password" 
          id="password" 
          value={formData.password}
          onChange={handleInputChange}
        />
        <button className="login-btn" type="submit">Login</button>
        <p>Don't have an account? <Link style={{color: 'white'}} to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default Auth;
