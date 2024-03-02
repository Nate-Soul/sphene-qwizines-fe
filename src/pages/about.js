import Header from "@/components/Header";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

const About = () => {
  return (
    <>
    <Header/>
    <main className="flex min-h-screen flex-col">
        <AboutUs/>
        <WhyChooseUs/>
    </main>
    <Footer/>
    </>
  )
}

export default About
