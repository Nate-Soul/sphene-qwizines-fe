import Image from "next/image";

const RestaurantCard = ( { restaurant } ) => {
  return (
    <figure className="shadow-sm overflow-hidden rounded-lg flex flex-col gap-y-3 border border-[#a9a9a9]">
        <Image 
            src={restaurant.imageUrl} 
            alt={restaurant.name} 
            height={231} 
            width={411} 
            className="w-full h-56 object-cover"
        />
        <figcaption className="flex flex-col justify-between gap-y-2 p-[0.625rem]">
            <div className="flex flex-col gap-y-1">
                <h6 className="font-bold">{restaurant.name}</h6>
                <p>{restaurant.location}</p>
            </div>
            <p>Opens from {restaurant.businessHours}</p>
        </figcaption>
    </figure>
  )
}

export default RestaurantCard
