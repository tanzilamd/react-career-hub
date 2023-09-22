import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home.jsx";
import Jobs from "./components/Jobs/Jobs";
import Statistics from "./components/Statistics/Statistics";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./error-page";
import JobDetails from "./components/JobDetails/JobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/jobs", element: <Jobs></Jobs> },
            { path: "/stats", element: <Statistics></Statistics> },
            { path: "/applied", element: <AppliedJobs></AppliedJobs> },
            { path: "/blog", element: <Blog></Blog> },
            {
                path: "/job/:id",
                element: <JobDetails></JobDetails>,
                loader: () => fetch("../jobs.json"),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
