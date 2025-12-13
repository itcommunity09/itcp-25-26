import React from "react";
import { HiMiniMapPin } from "react-icons/hi2";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import { FaFacebook } from "react-icons/fa6";
import {  MdEmail } from "react-icons/md";
import {  FaDiscord  } from "react-icons/fa";
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
        <footer className="bg-[#010101] text-gray-400 px-6 lg:px-36 pt-16 pb-6 poppins-regular">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                <div className="space-y-0 relative bottom-6">
                    <img src={Logo} alt="ITC Logo" className="w-26" />
                    <p className="px-6 text-sm font-semibold tracking-wide">
                        SHARING IS CARING
                    </p>
                    <div className="px-5 mt-4 flex items-center gap-2 text-sm">
                        <HiMiniMapPin />
                        <span>University of Blida 1</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-white font-semibold">Follow Us</h3>
                    <div className="flex gap-4">
                        {socials.map(({ icon: Icon, url }, i) => (
                            <a
                                key={i}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 flex items-center justify-center rounded-full bg-[#262728] hover:bg-gray-700 transition"
                            >
                                <Icon className={'text-2xl'} />
                            </a>
                        ))}
                    </div>


                    <h3 className="text-white font-semibold mt-6">Contact us</h3>
                    <div className="flex items-center gap-2 text-sm">
                        <MdEmail />
                        <span>itc@gmail.com</span>
                    </div>
                </div>


                <div className="px-12 space-y-4">
                    <h3 className="text-white text-xl font-semibold">
                        ITC Programing 4.0
                    </h3>
                    <ul className="grid grid-cols-2 gap-y-4 text-[16px]">
                        {navLinks.map(link => (
                            <li key={link.label}>
                                <button
                                    onClick={() => goTo(link.hash)}
                                    className="hover:text-white transition"
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
