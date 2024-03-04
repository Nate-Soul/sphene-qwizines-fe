import Image from "next/image";
import Link from "next/link";

const SpecialsCard = ({ special }) => {
  return (
    <div className="special-card flex flex-col gap-y-4">
      <div className="flex flex-col gap-2 items-center justify-between">
        <Image src={special.image} className="w-28 h-28 object-cover rounded-full" width="120" height="120" alt={special.name}/>
        <div className="flex flex-col gap-2 text-center">
          <Link href={`/menu/${special.slug}`}>
            <h5 className="font-semibold text-main hover:text-main-200">{special.name}</h5>
          </Link>
            <p className="text-sm font-light">{special.description}</p>
        </div>
      </div>
      <div className="flex gap-3 justify-between items-center">
            <p className="font-bold">&#8358;{special.price}</p>
          <button 
            className="inline-flex gap-2 bg-transparent text-main py-2 px-3 border border-main ring-2 ring-transparent rounded-3xl hover:border-transparent hover:bg-main-200 hover:text-white focus:ring-main ring-opacity-10">
            <span className="bi bi-basket"></span>
            Order Now
          </button>
      </div>
    </div>
  )
}

export default SpecialsCard
