import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import DataTable from "react-data-table-component";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import CreateCategoryForm from "./Partials/CreateCategoryForm";

const ShowCategory = ({ auth, category }) => {
    const confirmingDelete = (e) => {
        const isConfirmed = confirm("Are you sure you want to delete?");
        if (!isConfirmed) {
            e.preventDefault();
        }
    };

    const columns = [
        {
            name: "Category Name",
            selector: (row) => row.nama_category,
            sortable: true,
        },
        {
            name: "",
            cell: (category) => (
                <section className="flex justify-center w-full">
                    <Dropdown.Link
                        href={route("category.edit", { id: category.id })}
                    >
                        <SecondaryButton>Edit</SecondaryButton>
                    </Dropdown.Link>
                    <Dropdown.Link
                        onClick={confirmingDelete}
                        href={route("category.destroy", { id: category.id })}
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
                    Categories
                </h2>
            }
        >
            <Head title="Categories" />
            <div className="py-8">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <CreateCategoryForm />
                    <DataTable
                        columns={columns}
                        data={category}
                        responsive
                        highlightOnHover
                        pagination
                        fixedHeader
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ShowCategory;
