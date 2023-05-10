import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-main-200 text-white py-12">
        <div className="container grid grid-cols-4 gap-4">
            <div className="col-span-4 md:col-span-2 lg:col-span-1">
                <h6 className="uppercase font-bold mb-5 text-lg text-light">About Us</h6>
                <p>
                    Welcome to Sphene Qwizines, your online destination for authentic Nigerian cuisine. Whether you&#39;re a seasoned foodie or a curious newcomer to Nigerian cuisines, we have something for you.
                </p>
                <ul className="mt-5 flex items-center gap-4">
                    <li><a href="#" className="bi bi-facebook text-2xl footer-link"></a></li>
                    <li><a href="#" className="bi bi-instagram text-2xl footer-link"></a></li>
                    <li><a href="#" className="bi bi-twitter text-2xl footer-link"></a></li>
                    <li><a href="#" className="bi bi-youtube text-2xl footer-link"></a></li>
                </ul>
            </div>
            <div className="col-span-4 md:col-span-2 lg:col-span-1">
                <h6 className="uppercase font-bold mb-5 text-lg text-light">Quick Links</h6>
                <ul className="flex flex-col gap-2">
                    <li><Link href="/" className="footer-link">Home</Link></li>
                    <li><a href="#" className="footer-link">Our Menu</a></li>                                           
                    <li><Link href="/about" className="footer-link">About Us</Link></li>
                    <li><a href="#" className="footer-link">Testimonial</a></li>
                    <li><a href="#" className="footer-link">Our Qualified Cooks</a></li>
                </ul>
            </div>
            <div className="col-span-4 md:col-span-2 lg:col-span-1">
                <h6 className="uppercase font-bold mb-5 text-lg text-light">Contact</h6>
                <address className="mb-2">
                    <span className="bi bi-geo mr-2"></span>
                    12 Greenview, Ewet Housing Estate, Akwa Ibom.
                </address>
                <ul className="flex flex-col gap-2">
                    <li>
                        <a href="#" className="footer-link">
                            <span className="bi bi-phone mr-2"></span>
                            +234 809 768 5506
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">
                            <span className="bi bi-envelope mr-2"></span>
                            support@spheneqwizines.kitchen
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-span-4 md:col-span-2 lg:col-span-1">                
                <h6 className="uppercase font-bold mb-5 text-lg text-light">Newsletter</h6>
                <p className="mb-3">You can trust us. We&#39;ll send you only promo offers.</p>
                <form>
                    <div className="flex relative">
                        <input type="email" name="email_sub" id="emailSub" className="bg-white text-gray-700 outline-main-200 p-3 rounded-3xl w-full" placeholder="Enter your email address"/>
                        <button className="absolute right-0 py-3 px-4 border-none bg-main rounded-3xl hover:bg-main-200 hover:text-light"><span className="bi bi-arrow-right"></span></button>
                    </div>
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer
