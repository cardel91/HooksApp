import { useCounter } from "@/hooks/useCounter"
import { useMemo } from "react";


const heavyFun = (iteration: number) => {
    console.time('function');

    for (let index = 0; index < iteration; index++) {
        console.log("ay vamos")
    }
    console.timeEnd('function');
    return `${iteration} iteraciones`
}


export const MemoCounter = () => {

    const { counter, increase } = useCounter(1000);
    const { counter: counter2, increase: increase2 } = useCounter(1000);


    const heavyVal = useMemo(() => heavyFun(counter), [counter]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Memo - useMemo - {heavyVal}</h1>

            <h4>
                Counter: {counter}
            </h4>
            <h4>
                Counter: {counter2}
            </h4>

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={increase}>+1 Counter</button>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={increase2}>+1 Counter 2</button>
        </div>
    )
}
