import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Components/pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./Components/pages/AboutPage.jsx";
import ServicesPage from "./Components/pages/ServicesPage.jsx";
import PricingPage from "./Components/pages/PricingPage.jsx";
import WorkPage from "./Components/pages/WorkPage.jsx";
import BlogPage from "./Components/pages/BlogPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/price",
    element: <PricingPage />,
  },
  {
    path: "/portfolio",
    element: <WorkPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
