import { use, type JSX } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router";

interface Props {
    element: JSX.Element,
    // element: React.ReactNode,

}
export const PrivateRoute = ({ element }: Props) => {

    const { authStatus } = use(UserContext);

    if (authStatus === 'check')
        return null;

    if (authStatus === 'auth')
        return element;

    return <Navigate to="/login" replace />;

}
