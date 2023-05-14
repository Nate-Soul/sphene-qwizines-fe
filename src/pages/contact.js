import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

const contact = () => {
  return (
    <>
    <Header/>
    <main className="flex min-h-screen flex-col">
        <ContactUs/>
    </main>
    <Footer/>
    </>
  )
}

export default contact
