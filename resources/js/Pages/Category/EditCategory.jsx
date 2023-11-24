import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

const EditCategory = ({ auth, myCategory }) => {
    const { data, setData, post, processing, reset } = useForm({
        nama_category: myCategory.nama_category,
    });

    const updateCategory = () => {
        const formData = new FormData();
        formData.append("nama_category", data.nama_category);

        post(route("category.update", { id: myCategory.id }), {
            preserveScroll: true,
            onSuccess: () => {
                alert("Perubahan data category berhasil disimpan.");
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
                    Edit Category
                </h2>
            }
        >
            <Head title="Edit Category" />
            <div className="py-12">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <form encType="multipart/form-data">
                        <InputLabel>Category Name</InputLabel>
                        <TextInput
                            id="nama_category"
                            type="text"
                            className="block w-full mt-1 mb-4"
                            placeholder={myCategory.nama_category}
                            value={data.nama_category}
                            onChange={(e) =>
                                setData("nama_category", e.target.value)
                            }
                        />

                        <div className="flex justify-end mt-6">
                            <PrimaryButton
                                onClick={updateCategory}
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

export default EditCategory;
