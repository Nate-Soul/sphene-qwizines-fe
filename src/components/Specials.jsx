import Image from "next/image";
import Image1 from "../media/images/products/recipe2.jpeg";
import Image2 from "../media/images/products/recipe3.jpeg"
import Image3 from "../media/images/products/recipe4.jpeg"


const Specials = () => {

  const specials = [
    {
      id: 1,
      image: Image1,
      name: "Jollof Rice and Grilled Chicken",
      price: 2500,
      description: "Fragrant tomato stew cooked with rice and served with juicy, grilled chicken"
    },
    {
      id: 2,
      image: Image2,
      name: "Fried Rice with Plantain and Gravy",
      price: 2800,
      description: "Golden fried rice with mixed vegetables, plantain, and a delicious homemade gravy"
    },
    {
      id: 3,
      image: Image3,
      name: "Efo Riro and Pounded Yam",
      price: 3000,
      description: "Spinach and pepper stew with assorted meat and fish, served with soft and fluffy pounded yam"
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <div className="section-heading">
          <h3 className="section-heading-title">Today&#39;s Specials</h3>
          <p>Roll your tongue into our palpate stimulating unending foods</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 gap-6">
          {
            specials.map(special => (
              <div className="special-card" key={special.id}>
                <figure className="text-center flex flex-col gap-4">
                  <Image src={special.image} className="object-cover w-40 h-40 rounded-full border-4 border-main mx-auto" width="160" height="160" alt={special.name}/>
                    <figcaption className="flex flex-col gap-4 mb-14 xs:mb-10">
                      <h5 className="font-semibold text-main hover:text-main-200">{special.name}</h5>
                      <p className="truncate">
                        {special.description}
                      </p>
                    </figcaption>
                </figure>
                <div className="flex flex-col gap-3 xs:gap-0 xs:flex-row justify-between items-center absolute bottom-0 left-0 right-0 text-center">
                  <h6 className="flex-1 font-bold text-gray-500">&#8358;{special.price.toFixed(2)}</h6>
                  <button className="p-2 bg-main hover:bg-main-200 text-white xs:flex-1 rounded-b-lg xs:rounded-br-lg w-full xs:w-auto">
                    Buy Now
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>      
    </section>
  )
}

export default Specials
