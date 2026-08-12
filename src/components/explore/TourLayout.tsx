import type { Tour } from "@/types/tour";

import TourCard from "./TourCard";

interface TourLayoutProps {
  tours: readonly Tour[];
}

export default function TourLayout({ tours }: TourLayoutProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}
