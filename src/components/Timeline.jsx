import React from "react";
import TimeLine from "../assets/Timeline.png";
import Grid1 from "../assets/Grid.png";
import Grid2 from "../assets/Grid2.png";

export default function Timeline() {
    return (
        <div className="w-full flex justify-center items-start text-white py-12 px-4 gap-4">
            <img src={TimeLine} alt="timeline" className=" w-[700px] h-auto z-50"/>
            <img src={Grid1} alt="grids" className="absolute w-[80px] mt-12 -ml-8 lg:w-[170px] lg:mt-24 lg:-ml-36  z-10"/>
            <img src={Grid2} alt="grids" className="absolute w-[80px] mt-4 lg:w-[170px] lg:mt-6 lg:ml-37  z-10"/>
        </div>
    );
}
