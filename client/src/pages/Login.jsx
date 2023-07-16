import { useState } from "react";
import { Link } from "react-router-dom";
import { loginAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [authData, setAuthData] = useState({
    email:"",
    password:""
  })

  const login = (e) => {
    e.preventDefault()
    dispatch(loginAction(authData, navigate))  
  }

  const onChange = (e) => {
    setAuthData({...authData, [e.target.name]: e.target.value})
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="-mt-8">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form onSubmit={login} className="max-w-md mx-auto">
          <input value={authData.email} onChange={onChange} name="email" type="email" placeholder="your@email.com" />
          <input value={authData.password} onChange={onChange} name="password" type="password" placeholder="password" />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?{" "}
            <Link className="underline text-black" to={"/register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
