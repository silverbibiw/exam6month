import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//pages
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import PricePage from "./pages/PricePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignPage from "./pages/SignPage.jsx";

//inner pages
import WebDesignPage from "./pages/courses/WebDesignPage.jsx";
import UxUiPage from "./pages/courses/UxUiPage.jsx";
import Mobile from "./pages/courses/Mobile.jsx";
import GraphicDesign from "./pages/courses/GraphicDesign.jsx";
import FrontEnd from "./pages/courses/FrontEnd.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="pricing" element={<PricePage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignPage />} />
      <Route path="course" element={<CoursePage />} />
      <Route path="course/webdesign" element={<WebDesignPage />} />
      <Route path="course/ux" element={<UxUiPage />} />
      <Route path="course/mobile" element={<Mobile />} />
      <Route path="course/graphic" element={<GraphicDesign />} />
      <Route path="course/front" element={<FrontEnd />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
