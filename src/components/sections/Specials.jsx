import SpecialsCard from "../subcomponents/SpecialsCard";

const Specials = () => {

  const specials = [
    {
      id: 1,
      image: "/media/images/products/fried-plantain.png",
      name: "Fried Plantain and Grilled Chicken",
      slug: "fried-plantain-grilled-chicken",
      price: 2500,
      description: "Fragrant tomato stew cooked with rice and served with juicy, grilled chicken"
    },
    {
      id: 2,
      image: "/media/images/products/spaghetti-grilled-beef.png",
      name: "Spaghetti and Grilled Beef",
      slug: "spaghetti-grilled-beef",
      price: 2800,
      description: "Golden fried rice with mixed vegetables, plantain, and a delicious homemade gravy"
    },
    {
      id: 3,
      image: "/media/images/products/suya-salad.png",
      name: "Grilled Chicken Suya Salad",
      slug: "grilled-chicken-suya-salad",
      price: 3000,
      description: "Spinach and pepper stew with assorted meat and fish, served with soft and fluffy pounded yam"
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <header className="section-heading">
          <h3 className="section-heading-title">This Week&#39;s Specials</h3>
          <p>Roll your tongue into our palpate stimulating weekly special offers</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {
            specials.map((special, specialIndex) => (
              <SpecialsCard special={special} key={specialIndex}/>
            ))
          }
        </div>
      </div>      
    </section>
  )
}

export default Specials
