import { useState } from "react"


export const useCounter = (initialValue: number = 1) => {

    const [counter, setCounter] = useState(initialValue);

    const increase = () => setCounter(counter + 1);

    const decrease = () => {
        if (counter < 1) return;
        setCounter(counter - 1);
    }
    return {
        //props
        counter,

        //methods
        increase,
        decrease
    }
}
