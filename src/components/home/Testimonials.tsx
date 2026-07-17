import Testimonial from "@/api/testimonals";

interface Testimonial {
  id: number;
  name: string;
  trip: string;
  rating: number;
  text: string;
  images: string[];
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex flex-col gap-4">
      {/* Rating */}
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold">
          {testimonial.rating.toFixed(1)}
        </span>

        <div className="relative w-fit">
          {/* Camada cinza */}
          <div className="flex gap-1 text-neutral-500">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="bi bi-star-fill" />
            ))}
          </div>

          {/* Camada amarela */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              width: `${(testimonial.rating / 5) * 100}%`,
            }}
          >
            <div className="flex w-max gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="bi bi-star-fill" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trip */}
      <h3 className="text-2xl font-semibold">{testimonial.trip}</h3>

      {/* Images */}
      <div className="flex gap-2">
        {testimonial.images.map((image, index) => (
          <div
            key={index}
            className="w-50 h-[300px] overflow-hidden rounded-lg"
          >
            <div className="relative">
              <img
                src={image}
                alt={`${testimonial.name} ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Text */}
      <p>{`"${testimonial.text}"`}</p>

      {/* Info */}
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-semibold">{testimonial.name}</h4>
      </div>
    </article>
  );
}
