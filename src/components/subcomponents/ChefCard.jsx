import Image from "next/image";

const ChefCard = ({ chef }) => {
  return (
    <figure 
      className="rounded-lg p-3 shadow-lg bg-white bg-opacity-70 h-96 flex flex-col justify-center row-span-4 md:odd:row-start-1 md:even:row-start-2"
    >
      <Image src={chef.imageUrl} className="object-cover w-full h-full" width={400} height={400} alt={chef.name}/>
      <figcaption className="flex flex-col gap-1 pt-3">
        <h6 className="font-bold">{chef.name}</h6>
        <p className="text-sm font-light">{chef.jobTitle}</p>
      </figcaption>
    </figure>
  )
}

export default ChefCard
