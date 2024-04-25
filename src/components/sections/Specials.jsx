"use client";

import { useEffect, useState } from "react";
import SpecialsCard from "../subcomponents/SpecialsCard";

const Specials = () => {

  const [countDown, setCountDown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const maxPV = 3;
  const [currentView, setCurrentView] = useState(0);
  const specials = [
    {
      id: 1,
      image: "/media/images/products/fried-plantain.png",
      name: "Fried Plantain and Grilled Chicken",
      slug: "fried-plantain-grilled-chicken",
      price: 2500,
      description: "Fragrant tomato stew cooked with rice and served with juicy, grilled chicken"
    },
    {
      id: 2,
      image: "/media/images/products/spaghetti-grilled-beef.png",
      name: "Spaghetti and Grilled Beef",
      slug: "spaghetti-grilled-beef",
      price: 2800,
      description: "Golden fried rice with mixed vegetables, plantain, and a delicious homemade gravy"
    },
    {
      id: 3,
      image: "/media/images/products/suya-salad.png",
      name: "Grilled Chicken Suya Salad",
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

  const handlePageViewRight = () => {
    setCurrentView(prev => Math.min(prev + 1, totalViews - 1));
  }

  const handlePageViewLeft = () => {
    setCurrentView(prev => Math.max(prev - 1, 0));
  };

  const limit = currentView * maxPV;
  // const offset = Math.min(specials.length, (currentView + 1) * maxPV);
  const offset = Math.min(maxPV, specials.length - limit);
  const totalViews = Math.ceil(specials.length / maxPV);

  // console.log({limit, offset, totalViews});

  return (
    <section className="py-16">
      <div className="container">
        <header className="section-heading">
          <h3 className="section-heading-title">This Week&#39;s Specials</h3>
          <p>Roll your tongue into our palpate stimulating weekly special offers</p>
        </header>
        <div className="counter flex gap-x-2 md:gap-x-3 items-center justify-center">
          <div className="h-20 w-20 rounded-full inline-flex items-center justify-center flex-col border-2 border-main-100 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-transparent border-2 border-main-300 border-e-transparent animate-spin rounded-full motion-reduce:animate-[spin_3s_linear_infinite]"></div>
            <span className="text-main-200">{countDown.days}</span>
            <span className="text-sm text-gray-600 capitalize">days</span>
          </div>
          <div className="h-20 w-20 rounded-full inline-flex items-center justify-center flex-col border-2 border-main-100 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-transparent border-2 border-main-300 border-e-transparent animate-spin rounded-full motion-reduce:animate-[spin_3s_linear_infinite]"></div>
            <span className="text-main-200">{countDown.hours}</span>
            <span className="text-sm text-gray-600 capitalize">Hours</span>
          </div>
          <div className="h-20 w-20 rounded-full inline-flex items-center justify-center flex-col border-2 border-main-100 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-transparent border-2 border-main-300 border-e-transparent animate-spin rounded-full motion-reduce:animate-[spin_3s_linear_infinite]"></div>
            <span className="text-main-200">{countDown.minutes}</span>
            <span className="text-sm text-gray-600 capitalize">Mins</span>
          </div>
          <div className="h-20 w-20 rounded-full inline-flex items-center justify-center flex-col border-2 border-main-100 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-transparent border-2 border-main-300 border-e-transparent animate-spin rounded-full motion-reduce:animate-[spin_3s_linear_infinite]"></div>
            <span className="text-main-200">{countDown.seconds}</span>
            <span className="text-sm text-gray-600 capitalize">Secs</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {
            specials.splice(limit, offset).map((special, specialIndex) => (
              <SpecialsCard special={special} key={specialIndex}/>
            ))
          }
        </div>
        <div className="mt-12 flex items-center justify-between">
          <button 
            className="h-8 w-8 rounded-full inline-flex items-center justify-center bg-main-100 text-white opacity-85 hover:opacity-100"
            onClick={handlePageViewLeft}
            disabled={currentView === 0}
          >
            <span className="bi-arrow-left"></span>
          </button>
          <div className="flex items-center justify-center gap-x-1">
            {
              Array.from({ length: totalViews }, (_, index) => (
                <span key={index} className={`${currentView === index ? 'bg-main-500 sm:w-16' : 'bg-main-100'} h-[6px] w-[6px] rounded-full`}></span>
              ))
            }
          </div>
          <button 
            onClick={handlePageViewRight} 
            className="h-8 w-8 rounded-full inline-flex items-center justify-center bg-main-100 text-white opacity-85 hover:opacity-100"
            disabled={currentView + 1 >= totalViews}
          >
            <span className="bi-arrow-right"></span>
          </button>
        </div>
      </div>      
    </section>
  )
}

export default Specials
