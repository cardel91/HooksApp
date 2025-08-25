import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubtitle } from "./ui/MySubtitle"

// no hace falta memorizar
// const handleApiCallNoMemo = (subtitle: string) => {
//     console.log("Llamando al api o k ase", subtitle);
// }

export const MemoHook = () => {

    const [title, setTitle] = useState("Ola")

    const [subtitle, setSubtitle] = useState("k ase")

    /**
     * Memorizar elementos
     */
    const handleApiCall = useCallback(() => {
        console.log("Llamando al api o k ase", subtitle);
    }, [subtitle]);

    // const handleApiCall = (subtitle: string) => {
    //     console.log("Llamando al api o k ase", subtitle);
    // }

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">MemoApp</h1>

            <MyTitle title={title} />

            <MySubtitle subtitle={subtitle} callMyAPI={handleApiCall} />

            <button
                onClick={() => setTitle("Olen " + new Date().getTime())}
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Cambiar título
            </button>
            <button
                onClick={() => setSubtitle("k asen a las " + new Date().getTime())}

                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Cambiar subtítulo
            </button>
        </div>
    )
}
