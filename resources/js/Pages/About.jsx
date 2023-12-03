import PageLayout from "@/Layouts/PageLayout";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import CompanyProfile from "@/Components/About/CompanyProfile";
import TeamSection from "@/Components/About/TeamSection";
import VisionMission from "@/Components/About/VisionMission";
import AboutHeading from "@/Components/About/AboutHeading";
import CallToAction from "@/Components/CallToAction";

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
                    <span className="text-[5rem] xl:text-[11.25rem]">
                        About Us
                    </span>
                }
            >
                <div className="w-full mt-20 content">
                    <AboutHeading y1={y1} y2={y2} />
                    <VisionMission />
                    <TeamSection employee={employee} y3={y3} />
                    <CompanyProfile
                        employee={employee}
                        y4={y4}
                        foto={props.project}
                    />
                    <CallToAction
                        text={"Contact Us?"}
                        href={route("contact")}
                    />
                </div>
            </PageLayout>
        </>
    );
};

export default About;
