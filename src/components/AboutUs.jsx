import Image from "next/image";
import AboutUsImg from "../media/images/products/img5.jpg";

const AboutUs = () => {
  return (
    <section className="py-14">
        <div className="container">
            <div className="section-heading">
                <h3 className="section-heading-title">About Us</h3>
            </div>
            <div className="flex items-center gap-6">
                <picture className="flex-1">
                    <Image src={AboutUsImg} alt="About Sphene Qwizines" className="object-cover"/>
                </picture>
                <article className="flex-1">
                    <p className="mb-4">
                        At Sphene Qwizines, we're passionate about Nigerian cuisine and the unique flavors and spices that make it so special. We believe that food is not just about sustenance, but about culture, tradition, and community. That's why we're committed to bringing the taste of Nigeria to your doorstep, wherever you are in the world.
                    </p>
                    <p className="mb-4">
                        Our menu features a range of delicious, authentic Nigerian dishes that are made from the freshest ingredients and prepared with care and attention to detail. From jollof rice to egusi soup, from suya to plantain fufu, we have something to suit every palate and every occasion.
                    </p>
                    <p className="mb-4">
                        But we're not just about great food. We're also about convenience, affordability, and exceptional customer service. Our online platform makes it easy to order your favorite Nigerian dishes from the comfort of your own home, and our delivery service ensures that your food arrives fresh, hot, and on time.
                    </p>
                    <p className="mb-4">
                        At Sphene Qwizines, we're more than just a restaurant. We're a community of food lovers who are passionate about sharing the taste and culture of Nigeria with the world. Join us on this culinary journey and experience the fire and brilliance of Nigerian cuisine for yourself.
                    </p>
                </article>
            </div>
        </div>
    </section>
  )
}

export default AboutUs
