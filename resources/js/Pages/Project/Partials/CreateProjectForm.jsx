import React from "react";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import InputError from "@/Components/InputError";
import SecondaryButton from "@/Components/SecondaryButton";

const CreateProjectForm = (props) => {
    const [createProject, setCreateProject] = useState(false);

    const { setData, post, processing, errors, reset } = useForm({
        nama_project: "",
        id_client: null,
        id_category: null,
        gambar_project: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("project.create"), {
            preserveScroll: true,
            onSuccess: () => {
                closeModal();
                alert("Data project berhasil ditambahkan.");
            },
            onFinish: () => {
                reset();
            },
        });
    }

    const confirmCreateProject = () => {
        setCreateProject(true);
    };

    const closeModal = () => {
        setCreateProject(false);
        reset();
    };

    const handleCancel = (e) => {
        e.preventDefault();
        closeModal();
    };
    return (
        <section className="space-y-6">
            <PrimaryButton onClick={confirmCreateProject}>Create</PrimaryButton>
            <Modal show={createProject} onClose={closeModal}>
                <div className="w-full p-6 space-y-3 form-control">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Project Information
                    </h2>
                    <p className="mb-4 text-gray-600">
                        Fill out the form below to add new project information
                        to the system.
                    </p>
                    <div className="judul">
                        <label className="label">
                            <span className="text-gray-500 label-text">
                                Project Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="nama_project"
                            className="w-full bg-slate-50 input input-bordered"
                            onChange={(e) =>
                                setData("nama_project", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.nama_project}
                            className="mb-1"
                        />
                    </div>
                    <div className="judul">
                        <label className="label">
                            <span className="text-gray-500 label-text">
                                Category
                            </span>
                        </label>
                        <div className="w-full option-form">
                            <select
                                name="category"
                                id="category"
                                className="w-full"
                                onChange={(e) =>
                                    setData("id_category", e.target.value)
                                }
                            >
                                <option value="">-- Select Category --</option>
                                {props.category.map((data, index) => {
                                    return (
                                        <option key={index} value={data.id}>
                                            {data.nama_category}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <InputError
                            message={errors.id_category}
                            className="mb-1"
                        />
                    </div>
                    <div className="judul">
                        <label className="label">
                            <span className="text-gray-500 label-text">
                                Client Name
                            </span>
                        </label>
                        <div className="option-form">
                            <select
                                name="client"
                                id="client"
                                className="w-full"
                                onChange={(e) =>
                                    setData("id_client", e.target.value)
                                }
                            >
                                <option value="">-- Select Client --</option>
                                {props.client.map((data, index) => {
                                    return (
                                        <option key={index} value={data.id}>
                                            {data.nama_client}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <InputError
                            message={errors.id_client}
                            className="mb-1"
                        />
                    </div>
                    <div className="deskripsi">
                        <label className="label">
                            <span className="text-gray-500 label-text">
                                Project Image
                            </span>
                        </label>
                        <input
                            type="file"
                            className="w-full mt-1 mb-6 file-input file-input-bordered bg-slate-50"
                            onChange={(e) =>
                                setData("gambar_project", e.target.files[0])
                            }
                        />
                        <p className="text-xs leading-5 text-gray-600">
                            JPEG, PNG, JPG, GIF up to 10MB
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <SecondaryButton onClick={handleCancel}>
                            Cancel
                        </SecondaryButton>
                        <PrimaryButton disabled={processing} onClick={submit}>
                            Add Project
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </section>
    );
};

export default CreateProjectForm;
