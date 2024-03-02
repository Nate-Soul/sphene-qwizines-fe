import Header from "@/components/Header";
import Menu from "@/components/sections/Menu";
import Footer from "@/components/Footer";
import GenericHeader from "@/components/GenericHeader";
import { generateCrumbs } from "@/components/ui/BreadCrumbs";

const MenuPage = () => {
  const crumbs = generateCrumbs('/menu');
  return (
    <>
    <Header/>
    <main className="flex min-h-screen flex-col">
        <GenericHeader title="Our Menu" crumbs={crumbs}/>
        <Menu/>
    </main>
    <Footer/>
    </>
  )
}

export default MenuPage
