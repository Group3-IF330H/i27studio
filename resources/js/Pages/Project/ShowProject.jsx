import { useState, useEffect, useMemo } from "react";
import { debounce } from "lodash";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import DataTable from "react-data-table-component";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import CreateProjectForm from "./Partials/CreateProjectForm";
import SearchFilterComponent from "@/Components/SearchFilterComponent";

const ShowProject = ({ auth, project, category, client }) => {
    let allProjects = project;
    let paginateData = project;

    const [searchTerm, setSearchTerm] = useState("");
    const [isDataEmpty, setIsDataEmpty] = useState(false);
    let [projects, setProjects] = useState(allProjects);

    useEffect(() => {
        if (searchTerm !== "") {
            const filteredProjects = allProjects.filter((project) => {
                return (
                    project.nama_project
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    project.client.nama_client
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                );
            });
            setProjects(filteredProjects);

            if (filteredProjects.length > 0) {
                setIsDataEmpty(false);
            } else {
                setIsDataEmpty(true);
            }
        } else {
            setProjects(allProjects);
            if (allProjects.length > 0) {
                setIsDataEmpty(false);
            } else {
                setIsDataEmpty(true);
            }
        }
    }, [searchTerm, allProjects, isDataEmpty]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    if (searchTerm !== "") {
        paginateData = projects.filter((project) => {
            return (
                project.nama_project
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                project.client.nama_client
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            );
        });
    }

    const debouncedResults = useMemo(() => {
        return debounce(handleChange, 700);
    }, []);

    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });

    const confirmingDelete = (e) => {
        const isConfirmed = confirm("Are you sure you want to delete?");
        if (!isConfirmed) {
            e.preventDefault();
        }
    };

    const { post, reset } = useForm({});

    const updateProject = (id, checked) => {
        post(route("project.checked", { id: id, is_checked: checked }), {
            preserveScroll: true,
            onFinish: () => {
                reset();
            },
        });
    };

    const columns = [
        {
            name: "Project Image",
            cell: (project) => (
                <div className="flex p-8">
                    <img
                        src={`../storage/img/projects/${project.gambar_project}`}
                        alt="Studio I27 project"
                        className="h-16"
                        loading="lazy"
                    />
                </div>
            ),
        },
        {
            name: "Project Name",
            selector: (row) => row.nama_project,
            sortable: true,
        },
        {
            name: "Category",
            selector: (row) => row.category.nama_category,
            sortable: true,
        },
        {
            name: "Client Name",
            selector: (row) => row.client.nama_client,
            sortable: true,
        },
        {
            name: "Highlight",
            cell: (project) => (
                <div>
                    <input
                        type="checkbox"
                        defaultChecked={project.is_highlight}
                        onClick={(e) =>
                            updateProject(project.id, e.target.checked)
                        }
                    />
                </div>
            ),
            sortFunction: (a, b) => {
                if (a.is_highlight === b.is_highlight) return 0;
                return a.is_highlight ? -1 : 1;
            },
            sortable: true,
            width: "max",
        },
        {
            name: "",
            cell: (project) => (
                <section className="flex justify-center w-full gap-2">
                    <Dropdown.Link
                        href={route("project.edit", { id: project.id })}
                    >
                        <SecondaryButton>Edit</SecondaryButton>
                    </Dropdown.Link>
                    <Dropdown.Link
                        onClick={confirmingDelete}
                        href={route("project.destroy", { id: project.id })}
                        method="delete"
                        as="button"
                    >
                        <DangerButton>Delete</DangerButton>
                    </Dropdown.Link>
                </section>
            ),
        },
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Projects
                </h2>
            }
        >
            <Head title="Projects" />
            <div className="py-8">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <SearchFilterComponent debounce={debouncedResults} />
                    <CreateProjectForm client={client} category={category} />
                    <DataTable
                        columns={columns}
                        data={paginateData}
                        responsive
                        highlightOnHover
                        pagination
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ShowProject;
