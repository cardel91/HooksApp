import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button"
import { use } from "react";
import { useNavigate } from "react-router";


export const ProfilePage = () => {

    const { user, logout } = use(UserContext);
    const navigation = useNavigate();


    const handleLogout = () => {
        logout();
        navigation("/login");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-center">
            <h1 className="text-4xl">Perfil</h1>

            <hr />

            <pre className="my-2 overflow-x-auto w-[50%]" >{JSON.stringify(user, null, 2)}</pre>

            <Button
                onClick={handleLogout}
                variant={"destructive"}>
                Salir
            </Button>
        </div>
    )
}
