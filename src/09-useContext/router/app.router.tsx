import {
    createBrowserRouter,
    Navigate,
    //   RouterProvider,
} from "react-router";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { AboutPage } from "../pages/about/AboutPage";
import { LoginPage } from "../pages/auth/LoginPage";
import { PrivateRoute } from "./PrivateRoute";


export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <div>Ola k ase</div>
        // Component: Root,
        // loader: loadRootData,
    },
    {
        path: "/profile",
        element: <PrivateRoute element={<ProfilePage />} />
    },
    {
        path: "/about",
        element: <AboutPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "*",
        element: <Navigate to={"/"} />
    },
]);
