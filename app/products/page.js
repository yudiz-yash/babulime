import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ProductsPage from "@/components/ProductsPage/ProductsPage";

export const metadata = {
    title: "Products — Babu Lime & Minerals",
    description: "Explore our complete range of lime products across all categories — available in retail, wholesale and institutional formats.",
};

export default function ProductsRoute() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden w-full">
            <Navbar />
            <div className="pt-[88px]">
                <ProductsPage />
                <Footer />
            </div>
        </main>
    );
}
