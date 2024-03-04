import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Specials from "@/components/sections/Specials";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/Footer";
import Cooks from "@/components/sections/Cooks";

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
