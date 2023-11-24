import { useState } from "react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import InputError from "@/Components/InputError";
import SecondaryButton from "@/Components/SecondaryButton";

export default function CreateClientForm() {
    const [createClient, setCreateClient] = useState(false);

    const { setData, post, processing, errors, reset } = useForm({
        nama_client: "",
        lokasi_client: "",
        logo_client: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("client.create"), {
            preserveScroll: true,
            onSuccess: () => {
                closeModal();
                alert("Data client berhasil ditambahkan.");
            },
            onFinish: () => {
                reset();
            },
        });
    }

    const confirmCreateClient = () => {
        setCreateClient(true);
    };

    const closeModal = () => {
        setCreateClient(false);
        reset();
    };

    const handleCancel = (e) => {
        e.preventDefault();
        closeModal();
    };

    return (
        <section className="space-y-6">
            <PrimaryButton onClick={confirmCreateClient}>Create</PrimaryButton>
            <Modal show={createClient} onClose={closeModal}>
                <div className="w-full p-6 space-y-3 form-control">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Client Information
                    </h2>
                    <p className="mb-4 text-gray-600">
                        Fill out the form below to add new client information to
                        the system.
                    </p>
                    <div className="judul">
                        <label className="label">
                            <span className="text-gray-500 label-text">
                                Client Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="judul"
                            className="w-full bg-slate-50 input input-bordered"
                            onChange={(e) =>
                                setData("nama_client", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.nama_client}
                            className="mb-1"
                        />
                    </div>
                    <div className="deskripsi">
                        <label className="label">
                            <span className="text-gray-500 label-text">
                                Client Location
                            </span>
                        </label>
                        <input
                            type="text"
                            name="deskripsi"
                            className="w-full bg-slate-50 input input-bordered"
                            onChange={(e) =>
                                setData("lokasi_client", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.lokasi_client}
                            className="mb-1"
                        />
                    </div>
                    <div className="deskripsi">
                        <label className="label">
                            <span className="text-gray-500 label-text">
                                Client Logo
                            </span>
                        </label>
                        <input
                            type="file"
                            className="w-full mt-1 mb-6 file-input file-input-bordered bg-slate-50"
                            onChange={(e) =>
                                setData("logo_client", e.target.files[0])
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
                            Add Client
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </section>
    );
}
