import Image from "next/image";
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
      name: "Jollof Rice",
      excerpt: "A classic Nigerian dish made with long grain rice, tomatoes, onions, and a blend of spices. Served with your choice of protein",
      price: 1999.99
    },
    {
      id: 2,
      imageUrl: FeaturedImg2,
      name: "Egusi Soup",
      excerpt: "A hearty soup made with ground melon seeds, vegetables, and your choice of protein. Served with fufu or rice.",
      price: 1799.99
    },
    {
      id: 3,
      imageUrl: FeaturedImg3,
      name: "Suya",
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
            <h3 className="section-heading-title">Our Menu</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {
            features && features.map((feature, index) => (
              <div className="featured-card" key={index}>
                <figure className="flex flex-col text-center gap-4">
                  <Image src={feature.imageUrl} alt={feature.name} className="mx-auto mb- h-32 w-32 object-cover rounded-full border-4 border-main"/>
                  <figcaption className="flex flex-col gap-4">
                    <h5 className="capitalize font-semibold text-main hover:text-main-200">{feature.name}</h5>
                    {/* <p>
                      {feature.excerpt}
                    </p> */}
                    <div className="flex justify-between gap-4 flex-wrap items-center">
                      <span>&#8358;{feature.price}</span>
                      <button className="bg-main text-white py-2 px-3 rounded-3xl hover:bg-main-200">
                        <span className="bi bi-cart-plus"></span> Add to Cart
                      </button>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))
          }
        </div>
      </div>      
    </section>
  )
}

export default Featured
