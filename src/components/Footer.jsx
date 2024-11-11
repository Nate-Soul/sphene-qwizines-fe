import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-main-600 text-light-500 py-16">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="col-span-1">
                    <div className="flex flex-col gap-y-8">
                        <div>
                            <h6 className="capitalize font-bold mb-8">About Us</h6>
                            <div className="flex flex-col gap-y-2">
                                <p>
                                At sphene Qwizines we&apos;re passionate about Nigerian cuisines and the unique flavours that make it special. we believe that food is not just about sustenance, but culture, tradition, and community.
                                </p>
                                <p>
                                <Link href="/about" className="py-2 px-3 border border-gray-100 rounded-3xl inline-flex gap-x-2 justify-center items-center text-gray-100 hover:border-transparent hover:bg-light-500 hover:text-main-700">
                                    Learn More
                                </Link>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <h6 className="font-bold">Subscribe to our Newsletter</h6>
                            <p className="text-sm">You can trust us. We&#39;ll send you only promotions and offers.</p>
                            <form>
                                <div className="flex relative">
                                    <input type="email" name="email_sub" id="emailSub" className="bg-white text-gray-700 outline-main-800 p-3 rounded-lg w-full" placeholder="Enter your email address"/>
                                    <button className="absolute right-0 py-3 px-4 bg-main-700 rounded-lg hover:bg-main-800 hover:text-light-500"><span className="bi bi-arrow-right"></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <h6 className="capitalize font-bold mb-8">Business Hours</h6>
                    <ul className="flex flex-col gap-y-5">
                        <li className="flex flex-col xxs:flex-row justify-between">
                            <span>Monday &ndash; Friday:</span>
                            <span>08.00am &ndash; 10.00pm</span>
                        </li>
                        <li className="flex flex-col xxs:flex-row justify-between">
                            <span>Saturday:</span>
                            <span>10.00am &ndash; 10.00pm</span>
                        </li>
                        <li className="flex flex-col xxs:flex-row  justify-between">
                            <span>Sunday:</span>
                            <span>02.00pm &ndash; 10.00pm</span>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h6 className="capitalize font-bold mb-8">Contact Us</h6>
                    <address className="mb-5 flex gap-2 items-center">
                        <span className="bi bi-geo"></span>
                        12 Greenview, Ewet Housing Estate, Uyo.
                    </address>
                    <ul className="flex flex-col gap-2 mb-5">
                        <li>
                            <Link href="tel:+2347086752038" className="footer-link text-sm flex gap-2">
                                <span className="bi bi-phone"></span>
                                +234 708 675 2038
                            </Link>
                        </li>
                        <li>
                            <Link href="tel:+2348143287118" className="footer-link text-sm flex gap-2">
                                <span className="bi bi-telephone"></span>
                                +234 814 328 7118
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2 mb-5">
                        <li>
                            <Link href="mailto:natesoul.dev@gmail.com">
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
            </div>
            <div className="mt-8 text-center bg-main-700 text-white p-5">
                <p>Sphene Qwizines &copy; 2023 - {new Date().getFullYear()} All rights reserved. Made with <span className="bi bi-heart-fill text-red-600"></span> using Next.js &amp; Strapi CMS by <Link className="footer-link" href="https://github.com/Nate-Soul">Nate</Link></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
