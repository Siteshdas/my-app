import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='my-app'>
    <Routes>
      <Route path = "/my-app" element = {<App />}></Route>
    </Routes>
  </BrowserRouter>
);
