import React, { Component } from 'react';
import markerIcon from '../assets/LogoCombo3.png';
import map from '../assets/map.png';

export class Map extends Component {
    render() {
        return (
            <div className="relative justify-center items-center w-[500px] lg:w-[1000px] ">
                <img src={map} alt="map" className="relative z-20"/>

                <img
                    src={markerIcon}
                    alt="marker"
                    className="absolute top-4/11 lg:top-5/11 left-1/2 -translate-x-1/2 w-10 h-7 z-50 "
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[120px]
                    bg-[#E61707] opacity-30 blur-3xl z-0"></div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[120px]
                    bg-[#E61707] opacity-30 blur-3xl z-0"></div>

                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[120px] h-[300px]
                    bg-[#E61707] opacity-30 blur-3xl z-0"></div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120px] h-[300px]
                    bg-[#E61707] opacity-30 blur-3xl"></div>

                <svg
                    className="absolute left-1/2 top-6/11 -translate-x-1/2 -translate-y-1/2 z-50 animate-pulse"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="17.3854" cy="17.3854" r="17.3854" fill="#E61707" fillOpacity="0.09"/>
                </svg>

                <svg
                    className="absolute left-1/2 top-6/11 -translate-x-1/2 -translate-y-1/2 z-40 animate-ping"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="12.9236" cy="12.9236" r="12.9236" fill="#E61707" fillOpacity="0.2"/>
                </svg>

                <svg
                    className="absolute left-1/2 top-6/11 -translate-x-1/2 -translate-y-1/2 z-40"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="7.69264" cy="7.69264" r="7.69264" fill="#E61707"/>
                </svg>
            </div>

        );
    }
}

export default Map;
