import PageLayout from "@/Layouts/PageLayout";
import React from "react";

const ShowClient = (props) => {
    console.log(props);
    return (
        <>
            <PageLayout title={props.client}>
                <div className="flex items-center justify-center h-screen">
                    <h1 className="text-5xl">{props.client}</h1>
                </div>
            </PageLayout>
        </>
    );
};

export default ShowClient;
