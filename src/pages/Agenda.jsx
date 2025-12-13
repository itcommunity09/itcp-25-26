import React, { Component, createRef } from 'react';
import Timeline from "../components/Timeline.jsx";

export class Agenda extends Component {
    constructor(props) {
        super(props);
        this.state = { animate: false };
        this.sectionRef = createRef();
    }

    componentDidMount() {
        if (this.sectionRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        this.setState({ animate: true });
                        observer.disconnect(); // trigger only once
                    }
                },
                { root: null, threshold: 0.2 } // 20% visible
            );
            observer.observe(this.sectionRef.current);
        }
    }

    render() {
        const { animate } = this.state;

        return (
            <div
                className="poppins-regular mt-32 px-4 sm:px-12 py-8 flex flex-col items-center text-center"
                ref={this.sectionRef}
            >
                <h1
                    className="p-2 font-bold text-4xl sm:text-5xl bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent mb-10 opacity-0"
                    style={{
                        animation: animate ? 'fadeSlideUp 0.8s ease-out 0.2s forwards' : 'none'
                    }}
                >
                    Agenda
                </h1>

                <p
                    className="font-semibold text-neutral-400 text-base sm:text-lg md:text-xl max-w-3xl md:max-w-5xl opacity-0"
                    style={{
                        animation: animate ? 'fadeSlideUp 0.8s ease-out 0.4s forwards' : 'none'
                    }}
                >
                    The Great challenge of ITCP 4.0 will be at{" "}
                    <span
                        style={{
                            background: "radial-gradient(circle at center, #A81A13 0%, #E61707 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        21-22 December
                    </span>
                </p>

                <div
                    className="mt-8 w-full opacity-0"
                    style={{
                        animation: animate ? 'fadeSlideUp 0.8s ease-out 0.6s forwards' : 'none'
                    }}
                >
                    <Timeline />
                </div>

                <style jsx>{`
                    @keyframes fadeSlideUp {
                        0% {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default Agenda;
