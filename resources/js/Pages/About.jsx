import React from "react";
import PageLayout from "@/Layouts/PageLayout";
import ContainerLayout from "@/Layouts/ContainerLayout";
import Heading from "@/Components/Heading";
import VisionMission from "@/Components/About/VisionMission";
import ServiceSection from "@/Components/About/ServiceSection";
import TeamSection from "@/Components/About/TeamSection";

const About = (props) => {
    const employees = props.data;
    return (
        <PageLayout title={"About"} currentPath={"about"}>
            <ContainerLayout>
                <Heading
                    pageName={"ABOUT US"}
                    pageDescription={
                        "Since 2012 we have served all kinds of design plans from developers and custom projects throughout Indonesia, and are still continuing to this day. explore our projects and discover a world where creativity and precision converge to redefine architectural possibilities."
                    }
                />
                <VisionMission />
                <ServiceSection />
                <TeamSection data={employees} />
            </ContainerLayout>
        </PageLayout>
    );
};
export default About;
