import tours from "@/api/tours";

import ExploreHero from "@/components/explore/ExploreHero";
import ExploreClient from "@/components/explore/ExploreContent";

export default function ExplorePage() {
  return (
    <main className="bg-neutral-50 min-h-screen">
      <ExploreHero />
      <ExploreClient tours={tours} />
    </main>
  );
}
