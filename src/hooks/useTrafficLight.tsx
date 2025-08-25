import { useEffect, useState } from "react";

const colors = {
    red: "bg-red-500 ",
    yellow: "bg-yellow-500 animate-custom-pulse",
    green: "bg-green-500 ",
    // blue: "bg-blue-500 animate-pulse",
    // pink: "bg-pink-500 animate-pulse",
};

export type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = (color: TrafficLightColor, time: number = 10, interval: number = (time * 0.4)) => {

    const [light, setLight] = useState<TrafficLightColor>(color);
    const [countdown, setCountdown] = useState(time);


    useEffect(() => {

        const intervalId = setInterval(() => {
            setCountdown((previousState) => previousState - 1)
        }, 1000);

        // evitar fuga
        return () => {
            clearInterval(intervalId)
        }

    }, [countdown, time]);

    useEffect(() => {

        if (light === "red") {
            if (countdown < 0) {
                setLight("green");
                setCountdown(time);
            }
        }

        if (light === "yellow") {
            if (countdown < 0) {
                setLight("red")
                setCountdown(time);

            }
        }

        if (light === "green") {
            if (countdown < interval) {
                setLight("yellow")
            }
        }

    }, [countdown, light, time, interval])

    return {
        countdown,

        percentage: (countdown / time) * 100,
        greenLight: light === "green" ? colors.green : 'bg-gray-500',
        yellowLight: light === "yellow" ? colors.yellow : 'bg-gray-500',
        redLight: light === "red" ? colors.red : 'bg-gray-500'

    }
}
