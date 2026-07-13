import Slider from "../Slider";
import Testimonials from "@/api/testimonals";

export default function testimonials() {
  return (
    <Slider>
      {Testimonials.map((item) => (
        <div key={item.id} className="flex flex-col gap-4 min-h-[500px] p-2">
          {/* Rating */}
          <div className="flex items-center gap-4">
            <span className="font-bold text-xl">{item.rating.toFixed(1)}</span>
            <div className="relative w-fit ">
              {/* Camada cinza */}
              <div className="flex text-neutral-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
              </div>
              {/* Camada amarela */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  width: `${(item.rating / 5) * 100}%`,
                }}
              >
                <div className="flex text-yellow-400 w-max gap-1">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Trip Location */}
          <div>
            <span className="text-2xl font-semibold">{item.trip}</span>
          </div>
          {/* Images */}
          <div className="flex flex-row gap-2">
            {item.images.map((image, index) => (
              <div
                key={index}
                className="w-50 h-[300px] rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${item.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Text */}
          <div>
            <h2 className="text-black font-normal text-md">
              {`"${item.text}"`}
            </h2>
          </div>

          {/* Info */}
          <div className="flex flex-row">
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-semibold text-xl">{item.name}</h2>

              <div className="flex flex-row gap-2">
                <i className="bi bi-square-fill"></i>
                <span>{item.rating}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
