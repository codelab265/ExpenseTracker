import Header from "@/Components/Header";

export default function MainLayout({ children }) {
    return (
        <div className="">
            <Header />
            {children}
        </div>
    );
}
