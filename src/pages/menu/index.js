import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import GenericHeader from "@/components/GenericHeader";

const MenuPage = () => {
  return (
    <>
    <Header/>
    <main className="flex min-h-screen flex-col">
        <GenericHeader title="Our Menu"/> 
        <Menu/>
    </main>
    <Footer/>
    </>
  )
}

export default MenuPage
