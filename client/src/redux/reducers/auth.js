const authReducer = (state = {auth:null}, action) => {
    switch (action.type) {
        case "REGISTER":
        return {
            ...state,
            auth: action.payload
        }
        case "LOGIN":
            localStorage.setItem("auth",JSON.stringify(action.payload))
        return {
            ...state,
            auth: action.payload
        }
        case "GET_USER":
        return {
            ...state,
            auth: action.payload
        }
        case "LOGOUT":
           localStorage.clear();
        return {
            ...state,
            auth: null
        }
        default:
            return state
    }
} 

export default authReducer;