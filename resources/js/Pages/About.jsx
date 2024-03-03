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
                    pageDescription={"Let's Get To Know Each Other"}
                />
                <VisionMission />
                <ServiceSection />
                <TeamSection data={employees} />
            </ContainerLayout>
        </PageLayout>
    );
};
export default About;
