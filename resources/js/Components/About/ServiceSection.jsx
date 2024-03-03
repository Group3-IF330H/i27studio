import React from "react";

const ServiceSection = () => {
    return (
        <div className="mt-20 service-section">
            <div className="flex flex-col items-center w-full heading">
                <h1 className="text-4xl font-semibold text-center md:text-5xl">
                    The Way We Do
                </h1>
                <p className="mt-5 text-lg text-center md:text-2xl opacity-60">
                    We provide everything you need for your architectural
                    project.
                </p>
            </div>
            <div className="flex flex-col grid-cols-12 gap-5 mt-10 md:gap-6 md:grid service-items">
                <div className="w-full duration-500 bg-transparent hover:bg-[#9F9EA3] hover:-translate-y-4 service-card lg:col-span-4 md:col-span-6 hover:shadow-lg">
                    <div className="flex flex-col items-center gap-4 p-5 text-center service-card-content">
                        <h1 className="text-xl font-medium">
                            ARCHITECTURAL DESIGN
                        </h1>
                        <p className="font-light">
                            We specialize in architectural design that goes
                            beyond aesthetics. Our architects blend creativity
                            with functionality to create spaces that inspire.
                        </p>
                    </div>
                </div>
                <div className="w-full duration-500 bg-transparent hover:bg-[#9F9EA3] hover:-translate-y-4 service-card lg:col-span-4 md:col-span-6 hover:shadow-lg">
                    <div className="flex flex-col items-center gap-4 p-5 text-center service-card-content">
                        <h1 className="text-xl font-medium">INTERIOR DESIGN</h1>
                        <p className="font-light">
                            Step into a world of personalized interiors with
                            i27studio. Our interior design service transforms
                            spaces into captivating environments.
                        </p>
                    </div>
                </div>
                <div className="w-full duration-500 bg-transparent hover:bg-[#9F9EA3] hover:-translate-y-4 service-card lg:col-span-4 md:col-span-6 hover:shadow-lg">
                    <div className="flex flex-col items-center gap-4 p-5 text-center service-card-content">
                        <h1 className="text-xl font-medium">SPACE PLANNING</h1>
                        <p className="font-light">
                            Efficient space planning is the foundation of a
                            well-designed environment. At i27studio, we excel in
                            creating layouts that maximize functionality and
                            aesthetics.
                        </p>
                    </div>
                </div>
                <div className="w-full duration-500 bg-transparent hover:bg-[#9F9EA3] hover:-translate-y-4 service-card lg:col-span-4 md:col-span-6 hover:shadow-lg">
                    <div className="flex flex-col items-center gap-4 p-5 text-center service-card-content">
                        <h1 className="text-xl font-medium">
                            ENGINEERING DESIGN
                        </h1>
                        <p className="font-light">
                            Our engineering design services at i27studio ensure
                            that your projects are not only visually stunning
                            but also structurally sound.
                        </p>
                    </div>
                </div>
                <div className="w-full duration-500 bg-transparent hover:bg-[#9F9EA3] hover:-translate-y-4 service-card lg:col-span-4 md:col-span-6 hover:shadow-lg">
                    <div className="flex flex-col items-center gap-4 p-5 text-center service-card-content">
                        <h1 className="text-xl font-medium">EXTERIOR DESIGN</h1>
                        <p className="font-light">
                            The exterior of a building is its first impression.
                            Our exterior design services at i27studio ensure
                            that your property stands out with aesthetic appeal
                            and functionality.
                        </p>
                    </div>
                </div>
                <div className="w-full duration-500 bg-transparent hover:bg-[#9F9EA3] hover:-translate-y-4 service-card lg:col-span-4 md:col-span-6 hover:shadow-lg">
                    <div className="flex flex-col items-center gap-4 p-5 text-center service-card-content">
                        <h1 className="text-xl font-medium">
                            CONSTRUCTION PROJECT
                        </h1>
                        <p className="font-light">
                            From concept to completion, our construction project
                            management services ensure that your vision is
                            brought to life seamlessly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
