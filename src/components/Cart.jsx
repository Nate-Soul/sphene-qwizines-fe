import Link from "next/link";
import Image from "next/image";

import { menuItems as cartItems } from "@/data/menus";


const Cart = () => {

  return (
    <section className="py-14">
      <div className="container">
        <div className="py-5 border-b mb-6">
            <Link href="/menu" className="inline-flex items-center gap-2">
              <span className="bi bi-chevron-left inline-flex items-center justify-center bg-main text-white rounded-full h-4 xxs:h-6 xs:h-8 w-4 xxs:w-6 xs:w-8"></span>
              Back to Menu
            </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="col-span-1 lg:col-span-2">
            {cartItems && cartItems.splice(0,4).map((cartItem, index) => (
              <div className="cart-item flex flex-col xs:flex-row flex-wrap gap-8 items-center px-3 py-4 shadow mb-4 rounded-lg justify-between" key={index}>
                <figure className="flex flex-col xs:flex-row items-center gap-2 col-span-full sm:col-span-8">
                  <Image src={cartItem.imageUrl} className="object-cover xs:object-contain rounded-full xs:rounded-none border-2 border-main xs:border-transparent w-28 h-28" height={100} width={100} alt={cartItem.name}/>
                  <figcaption>
                    <h6 className="font-semibold text-main capitalize">{cartItem.name}</h6>
                  </figcaption>
                </figure>
                <div className="flex gap-2 items-center">
                  Qty
                  <input type="text" defaultValue={1} size={1} className="border rounded-lg outline-none py-2 px-1 text-center"/>
                </div>
                <p className="text-medium text-gray-500">&#8358;{cartItem.price}</p>
                <div className="justify-self-center xs:justify-self-end">
                  <ul className="flex gap-3 font-medium text-sm">
                    <li className="flex gap-2 text-main">
                      <span className="bi bi-heart"></span> 
                      <span className="hidden sm:inline-flex">Save for later</span>
                    </li>
                    <li className="flex gap-2 text-red-500">
                      <span className="bi bi-trash"></span> 
                      <span className="hidden sm:inline-flex">Remove item</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
            <aside className="col-span-1 rounded-lg shadow p-4 sticky top-8">
              <div className="flex justify-between font-medium xs:text-xl py-4 border-b">
                <h5 className="">Subtotals:</h5>
                <span>&#8358;1999.00</span>
              </div>
              <button className="w-full inlire-flex items-center justify-center py-3 font-semibold bg-main text-white my-4 rounded-3xl">
                Go to checkout
              </button>
            </aside>
        </div>
      </div>
    </section>
  )
}

export default Cart
