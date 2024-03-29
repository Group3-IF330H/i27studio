import Heading from "@/Components/Heading";
import SearchFilterComponent from "@/Components/SearchFilterComponent";
import ContainerLayout from "@/Layouts/ContainerLayout";
import PageLayout from "@/Layouts/PageLayout";
import { useState, useEffect, useMemo } from "react";
import { debounce } from "lodash";
import { Link } from "@inertiajs/react";
import { NoSymbolIcon } from "@heroicons/react/24/outline";
import Paginator from "@/Components/Paginator";

const ClientProjects = (props) => {
    const category = props.category;
    let allProjects = props.projects.data;
    let paginateData = props.projects.data;

    const [searchTerm, setSearchTerm] = useState("");
    const [isDataEmpty, setIsDataEmpty] = useState(false);
    const [categories, setCategories] = useState([]);
    const [isCategorySelected, setIsCategorySelected] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([]);
    let [projects, setProjects] = useState(allProjects);

    useEffect(() => {
        if (searchTerm !== "") {
            const filteredProjects = allProjects.filter((project) => {
                const matchesSearchTerm = project.nama_project
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
                const matchesCategory =
                    categories.length === 0 ||
                    categories.includes(project.category.nama_category);
                return matchesSearchTerm && matchesCategory;
            });
            setProjects(filteredProjects);

            if (filteredProjects.length > 0) {
                setIsDataEmpty(false);
            } else {
                setIsDataEmpty(true);
            }

            if (categories.length > 0) {
                setIsCategorySelected(true);
            } else {
                setIsCategorySelected(false);
            }
        } else {
            setProjects(allProjects);
            if (allProjects.length > 0) {
                setIsDataEmpty(false);
            } else {
                setIsDataEmpty(true);
            }

            if (categories.length > 0) {
                setIsCategorySelected(true);
            } else {
                setIsCategorySelected(false);
            }
        }
    }, [searchTerm, allProjects, isDataEmpty, isCategorySelected, categories]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    if (searchTerm !== "" || categories.length > 0) {
        paginateData = projects.filter((project) => {
            const matchesSearchTerm = project.nama_project
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            const matchesCategory =
                categories.length === 0 ||
                categories.includes(project.category.nama_category);
            return matchesSearchTerm && matchesCategory;
        });
    }

    const handleCategorySelect = (category) => {
        setSelectedCategories((prevCategories) => {
            if (prevCategories.includes(category)) {
                return prevCategories.filter(
                    (prevCategory) => prevCategory !== category
                );
            } else {
                return [...prevCategories, category];
            }
        });
    };

    const handleSaveFilter = () => {
        setCategories(selectedCategories);
    };

    const debouncedResults = useMemo(() => {
        return debounce(handleChange, 700);
    }, []);

    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });

    return (
        <PageLayout title={`${props.client}`} currentPath={"client-projects"}>
            <ContainerLayout>
                <Heading pageName={"CLIENT PROJECTS"} />
                <div className="flex flex-col-reverse justify-between w-full gap-4 mb-10 md:items-center md:flex-row client-name client-logo">
                    <div className="flex flex-col gap-3 md:gap-2 detail-client lg:text-left">
                        <h1 className="text-4xl font-bold">{props.client}</h1>
                        <h1 className="text-4xl font-light">
                            {props.projects.data[0].client.lokasi_client}
                        </h1>
                    </div>
                    <div className="detail-logo">
                        <img
                            src={`../storage/img/clients/${props.projects.data[0].client.logo_client}`}
                            alt={`Studio I27 ${props.client} Logo`}
                            className="w-32"
                            loading="lazy"
                        />
                    </div>
                </div>
                <SearchFilterComponent
                    project={projects}
                    category={category ? category : null}
                    debounce={debouncedResults}
                    handleCategorySelect={handleCategorySelect}
                    handleSaveFilter={handleSaveFilter}
                />
                <div className="flex flex-col grid-cols-2 gap-4 mt-8 md:grid">
                    {paginateData.map((project, index) => (
                        <Link
                            href={`/detail-project/${project.nama_project}`}
                            className="relative duration-200 h-96 hover:scale-[95%] hover:cursor-pointer hover:shadow-2xl"
                            key={index}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black from-1% to-transparent to-99% opacity-70 overlay"></div>
                            <img
                                src={`../storage/img/projects/${project.gambar_project}`}
                                alt="Studio I27 Project"
                                className="object-cover w-full h-full"
                                loading="lazy"
                            />

                            <div className="absolute bottom-0 left-0 p-4 text-white">
                                <h2 className="text-2xl tracking-wide">
                                    {project.nama_project}
                                </h2>
                                <p className="text-[15px] font-extralight tracking-wide">
                                    {project.client.lokasi_client}, Indonesia
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                {isDataEmpty && (
                    <div className="flex flex-col items-center justify-center h-full gap-6 p-10">
                        <NoSymbolIcon className="w-16 h-16" />
                        <h1 className="md:text-2xl">No Projects Found</h1>
                    </div>
                )}
                {!searchTerm && !isDataEmpty && !isCategorySelected && (
                    <div className="paginator">
                        <Paginator meta={props.projects} />
                    </div>
                )}
            </ContainerLayout>
        </PageLayout>
    );
};

export default ClientProjects;
