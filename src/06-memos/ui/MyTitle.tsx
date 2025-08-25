import React from "react";

interface Props {
    title: string;
}
export const MyTitle = React.memo(({ title }: Props) => {
    console.log("Title rendering");

    return (
        <h1 className="text-2xl">{title}</h1>
    )
})
