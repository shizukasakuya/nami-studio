import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter  as Router} from "react-router-dom"
import "./index.css"

export const presets =[
    "@babel/preset-env",
    "@babel/preset-react"
  ]
export const plugins = [ "babel/plugin-syntax-jsx"]


ReactDOM.render(
  <Router>
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
