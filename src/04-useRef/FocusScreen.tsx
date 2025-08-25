import { useRef } from "react"


export const FocusScreen = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleOnClick = () => {
        // console.log(inputRef.current?.value);
        inputRef.current?.select();
    }

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text2-xl font-thin text-white">Focus screen</h1>

            <input
                ref={inputRef}
                type="text"
                className="bg-white text-black px-4 py-2 rounded-md"
            />

            <button
                onClick={handleOnClick}
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Set focus
            </button>
        </div>
    )
}
