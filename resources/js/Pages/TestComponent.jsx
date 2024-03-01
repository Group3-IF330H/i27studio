import ContainerLayout from "@/Layouts/ContainerLayout";
import PageLayout from "@/Layouts/PageLayout";
import React, { useState, useEffect, useMemo } from "react";
import { debounce } from "lodash";

import SearchFilterComponent from "@/Components/SearchFilterComponent";

const TestComponent = (props) => {
    const client = props.client;
    const category = props.category;
    let projects = props.project;

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    if (searchTerm !== "") {
        projects = projects.filter((project) => {
            return project.nama_project
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        });
    }

    let debouncedResults = useMemo(() => {
        return debounce(handleChange, 700);
    }, []);

    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });

    return (
        <PageLayout>
            <ContainerLayout>
                <SearchFilterComponent
                    project={projects}
                    client={client ? client : null}
                    category={category ? category : null}
                    debounce={debouncedResults}
                />
            </ContainerLayout>
        </PageLayout>
    );
};

export default TestComponent;
