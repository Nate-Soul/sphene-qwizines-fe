import ChefCard from "../subcomponents/ChefCard";
import { chefs } from "@/data/chefs";

const Cooks = () => {

  return (
    <section className="py-16">
      <div className="container">
        <header className="section-heading">
          <h3 className="section-heading-title">Meet Our Super Chefs</h3>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-4 gap-16">
          {
            chefs && chefs.map((chef, chefIndex) => (
              <ChefCard chef={chef} key={chefIndex}/>
            ))
          }
        </div>
      </div>      
    </section>
  )
}

export default Cooks
