import React, { Component, createRef } from 'react';
import Map from "../components/Map.jsx";

export class Localisation extends Component {
    constructor(props) {
        super(props);
        this.sectionRef = createRef();
        this.state = { visible: false };
    }

    componentDidMount() {
        if (this.sectionRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        this.setState({ visible: true });
                        observer.disconnect();
                    }
                },
                { threshold: 0.2 }
            );
            observer.observe(this.sectionRef.current);
        }
    }

    render() {
        const { visible } = this.state;

        return (
            <div
                ref={this.sectionRef}
                className="poppins-regular mt-18 px-4 sm:px-12 py-8 flex flex-col items-center text-center"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}
            >
                <h1 className="p-2 font-semibold text-4xl sm:text-5xl bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent mb-6">
                    Localisation
                </h1>

                <p className="p-2 font-semibold text-md lg:text-xl bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent mb-6">
                    The N 1, lot alioua fodil, Chéraga 16014, Algiers
                </p>

                <Map/>
            </div>
        )
    }
}

export default Localisation;
