import Image from "next/image";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <figure className="flex items-center gap-x-3">
        <Image 
            src={testimonial.imageUrl} 
            className="w-20 h-20 object-cover rounded-full" 
            alt={testimonial.name}
            width={90}
            height={90}
        />
        <figcaption className="flex flex-col gap-y-1">
          <h5 className="font-semibold">{testimonial.name}</h5>
          <p className="text-gray-500 font-light">{testimonial.handle}</p>
          <div className="ratings flex gap-2 justify-center items-center text-main-700">
            <span className="bi bi-star-fill"></span>
            <span className="bi bi-star-fill"></span>
            <span className="bi bi-star-fill"></span>
            <span className="bi bi-star-fill"></span>
            <span className="bi bi-star-fill"></span>
          </div>
        </figcaption>
      </figure>
      <p className="text-center text-sm">
        {testimonial.comment}
      </p>
    </div>
  )
}

export default TestimonialCard
