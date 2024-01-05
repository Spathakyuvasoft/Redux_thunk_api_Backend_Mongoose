import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"; 
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import store from "./Redux/Store/Store";
import Counter from "./components/Counter/Counter";
import Table from "./components/Table/Table";
import Form from "./components/Form/Form"; 
import router from './App.js'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
