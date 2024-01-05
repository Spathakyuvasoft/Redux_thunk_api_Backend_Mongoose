import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import BasicExample from "./components/Bootstrap/Bootstrap";
import Table from "./components/Table/Table";
import Form from "./components/Form/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Table />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/form/:id",
    element: <Form />,
  },
  {
    path: "/BasicExample",
    element: <BasicExample />,
  },
  //   {
  //     path: "*",
  //     element: <NoPage />,
  //   },
]);

export default router;
