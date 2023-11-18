import React from "react";

const VisionMission = () => {
    return (
        <>
            <div className="container flex flex-col gap-20 px-8 xl:flex-row visi-misi">
                <div className="flex flex-col gap-4 visi">
                    <h1 className="text-7xl xl:text-8xl">Vision</h1>
                    <p className="font-normal opacity-90 xl:text-xl">
                        Become a quality and trusted planning architecture
                        consulting company that guarantees service user
                        satisfaction.
                    </p>
                </div>
                <div className="flex flex-col gap-4 misi">
                    <h1 className="text-7xl xl:text-8xl">Mission</h1>
                    <p className="font-normal opacity-90 xl:text-xl">
                        Providing professional and reliable architectural
                        consulting services to clients.
                        <br />
                        <br />
                        Understand client needs and expectations in order to
                        provide architectural solutions that match budget, wants
                        and functional requirements.
                        <br />
                        <br />
                        Build long-term relationships with clients and related
                        parties to ensure the success of the overall
                        architectural project.
                    </p>
                </div>
            </div>
        </>
    );
};

export default VisionMission;
