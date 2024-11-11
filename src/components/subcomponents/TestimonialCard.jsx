import Image from "next/image";

const TestimonialCard = ({ testimonial }) => {
  return (
    <figure className="testimonial-card flex-none">
        <Image 
            src={testimonial.imageUrl} 
            className="w-28 h-28 object-cover rounded-full block mx-auto" 
            alt="person's name"
            width={150}
            height={150}
        />
        <figcaption className="flex flex-col gap-5">
            <p>
            {testimonial.comment}
            </p>
            <div className="flex flex-col gap-1">
              <h5 className="font-semibold">{testimonial.name}</h5>
              <p className="text-gray-500 font-light">{testimonial.handle}</p>
              <div className="ratings flex gap-2 justify-center items-center text-main-500">
                <span className="bi bi-star-fill"></span>
                <span className="bi bi-star-fill"></span>
                <span className="bi bi-star-fill"></span>
                <span className="bi bi-star-fill"></span>
                <span className="bi bi-star-fill"></span>
              </div>
            </div>
        </figcaption>
    </figure>
  )
}

export default TestimonialCard
