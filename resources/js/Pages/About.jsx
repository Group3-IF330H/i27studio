import PageLayout from "@/Layouts/PageLayout";
import React, { useRef } from "react";
import {
    useViewportScroll,
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import {} from "framer-motion";
import CompanyProfile from "@/Components/About/CompanyProfile";
import TeamSection from "@/Components/About/TeamSection";
import VisionMission from "@/Components/About/VisionMission";
import AboutHeading from "@/Components/About/AboutHeading";

const About = (props) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 100]);
    const y2 = useTransform(scrollY, [0, 2500], [0, -1000]);
    const y3 = useTransform(scrollY, [2000, 0], [0, 1000]);
    const y4 = useTransform(scrollY, [4500, 0], [0, 1000]);

    const employee = props.data;

    return (
        <>
            <PageLayout
                title={"About"}
                heading={
                    <>
                        <h1 className="text-[5rem] xl:text-[11.25rem]">
                            About Us
                        </h1>
                    </>
                }
            >
                <div className="w-full mt-20 content">
                    <AboutHeading y1={y1} y2={y2} />
                    <VisionMission />
                    <TeamSection employee={employee} y3={y3} />
                    <CompanyProfile y4={y4} />
                </div>
            </PageLayout>
        </>
    );
};

export default About;
