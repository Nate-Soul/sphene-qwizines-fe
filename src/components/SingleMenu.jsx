import Image from "next/image";
import MockPicture from "../media/images/products/nepali-momo.png";

const SingleMenu = () => {

  const menu = [{
    id: 1,
    name: "Grilled Chicken with a touch of africa",
    descripton: "Golden fried rice with mixed vegetables, plantain, and a delicious homemade gravy",
    price: 4500.00,
    featuredImg: MockPicture
  }]

  return (
    <section className="py-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <picture className="border-2 border-main rounded-xl overflow-hidden p-3">
            <Image src={menu[0].featuredImg} className="w-full h-96" alt={menu[0].name}/>
          </picture>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl">{menu[0].name}</h2>
            <h6 className="font-semibold text-main-600">&#8358;{menu[0].price.toFixed(2)}</h6>
            <p>{menu[0].descripton}</p>
            <div className="flex gap-6">
              <div className="flex">
                <button className="py-1 px-2 rounded-s border border-main text-main"><span className="bi bi-dash"></span></button>
                <input type="text" defaultValue={1} size={2} className="border-y border-main outline-none px-2 py-1 text-center"/>
                <button className="py-1 px-2 rounded-e border border-main text-main"><span className="bi bi-plus"></span></button>
              </div>
              <button className="bg-main py-2 px-3 inline-flex gap-2 items-center text-white">
                <span className="bi bi-basket"></span>
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleMenu
