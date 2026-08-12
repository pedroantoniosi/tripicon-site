import Image from "next/image";
import Link from "next/link";

import type { Tour } from "@/types/tour";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const startingPrice = tour.plans[0].options[0];

  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-semibold">
          ⭐ {tour.rating}
        </div>

        {tour.featured && (
          <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase text-white">
            Destaque
          </div>
        )}
      </div>

      <div className="p-6">
        <p className="text-sm text-neutral-500">
          {tour.location.city}, {tour.location.country}
        </p>

        <h3 className="mt-2 text-2xl font-bold transition-colors group-hover:text-primary">
          {tour.name}
        </h3>

        <p className="mt-4 line-clamp-3 text-neutral-600">{tour.description}</p>

        <div className="mt-8 flex justify-between text-sm text-neutral-500">
          <span>🕒 {startingPrice.duration} dias</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tour.plans.map((plan) => (
            <span
              key={plan.plan}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs capitalize"
            >
              {plan.plan}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-end justify-between border-t pt-6">
          <div>
            <p className="text-sm text-neutral-500">A partir de</p>

            <h4 className="text-3xl font-bold text-black">
              R$ {startingPrice.price}
            </h4>
          </div>

          <span className="font-semibold transition-transform group-hover:translate-x-1">
            Ver Tour →
          </span>
        </div>
      </div>
    </Link>
  );
}
