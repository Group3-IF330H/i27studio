import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

const EditTeam = ({ auth, myTeam }) => {
    const { data, setData, post, processing, reset } = useForm({
        nama: myTeam.nama,
        jabatan: myTeam.jabatan,
        foto: myTeam.foto,
    });

    const updateTeam = () => {
        const formData = new FormData();
        formData.append("nama", data.nama);
        formData.append("jabatan", data.jabatan);
        formData.append("foto", data.foto);

        post(route("team.update", { id: myTeam.id }), {
            preserveScroll: true,
            onSuccess: () => {
                alert("Perubahan data team berhasil disimpan.");
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
                    Edit Team
                </h2>
            }
        >
            <Head title="Edit Team" />
            <div className="py-12">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <form encType="multipart/form-data">
                        <InputLabel>Full Name</InputLabel>
                        <TextInput
                            id="nama"
                            type="text"
                            className="block w-full mt-1 mb-4"
                            placeholder={myTeam.nama}
                            value={data.nama}
                            onChange={(e) => setData("nama", e.target.value)}
                        />
                        <InputLabel>Role</InputLabel>
                        <TextInput
                            id="jabatan"
                            type="text"
                            className="block w-full mt-1 mb-4"
                            placeholder={myTeam.jabatan}
                            value={data.jabatan}
                            onChange={(e) => setData("jabatan", e.target.value)}
                        />
                        <InputLabel>Profile Photo</InputLabel>
                        <TextInput
                            id="foto"
                            type="file"
                            className="block w-full mt-1 mb-4"
                            onChange={(e) => setData("foto", e.target.files[0])}
                        />

                        <div className="flex justify-end mt-6">
                            <PrimaryButton
                                onClick={updateTeam}
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

export default EditTeam;
