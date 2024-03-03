import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import DataTable from "react-data-table-component";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import CreateTeamForm from "./Partials/CreateTeamFrom";

const ShowTeam = ({ auth, team }) => {
    const confirmingDelete = (e) => {
        const isConfirmed = confirm("Are you sure you want to delete?");
        if (!isConfirmed) {
            e.preventDefault();
        }
    };

    const columns = [
        {
            name: "Profile Photo",
            cell: (team) => (
                <div className="flex p-8">
                    <img
                        src={`../storage/img/team/${team.foto}`}
                        alt="Studio I27 team"
                        className="object-cover object-center h-64 w-96"
                        loading="lazy"
                    />
                </div>
            ),
        },
        {
            name: "Name",
            selector: (row) => row.nama,
            sortable: true,
        },
        {
            name: "Role",
            selector: (row) => row.jabatan,
            sortable: true,
        },
        {
            name: "",
            cell: (team) => (
                <section className="flex justify-center w-full gap-2">
                    <Dropdown.Link href={route("team.edit", { id: team.id })}>
                        <SecondaryButton>Edit</SecondaryButton>
                    </Dropdown.Link>
                    <Dropdown.Link
                        onClick={confirmingDelete}
                        href={route("team.destroy", { id: team.id })}
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
                    Team
                </h2>
            }
        >
            <Head title="Team" />
            <div className="py-8">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <CreateTeamForm />
                    <DataTable
                        columns={columns}
                        data={team}
                        responsive
                        highlightOnHover
                        pagination
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ShowTeam;
