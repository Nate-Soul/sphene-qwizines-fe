"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  });


  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slideitems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? slideitems.length - 1 : currentSlide - 1
    );
  };


  const slideitems = [
    {
      id: 1,
      title: "Discover the Flavors of Nigeria with Sphene Qwizines",
      desc: "Savor the Authentic Tastes of Nigerian Cuisine From the Comfort of Your Home",
      imageUrl: "/media/images/products/salate-removebg-preview.png"
    },
    {
      id: 2,
      title: "It's Not just Food, It's The African Experience",
      desc: "From Classic Jollof Rice to Mouth-Watering Suya, Sphene Qwizines Has It All",
      imageUrl: "/media/images/products/burger-removebg-preview.png"
    },
    {
      id: 3,
      title: "Satisfy Your Cravings for Nigerian Food",
      desc: "Order Online and Enjoy Authentic Flavors in the Comfort of Your Home",
      imageUrl: "/media/images/products/hero-3.png"
    },
    {
      id: 4,
      title: "Taste the Richness of Nigerian Culture",
      desc: "Embark On A Culinary Journey where Tradition Meets Taste - Explore Our Delicacies Crafted with Love and Heritage",
      imageUrl: "/media/images/products/burger-removebg-preview.png"
    },
    {
      id: 5,
      title: "Indulge in the Bold and Spicy Flavors of Nigeria",
      desc: "Spice Up Your Day with Our Authentic Nigerian Dishes",
      imageUrl: "/media/images/products/burger-removebg-preview.png"
    },
  ];

  const customers = [
    {
      id: 1,
      imageUrl: "/media/images/clients/john.png",
      name: "John Doe"
    },
    {
      id: 2,
      imageUrl: "/media/images/clients/nate.png",
      name: "Nate Soul"
    },
    {
      id: 3,
      imageUrl: "/media/images/clients/gloria.png",
      name: "Glory Elisa"
    }
  ];

  return (
    <section className="bg-light relative py-20">
      <div className="container">
      {slideitems && slideitems.map((slideitem, index) => (
        <div className={`transition ease-in-out ${currentSlide === index ? "flex items-center opacity-100" : "hidden opacity-0"}`} key={index}>
          <div className="content w-full text-center md:text-left md:w-1/2 flex flex-col gap-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold capitalize">{slideitem.title}</h2>
            <p>
              {slideitem.desc}
            </p>
            <div className="cta-group">
              <Link
                href="/menu" 
                className="px-3 sm:px-5 py-3 sm:py-4 font-medium rounded-full bg-main text-white uppercase text-xs sm:text-sm hover:bg-main-200"
              >
                Explore Our Menu
              </Link>
            </div>
            <div className="flex items-center gap-3 mt-8">
              <div className="flex items-center">
                {customers.length > 0 && customers.map(customer => (
                  <Image src={customer.imageUrl} width={35} height={35} alt={customer.name} key={customer.id} className="-m-1"/>
                ))}
              </div>
              <span>1000+ Satisfied Customers</span>
            </div>
          </div>
          <picture className="w-0 md:w-1/2">
            <Image src={slideitem.imageUrl} className="object-cover rounded-full" width={600} height={600} alt="alternative text"/>
          </picture>
        </div>
        )) 
      }
      <button className="absolute text-2xl md:text-4xl text-main-200 top-1/2 right-0 z-10" onClick={nextSlide}>
        <span className="bi bi-chevron-right"></span>
      </button>
      <button className="absolute text-2xl md:text-4xl text-main-200 top-1/2 left-0 z-10" onClick={prevSlide}>
        <span className="bi bi-chevron-left"></span>
      </button>
      <div className="indicators absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        {slideitems.map((_, index) => (
          <span
            key={index}
            className={`indicator inline-block w-3 h-3 rounded-full mx-2 ${
              currentSlide === index ? "bg-main-200" : "bg-main"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Hero
