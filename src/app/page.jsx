"use client";

//provider
import { Provider } from "react-redux";

//provider props
import { store } from "@/redux/store";

//components
import Cooks from "@/components/sections/Cooks";
import Featured from "@/components/sections/Featured";
import Hero from "@/components/sections/Hero";
import Specials from "@/components/sections/Specials";
import Testimonials from "@/components/sections/Testimonials";
import Header from "@/components/Header";

export default function Home() {
    return (
      // <Provider store={store}>
      //   <Header/>
        <>
          <Hero/>
          <Specials/>
          <Featured/>
          <Cooks/>
          <Testimonials/>
        </>
      // </Provider>
    )
  }