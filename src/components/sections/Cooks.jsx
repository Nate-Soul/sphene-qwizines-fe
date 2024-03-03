import ChefCard from "../subcomponents/ChefCard";

const Cooks = () => {

  const chefs = [
    {
      id: 1,
      imageUrl: "/media/images/chefs/josephine-cooker.webp",
      name: "Adaeze Coker",
      jobTitle: "Head of Kitchen"
    },
    {
      id: 2,
      imageUrl: "/media/images/chefs/john-okere.webp",
      name: "Adewale Praise",
      jobTitle: "Quality Assurance Chef"
    },
    {
      id: 3,
      imageUrl: "/media/images/chefs/bella-ford.webp",
      name: "Gregoria Uwem",
      jobTitle: "Kitchen Assistant"
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <div className="section-heading">
          <h3 className="section-heading-title">Meet Our Super Chefs</h3>
        </div>
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
