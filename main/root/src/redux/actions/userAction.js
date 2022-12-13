import axios from "axios"
import { LOGIN, LOGOUT } from "./type";

export const signinUser = (data , history) => dispatch => {
    axios.post('http://localhost:4000/user/signin' , {...data})
        .then(res => {
            if (res.data.isAuthenticated){
                //Local memory
                window.localStorage.setItem('isAuthenticated' , res.data.isAuthenticated)
                window.localStorage.setItem('_id' , res.data.user._id)
                window.localStorage.setItem('name' , res.data.user.name)
                window.localStorage.setItem('email' , res.data.user.email)
                window.localStorage.setItem('password' , res.data.user.password)
                window.localStorage.setItem('roll' , res.data.user.roll)

                dispatch({type: LOGIN , payload: res.data.user})
                history.push('/profile');
            }
        })
        .catch(err => console.log(err));
}

export const registerUser = (data , history) => 
    dispatch => {
        axios.post('http://localhost:4000/user/register' , {...data})
        .then(res => {
            //If register is successful, navigate to signin page
            history.push('/signin');
        })
        .catch(err => console.log(err));
}


export const logoutUser = (history) => dispatch => {
            window.localStorage.removeItem('isAuthenticated')
            window.localStorage.removeItem('_id')
            window.localStorage.removeItem('name')
            window.localStorage.removeItem('email')
            window.localStorage.removeItem('password' )
            window.localStorage.removeItem('roll')
            dispatch({type: LOGOUT})
            history.push('/');
}
