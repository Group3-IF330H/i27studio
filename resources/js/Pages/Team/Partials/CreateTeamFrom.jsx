import React from "react";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import InputError from "@/Components/InputError";
import SecondaryButton from "@/Components/SecondaryButton";

const CreateTeamForm = () => {
    const [createTeam, setCreateTeam] = useState(false);

    const { setData, post, processing, errors, reset } = useForm({
        nama: "",
        role: "",
        foto: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("team.create"), {
            preserveScroll: true,
            onSuccess: () => {
                closeModal();
                alert("Data Team berhasil ditambahkan.");
            },
            onFinish: () => {
                reset();
            },
        });
    }

    const confirmCreateTeam = () => {
        setCreateTeam(true);
    };

    const closeModal = () => {
        setCreateTeam(false);
        reset();
    };

    const handleCancel = (e) => {
        e.preventDefault();
        closeModal();
    };
    return (
        <section className="space-y-6">
            <PrimaryButton onClick={confirmCreateTeam}>Create</PrimaryButton>
            <Modal show={createTeam} onClose={closeModal}>
                <div className="w-full p-6 space-y-3 form-control">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Team Information
                    </h2>
                    <p className="mb-4 text-gray-600">
                        Fill out the form below to add new team information to
                        the system.
                    </p>
                    <div className="judul">
                        <label className="label">
                            <span className="text-gray-500 label-text">
                                Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="nama"
                            className="w-full bg-slate-50 input input-bordered"
                            onChange={(e) => setData("nama", e.target.value)}
                        />
                        <InputError message={errors.nama} className="mb-1" />
                    </div>
                    <div className="judul">
                        <label className="label">
                            <span className="text-gray-500 label-text">
                                Role
                            </span>
                        </label>
                        <input
                            type="text"
                            name="role"
                            className="w-full bg-slate-50 input input-bordered"
                            onChange={(e) => setData("role", e.target.value)}
                        />
                        <InputError message={errors.role} className="mb-1" />
                    </div>
                    <div className="deskripsi">
                        <label className="label">
                            <span className="text-gray-500 label-text">
                                Profile Photo
                            </span>
                        </label>
                        <input
                            type="file"
                            className="w-full mt-1 mb-6 file-input file-input-bordered bg-slate-50"
                            onChange={(e) => setData("foto", e.target.files[0])}
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
                            Add Team
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </section>
    );
};

export default CreateTeamForm;
