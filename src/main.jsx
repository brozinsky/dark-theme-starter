import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import Root from "@/routes/Root";
import Page1 from "@/routes/Page1";
import Page2 from "@/routes/Page2";
import Page3 from "@/routes/Page3";
import ErrorPage from "@/routes/ErrorPage";
import "@/styles//main.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />
    },
    {
        path: "page-1",
        element: <Page1 />
    },
    {
        path: "page-2",
        element: <Page2 />
    },
    {
        path: "page-3",
        element: <Page3 />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
