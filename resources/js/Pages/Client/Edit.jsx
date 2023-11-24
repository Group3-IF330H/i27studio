import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function EditClient({ auth, myClient }) {
    const { data, setData, post, processing, reset } = useForm({
        nama_client: myClient.nama_client,
        lokasi_client: myClient.lokasi_client,
        logo_client: myClient.logo_client,
    });

    const updateClient = () => {
        const formData = new FormData();
        formData.append("nama_client", data.nama_client);
        formData.append("lokasi_client", data.lokasi_client);
        formData.append("logo_client", data.logo_client);

        post(route("client.update", { id: myClient.id }), {
            preserveScroll: true,
            onSuccess: () => {
                alert("Perubahan data client berhasil disimpan.");
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
                    Edit Client
                </h2>
            }
        >
            <Head title="Edit Client" />
            <div className="py-12">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <form encType="multipart/form-data">
                        <InputLabel>Name</InputLabel>
                        <TextInput
                            id="nama_client"
                            type="text"
                            className="block w-full mt-1 mb-4"
                            placeholder={myClient.nama_client}
                            value={data.nama_client}
                            onChange={(e) =>
                                setData("nama_client", e.target.value)
                            }
                        />

                        <InputLabel>Location</InputLabel>
                        <TextInput
                            id="lokasi_client"
                            type="text"
                            className="block w-full mt-1 mb-4"
                            placeholder={myClient.lokasi_client}
                            value={data.lokasi_client}
                            onChange={(e) =>
                                setData("lokasi_client", e.target.value)
                            }
                        />

                        <InputLabel>Logo</InputLabel>
                        <TextInput
                            id="logo_client"
                            type="file"
                            className="block w-full mt-1 mb-4"
                            onChange={(e) =>
                                setData("logo_client", e.target.files[0])
                            }
                        />

                        <div className="flex justify-end mt-6">
                            <PrimaryButton
                                onClick={updateClient}
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
}
