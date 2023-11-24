import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

const EditProject = ({ auth, myProject, category, client }) => {
    console.log(myProject);
    const { data, setData, post, processing, reset } = useForm({
        nama_project: myProject.nama_project,
        id_category: myProject.id_category,
        id_client: myProject.id_client,
        gambar_project: myProject.gambar_project,
    });

    const updateProject = () => {
        const formData = new FormData();
        formData.append("nama_project", data.nama_project);
        formData.append("id_category", data.id_category);
        formData.append("id_client", data.id_client);
        formData.append("gambar_project", data.gambar_project);

        post(route("project.update", { id: myProject.id }), {
            preserveScroll: true,
            onSuccess: () => {
                alert("Perubahan data project berhasil disimpan.");
            },
            onFinish: () => {
                reset();
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Project
                </h2>
            }
        >
            <Head title="Client" />
            <div className="py-12">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <form encType="multipart/form-data">
                        <InputLabel>Project Name</InputLabel>
                        <TextInput
                            id="nama_project"
                            type="text"
                            className="block w-full mt-1 mb-4"
                            placeholder={myProject.nama_project}
                            value={data.nama_project}
                            onChange={(e) =>
                                setData("nama_project", e.target.value)
                            }
                        />

                        <InputLabel>Category</InputLabel>
                        <select
                            name="category"
                            id="category"
                            className="w-full"
                            onChange={(e) =>
                                setData("id_category", e.target.value)
                            }
                        >
                            <option value="" selected>
                                {myProject.category.nama_category}
                            </option>
                            {category.map((data, index) => {
                                return (
                                    <option key={index} value={data.id}>
                                        {data.nama_category}
                                    </option>
                                );
                            })}
                        </select>

                        <InputLabel className="mt-4">Client</InputLabel>
                        <select
                            name="client"
                            id="client"
                            className="w-full mb-6"
                            onChange={(e) =>
                                setData("id_client", e.target.value)
                            }
                        >
                            <option value="" selected>
                                {myProject.client.nama_client}
                            </option>
                            {client.map((data, index) => {
                                return (
                                    <option key={index} value={data.id}>
                                        {data.nama_client}
                                    </option>
                                );
                            })}
                        </select>

                        <InputLabel>Project Image</InputLabel>
                        <TextInput
                            id="gambar_project"
                            type="file"
                            className="block w-full mt-1 mb-4"
                            onChange={(e) =>
                                setData("gambar_project", e.target.files[0])
                            }
                        />

                        <div className="flex justify-end mt-6">
                            <PrimaryButton
                                onClick={updateProject}
                                className="ms-3"
                                disabled={processing}
                            >
                                Update
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditProject;
