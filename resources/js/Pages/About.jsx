import React from "react";
import PageLayout from "@/Layouts/PageLayout";
import ContainerLayout from "@/Layouts/ContainerLayout";
import { Head } from "@inertiajs/react";

const About = (props) => {
    const employees = props.data;
    return (
        <PageLayout title={"About"} currentPath={"about"}>
            <Head title={"About"} />
            <ContainerLayout>
                <Heading />
                <VisionMission />
                <ServiceSection />
                <ServiceCard />
                <Team data={employees} />
            </ContainerLayout>
        </PageLayout>
    );
};
export default About;

const Heading = () => (
    <div className="flex flex-col items-center">
        <h1 className="text-2xl font-medium text-orange-600">ABOUT US</h1>
        <div className="mt-3 text-5xl font-bold text-center">
            Let's Get To Know
            <br />
            Each Other
        </div>
    </div>
);

const VisionMission = () => (
    <div className="self-stretch mt-20 ">
        <div className="flex gap-5 ">
            <div className="flex flex-col w-6/12 ">
                <div className="text-lg text-black ">
                    <span className="text-4xl font-bold">Visi</span>
                    <div className="mt-4"></div>
                    Menjadi perusahaan konsultan arsitektur utama yang dikenal
                    karena komitmen yang tak tergoyahkan terhadap kualitas,
                    kepercayaan, dan kepuasan klien
                    <br />
                    <br />
                    <span className="text-4xl font-bold">Misi</span>
                    <div className="mt-4"></div>
                    <strong className="text-orange-600">
                        Memahami Kebutuhan Klien
                    </strong>{" "}
                    : Memahami kebutuhan dan harapan klien kami secara
                    menyeluruh, memungkinkan kami untuk memberikan solusi
                    arsitektur yang selaras dengan anggaran, keinginan, dan
                    persyaratan fungsional mereka.
                    <br />
                    <div className="mt-4"></div>
                    <strong className="text-orange-600">
                        Fokus Pada Kualitas
                    </strong>{" "}
                    : Secara konsisten memberikan solusi arsitektur yang
                    berkualitas tinggi, didukung oleh komitmen terhadap
                    keunggulan dalam setiap proyek yang kami tangani.
                    <br />
                    <div className="mt-4"></div>
                    <strong className="text-orange-600">
                        Hubungan Klien yang Terpelihara
                    </strong>{" "}
                    : Menumbuhkan hubungan jangka panjang dengan klien kami dan
                    pemangku kepentingan yang relevan, memastikan keberhasilan
                    keseluruhan dari setiap proyek arsitektur melalui komunikasi
                    dan kolaborasi yang efektif.
                    <br />
                </div>
            </div>
            <div className="flex flex-col w-6/12 ml-5 ">
                <div
                    className="relative"
                    style={{ height: "353px", width: "304px" }}
                >
                    <div className="absolute top-0 left-0 w-full h-full">
                        <img
                            loading="lazy"
                            src="/storage/Picture1.jpg"
                            className="object-cover w-full h-full"
                            alt="Studio I27"
                        />
                    </div>
                    <div className="absolute w-full h-full top-40 left-40">
                        <img
                            loading="lazy"
                            src="/storage/Picture2.png"
                            className="object-cover w-full h-full"
                            alt="Studio I27"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ServiceSection = () => (
    <>
        <div className="mt-24 text-4xl text-6xl font-medium text-center text-black">
            The Way We Do
        </div>
        <div className="mt-6 text-2xl text-center">
            We provide everything you need for your architectural project.{" "}
        </div>
    </>
);

const ServiceCard = () => (
    <>
        <div className="self-stretch mt-6">
            <div className="flex gap-5">
                <div className="flex flex-col w-6/12">
                    <div className="mx-auto h-[223px] w-[299px] p-4 bg-gray shadow text-center">
                        <p className="text-lg font-medium">ARCHITECTURAL</p>
                        <p className="text-lg font-medium">DESIGN</p>
                        <p className="mt-3 font-light opacity-80">
                            We specialize in architectural design that goes
                            beyond aesthetics. Our architects blend creativity
                            with functionality to create spaces that inspire.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-6/12 ml-2">
                    <div className="mx-auto max-w-full h-[223px] w-[299px] p-4 bg-gray shadow text-center">
                        <p className="text-lg font-medium">INTERIOR</p>
                        <p className="text-lg font-medium">DESIGN</p>
                        <p className="mt-3 font-light opacity-80">
                            Step into a world of personalized interiors with
                            i27studio. Our interior design service transforms
                            spaces into captivating environments.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-6/12 ml-2">
                    <div className="mx-auto max-w-full h-[223px] w-[299px] p-4 bg-gray shadow text-center">
                        <p className="text-lg font-medium">SPACE</p>
                        <p className="text-lg font-medium">PLANNING</p>
                        <p className="mt-3 font-light opacity-80">
                            Efficient space planning is the foundation of a
                            well-designed environment. At i27studio, we excel in
                            creating layouts that maximize functionality and
                            aesthetics.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="self-stretch px-px mt-8">
            <div className="flex gap-5">
                <div className="flex flex-col w-6/12">
                    <div className="mx-auto max-w-full h-[223px] w-[299px] p-4 bg-gray shadow text-center">
                        <p className="text-lg font-medium">ENGINEERING</p>
                        <p className="text-lg font-medium">DESIGN</p>
                        <p className="mt-3 font-light opacity-80">
                            Our engineering design services at i27studio ensure
                            that your projects are not only visually stunning
                            but also structurally sound.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-6/12 ml-2">
                    <div className="mx-auto max-w-full h-[223px] w-[299px] p-4 bg-gray shadow text-center">
                        <p className="text-lg font-medium">EXTERIOR</p>
                        <p className="text-lg font-medium">DESIGN</p>
                        <p className="mt-3 font-light opacity-80">
                            The exterior of a building is its first impression.
                            Our exterior design services at i27studio ensure
                            that your property stands out with aesthetic appeal
                            and functionality.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-6/12 ml-2">
                    <div className="mx-auto max-w-full h-[223px] w-[299px] p-4 bg-gray shadow text-center">
                        <p className="text-lg font-medium">CONSTRUCTION</p>
                        <p className="text-lg font-medium">PROJECT</p>
                        <p className="mt-3 font-light opacity-80">
                            From concept to completion, our construction project
                            management services ensure that your vision is
                            brought to life seamlessly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
);

const Team = (props) => {
    console.log("dari team", props.data);
    return (
        <>
            <div className="mt-24 text-6xl font-medium text-center text-black">
                Meet The Team
            </div>
            <div className="text-2xl text-center text-black mt-14 text-opacity-60">
                Our diverse team brings together expertise in architecture,
                design, and project management, dedicated to turning your vision
                into reality.
            </div>
            <div className="self-stretch mt-14">
                <div className="grid grid-cols-3 gap-5">
                    {props.data.map((dataTeam, i) => (
                        <div key={i} className="flex flex-col">
                            <div className="flex flex-col grow pb-1.5 text-2xl text-black">
                                <img
                                    src={`../storage/img/team/${dataTeam.foto}`}
                                    alt={`STUDIO I27 - ${dataTeam.nama}`}
                                    className="object-cover bg-blue-200 h-96"
                                />
                                <div className="mt-6 font-semibold">
                                    {dataTeam.nama}
                                </div>
                                <div className="mt-3 font-light">
                                    {dataTeam.jabatan}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
