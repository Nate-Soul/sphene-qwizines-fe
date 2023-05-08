import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import WhyChooseUs from "@/components/WhyChooseUs";
import Specials from "@/components/Specials";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Cooks from "@/components/Cooks";

export default function Home() {
  return (
    <>
    <Header/>
    <main className="flex min-h-screen flex-col">
      <Hero/>
      <Specials/>
      <Featured/>
      <Cooks/>
      <Testimonials/>
    </main>
    <Footer/>
    </>
  )
}
