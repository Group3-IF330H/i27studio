import { useState } from "react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";

export default function CreateClientForm() {
    const [createClient, setCreateClient] = useState(false);
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    // const [uploadedFileName, setUploadedFileName] = useState("");
    const [fileData, setFileData] = useState(null);
    const { data, setData, post, processing, errors, reset } = useForm({
        nama_client: "",
        lokasi_client: "",
        // logo_client: null,
    });

    const confirmCreateClient = () => {
        setCreateClient(true);
    };

    const closeModal = () => {
        setCreateClient(false);
        reset();
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileData(file);
            console.log(file);
            // setUploadedFileName(file.name);
            setIsFileUploaded(true);
            // console.log(file.name);
        } else {
            setIsFileUploaded(false);
            setUploadedFileName("");
        }
    };

    const saveClient = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama_client", data.nama_client);
        formData.append("lokasi_client", data.lokasi_client);
        formData.append("logo_client", fileData);
        console.log(fileData);

        post(route("client.create"), formData, {
            preserveScroll: true,
            onSuccess: () => {
                closeModal();
                alert("Data Client telah masuk!");
            },
            onFinish: () => {
                reset();
            },
        });
    };

    const handleCancel = (e) => {
        e.preventDefault();
        closeModal();
    };

    return (
        <section className="space-y-6">
            <PrimaryButton onClick={confirmCreateClient}>Create</PrimaryButton>
            <Modal show={createClient} onClose={closeModal}>
                <form
                    className="p-6"
                    encType="multipart/form-data"
                    onSubmit={saveClient}
                >
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Client Information
                    </h2>
                    <p className="mb-4 text-gray-600">
                        Fill out the form below to add new client information to
                        the system.
                    </p>
                    <InputLabel htmlFor="nama_client">Name</InputLabel>
                    <TextInput
                        id="nama_client"
                        name="nama_client"
                        type="text"
                        className="mt-1 block w-full required:border-alert-500"
                        placeholder="Client Name"
                        value={data.nama_client}
                        onChange={(e) => setData("nama_client", e.target.value)}
                    />
                    <InputError message={errors.nama_client} className="mb-1" />

                    <InputLabel htmlFor="lokasi_client">Location</InputLabel>
                    <TextInput
                        id="lokasi_client"
                        name="lokasi_client"
                        type="text"
                        className="mt-1  block w-full"
                        placeholder="Client Location"
                        value={data.lokasi_client}
                        onChange={(e) =>
                            setData("lokasi_client", e.target.value)
                        }
                    />
                    <InputError
                        message={errors.lokasi_client}
                        className="mb-1"
                    />
                    <InputLabel htmlFor="logo_client">Logo</InputLabel>
                    <TextInput
                        id="logo_client"
                        name="logo_client"
                        type="file"
                        className="mt-1 block w-full"
                        // value={data.logo_client}
                        onChange={handleFileUpload}
                        // onChange={(e) => setData("logo_client", e.target.value)}
                    />

                    <p className="text-xs leading-5 text-gray-600">
                        JPEG, PNG, JPG, GIF up to 10MB
                    </p>
                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={handleCancel}>
                            Cancel
                        </SecondaryButton>
                        <PrimaryButton disabled={processing} className="mx-3">
                            Save
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
