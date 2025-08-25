import { useEffect, useState } from "react";

const colors = {
    red: "bg-red-500 ",
    yellow: "bg-yellow-500 animate-custom-pulse",
    green: "bg-green-500 ",
    // blue: "bg-blue-500 animate-pulse",
    // pink: "bg-pink-500 animate-pulse",
};

// type TrafficLightColor = "red" | "yellow" | "green";

type TrafficLightColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {


    const [light, setLight] = useState<TrafficLightColor>("red");
    const [countdown, setCountdown] = useState(5);



    useEffect(() => {
        console.log({ countdown });

        if (countdown < 0) {
            setCountdown(5);
        }

        const intervalId = setInterval(() => {
            console.log("setInterval llamado");

            setCountdown((previousState) => previousState - 1)
        }, 1000);

        // evitar fuga
        return () => {
            console.log("Cleanup");
            clearInterval(intervalId)
        }

    }, [countdown]);

    useEffect(() => {

        if (light === "red") {
            if (countdown < 0) {
                setLight("green");
                setCountdown(10);
            }
        }

        if (light === "yellow") {
            if (countdown < 0) {
                setLight("red")
                setCountdown(10);

            }
        }

        if (light === "green") {
            if (countdown < 4) {
                setLight("yellow")
            }
        }

    }, [countdown, light])



    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">

                <h1 className="text-white text-2xl font-thin">Semáforo con useEffect</h1>
                <h2 className="text-white text-xl">{countdown}</h2>

                <div className="w-64 bg-gray-700 rounded-full h-2">
                    <div

                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
                        style={{ width: `${(countdown / 10) * 100}%` }}></div>
                </div>

                <div className={`w-32 h-32 ${light === "red" ? colors[light] : "bg-gray-500"} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === "yellow" ? colors[light] : "bg-gray-500"} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === "green" ? colors[light] : "bg-gray-500"} rounded-full`}></div>

                {/* Botón para cambiar el estado de la luz */}

            </div>
        </div>
    );
};