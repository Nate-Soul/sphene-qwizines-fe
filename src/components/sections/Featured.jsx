import Link from "next/link";
import MenuItem from "../subcomponents/MenuItem";

import { menuItems as features } from "@/data/menus";

const Featured = () => {
  
  return (
    <section className="py-8">
      <div className="container">
        <header className="section-heading">
            <h2 className="section-heading-title">Our Top Rated Menu</h2>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            features && features.filter(feature => feature.featured === true).splice(0, 8).map((feature, index) => (
              <MenuItem key={index} menu={feature}/>
            ))
          }
        </div>
        <div className="flex justify-center mt-8">
          <Link 
            href="/menu" 
            className="text-main border border-main py-2 px-3 rounded-3xl hover:text-white hover:bg-main-200"
          >
            View all
          </Link>
        </div>
      </div>      
    </section>
  )
}

export default Featured
