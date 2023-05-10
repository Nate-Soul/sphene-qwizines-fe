import Image from "next/image";
import Cook1 from "../media/images/chef/african_american_chef.png";
import Cook2 from "../media/images/chef/male_chef.png";
import Cook3 from "../media/images/chef/young_woman_chef.png";


const Cooks = () => {

  const chefs = [
    {
      id: 1,
      imageUrl: Cook1
    },
    {
      id: 2,
      imageUrl: Cook2
    },
    {
      id: 3,
      imageUrl: Cook3
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <div className="section-heading">
          <h3 className="section-heading-title">Meet Our Qualified Chefs</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-4 gap-16">
          {
            chefs && chefs.map(chef => (
              <picture className="rounded-xl shadow bg-main-200 bg-opacity-70 h-96 flex flex-col items-end justify-center row-span-4 md:odd:row-start-1 md:even:row-start-2" key={chef.id}>
                <Image src={chef.imageUrl} className="object-cover w-full h-full" alt="chef&#39;s name"/>
              </picture>
            ))
          }
        </div>
      </div>      
    </section>
  )
}

export default Cooks
