import React, { Component } from 'react'

export class SolutionCard extends Component {
    render() {
        const {
            icon,
            title,
            description,
            decorationType,
            iconBgColor = "bg-[#22171A]",
            className = ""
        } = this.props



        return (
            <div
                className={`poppins-medium relative h-full overflow-hidden rounded-xl border border-red-900/20 backdrop-blur-sm p-8  hover:border-red-900/40 transition-all duration-300 hover:scale-[1.02] ${className}`}
                style={{
                    background: "linear-gradient(to right, #140E11, #010101 100%)"
                }}
            >

                <div
                    className="absolute inset-0 opacity-100"
                    style={{
                        backgroundImage: `url(${decorationType})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right center",
                    }}
                ></div>

                <div className={`${iconBgColor} w-12 h-12  rounded-lg flex items-center justify-center mb-7 relative z-10`}>
                    <div className="text-white text-xl ">
                        {icon}

                    </div>
                </div>

                <h3 className="text-md md:text-xl  text-white mb-3 relative z-10">
                    {title}
                </h3>

                <p className="text-neutral-400 text-[16px] leading-relaxed relative z-10">
                    {description}
                </p>


            </div>
        )
    }
}

export default SolutionCard