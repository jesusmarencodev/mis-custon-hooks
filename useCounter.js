import { useState } from "react";

export const useCounter = (initiaState = 10) => {
    const [counter, setCounter] = useState(initiaState);


    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initiaState);
    }


    return {
        counter,
        increment,
        decrement,
        reset
    }
}