import Hero from "@/Components/Hero";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Home() {
    return (
        <MainLayout>
            <Head title="Welcome" />
            <Hero />
        </MainLayout>
    );
}

export default Home;
