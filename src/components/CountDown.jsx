import React, { useEffect, useState } from "react";

export default function Countdown() {
    const targetDate = new Date("2025-12-21T00:00:00");

    const [time, setTime] = useState({
        days: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate - now;

            if (diff <= 0) {
                clearInterval(interval);
                setTime({ days: "00", minutes: "00", seconds: "00" });
                return;
            }

            const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
            const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
            const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

            setTime({ days, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const renderTimeBlock = (value, label) => (
        <div className="flex flex-col items-center">
            <div className="w-24 h-24 sm:w-36 sm:h-36 bg-[#0D0D0D] rounded-xl flex justify-center items-center text-4xl sm:text-6xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0D0D0D]/50 backdrop-blur-sm rounded-xl z-0" />
                <span className="relative z-10 font-bold text-white">{value}</span>
            </div>
            <span className="mt-2 text-base sm:text-xl text-neutral-400">{label}</span>
        </div>
    );

    return (
        <div className="dm-sans lg:max-w-6xl lg:w-6xl flex items-center justify-evenly gap-6 text-white flex-wrap z-50">
            {renderTimeBlock(time.days, "Days")}
            {renderTimeBlock(time.minutes, "Minutes")}
            {renderTimeBlock(time.seconds, "Seconds")}
        </div>
    );
}

