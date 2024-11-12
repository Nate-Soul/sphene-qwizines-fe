"use client";

import { useEffect, useState } from "react";
import SpecialsCard from "../subcomponents/SpecialsCard";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";

const Specials = () => {

  const [countDown, setCountDown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const specials = [
    {
      id: 1,
      image: "/media/images/products/boiled-plaintain-with-protein.png",
      name: "Boiled plantain with meat sauce",
      slug: "boiled-plantain-with-meat-sauce",
      price: 2500,
      description: "Fragrant tomato stew cooked with rice and served with juicy, grilled chicken"
    },
    {
      id: 2,
      image: "/media/images/products/noodles-with-fried-plantain-and-egg.png",
      name: "Noodles with Fried Plaintain and Egg",
      slug: "noodles-with-fried-plantain-egg",
      price: 2800,
      description: "Golden fried rice with mixed vegetables, plantain, and a delicious homemade gravy"
    },
    {
      id: 3,
      image: "/media/images/products/yam-porridge-with-fish.png",
      name: "Yam Porridge with Dry Assorted Fish",
      slug: "grilled-chicken-suya-salad",
      price: 3000,
      description: "Spinach and pepper stew with assorted meat and fish, served with soft and fluffy pounded yam"
    },
    {
      id: 4,
      image: "/media/images/products/suya-salad.png",
      name: "Grilled Chicken Suya Salad 2",
      slug: "grilled-chicken-suya-salad",
      price: 3200,
      description: "Spinach and pepper stew with assorted meat and fish, served with soft and fluffy pounded yam"
    },
    {
      id: 5,
      image: "/media/images/products/suya-salad.png",
      name: "Grilled Chicken Suya Salad 3",
      slug: "grilled-chicken-suya-salad",
      price: 3350,
      description: "Spinach and pepper stew with assorted meat and fish, served with soft and fluffy pounded yam"
    },
    {
      id: 6,
      image: "/media/images/products/suya-salad.png",
      name: "Grilled Chicken Suya Salad 4",
      slug: "grilled-chicken-suya-salad",
      price: 3500,
      description: "Spinach and pepper stew with assorted meat and fish, served with soft and fluffy pounded yam"
    },
    {
      id: 7,
      image: "/media/images/products/suya-salad.png",
      name: "Grilled Chicken Suya Salad 5",
      slug: "grilled-chicken-suya-salad",
      price: 3700,
      description: "Spinach and pepper stew with assorted meat and fish, served with soft and fluffy pounded yam"
    },
  ];

  useEffect(() => {
    const lastUpdateTimestamp = new Date().getTime();
    const nextUpdateTimeStamp = lastUpdateTimestamp + (7 * 24 * 60 * 60 * 1000);

    const updateCountDown = () => {
      const now = new Date().getTime();
      
      const distance = nextUpdateTimeStamp - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / (1000));

      setCountDown({ days, hours, minutes, seconds });

      if (distance < 0){
        clearInterval(interval);
      }
    }

    updateCountDown();

    const interval = setInterval(updateCountDown, 1000);

    return () => clearInterval(interval);
  }, []);

  const { 
    carouselContainerRef, 
    canScrollLeft, 
    canScrollRight, 
    handleCarouselScroll 
  } = useHorizontalScroll();

  return (
    <section className="py-16 bg-light-400 text-dark-500">
      <div className="container">
        <header className="section-heading">
          <h3 className="section-heading-title">This Week&#39;s Specials</h3>
          <p>Roll your tongue into our palpate stimulating weekly special offers</p>
        </header>
        <div className="counter flex gap-x-2 md:gap-x-3 items-center justify-center mb-8">
          <div className="h-20 w-20 rounded-full inline-flex items-center justify-center flex-col  relative">
            <div className="absolute top-0 left-0 w-full h-full bg-transparent border-2 border-main-600 border-e-transparent animate-spin rounded-full motion-reduce:animate-[spin_3s_linear_infinite]"></div>
            <span className="text-main-600">{countDown.days}</span>
            <span className="text-sm text-gray-600 capitalize">days</span>
          </div>
          <div className="h-20 w-20 rounded-full inline-flex items-center justify-center flex-col relative">
            <div className="absolute top-0 left-0 w-full h-full bg-transparent border-2 border-main-600 border-e-transparent animate-spin rounded-full motion-reduce:animate-[spin_3s_linear_infinite]"></div>
            <span className="text-main-600">{countDown.hours}</span>
            <span className="text-sm text-gray-600 capitalize">Hours</span>
          </div>
          <div className="h-20 w-20 rounded-full inline-flex items-center justify-center flex-col relative">
            <div className="absolute top-0 left-0 w-full h-full bg-transparent border-2 border-main-600 border-e-transparent animate-spin rounded-full motion-reduce:animate-[spin_3s_linear_infinite]"></div>
            <span className="text-main-600">{countDown.minutes}</span>
            <span className="text-sm text-gray-600 capitalize">Mins</span>
          </div>
          <div className="h-20 w-20 rounded-full inline-flex items-center justify-center flex-col relative">
            <div className="absolute top-0 left-0 w-full h-full bg-transparent border-2 border-main-600 border-e-transparent animate-spin rounded-full motion-reduce:animate-[spin_3s_linear_infinite]"></div>
            <span className="text-main-600">{countDown.seconds}</span>
            <span className="text-sm text-gray-600 capitalize">Secs</span>
          </div>
        </div>
        <div className="flex gap-4 md:gap-6 horizontal-scroll hide-scrollbar" ref={carouselContainerRef}>
          {
            specials.map((special, specialIndex) => (
              <SpecialsCard special={special} key={specialIndex}/>
            ))
          }
        </div>
        <div className="mt-12 flex items-center justify-center">
          <button 
            className="h-10 w-10 rounded-s-lg inline-flex items-center justify-center btn-main"
            onClick={(e) => handleCarouselScroll(e, "left")}
            disabled={!canScrollLeft}
          >
            <span className="bi-arrow-left"></span>
          </button>
          <button 
            onClick={(e) => handleCarouselScroll(e, "right")} 
            className="h-10 w-10 rounded-e-lg inline-flex items-center justify-center btn-main"
            disabled={!canScrollRight}
          >
            <span className="bi-arrow-right"></span>
          </button>
        </div>
      </div>      
    </section>
  )
}

export default Specials
