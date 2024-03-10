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
import NearbyRestaurants from "@/components/sections/NearbyRestaurants";
import AdvertSpace from "@/components/sections/AdvertSpace";
export default function Home() {
    return (
      <>
        <Hero/>
        <Specials/>
        <AdvertSpace/>
        <Featured/>
        <NearbyRestaurants/>
        <Cooks/>
        <Testimonials/>
      </>
    )
  }