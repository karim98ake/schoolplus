import Footer from "@/components/Footer";
import Form from "@/components/Form";
import HeroPage from "@/components/HeroPage";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroPage />
      <Form />
      {/* <Footer /> */}
    </main>
  );
}
