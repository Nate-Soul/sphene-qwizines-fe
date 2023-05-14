import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-main-200 text-white py-16">
        <div className="container">
            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                    <h6 className="capitalize font-bold mb-8 text-xl">Business Hours</h6>
                    <ul className="flex flex-col gap-2">
                        <li className="flex justify-between pb-5 border-b border-b-gray-300">
                            <span>Monday &ndash; Friday</span>
                            <span>08.00am &ndash; 10.00pm</span>
                        </li>
                        <li className="flex justify-between py-5 border-b border-b-gray-300">
                            <span>Saturday</span>
                            <span>10.00am &ndash; 10.00pm</span>
                        </li>
                        <li className="flex justify-between py-5 border-b border-b-gray-300">
                            <span>Sunday</span>
                            <span>02.00pm &ndash; 10.00pm</span>
                        </li>
                    </ul>
                </div>
                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                    <h6 className="capitalize font-bold mb-8 text-xl">Contact Us</h6>
                    <address className="mb-5">
                        12 Greenview, Ewet Housing Estate, Uyo.
                    </address>
                    <ul className="flex flex-col gap-2 mb-5">
                        <li>
                            <Link href="tel:+2347086752038" className="footer-link font-bold text-xl flex gap-2">
                                <span className="bi bi-phone"></span>
                                +234 708 675 2038
                            </Link>
                        </li>
                        <li>
                            <Link href="tel:+2348143287118" className="footer-link font-bold text-xl flex gap-2">
                                <span className="bi bi-telephone"></span>
                                +234 814 328 7118
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2 mb-5">
                        <li>
                            <Link href="mailto:contact@spheneqwizines.com">
                                contact@spheneqwizines.com
                            </Link>
                        </li>
                    </ul>
                    <ul className="inline-flex justify-center items-center gap-x-6">
                        <li>
                            <span className="bi bi-facebook text-xl font-bold"></span>
                        </li>
                        <li>
                            <span className="bi bi-twitter text-xl font-bold"></span>
                        </li>
                        <li>
                            <span className="bi bi-youtube text-xl font-bold"></span>
                        </li>
                        <li>
                            <span className="bi bi-whatsapp text-xl font-bold"></span>
                        </li>
                    </ul>
                </div>
                <div className="col-span-4 md:col-span-2 lg:col-span-1">                
                    <h6 className="capitalize font-bold mb-8 text-xl">Newsletter</h6>
                    <p className="my-5">You can trust us. We&#39;ll send you only promotions &amp; offers.</p>
                    <form>
                        <div className="flex relative">
                            <input type="email" name="email_sub" id="emailSub" className="bg-white text-gray-700 outline-main-200 p-3 rounded-3xl w-full" placeholder="Enter your email address"/>
                            <button className="absolute right-0 py-3 px-4 border-none bg-main rounded-3xl hover:bg-main-200 hover:text-light"><span className="bi bi-arrow-right"></span></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-8 text-center bg-main-400 text-white p-5">
                <p>Sphene qwizines &copy; 2023 All rights reserved. Made with <span className="bi bi-heart-fill text-red-600"></span> using NextJS &amp; Strapi CMS by <Link className="footer-link" href="https://github.com/Nate-Soul ">Nate</Link></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
