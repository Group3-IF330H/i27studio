import PageLayout from "@/Layouts/PageLayout";
import ContainerLayout from "@/Layouts/ContainerLayout";
import { useState, useEffect, useMemo } from "react";
import SearchFilterComponent from "@/Components/SearchFilterComponent";
import { debounce } from "lodash";
import Heading from "@/Components/Heading";
import Paginator from "@/Components/Paginator";
import { NoSymbolIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

const Projects = (props) => {
    const category = props.category;
    let allProjects = props.projectAll;
    let paginateData = props.project.data;

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
        <>
            <PageLayout title={"Projects"} currentPath={"projects"}>
                <ContainerLayout>
                    <div className="h-full">
                        <Heading
                            pageName={"PROJECTS"}
                            pageDescription={
                                "Projects are windows to rethink, redesign, and reshape futures"
                            }
                        />
                        <div className="search-filter">
                            <SearchFilterComponent
                                project={projects}
                                category={category ? category : null}
                                debounce={debouncedResults}
                                handleCategorySelect={handleCategorySelect}
                                handleSaveFilter={handleSaveFilter}
                            />
                        </div>

                        <div>
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
                                            alt="Studio I27 Highlighted Project"
                                            className="object-cover w-full h-full"
                                            loading="lazy"
                                        />

                                        <div className="absolute bottom-0 left-0 p-4 text-white">
                                            <h2 className="text-2xl tracking-wide">
                                                {project.nama_project}
                                            </h2>
                                            <p className="text-[15px] font-extralight tracking-wide">
                                                {project.client.lokasi_client},
                                                Indonesia
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {isDataEmpty && (
                            <div className="flex flex-col items-center justify-center h-full gap-6 p-10">
                                <NoSymbolIcon className="w-16 h-16" />
                                <h1 className="md:text-2xl">
                                    No Projects Found
                                </h1>
                            </div>
                        )}
                        {!searchTerm && !isDataEmpty && !isCategorySelected && (
                            <div className="paginator">
                                <Paginator meta={props.project} />
                            </div>
                        )}
                    </div>
                </ContainerLayout>
            </PageLayout>
        </>
    );
};

export default Projects;
