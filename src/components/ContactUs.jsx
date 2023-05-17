import React from "react";
import GenericHeader from "./GenericHeader";
import Link from "next/link";
import { generateCrumbs } from "./BreadCrumbs";

const ContactUs = () => {
  const crumbs = generateCrumbs('/contact');
  return (
    <>
    <GenericHeader title="Contact Us" crumbs={crumbs}/>
    <section className="py-16">
      <div className="container grid grid-cols-12">
        <aside className="col-span-12 lg:col-span-4 xl:col-span-3 flex flex-wrap flex-row gap-4 lg:flex-col lg:justify-between bg-main text-white p-5 rounded-b-lg lg:rounded-br-none lg:rounded-s-xl order-2 lg:order-1 overflow-hidden">
        <div className="flex flex-none flex-col gap-4 w-full sm:w-1/2 md:w-1/3 lg:w-auto">
                <h6 className="font-semibold uppercase">
                  Branches 
                </h6>
                <div className="addresses">
                  <address className="flex gap-2">
                    <span className="bi bi-geo hidden xxs:inline-flex"></span> 
                    12 Greenview, Ewet Housing Estate, Uyo.
                  </address>
                </div>
            </div>
            <div className="flex flex-none flex-col gap-4 w-full sm:w-1/2 md:w-1/3 lg:w-auto">
                <h6 className="font-semibold uppercase">Email</h6>
                <ul className="flex flex-col gap-2">
                  <li className="flex gap-2">
                    <span className="bi bi-envelope hidden xxs:inline-flex"></span>
                    <p>
                      <Link href="mailto:contact@spheneqwizines.com">contact@spheneqwizines.com</Link>
                    </p>
                  </li>

                </ul>
            </div>
            <div className="flex flex-none flex-col gap-4 w-full sm:w-1/2 md:w-1/3 lg:w-auto">
                <h6 className="font-semibold uppercase"> Phone </h6>
                <ul className="flex flex-col gap-2">
                  <li className="flex gap-2">
                    <span className="bi bi-phone hidden xxs:inline-flex"></span>
                    <Link href="tel:+2347086752038">+234 708 675 2038</Link>
                  </li>
                </ul>
            </div>
        </aside>
        <main className="col-span-12 lg:col-span-8 xl:col-span-9 shadow-lg p-5 rounded-t-lg lg:rounded-tl-none lg:rounded-e-xl order-1 lg:order-2">
            <h4 className="font-semibold text-center text-2xl mb-4">Have any enquiries or complaints?</h4>
            <form>
              <div className="form-group">
                <label htmlFor="customerName">Your Name</label>
                <input type="text"id="customerName" className="form-control" required/>
              </div>
              <div className="form-group">
                <label htmlFor="emailAddress">Email Address</label>
                <input type="email" id="emailAddress" className="form-control" required/>
              </div>
              <div className="form-group">
                <label htmlFor="mailSubject">Subject</label>
                <input type="subject" id="mailSubject" className="form-control" required/>
              </div>
              <div className="form-group">
                <label htmlFor="mailContent">Message</label>
                <textarea id="mailContent" className="form-control" rows={6} required></textarea>
              </div>
              <div className="form-group text-center">
                <button type="submit" className="py-2 px-3 bg-main text-white text-lg rounded-3xl hover:bg-opacity-80"> Send Message <span className="bi bi-plane"></span></button>
              </div>
            </form>
        </main>
      </div>
    </section>
    <section>
      <div className="container">
        {/* <canvas id="map"></canvas> */}
      </div>
    </section>
    </>
  )
}

export default ContactUs
