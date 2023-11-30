import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CreateClientForm from "./Partials/CreateClientForm";
import { Head } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import DataTable from "react-data-table-component";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";

export default function ShowClient({ auth, client }) {
    const confirmingDelete = (e) => {
        const isConfirmed = confirm("Are you sure you want to delete?");
        if (!isConfirmed) {
            e.preventDefault();
        }
    };

    const columns = [
        {
            name: "Logo",
            cell: (client) => (
                <div className="flex p-8">
                    <img
                        src={`../storage/img/clients/${client.logo_client}`}
                        alt="logo_client"
                        className="h-16"
                    />
                </div>
            ),
        },
        {
            name: "Client",
            selector: (row) => row.nama_client,
            sortable: true,
        },
        {
            name: "Location",
            selector: (row) => row.lokasi_client,
            sortable: true,
        },
        {
            name: "",
            cell: (client) => (
                <section className="flex justify-center w-full gap-2">
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
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Clients
                </h2>
            }
        >
            <Head title="Client" />
            <div className="py-8">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
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
