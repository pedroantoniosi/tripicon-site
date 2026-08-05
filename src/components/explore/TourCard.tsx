import Image from "next/image";
import Link from "next/link";

interface TourCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tour: any;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold">
          ⭐ {tour.rating}
        </div>

        {tour.featured && (
          <div className="absolute top-4 left-4 bg-primary text-white rounded-full px-3 py-1 text-xs font-semibold uppercase">
            Destaque
          </div>
        )}
      </div>

      <div className="p-6">
        <p className="text-sm text-neutral-500">
          {tour.city}, {tour.country}
        </p>

        <h3 className="text-2xl font-bold mt-2 group-hover:text-primary transition-colors">
          {tour.name}
        </h3>

        <p className="mt-4 text-neutral-600 line-clamp-3">{tour.description}</p>

        <div className="flex justify-between mt-8 text-sm text-neutral-500">
          <span>🕒 {tour.duration}</span>

          <span>👥 {tour.maxPeople}</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {tour.plans.map((plan: string) => (
            <span
              key={plan}
              className="bg-neutral-100 rounded-full px-3 py-1 text-xs capitalize"
            >
              {plan}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-end mt-8 pt-6 border-t">
          <div>
            <p className="text-sm text-neutral-500">A partir de</p>

            <h4 className="text-3xl font-bold text-black">R$ {tour.price}</h4>
          </div>

          <span className="font-semibold group-hover:translate-x-1 transition-transform">
            Ver Tour →
          </span>
        </div>
      </div>
    </Link>
  );
}
