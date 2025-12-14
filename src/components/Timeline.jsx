import React from "react";
import TimeLine from "../assets/Timeline.png";
import Grid1 from "../assets/Grid.png";
import Grid2 from "../assets/Grid2.png";
import day1 from "../assets/day1.png";
import day2 from "../assets/day2.png";

export default function Timeline() {
    return (
        <div className="w-full flex justify-center items-start text-white py-12 px-5 gap-4">
            <img src={TimeLine} alt="timeline" className=" w-[700px] h-auto z-50"  loading="lazy"/>
            <img src={day1} alt="day1" className="absolute w-[28px] -mt-2 -ml-92 md:w-[58px] md:-mt-2 md:-ml-180  lg:-ml-190 z-10"/>
            <img src={day2} alt="day2" className="absolute w-[30px] mt-64 -ml-92 md:w-[60px] md:mt-120 md:-ml-180 lg:-ml-190  z-10"/>

            <img src={Grid1} alt="grids" className="absolute w-[80px] mt-12 -ml-8 md:w-[170px] md:mt-24 md:-ml-36  z-10"/>
            <img src={Grid2} alt="grids" className="absolute w-[80px] mt-4 md:w-[170px] md:mt-6 md:ml-37  z-10"/>
        </div>
    );
}
