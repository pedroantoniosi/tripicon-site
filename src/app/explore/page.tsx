import tours from "@/api/tours";

import ExploreHero from "@/components/explore/ExploreHero";
import ExploreClient from "@/components/explore/ExploreClient";
import Container from "@/components/Container";

export default function ExplorePage() {
  return (
    <main className="min-h-screen">
      <ExploreHero />
      <div className="mx-auto max-w-7xl px-6 py-10">
        <ExploreClient tours={tours} />
      </div>
    </main>
  );
}
