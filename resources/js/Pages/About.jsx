import PageLayout from "@/Layouts/PageLayout";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import CompanyProfile from "@/Components/About/CompanyProfile";
import TeamSection from "@/Components/About/TeamSection";
import VisionMission from "@/Components/About/VisionMission";
import AboutHeading from "@/Components/About/AboutHeading";
import TextReveal from "@/Components/TextReveal";
import { Link } from "@inertiajs/react";

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
                    <div className="flex items-center justify-center h-screen to-contact">
                        <TextReveal>
                            <Link href="/contact">
                                <span className="xl:text-[8rem] md:text-6xl text-4xl pb-3 text-[#000] border-b-4 border-[#000]">
                                    Contact Us?
                                </span>
                            </Link>
                        </TextReveal>
                    </div>
                </div>
            </PageLayout>
        </>
    );
};

export default About;
