import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button"
import { use } from "react";


export const ProfilePage = () => {

    const { user } = use(UserContext);

    return (
        <div className="flex flex-col items-center justify-center min-h-center">
            <h1 className="text-4xl">Perfil</h1>

            <hr />

            <pre className="my-2 text-shadow-2xs" >{JSON.stringify({ user }, null, 2)}</pre>

            <Button variant={"destructive"}>
                Salir
            </Button>
        </div>
    )
}
