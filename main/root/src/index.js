import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux';
import {store} from './redux/store'
import { LOGIN } from './redux/actions/type';

if(window.localStorage.getItem('isAuthenticated')){
  store.dispatch({type: LOGIN , payload: {
    _id: window.localStorage.getItem('_id'),
    name: window.localStorage.getItem('name'),
    email: window.localStorage.getItem('email'),
    password: window.localStorage.getItem('password'),
    roll: window.localStorage.getItem('roll'),
  }})
}


ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
