import Image from "next/image"


const AdvertSpace = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="w-full h-60 bg-main-700 text-white rounded-lg shadow flex gap-4 items-center justify-center xl:justify-between">
            <Image 
                src="/media/images/gallery/hero-3.png" 
                alt="cooking arena" 
                height={366} 
                width={366}
                className="hidden sm:block"
            />
            <div className="text-center flex flex-col items-center gap-y-3 px-3">
                <h5 className="text-2xl xl:text-3xl">Advert Space</h5>
                <p className="text-sm">Get your favourite meals on our store for half the price</p>
                <button className="border rounded-3xl py-2 px-3 w-max hover:border-transparent hover:bg-main">
                    Grab Space
                </button>
            </div>
            <Image 
                src="/media/images/gallery/spice-disarray.png" 
                alt="cooking arena" 
                height={366} 
                width={366} 
                className="-rotate-[13.74deg] hidden xl:block"
            />
        </div>
      </div>
    </div>
  )
}

export default AdvertSpace
