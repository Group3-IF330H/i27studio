import ContainerLayout from "@/Layouts/ContainerLayout";
import PageLayout from "@/Layouts/PageLayout";
import React, { useState, useEffect, useMemo } from "react";

import SearchFilterComponent from "@/Components/SearchFilterComponent";

const TestComponent = (props) => {
    const client = props.client;
    const category = props.category;
    let projects = props.project;

    return (
        <PageLayout>
            <ContainerLayout>
                <SearchFilterComponent
                    projects={projects}
                    client={client ? client : null}
                    category={category}
                />
            </ContainerLayout>
        </PageLayout>
    );
};

export default TestComponent;
