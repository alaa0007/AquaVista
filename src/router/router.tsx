import { lazy } from "react";
import { Routes, Route }from "react-router-dom";
import NotFound from "../pages/404/NotFound";



const HomePage = lazy(() => import("../pages/home/HomePage"));
const AboutUs = lazy(() => import("../pages/aboutUs/AboutUs"));
const AquaVista = lazy(() => import("../pages/aquaVista/AquaVista"));
const Register = lazy(() => import("../pages/register/Register"));
const Login = lazy(() => import("../pages/login/Login"));
const ErrorPages = lazy(() => import("../pages/error/ErrorPages"));

/**
 * The routes component. This component is the main router for the application.
 * It contains all the routes for the application.
 * @returns {React.ReactElement} The routes component.
 */
export const routes = (): React.ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/aquavista" element={<AquaVista />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
