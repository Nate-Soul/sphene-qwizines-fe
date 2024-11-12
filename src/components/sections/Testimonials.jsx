"use client";

// import {useRef, useState, useEffect} from "react";

import TestimonialCard from "../subcomponents/TestimonialCard";
import useGridCarousel from "@/hooks/useGridCarousel";

import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  
  const { 
    currentView, 
    totalViews, 
    handlePageViewRight, 
    handlePageViewLeft, 
    startIndex, 
    endIndex 
  } = useGridCarousel(testimonials.length, 3);

  return (
    <section className="py-16">
      <div className="container">
        <header className="section-heading">
          <h3 className="section-heading-title">Our Customers Love Our Food</h3>
          <p className="section-heading-label">What our satisfied customers are saying about their culinary experiences with us</p>
        </header>
        <div id="testimonialCardContainer" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {
            testimonials && testimonials.slice(startIndex, endIndex).map((testimonial, testimonialIndex) => (
              <TestimonialCard testimonial={testimonial} key={testimonialIndex} />
            ))
          }
        </div>
        <div className="flex items-center justify-between mt-6">
          <button className="btn-main w-10 h-10 inline-flex justify-center items-center rounded-lg transition" onClick={handlePageViewLeft} disabled={currentView === 0}>
            <span className="bi bi-chevron-left"></span>
          </button>
          <div className="flex items-center justify-center gap-x-1">
            {Array.from({ length: totalViews }, (_, index) => (
              <span key={index} className={`${currentView === index ? "bg-main-600 sm:w-16" : "bg-main-500"} h-[6px] w-[6px] rounded-full`}></span>
            ))}
          </div>
          <button className="btn-main w-10 h-10 inline-flex justify-center items-center rounded-lg transition" onClick={handlePageViewRight} disabled={currentView + 1 >= totalViews}>
            <span className="bi bi-chevron-right"></span>
          </button>
        </div>
      </div>      
    </section>
  )
}

export default Testimonials
