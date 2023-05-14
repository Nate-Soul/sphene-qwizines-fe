import Image from "next/image";
import Link from "next/link";
import FeaturedImg1 from "../media/images/products/rice.png";
import FeaturedImg2 from "../media/images/products/f2.jpeg";
import FeaturedImg3 from "../media/images/products/f1.jpeg";
import FeaturedImg4 from "../media/images/products/chicken_fry.png";
import FeaturedImg5 from "../media/images/products/recipe1.jpeg";
import FeaturedImg6 from "../media/images/products/nepali-momo.png";
import FeaturedImg7 from "../media/images/products/fish-and-chips.png";
import FeaturedImg8 from "../media/images/products/recipe4.jpeg";

const Featured = () => {
  const features = [
    {
      id: 1,
      imageUrl: FeaturedImg1,
      name: "Jollof rice garnished with african salad",
      excerpt: "A classic Nigerian dish made with long grain rice, tomatoes, onions, and a blend of spices. Served with your choice of protein",
      price: 1999.99
    },
    {
      id: 2,
      imageUrl: FeaturedImg2,
      name: "Egusi Soup mixed with foofoo and dry meat",
      excerpt: "A hearty soup made with ground melon seeds, vegetables, and your choice of protein. Served with fufu or rice.",
      price: 1799.99
    },
    {
      id: 3,
      imageUrl: FeaturedImg3,
      name: "Suya from chicken mixed with goat meat",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quos, nemo atque facilis odit officiis.",
      price: 2999.99
    },
    {
      id: 4,
      imageUrl: FeaturedImg4,
      name: "Akara",
      excerpt: "A popular street food made from black-eyed peas, onions, and spices, deep-fried until crispy on the outside and soft on the inside. Served with a side of spicy pepper sauce",
      price: 2999.99
    },
    {
      id: 5,
      imageUrl: FeaturedImg5,
      name: "Pepper Soup",
      excerpt: "A flavorful soup made with your choice of meat or fish, simmered with spices, herbs, and vegetables. Served hot and spicy",
      price: 2999.99
    },
    {
      id: 6,
      imageUrl: FeaturedImg6,
      name: "Pounded Yam",
      excerpt: "A classic Nigerian dish made with yam pounded into a smooth, dough-like consistency,",
      price: 2999.99
    },
    {
      id: 7,
      imageUrl: FeaturedImg7,
      name: "Plantain Chips",
      excerpt: "A classic Nigerian dish made with yam pounded into a smooth, dough-like consistency.",
      price: 2999.99
    },
    {
      id: 8,
      imageUrl: FeaturedImg8,
      name: "Efo Riro",
      excerpt: "A delicious and nutritious vegetable stew made with spinach, bell peppers, onions, and your choice of protein. Served with rice or fufu.",
      price: 2999.99
    },
  ]
  return (
    <section className="py-8">
      <div className="container">
        <div className="section-heading">
            <h3 className="section-heading-title">Our Top Rated Menu</h3>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {
            features && features.map((feature, index) => (
              <figure className="featured-card flex flex-col lg:flex-row justify-between gap-5 col-span-full sm:col-span-2" key={index}>
                <Image src={feature.imageUrl} alt={feature.name} className="w-full lg:w-40 object-cover" width={160} height="100%"/>
                <figcaption className="flex flex-col justify-between p-5 gap-5">
                  <div className="flex gap-3">
                    <Link href={`/menu/${feature.name}`}>
                      <h5 className="capitalize font-bold text-main hover:text-main-200">{feature.name}</h5>
                    </Link>
                    <h6 className="font-semibold text-gray-600 self-start text-lg">&#8358;<span>{feature.price}</span></h6>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 bg-main text-white py-2 px-3 rounded-3xl hover:bg-main-200 text-lg md:text-sm self-end w-full md:w-auto">
                    <span className="bi bi-basket"></span> Add to basket
                  </button>
                </figcaption>
              </figure>
            ))
          }
        </div>
        <div className="flex justify-end mt-5">
          <a href="#" className="text-main underline hover:text-main-300">View all</a>
        </div>
      </div>      
    </section>
  )
}

export default Featured
