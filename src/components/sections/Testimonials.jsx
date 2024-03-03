"use client";

import {useRef, useState, useEffect} from "react";

import TestimonialCard from "../subcomponents/TestimonialCard";

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
      name: "Jennifer Afolabi",
      imageUrl: "/media/images/testimonees/person_5.jpg",
      handle: "@Jenifa_labby",
      comment: "Sphene Qwizines has the best jollof rice I've ever had! The flavors are so authentic, it's like I'm back in Nigeria. And their online ordering system is so easy to use. I'm a customer for life!"
    },
    {
      id: 2,
      name: "Chinedu Okafor",
      imageUrl: "/media/images/testimonees/person_1.jpg",
      handle: "@chinedurem",
      comment: "I'm so glad I discovered Sphene Qwizines. Their egusi soup is my new favorite dish, and it's so hard to find good egusi in the U.S. The delivery is always fast and the food is piping hot. Highly recommend!"
    },
    {
      id: 3,
      name: "Deborah Adejor",
      imageUrl: "/media/images/testimonees/person_2.jpg",
      handle: "@debbymajor",
      comment: "As a Nigerian living abroad, I've been missing the taste of home. But Sphene Qwizines has filled that void for me. Their pepper soup is spot-on and brings back so many memories. Thank you, Sphene Qwizines!"
    },
    {
      id: 4,
      name: "Bashiru Ahmed",
      imageUrl: "/media/images/testimonees/person_3.jpg",
      handle: "@Codegranata",
      comment: "I'm a big fan of suya, and Sphene Qwizines' suya is the real deal. The meat is so tender and the spice blend is just right. I order it all the time for parties and everyone loves it."
    },
    {
      id: 5,
      name: "Michael Smith",
      imageUrl: "/media/images/testimonees/person_4.jpg",
      handle: "@mickelsmith",
      comment: "I was blown away by the quality of food and customer service at Sphene Qwizines. The plantain chips are addictive, and the customer support team went above and beyond to make sure my order was just right. I can't wait to order from them again."
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <header className="section-heading">
          <h3 className="section-heading-title">Our Customers Love Our Food</h3>
          <p className="section-heading-label">What our satisfied customers are saying about their culinary experiences with us</p>
        </header>
        <div id="testimonialCardContainer" className="flex gap-4 md:gap-6 horizontal-scroll hide-scrollbar" ref={containerRef}>
          {
            testimonials && testimonials.map((testimonial, testimonialIndex) => (
              <TestimonialCard testimonial={testimonial} key={testimonialIndex} />
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
