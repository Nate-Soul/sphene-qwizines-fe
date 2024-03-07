"use client";

//react modules
import { useEffect, useState } from "react";

//next modules
// import { notFound } from "next/navigation";
import Image from "next/image";

//redux
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartReducer";

//Components and UIs
import GenericHeader from "@/components/GenericHeader";
import { generateCrumbs } from "@/lib/utils";

//data
import { menuItems } from "@/data/menus";
import { toast } from "react-toastify";

// async function getData(slug) {
//   const menuItem = menuItems.filter(menuItem => menuItem.slug === slug);

//   return menuItem ? menuItem : notFound();
// }

const MenuDetail = ({ params }) => {
  const menuItemSlug = params.slug;

  const singleMenuItem = menuItems.filter(
    (menuItem) => menuItem.slug === menuItemSlug
  );
  
  const [quantity, setQuantity] = useState(1);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getData(menuItemSlug);
  //     setSingleMenuItem(data);
  //   };

  //   fetchData();
  // }, []);

  const dispatch = useDispatch();
  const crumbs = generateCrumbs(`/menu/${singleMenuItem[0].name}`);

  const handleQtyChange = (event) => {
    setQuantity(event.target.value);
  }

  const addItemsToCart = (menu) => {
    dispatch(
      addToCart({
        id: menu.id,
        name: menu.name,
        slug: menu.slug,
        price: menu.price,
        imageUrl: menu.imageUrl,
        availableQuantity: menu.availableQuantity,
        quantity
      })
    );
    toast.success(`${menu.name} added to cart`);
  }

  return (
    <>
      <GenericHeader title={singleMenuItem[0].name} crumbs={crumbs} />
      <section className="py-14">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <picture className="border-2 border-main rounded-xl overflow-hidden p-3">
              <Image
                src={singleMenuItem[0].imageUrl}
                className="w-full h-auto xs:h-96"
                width={1024}
                height={1024}
                alt={singleMenuItem[0].name}
              />
            </picture>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl hover:text-main transition">
                {singleMenuItem[0].name}
              </h2>
              <h6 className="font-semibold text-main-600">
                &#8358;{singleMenuItem[0].price.toFixed(2)}
              </h6>
              <p>{singleMenuItem[0].excerpt}</p>
              <div className="flex gap-6">
                <select 
                  name="cart_qty" 
                  id="cartQty"
                  size={1}
                  className="border outline-none py-2 px-1"
                  onChange={(e) => handleQtyChange(e)}
                  value={quantity}
                >
                  {
                    Array.from({ length: singleMenuItem[0].availableQuantity }, (_, index) => (
                      <option 
                        value={index + 1}
                        key={index}
                      >
                        {index + 1}
                      </option>
                    ))
                  }
                </select>
                <button
                  className="bg-main py-2 px-3 inline-flex gap-2 items-center text-white rounded-3xl"
                  onClick={() => addItemsToCart(singleMenuItem[0])}
                >
                  <span className="bi bi-basket"></span>
                  <span className="hidden xs:inline">Add to Basket</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuDetail;
