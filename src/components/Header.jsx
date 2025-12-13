import React, { Component } from 'react';
import Logo from "/src/assets/Logo1.png";

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isMenuOpen: false };
    }

    toggleMenu = () => this.setState(prev => ({ isMenuOpen: !prev.isMenuOpen }));
    closeMenu = () => this.setState({ isMenuOpen: false });

    handleNavClick = (sectionName) => {
        const { sectionRefs } = this.props;
        const sectionRef = sectionRefs?.[sectionName];
        if (!sectionRef?.current) return;

        if (sectionName === 'home') {
            sectionRef.current.scrollIntoView({ block: 'start' });
            window.history.pushState(null, '', '#');
        } else {
            sectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            window.history.pushState(null, '', `#${sectionName}`);
        }

        this.closeMenu();
    };


    render() {
        const { isMenuOpen } = this.state;
        const navLinks = [
            { name: 'Home', key: 'home' },
            { name: 'About', key: 'about' },
            { name: 'Partners', key: 'partners' },
            { name: 'Agenda', key: 'agenda' },
            { name: 'Location', key: 'location' },
            { name: 'Count', key: 'count' }
        ];

        return (
            <div className="poppins-regular text-[#B9B9B9] flex justify-between items-center py-5 px-8 md:py-4 md:px-8 lg:px-26">
                <div>
                    <button
                        onClick={() => {
                            const sectionRef = this.props.sectionRefs?.home;
                            if (sectionRef?.current) {
                                sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                            window.history.pushState(null, '', '#home');
                            this.closeMenu();
                        }}
                    >
                        <img
                            className=" relative top-2 w-10 h-10 md:w-12 md:h-12"
                            src={Logo}
                            alt="logo"
                            loading="lazy"

                        />
                    </button>
                </div>

                <nav className="hidden md:block">
                    <ul className="flex gap-8 lg:gap-12 text-[16px]">
                        {navLinks.map(link => (
                            <li key={link.key}>
                                <button
                                    onClick={() => this.handleNavClick(link.key)}
                                    className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                                >
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    onClick={this.toggleMenu}
                    className="md:hidden text-gray-400 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {isMenuOpen && (
                    <div className="md:hidden absolute h-screen top-16 left-0 right-0 bg-[#010101] z-50 px-6">
                        <ul className="flex flex-col py-10 gap-6 text-md font-semibold">
                            {navLinks.map(link => (
                                <li key={link.key}>
                                    <button
                                        onClick={() => this.handleNavClick(link.key)}
                                        className="bg-[#0C0707B5] px-4 block hover:text-gray-300 transition-colors duration-200 py-2"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default Header;
