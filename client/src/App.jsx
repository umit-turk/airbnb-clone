import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./layout/layout";
import Register from "./pages/Register";
import Account from "./pages/Account";
import axios from "axios";
import useToken from "./hooks/useToken";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { profileAction } from "./redux/actions/auth";
import Places from "./pages/Places";
import PlacesForm from "./components/PlacesForm";

axios.defaults.baseURL = "http://localhost:4000";

function App() {
  const [token] = useToken();
  const dispatch = useDispatch()

  useEffect(() => {
    if (token?.user?._id) {
     dispatch(profileAction(token?.user?._id))
    }
  }, [token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/places" element={<Places />} />
          <Route path="/account/places/new" element={<PlacesForm />} />
          <Route path="/account/places/:id" element={<PlacesForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
