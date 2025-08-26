import { createContext, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user.data";

// interface UserContextProps {
//     children: React.ReactNode
// }

type AuthStatus = "auth" | "not auth" | "check";

interface UserContextProps {
    // state
    authStatus: AuthStatus;
    user: User | null;

    // methods
    login: (userId: number) => boolean;
    logout: () => void;
};

export const UserContext = createContext({} as UserContextProps);

/* HIGHER ORDER COMPONENT */
export const UserContextProvider = ({ children }: PropsWithChildren) => {

    // const [name, setName] = useState("ola k ase");
    const [authStatus, setAuthStatus] = useState<AuthStatus>("check");
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (userId: number) => {
        // console.log({ userId })

        const user = users.find(user => user.id === userId);
        if (!user) {
            console.log(`User ${userId} not found`);
            setUser(null);
            setAuthStatus("not auth");
            return false;
        }

        setUser(user);
        setAuthStatus("auth");

        return true;
    }

    const handleLogout = () => {
        setUser(null);
        setAuthStatus("not auth");
    }

    return <UserContext value={
        {
            authStatus,
            user,
            login: handleLogin,
            logout: handleLogout
        }
    }>{children}</UserContext>
};
