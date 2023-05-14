"use client";

import {useRef, useState, useEffect} from "react";
import Image from "next/image";
import Client1 from "../media/images/testimonees/person_1.jpg";
import Client2 from "../media/images/testimonees/person_2.jpg";
import Client3 from "../media/images/testimonees/person_3.jpg";
import Client4 from "../media/images/testimonees/person_4.jpg";
import Client5 from "../media/images/testimonees/person_5.jpg";

const Testimonials = () => {

  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
    const handleScroll = () => {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    if (direction === "prev") {
      container.scrollLeft -= containerWidth;
    } else if (direction === "next") {
      container.scrollLeft += containerWidth;
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Abigail N.",
      imageUrl: Client2,
      role: "CTO, Sphenyx Digitals",
      comment: "Sphene Qwizines has the best jollof rice I've ever had! The flavors are so authentic, it's like I'm back in Nigeria. And their online ordering system is so easy to use. I'm a customer for life!"
    },
    {
      id: 2,
      name: "Chinedu O.",
      imageUrl: Client1,
      role: "CEO, Sphenyx Digitals",
      comment: "I'm so glad I discovered Sphene Qwizines. Their egusi soup is my new favorite dish, and it's so hard to find good egusi in the U.S. The delivery is always fast and the food is piping hot. Highly recommend!"
    },
    {
      id: 3,
      name: "Adebayo T.",
      imageUrl: Client4,
      role: "CEO, Smirnof Company",
      comment: "As a Nigerian living abroad, I've been missing the taste of home. But Sphene Qwizines has filled that void for me. Their pepper soup is spot-on and brings back so many memories. Thank you, Sphene Qwizines!"
    },
    {
      id: 4,
      name: "Folake A.",
      imageUrl: Client3,
      role: "CEO, Smirnof Company",
      comment: "I'm a big fan of suya, and Sphene Qwizines' suya is the real deal. The meat is so tender and the spice blend is just right. I order it all the time for parties and everyone loves it."
    },
    {
      id: 5,
      name: "Ugochi M.",
      imageUrl: Client5,
      role: "CEO, Smirnof Company",
      comment: "I was blown away by the quality of food and customer service at Sphene Qwizines. The plantain chips are addictive, and the customer support team went above and beyond to make sure my order was just right. I can't wait to order from them again."
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <div className="section-heading">
          <h3 className="section-heading-title">Testimonials</h3>
          <p className="section-heading-label">What our satisfied customers are saying about us</p>
        </div>
        <div id="testimonialCardContainer" className="flex gap-4 md:gap-6 horizontal-scroll hide-scrollbar" ref={containerRef}>
          {
            testimonials && testimonials.map(testimonial => (
              <figure className="testimonial-card flex-none" key={testimonial.id}>
                <Image src={testimonial.imageUrl} className="w-28 h-28 object-cover rounded-full block mx-auto" alt="person's name"/>
                <figcaption className="flex flex-col gap-5">
                  <p>
                    {testimonial.comment}
                  </p>
                  <div className="ratings flex gap-2 justify-center items-center text-main-200">
                    <span className="bi bi-star-fill"></span>
                    <span className="bi bi-star-fill"></span>
                    <span className="bi bi-star-fill"></span>
                    <span className="bi bi-star-fill"></span>
                    <span className="bi bi-star-fill"></span>
                  </div>
                  <hgroup>
                    <h5 className="font-semibold">{testimonial.name}</h5>
                    <h6 className="text-gray-500">{testimonial.role}</h6>
                  </hgroup>
                </figcaption>
              </figure>
            ))
          }
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-main p-2 rounded-s-3xl text-white text-xl hover:bg-main-200 transition" onClick={() => handleScroll("prev")} disabled={!canScrollLeft}>
            <span className="bi bi-chevron-left"></span>
          </button>
          <button className="bg-main p-2 rounded-e-3xl text-white text-xl hover:bg-main-200 transition" onClick={() => handleScroll("next")} disabled={!canScrollRight}>
            <span className="bi bi-chevron-right"></span>
          </button>
        </div>
      </div>      
    </section>
  )
}

export default Testimonials
