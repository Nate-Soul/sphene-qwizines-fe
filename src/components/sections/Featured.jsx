import Link from "next/link";
import MenuItem from "../subcomponents/MenuItem";

import { menuItems as features } from "@/data/menus";

const Featured = () => {
  
  return (
    <section className="py-8">
      <div className="container">
        <div className="section-heading">
            <h3 className="section-heading-title">Our Top Rated Menu</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            features && features.filter(feature => feature.featured === true).splice(0, 8).map((feature, index) => (
              <MenuItem key={index} menu={feature}/>
            ))
          }
        </div>
        <div className="flex justify-end mt-5">
          <Link href="/menu" className="text-main underline hover:text-main-300">View all</Link>
        </div>
      </div>      
    </section>
  )
}

export default Featured
