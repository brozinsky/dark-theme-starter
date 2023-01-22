import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import WithTheme from "@/components/HOC/WithTheme";
import Root from "@/routes/Root";
import Page1 from "@/routes/Page1";
import Page2 from "@/routes/Page2";
import Page3 from "@/routes/Page3";
import ErrorPage from "@/routes/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "page-1",
        element: <Page1 />,
    },
    {
        path: "page-2",
        element: <Page2 />,
    },
    {
        path: "page-3",
        element: <Page3 />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
