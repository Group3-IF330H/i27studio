import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CreateClientForm from "./Partials/CreateClientForm";
import { Head } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import DataTable from "react-data-table-component";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { useState } from "react";

export default function ShowClient({ auth, client }) {
    const confirmingDelete = (e) => {
        const isConfirmed = confirm("Are you sure you want to delete?");
        if (!isConfirmed) {
            e.preventDefault();
        }
    };

    const columns = [
        {
            name: "Client",
            selector: "nama_client",
            sortable: true,
        },
        {
            name: "Location",
            selector: "lokasi_client",
            sortable: true,
        },
        {
            name: "Logo",
            selector: "logo_client",
            sortable: true,
        },
        {
            name: "",
            cell: (client) => (
                <section className="flex justify-between w-full">
                    <Dropdown.Link
                        href={route("client.edit", { id: client.id })}
                    >
                        <SecondaryButton>Edit</SecondaryButton>
                    </Dropdown.Link>
                    <Dropdown.Link
                        onClick={confirmingDelete}
                        href={route("client.destroy", { id: client.id })}
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
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Clients
                </h2>
            }
        >
            <Head title="Client" />
            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <CreateClientForm />
                    <DataTable
                        columns={columns}
                        data={client}
                        responsive
                        highlightOnHover
                        pagination
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
