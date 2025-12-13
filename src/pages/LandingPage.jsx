import React, { Component } from 'react';
import HeroSection from '/src/pages/HeroSec';
import Solutions from '/src/pages/Solutions';
import Sponsors from "./Sponsors.jsx";
import Agenda from "./Agenda.jsx";
import Localisation from "./Localisation.jsx";
import Counter from "./Counter.jsx";
import Header from "../components/Header.jsx";

export class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = { currentSection: 'home' };

        this.sectionRefs = {
            home: React.createRef(),
            about: React.createRef(),
            partners: React.createRef(),
            agenda: React.createRef(),
            location: React.createRef(),
            count: React.createRef()
        };
    }

    componentDidMount() {
        this.scrollFromHash();
        window.addEventListener('popstate', this.scrollFromHash);
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.scrollFromHash);
    }

    scrollFromHash = () => {
        const rawHash = window.location.hash.replace('#', '');
        const sectionName = rawHash === '' || rawHash === 'home'
            ? 'home'
            : rawHash;

        const sectionRef = this.sectionRefs[sectionName];
        if (!sectionRef?.current) return;

        if (sectionName === 'home') {
            sectionRef.current.scrollIntoView({ block: 'start' });
        } else {
            sectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        this.setState({ currentSection: sectionName });
    };

    render() {
        const { currentSection } = this.state;

        return (
            <div>
                <Header sectionRefs={this.sectionRefs} />

                <div id="home"  className="containerHero relative w-full flex items-center justify-center" style={{ height: 'calc(100vh - 86px)' }}>
                    <HeroSection enableAnimations={currentSection === 'home'} />
                </div>

                <div className="containerSol">
                    <div id="about" ref={this.sectionRefs.about}>
                        <Solutions enableAnimations={currentSection === 'about'} />
                    </div>

                    <div id="partners" ref={this.sectionRefs.partners}>
                        <Sponsors enableAnimations={currentSection === 'partners'} />
                    </div>

                    <div id="agenda" ref={this.sectionRefs.agenda}>
                        <Agenda enableAnimations={currentSection === 'agenda'} />
                    </div>

                    <div id="location" ref={this.sectionRefs.location}>
                        <Localisation enableAnimations={currentSection === 'location'} />
                    </div>

                    <div id="count" ref={this.sectionRefs.count}>
                        <Counter enableAnimations={currentSection === 'count'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
