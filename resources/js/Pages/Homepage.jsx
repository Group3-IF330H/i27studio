import PageLayout from "@/Layouts/PageLayout";
import React from "react";
import ServiceSection from "@/Components/Homepage/ServiceSection";
import ClientSection from "@/Components/Homepage/ClientSection";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import FeaturedProjects from "@/Components/Homepage/FeaturedProjects";
import TagHomepage from "@/Components/Homepage/TagHomepage";

const Homepage = (props) => {
    const client = props.client;
    const project = props.project;

    const banyakClient = props.client.length;
    const banyakProject = props.project.length;

    const count1 = useMotionValue(0);
    const jmlhClient = useTransform(count1, Math.round);

    const count2 = useMotionValue(0);
    const jmlhProject = useTransform(count2, Math.round);

    useEffect(() => {
        const client = animate(count1, banyakClient, { duration: 2 });
        const project = animate(count2, banyakProject, { duration: 2 });

        return () => {
            client.stop();
            project.stop();
        };
    }, []);

    return (
        <>
            <PageLayout
                title="Homepage"
                heading={
                    <span>
                        WE ARE <br />
                        ARCHITECT CONSULTANT
                    </span>
                }
                tag={
                    <TagHomepage
                        jmlhClient={jmlhClient}
                        jmlhProject={jmlhProject}
                    />
                }
            >
                <ClientSection client={client} />
                <ServiceSection />
                <FeaturedProjects />
                <div className="flex items-center justify-center h-screen to-all-projects">
                    <span className="xl:text-[8rem] md:text-6xl text-4xl pb-3 text-[#000] border-b-4 border-[#000]">
                        SEE ALL PROJECTS
                    </span>
                </div>
            </PageLayout>
        </>
    );
};

export default Homepage;
