import { memo } from "react";

interface Props {
    subtitle: string;
    callMyAPI: (value: string) => void;
}
export const MySubtitle = memo(({ subtitle, callMyAPI }: Props) => {

    console.log("Subtitle rendering");

    return (
        <>
            <h6 className="text-2xl font-bold">{subtitle}</h6>

            <button
                onClick={() => callMyAPI(subtitle)}
                className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer">Llamar función</button>
        </>
    )
})
