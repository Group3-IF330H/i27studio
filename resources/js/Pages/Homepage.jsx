import PageLayout from "@/Layouts/PageLayout";
import React from "react";
import ServiceSection from "@/Components/Homepage/ServiceSection";
import ClientSection from "@/Components/Homepage/ClientSection";
import { animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import FeaturedProjects from "@/Components/Homepage/FeaturedProjects";
import TagHomepage from "@/Components/Homepage/TagHomepage";
import CallToAction from "@/Components/CallToAction";

const Homepage = (props) => {
    const client = props.client;
    const project = props.project;

    const banyakClient = props.countClient;
    const banyakProject = props.countProject;

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
                    <span className="text-[3rem] xl:text-[11.25rem]">
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
                <div className="flex flex-col gap-72">
                    {project.map((data) => {
                        return <FeaturedProjects project={data} />;
                    })}
                </div>
                <CallToAction
                    text={"SEE ALL PROJECTS"}
                    href={route("project.category", { category: "all" })}
                />
            </PageLayout>
        </>
    );
};

export default Homepage;
