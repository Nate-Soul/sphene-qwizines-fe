import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-light py-12">
        <div className="container grid grid-cols-4 gap-4">
            <div className="col-span-4 md:col-span-2 lg:col-span-1">
                <h6 className="capitalize font-semibold mb-5 text-lg">Quick Links</h6>
                <ul className="flex flex-col gap-2">
                    <li><a href="#" className="text-gray-600 hover:text-main">Home</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-main">Why choose us?</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-main">Season Specials</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-main">Testimonial</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-main">Our Prestigious Cooks</a></li>
                </ul>
            </div>
            <div className="col-span-4 md:col-span-2 lg:col-span-1">
                <h6 className="capitalize font-semibold mb-5 text-lg">Our Policies</h6>
                <ul className="flex flex-col gap-2">
                    <li><a href="#" className="text-gray-600 hover:text-main">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-main">Terms and Conditions</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-main">Refund Policy</a></li>
                </ul>
            </div>
            <div className="col-span-4 md:col-span-2 lg:col-span-1">
                <h6 className="capitalize font-semibold mb-5 text-lg">Contact</h6>
                <ul className="flex flex-col gap-2">
                    <li><a href="#" className="text-gray-600 hover:text-main">+234 809 768 5506</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-main">support@spheneqwizines.kitchen</a></li>
                </ul>
                <address className="mt-2">
                    12 Lakeview, St. Ajah Street, Lagos.
                </address>
            </div>
            <div className="col-span-4 md:col-span-2 lg:col-span-1">                
                <h6 className="capitalize font-semibold mb-5 text-lg">Subscribe to Our Newsletter</h6>
                <form>
                    <div className="flex">
                        <input type="email" name="email_sub" id="emailSub" className="bg-white text-gray-700 outline-main-200 p-2 rounded-s-lg" placeholder="Enter your email address"/>
                        <button className="p-2 bg-main rounded-e-lg hover:bg-main-200 hover:text-light">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer
