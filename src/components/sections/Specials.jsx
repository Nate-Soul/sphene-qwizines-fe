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

  const countDown = [
    {
      interval: 6,
      allocation: "days"
    },
    {
      interval: 40,
      allocation: "hours"
    },
    {
      interval: 11,
      allocation: "mins"
    },
    {
      interval: 6,
      allocation: "secs"
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <header className="section-heading">
          <h3 className="section-heading-title">This Week&#39;s Specials</h3>
          <p>Roll your tongue into our palpate stimulating weekly special offers</p>
        </header>
        <div className="counter flex gap-x-2 md:gap-x-3 items-center justify-center">
          {countDown && countDown.map((countDownItem, countDownItemIndex) => (
          <div key={countDownItemIndex} className="h-20 w-20 rounded-full inline-flex items-center justify-center flex-col border-2 border-main-400">
            <span className="text-main-200">{countDownItem.interval}</span>
            <span className="text-sm text-gray-600 capitalize">{countDownItem.allocation}</span>
          </div>)
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {
            specials.map((special, specialIndex) => (
              <SpecialsCard special={special} key={specialIndex}/>
            ))
          }
        </div>
        <div className="mt-12 flex items-center justify-between">
          <button className="h-8 w-8 rounded-full inline-flex items-center justify-center bg-main-500 text-white opacity-85 hover:opacity-100">
            <span className="bi-arrow-left"></span>
          </button>
          <div className="flex items-center justify-center gap-x-1">
            <span className="bg-main-500 h-3 w-3 rounded-full"></span>
            <span className="bg-main-700 h-3 sm:h-2 w-3 sm:w-8 rounded-full"></span>
            <span className="bg-main-500 h-3 w-3 rounded-full"></span>
            <span className="bg-main-500 h-3 w-3 rounded-full"></span>
          </div>
          <button className="h-8 w-8 rounded-full inline-flex items-center justify-center bg-main-500 text-white opacity-85 hover:opacity-100">
            <span className="bi-arrow-right"></span>
          </button>
        </div>
      </div>      
    </section>
  )
}

export default Specials
