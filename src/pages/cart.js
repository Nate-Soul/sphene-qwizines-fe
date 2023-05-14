import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const CartPage = () => {
  return (
    <>
    <Header/>
    <main className="flex flex-col min-h-screen">
        <Cart/>
    </main>
    <Footer/>
    </>
    )
}

export default CartPage
