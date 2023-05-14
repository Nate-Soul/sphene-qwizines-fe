import Link from "next/link";
import Image from "next/image";

const MenuItem = ({name, price, imageUrl}) => {
  return (
    <figure className="featured-card flex flex-col lg:flex-row justify-between gap-5 col-span-full sm:col-span-2">
      <Image src={imageUrl} alt={name} className="w-full lg:w-40 object-cover" width={160} height="100%"/>
      <figcaption className="flex flex-col justify-between p-5 gap-5">
        <div className="flex gap-3">
          <Link href={`/menu/${name}`}>
            <h5 className="capitalize font-bold text-main hover:text-main-200">{name}</h5>
          </Link>
          <h6 className="font-semibold text-gray-600 self-start text-lg">&#8358;<span>{price}</span></h6>
        </div>
        <button className="inline-flex items-center justify-center gap-2 bg-main text-white py-2 px-3 rounded-3xl hover:bg-main-200 text-lg md:text-sm self-end w-full md:w-auto">
          <span className="bi bi-basket"></span> Add to basket
        </button>
      </figcaption>
    </figure>
  )
}

export default MenuItem
