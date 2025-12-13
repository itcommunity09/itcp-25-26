import React, { Component } from 'react'
import LogoCombo from "/src/assets/LogoCombo.png";
import LogoCombo2 from "/src/assets/LogoCombo2.png";

export class HeroSec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textRevealed: props.enableAnimations ? false : true,
            showContent: props.enableAnimations ? false : true
        };
    }

    componentDidMount() {
        if (this.props.enableAnimations) {
            setTimeout(() => {
                this.setState({ textRevealed: true });
            }, 100);

            setTimeout(() => {
                this.setState({ showContent: true });
            }, 50);
        } else {
            this.setState({
                textRevealed: true,
                showContent: true
            });
        }
    }

    render() {
        const { textRevealed, showContent } = this.state;
        const { enableAnimations } = this.props;
        const paragraphText = "Problem-solving competition. Real problems. Real solutions. Code in any language. Push your logic, speed, and creativity to the next level.";
        const words = paragraphText.split(' ');

        return (
            <div
                className="relative w-full flex items-center justify-center px-4 min-h-[85vh] sm:min-h-[90vh] lg:min-h-[calc(100vh-100px)]"

            >

                <div className="absolute inset-0 z-0">
                    {[...Array(60)].map((_, i) => {
                        const size = Math.random() * 3 + 1;
                        return (
                            <div
                                key={`star-${i}`}
                                className="absolute bg-white rounded-full"
                                style={{
                                    width: `${size}px`,
                                    height: `${size}px`,
                                    left: `${Math.random() * 100}vw`,
                                    top: `${Math.random() * 100}%`,
                                    animation: `gentle-twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                                    animationDelay: `${Math.random() * 1}s`,
                                    opacity: 0,
                                    animationFillMode: 'forwards'
                                }}
                            />
                        );
                    })}
                </div>

                <div className="absolute inset-0 z-10 pointer-events-none">
                    {[
                        { img: LogoCombo2, size: 45, angle: 305, distance: 200 },
                        { img: LogoCombo, size: 30, angle: 280, distance: 180 },
                        { img: LogoCombo2, size: 30, angle: 220, distance: 220 },
                        { img: LogoCombo2, size: 35, angle: 160, distance: 200 },
                        { img: LogoCombo, size: 40, angle: 120, distance: 190 },
                        { img: LogoCombo2, size: 35, angle: 20, distance: 210 },
                    ].map((item, index) => {
                        const centerX = 50;
                        const centerY = 50;
                        const radians = (item.angle * Math.PI) / 180;
                        const x = centerX + (Math.cos(radians) * (item.distance / 7));
                        const y = centerY + (Math.sin(radians) * (item.distance / 5));
                        const orbitSpeed = Math.random() * 40 + 50;
                        const orbitDelay = Math.random() * 3;
                        const floatOffset = Math.random() * 10 + 5;

                        return (
                            <div
                                key={index}
                                className="absolute"
                                style={{
                                    top: `${y}%`,
                                    left: `${x}%`,
                                    width: `${item.size}px`,
                                    height: `${item.size}px`,
                                    opacity: 0,
                                    transform: 'translate(-50%, -50%)',
                                    filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))',
                                    animation: `smooth-orbital ${orbitSpeed}s cubic-bezier(0.4, 0, 0.2, 1) infinite ${orbitDelay}s, fadeInLogos 10s ease ${index * 0.2 + 0.5}s forwards`,
                                }}
                            >
                                <img
                                    src={item.img}
                                    alt=""
                                    className="w-full h-full object-contain"
                                    style={{
                                        animation: `ultra-smooth-spin ${Math.random() * 25 + 35}s linear infinite`,
                                        opacity: 0,
                                        animationDelay: `${index * 0.8}s`
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>

                <div className="poppins-regular relative z-20 mb-10  md:mb-0 max-w-6xl w-full flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-center px-2">
                    <div className="opacity-0 animate-fadeInUp">
                        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-snug sm:leading-tight">
                            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">T</span>
                            <span className="bg-gradient-to-r from-white to-white/55 bg-clip-text text-transparent">he </span>
                            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">C</span>
                            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">oding </span>
                            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Challenge </span>
                            <span className="bg-gradient-to-r from-white to-white/30 bg-clip-text text-transparent mr-1">That</span>
                            <br className="hidden sm:block" />
                            <span className="">{""}Pushes Your Limits</span>
                        </h1>
                    </div>

                    <div className="text-base sm:text-sm md:text-md lg:text-lg text-gray-400 max-w-4xl leading-relaxed px-4 h-20">
                        <p className="opacity-0 animate-textReveal">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className="inline-block mr-1 opacity-0 animate-wordReveal"
                                    style={{
                                        animationDelay: `${wordIndex * 0.05 + 0.8}s`,
                                        animationFillMode: 'forwards'
                                    }}
                                >
                                    {word}
                                </span>
                            ))}
                        </p>
                    </div>

                    <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '1.8s' }}>
                        <a
                            href="https://tripetto.app/run/W2DH3X7OBR"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="group cursor-pointer relative shadow-sm shadow-neutral-500  mt-8 rounded-full py-3 px-8 md:py-3 md:px-10 bg-[#DA190B] text-white text-md md:text-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 active:bg-red-900/30">
                                <span className="relative z-10">Register Now</span>
                                <div className="absolute inset-0 rounded-full bg-[#DA190B] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
                            </button>
                        </a>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes gentle-twinkle {
                        0%, 100% {
                            opacity: 0.2;
                            transform: scale(1);
                        }
                        50% {
                            opacity: 0.8;
                            transform: scale(1.1);
                        }
                    }

                    @keyframes smooth-orbital {
                        0% {
                            transform: translate(-50%, -50%) translate(0px, 0px) rotate(0deg);
                        }
                        25% {
                            transform: translate(-50%, -50%) translate(10px, -8px) rotate(90deg);
                        }
                        50% {
                            transform: translate(-50%, -50%) translate(0px, 0px) rotate(180deg);
                        }
                        75% {
                            transform: translate(-50%, -50%) translate(-10px, 8px) rotate(270deg);
                        }
                        100% {
                            transform: translate(-50%, -50%) translate(0px, 0px) rotate(360deg);
                        }
                    }

                    @keyframes ultra-smooth-spin {
                        0% {
                            transform: rotate(0deg) scale(1);
                            opacity: 0.7;
                        }
                        25% {
                            transform: rotate(90deg) scale(1.02);
                            opacity: 0.9;
                        }
                        50% {
                            transform: rotate(180deg) scale(1);
                            opacity: 0.7;
                        }
                        75% {
                            transform: rotate(270deg) scale(1.02);
                            opacity: 0.9;
                        }
                        100% {
                            transform: rotate(360deg) scale(1);
                            opacity: 0.7;
                        }
                    }

                    @keyframes fadeInLogos {
                        0% {
                            opacity: 0;
                            transform: translate(50%, -50%) scale(0.8);
                        }
                        50% {
                            opacity: 0.4;
                            transform: translate(-50%, 50%) scale(1);
                        }
                        100% {
                            opacity: 0.5;
                            transform: translate(50%, -50%) scale(0.8);
                        }
                    }

                    @keyframes fadeInUp {
                        0% {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .animate-fadeInUp {
                        animation: fadeInUp 1s ease-out forwards;
                    }

                    @keyframes wordReveal {
                        0% {
                            opacity: 0;
                            transform: translateY(5px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .animate-wordReveal {
                        animation: wordReveal 0.4s ease-out forwards;
                    }

                    @keyframes textReveal {
                        0% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 1;
                        }
                    }

                    .animate-textReveal {
                        animation: textReveal 0.5s ease-out 0.5s forwards;
                    }

                    .animate-float {
                        animation: float 6s ease-in-out infinite;
                    }

                    .animate-spin-slow {
                        animation: spin-slow 20s linear infinite;
                    }
                `}</style>
            </div>
        )
    }
}

export default HeroSec