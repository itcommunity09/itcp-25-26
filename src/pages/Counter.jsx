import React, { Component } from "react";
import CountDown from "../components/CountDown.jsx";
import LogoCombo3 from "/src/assets/LogoCombo3.png";
import LogoCombo4 from "/src/assets/LogoCombo4.png";
import LogoCombo from "/src/assets/LogoCombo.png";
import LogoCombo2 from "/src/assets/LogoCombo2.png";

export class Counter extends Component {
    render() {
        const logos = [
            { img: LogoCombo2, size: 30 },
            { img: LogoCombo, size: 30 },
            { img: LogoCombo2, size: 30 },
            { img: LogoCombo2, size: 35 },
            { img: LogoCombo, size: 30 },
            { img: LogoCombo2, size: 35 },
        ];

        return (
            <div className="relative flex flex-col items-center justify-center min-h-screen mt-10 px-4 overflow-hidden">

                {logos.map((item, index) => {
                    const startX = Math.random() * 80 + 10;
                    const startY = Math.random() * 80 + 10;
                    const duration = Math.random() * 10 + 8;
                    const delay = Math.random() * 5;

                    return (
                        <div
                            key={index}
                            className="absolute z-10 opacity-30"
                            style={{
                                top: `${startY}%`,
                                left: `${startX}%`,
                                width: `${item.size}px`,
                                height: `${item.size}px`,
                                transform: 'translate(-50%, -50%)',
                                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))',
                                animation: `float ${duration}s ease-in-out ${delay}s infinite`,
                            }}
                        >
                            <img
                                src={item.img}
                                alt=""
                                className="w-full h-full object-contain"
                                style={{
                                    animation: `rotate ${Math.random() * 20 + 15}s linear infinite ${Math.random() * 5}s`
                                }}
                            />
                        </div>
                    );
                })}

                <div className="flex justify-center items-center gap-4 w-72 h-24 bg-[#080000] rounded-xl z-0 relative">
                    <img src={LogoCombo3} alt="LogoCombo3" className="w-12 h-8" />
                    <img src={LogoCombo4} alt="LogoCombo4" className="w-16 h-4" />
                </div>

                <h1 className="p-2 poppins-regular font-semibold text-2xl sm:text-4xl bg-gradient-to-r from-white to-white/20 bg-clip-text text-transparent mb-6 mt-4 text-center">
                    The battle begins in
                </h1>

                <CountDown />

                <h1 className="p-2 poppins-regular font-semibold text-2xl sm:text-4xl bg-gradient-to-r from-white to-white/20 bg-clip-text text-transparent mb-6 mt-10 text-center">
                    Don't Miss Out Your chance
                </h1>

                <button className="group cursor-pointer relative shadow-sm shadow-neutral-500 rounded-full py-3 px-8 md:py-3 md:px10 bg-[#DA190B] text-white text-md md:text-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 active:bg-red-900/30">
                    <span className="relative z-10">Register Now</span>
                    <div className=" absolute inset-0 rounded-full bg-[#DA190B] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
                </button>

                <style>
                    {`
    @keyframes float {
        0% {
            transform: translate(-50%, -50%) translate(0px, 0px) rotate(0deg);
        }
        25% {
            transform: translate(-50%, -50%) translate(20px, -15px) rotate(2deg);
        }
        50% {
            transform: translate(-50%, -50%) translate(-15px, 10px) rotate(-1deg);
        }
        75% {
            transform: translate(-50%, -50%) translate(10px, 15px) rotate(1deg);
        }
        100% {
            transform: translate(-50%, -50%) translate(0px, 0px) rotate(0deg);
        }
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .animate-spin-slow {
        animation: spin 20s linear infinite;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`}
                </style>
            </div>
        );
    }
}

export default Counter;