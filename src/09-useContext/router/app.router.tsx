import {
    createBrowserRouter,
    Navigate,
    //   RouterProvider,
} from "react-router";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { AboutPage } from "../pages/about/AboutPage";
import { LoginPage } from "../pages/auth/LoginPage";


export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <div>Ola k ase</div>
        // Component: Root,
        // loader: loadRootData,
    },
    {
        path: "/profile",
        element: <ProfilePage />
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
