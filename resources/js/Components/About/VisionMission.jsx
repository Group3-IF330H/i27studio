import React from "react";

const VisionMission = () => {
    return (
        <div className="grid-cols-12 gap-20 mt-10 xl:grid xl:mt-16 vision-mission-section">
            <div className="flex flex-col col-span-6 gap-8 vision-mission">
                <div className="vision">
                    <h1 className="text-3xl font-semibold">Vision</h1>
                    <p className="mt-1">
                        Become a leading architecture consulting firm known for
                        unwavering commitment to quality, trust, and client
                        satisfaction.
                    </p>
                </div>
                <div className="mission">
                    <h1 className="text-3xl font-semibold">Mission</h1>
                    <div className="flex flex-col gap-2 mission-detail">
                        <p className="mt-1">
                            <b>Understanding Client Needs:</b> Understanding our
                            clients needs and expectations comprehensively
                            enables us to provide architectural solutions that
                            align with their budget, desires, and functional
                            requirements.
                        </p>
                        <p className="mt-1">
                            <b>Focus on Quality:</b> Consistently delivering
                            high-quality architectural solutions, supported by a
                            commitment to excellence in every project we
                            undertake.
                        </p>
                        <p className="mt-1">
                            <b>Sustained Client Relationships:</b> Cultivating
                            long-term relationships with our clients and
                            relevant stakeholders, ensuring the overall success
                            of every architectural project through effective
                            communication and collaboration.
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative h-full col-span-6 image-about">
                <div className="w-[60%] h-[60%] image1 bg-slate-400 absolute top-0 left-0">
                    <img
                        src="../storage/img/about/kantor/K-04.jpg"
                        alt=""
                        className="object-cover object-center w-full h-full"
                    />
                </div>
                <div className="w-[60%] h-[60%] image2 bg-slate-400 absolute bottom-0 right-0">
                    <img
                        src="../storage/img/about/kantor/K-09.jpg"
                        alt=""
                        className="object-cover object-center w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default VisionMission;
