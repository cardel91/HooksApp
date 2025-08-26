import { use, type Usable } from "react"
import { type User } from "./get-user.action"

// fuera del ciclo de vida para que no se recargue constantemente
// const userPromise = getUserAction(1);
interface Props {
    getUser: Usable<User>
}

/* 
    API use() evita tener que usar componentes asincronicos
 */
export const ClientInformation = ({ getUser }: Props) => {

    // const user = use(userPromise);

    // useEffect(() => {
    //     getUserAction(id)
    //         .then(console.log);
    // }, [id])


    const user = use(getUser);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h2 className="text-4xl font-thin text-white">
                {user.name} - #{user.id}
            </h2>

            <p className="text-2xl font-bold">{user.location}</p>
            <p className="text-2xl">{user.role}</p>


        </div>
    )
}
