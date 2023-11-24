import React from "react";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import InputError from "@/Components/InputError";
import SecondaryButton from "@/Components/SecondaryButton";

const CreateCategoryForm = () => {
    const [createCategory, setCreateCategory] = useState(false);

    const { setData, post, processing, errors, reset } = useForm({
        nama_category: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("category.create"), {
            preserveScroll: true,
            onSuccess: () => {
                closeModal();
                alert("Data Category berhasil ditambahkan.");
            },
            onFinish: () => {
                reset();
            },
        });
    }

    const confirmCreateProject = () => {
        setCreateCategory(true);
    };

    const closeModal = () => {
        setCreateCategory(false);
        reset();
    };

    const handleCancel = (e) => {
        e.preventDefault();
        closeModal();
    };
    return (
        <section className="space-y-6">
            <PrimaryButton onClick={confirmCreateProject}>Create</PrimaryButton>
            <Modal show={createCategory} onClose={closeModal}>
                <div className="w-full p-6 space-y-3 form-control">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Category Information
                    </h2>
                    <p className="mb-4 text-gray-600">
                        Fill out the form below to add new project information
                        to the system.
                    </p>
                    <div className="judul">
                        <label className="label">
                            <span className="text-gray-500 label-text">
                                Category Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="nama_category"
                            className="w-full bg-slate-50 input input-bordered"
                            onChange={(e) =>
                                setData("nama_category", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.nama_category}
                            className="mb-1"
                        />
                    </div>
                    <div className="flex gap-4">
                        <SecondaryButton onClick={handleCancel}>
                            Cancel
                        </SecondaryButton>
                        <PrimaryButton disabled={processing} onClick={submit}>
                            Add Category
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </section>
    );
};

export default CreateCategoryForm;
