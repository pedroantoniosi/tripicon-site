import TourCard from "./TourCard";

interface TourGridProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tours: any[];
}

export default function TourGrid({ tours }: TourGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}
