import type { Tour } from "@/types/tour";

import TourCard from "./TourCard";

interface TourLayoutProps {
  tours: readonly Tour[];
}

export default function TourLayout({ tours }: TourLayoutProps) {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </section>
  );
}
