import Image from "next/image";
import GenericHeader from "./GenericHeader";
import { generateCrumbs } from "@/lib/utils";

const AboutUs = () => {
    const crumbs = generateCrumbs("/about");
  return (
    <>
    <GenericHeader title="About Us" crumbs={crumbs} />
    <section className="py-14 bg-secondary-500 bg-opacity-[0.65] text-dark-500">
        <div className="container">
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-6">
                <picture className="relative">
                    <Image 
                        src="/media/images/gallery/about-sphene-qwizines.png" 
                        alt="About Sphene Qwizines" 
                        className="object-cover w-full"
                        width={626}
                        height={417}
                        priority
                    />
                </picture>
                <article>
                    <div className="section-heading">
                        <h3 className="section-heading-title text-left capitalize">Who we are</h3>
                    </div>
                    <p className="mb-4">
                        At Sphene Qwizines, we&#39;re passionate about Nigerian cuisine and the unique flavors and spices that make it so special. We believe that food is not just about sustenance, but about culture, tradition, and community. That&#39;s why we&#39;re committed to bringing the taste of Nigeria to your doorstep, wherever you are in the world.
                    </p>
                    <p className="mb-4">
                        Our menu features a range of delicious, authentic Nigerian dishes that are made from the freshest ingredients and prepared with care and attention to detail. From jollof rice to egusi soup, from suya to plantain fufu, we have something to suit every palate and every occasion.
                    </p>
                    <p className="mb-4">
                        But we&#39;re not just about great food. We&#39;re also about convenience, affordability, and exceptional customer service. Our online platform makes it easy to order your favorite Nigerian dishes from the comfort of your own home, and our delivery service ensures that your food arrives fresh, hot, and on time.
                    </p>
                    <p className="mb-4">
                        At Sphene Qwizines, we&#39;re more than just a restaurant. We&#39;re a community of food lovers who are passionate about sharing the taste and culture of Nigeria with the world. Join us on this culinary journey and experience the fire and brilliance of Nigerian cuisine for yourself.
                    </p>
                </article>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutUs
