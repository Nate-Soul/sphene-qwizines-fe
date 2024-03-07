"use client";

import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartReducer";

import { toast } from "react-toastify";

const MenuItem = ({ menu }) => {

  const dispatch = useDispatch();

  const addItemToCart = (menu) => {
    dispatch(addToCart({
      id: menu.id,
      slug: menu.slug,
      name: menu.name,
      price: menu.price, 
      imageUrl: menu.imageUrl, 
      availableQuantity: menu.availableQuantity,
      quantity: 1
    }));
    toast.success(`${menu.name} was added to cart`);
  }

  return (
    <div className="featured-card flex flex-col justify-between">
      <div className="h-44 overflow-hidden">
        <Image src={menu.imageUrl} alt={menu.name} className="w-full h-full object-cover" width={300} height={300} />
      </div>
      <div className="flex flex-col p-2 gap-y-2">
        <Link href={`/menu/${menu.slug}`}>
          <h5 className="capitalize font-bold text-main hover:text-main-200">{menu.name}</h5>
        </Link>
        <div className="ratings flex items-center gap-2">
          <span className="bi bi-star-fill text-main-200"></span>
          <span className="bi bi-star-fill text-main-200"></span>
          <span className="bi bi-star-fill text-main-200"></span>
          <span className="bi bi-star-fill text-main-200"></span>
          <span className="bi bi-star-fill text-main-200"></span>
        </div>
      </div>
      <div className="flex flex-col p-2 gap-y-2">
        <p className="text-xs">There are many variations of this delicacy</p>
        <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row gap-3">
          <span className="text-sm font-bold">&#8358;{menu.price}</span>
          <button 
            className="inline-flex items-center justify-center gap-2 bg-main text-white py-2 px-3 rounded-3xl hover:bg-main-200 text-sm"
            onClick={() => addItemToCart(menu)}
          >
            <span className="bi bi-basket"></span> Add to basket
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuItem
