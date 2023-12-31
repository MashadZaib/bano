import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./assets/scss/dashlite.scss";
import "./assets/scss/style-email.scss";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/combineReducers";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
