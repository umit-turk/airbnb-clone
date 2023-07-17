import axios from 'axios';
import { showToast } from '../../components/Toast';

export const registerAction = (authData, navigate) => async(dispatch) => {
    try {
        const {data} = await axios.post("/register", authData)
        dispatch({type:"REGISTER",payload:data})
        showToast('Registration successful!');
        navigate("/login")
    } catch (error) {
        showToast(error.response.data.message);
    }
}

export const loginAction = (authData, navigate) => async(dispatch) => {
    try {
        const {data} = await axios.post("/login",authData)
        dispatch({type:"LOGIN",payload:data})
        showToast('Login successful!');
        navigate("/")
    } catch (error) {
        showToast(error.response.data.message);
    }
}

export const logoutAction = (navigate) => async(dispatch) => {
    try {
        dispatch({type:"LOGOUT"})
        showToast('Logout successful!');
        navigate("/")
    } catch (error) {
        showToast(error.response.data.message);
    }
}

export const profileAction = (id) => async(dispatch) => {
    try {
      const {data} = await axios.get(`/profile/${id}`)
       dispatch({type:"GET_USER",payload:data})
    } catch (error) {
        console.log(error)
    }
}