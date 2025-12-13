import React from "react";
import { HiMiniMapPin } from "react-icons/hi2";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaFacebook, FaDiscord } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Logo from "/src/assets/itc.png";

export default function Footer() {
    const navLinks = [
        { label: "Home", hash: "" },
        { label: "Agenda", hash: "agenda" },
        { label: "About", hash: "about" },
        { label: "Location", hash: "location" },
        { label: "Partners", hash: "partners" },
        { label: "Count", hash: "count" },
    ];

    const socials = [
        { icon: AiFillInstagram, url: "https://www.instagram.com/it_community/?hl=fr" },
        { icon: FaDiscord, url: "https://discord.com/channels/964583970618638356" },
        { icon: AiFillLinkedin, url: "https://www.linkedin.com/company/it-community/posts/?feedView=all" },
        { icon: FaFacebook, url: "https://www.facebook.com/itc.blida.1" },
    ];

    const goTo = (hash) => {
        window.history.pushState(null, "", hash ? `#${hash}` : "#");
        const el = document.getElementById(hash || "home");
        if (el) el.scrollIntoView({ block: "start" });
    };

    return (
        <footer className="bg-[#010101] text-gray-400 px-4 sm:px-6 lg:px-36 pt-12 sm:pt-16 pb-6 poppins-regular">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-12 text-center md:text-left">

                <div className="flex flex-col items-center md:items-start space-y-3 col-span-1">
                    <img src={Logo} alt="ITC Logo" className="w-20 sm:w-24 md:w-26" />
                    <p className="text-sm font-semibold tracking-wide">
                        SHARING IS CARING
                    </p>

                        <div className="flex items-center gap-2 text-sm cursor-pointer">
                            <HiMiniMapPin />
                            <span className="text-xs sm:text-sm">University of Blida 1</span>
                        </div>
                </div>

                <div className="space-y-5 col-span-1">
                    <h3 className="text-white font-semibold text-sm sm:text-base">Follow Us</h3>
                    <div className="relative left-8 pr-8 md:pr-0   md:left-0 grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-3 justify-start md:justify-start">
                        {socials.map(({ icon: Icon, url }, i) => (
                            <a
                                key={i}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[#262728] hover:bg-gray-700 transition"
                            >
                                <Icon className="text-lg sm:text-2xl text-neutral-50" />
                            </a>
                        ))}
                    </div>


                    <h3 className="text-white ml-6 md:ml-0 font-semibold mt-8 text-left text-sm sm:text-base">Contact us</h3>
                    <div className="flex items-center gap-2 text-xs sm:text-xs justify-center md:justify-start">
                        <MdEmail />
                        <a
                            href="mailto:contact.itc.blida@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            contact.itc.blida@gmail.com                        </a>
                    </div>
                </div>

                <div className="space-y-4 px-6 sm:px-6 md:px-12 col-span-2 md:col-span-1 -mt-2 md:mt-0">
                    <h3 className="text-white text-base sm:text-xl font-semibold text-left    md:text-left">
                        ITC Programing 4.0
                    </h3>
                    <ul className="relative right-8 md:right-0 grid grid-cols-3 sm:grid-cols-2 gap-y-3 sm:gap-y-4 text-sm sm:text-[16px]  justify-items-center md:justify-items-start">
                        {navLinks.map(link => (
                            <li key={link.label}>
                                <button
                                    onClick={() => goTo(link.hash)}
                                    className="hover:text-white transition text-xs sm:text-sm"
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-neutral-800 mb-4"></div>

            <div className="text-center text-xs text-neutral-400">
                © ITCP 2025 Organized by ITC Club, University of Blida 1
            </div>
        </footer>
    );
}