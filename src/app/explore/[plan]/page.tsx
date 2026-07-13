import { notFound } from "next/navigation";

import plans from "@/api/plans";
import tours from "@/api/tours";

import ExploreHero from "@/components/explore/ExploreHero";
import ExploreContent from "@/components/explore/ExploreContent";

interface ExplorePlanPageProps {
  params: Promise<{
    plan: string;
  }>;
}

export default async function ExplorePlanPage({
  params,
}: ExplorePlanPageProps) {
  const { plan } = await params;

  const selectedPlan = plans.find((item) => item.slug === plan);

  if (!selectedPlan) {
    notFound();
  }

  const filteredTours = tours.filter((tour) =>
    tour.plans.includes(selectedPlan.slug),
  );

  return (
    <main className="min-h-screen bg-neutral-50">
      <ExploreHero />

      <ExploreContent tours={filteredTours} />
    </main>
  );
}
