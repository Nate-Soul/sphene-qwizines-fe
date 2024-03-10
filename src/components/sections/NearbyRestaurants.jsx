import RestaurantCard from "../subcomponents/RestaurantCard";
import { restaurants } from "@/data/restaurants";

const NearbyRestaurants = () => {
  return (
    <section className="py-16">
      <div className="container">
            <header className="section-heading">
                <h3 className="section-heading-title">Our Restaurants Near You</h3>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                restaurants && restaurants.map((restaurant, restaurantIndex) => (
                <RestaurantCard restaurant={restaurant} key={restaurantIndex}/>
                ))
            }
            </div>
      </div>
    </section>
  )
}

export default NearbyRestaurants
