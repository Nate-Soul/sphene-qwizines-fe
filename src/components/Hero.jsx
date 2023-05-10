import Image from "next/image";
import HeroImage1 from "../media/images/products/salate-removebg-preview.png";
import HeroImage2 from "../media/images/products/burger-removebg-preview.png";
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
      imageUrl: HeroImage1
    },
    {
      id: 2,
      title: "Experience the Best of Nigerian Cuisine",
      desc: "From Classic Jollof Rice to Mouth-Watering Suya, Sphene Qwizines Has It All",
      imageUrl: HeroImage2
    },
    {
      id: 3,
      title: "Satisfy Your Cravings for Nigerian Food",
      desc: "Order Online and Enjoy Authentic Flavors in the Comfort of Your Home",
      imageUrl: HeroImage1
    },
    {
      id: 4,
      title: "Taste the Richness of Nigerian Culture",
      desc: "Let Sphene Qwizines Take You on a Culinary Journey Across Nigeria",
      imageUrl: HeroImage2
    },
    {
      id: 5,
      title: "Indulge in the Bold and Spicy Flavors of Nigeria",
      desc: "Spice Up Your Day with Our Authentic Nigerian Dishes",
      imageUrl: HeroImage1
    },
  ]

  return (
    <section className="bg-light relative py-20">
      <div className="container">
      {slideitems && slideitems.map((slideitem, index) => (
        <div className={`transition ease-in-out ${currentSlide === index ? "flex items-center opacity-100" : "hidden opacity-0"}`} key={index}>
          <div className="content w-full text-center md:text-left md:w-1/2 flex flex-col gap-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize">{slideitem.title}</h2>
            <p>
              {slideitem.desc}
            </p>
            <div className="cta-group">
              <button className="px-4 py-3 rounded-full bg-main-200 text-white border-2 border-transparent hover:bg-light hover:border-main-200 hover:text-main-200">Explore Our Menu</button>
            </div>
          </div>
          <picture className="w-0 md:w-1/2">
            <Image src={slideitem.imageUrl} className="object-cover rounded-full" alt="alternative text"/>
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
