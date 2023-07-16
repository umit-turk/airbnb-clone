import { useState } from "react";
import { Link } from "react-router-dom";
import { registerAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [authData, setAuthData] = useState({
    name:"",
    email:"",
    password:"",
  })
  
  const handleChange = (e) => {
    setAuthData({...authData, [e.target.name] : e.target.value})
  } 

  const register = (e) => {
    e.preventDefault()
    dispatch(registerAction(authData, navigate)) 
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="-mt-8">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form onSubmit={(e) => register(e)} className="max-w-md mx-auto">
          <input value={authData.name} onChange={handleChange} type="text" name="name" placeholder="John Doe" />
          <input value={authData.email} onChange={handleChange} type="email" name="email" placeholder="your@email.com" />
          <input value={authData.password} onChange={handleChange} type="password" name="password" placeholder="password" />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member?{" "}
            <Link className="underline text-black" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
