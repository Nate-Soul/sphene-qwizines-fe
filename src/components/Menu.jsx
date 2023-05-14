import FeaturedImg1 from "../media/images/products/rice.png";
import FeaturedImg2 from "../media/images/products/f2.jpeg";
import FeaturedImg3 from "../media/images/products/f1.jpeg";
import FeaturedImg4 from "../media/images/products/chicken_fry.png";
import FeaturedImg5 from "../media/images/products/recipe1.jpeg";
import FeaturedImg6 from "../media/images/products/nepali-momo.png";
import FeaturedImg7 from "../media/images/products/fish-and-chips.png";
import FeaturedImg8 from "../media/images/products/recipe4.jpeg";
import MenuItem from "./MenuItem";


const Menu = () => {
    
  const menus = [
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
    <section className="py-14">
      <div className="container">
        <div className="section-heading">
          <h3 className="section-heading-title">Our Exclusive Menu</h3>
        </div>
        <div className="grid grid-cols-4 gap-8">
        {menus && menus.map((menu, index) => (
            <MenuItem key={index} name={menu.name} imageUrl={menu.imageUrl} price={menu.price}/>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
