import Image from "next/image";
import Link from "next/link";

const SpecialsCard = ({ special }) => {
  return (
    <div className="special-card flex-none flex flex-col sm:flex-row items-center gap-y-3 sm:gap-y-0 gap-x-0 sm:gap-x-3 w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5">
        <div className="flex-none w-full sm:w-2/5 h-[172px] rounded overflow-hidden">
          <Image src={special.image} className="w-full h-full object-cover" width="179" height="172" alt={special.name}/>
        </div>
        <div className="col-span-4 flex flex-col gap-y-4">
          <div className="flex flex-col gap-2">
            <Link href={`/menu/${special.slug}`}>
              <h5 className="font-semibold text-main-600 hover:text-main-800">{special.name}</h5>
            </Link>
            <p className="text-sm font-light">{special.description}</p>
          </div>
          <div className="flex flex-col xs:flex-row gap-3 justify-between items-center">
                <p className="font-bold">&#8358;{special.price}</p>
              <button 
                className="inline-flex gap-2 bg-transparent text-main-600 py-2 px-3 border border-main-600 ring-2 ring-transparent rounded-3xl hover:border-main-700 hover:text-main-700 focus:ring-main-700 ring-opacity-10">
                <span className="bi bi-basket"></span>
                Order Now
              </button>
          </div>
        </div>
    </div>
  )
}

export default SpecialsCard
