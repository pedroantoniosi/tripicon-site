/* eslint-disable @next/next/no-img-element */

export default function ExploreHero() {
  return (
    <section className="relative h-100">
      <img
        src="assets/img/explore/explore.jfif"
        alt="Explore"
        className="object-cover w-full h-full"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <span className="uppercase  text-primary font-semibold">
            TripIcon
          </span>

          <h1 className="text-5xl md:text-7xl font-bold">Explore</h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-200">
            Descubra destinos incríveis e encontre a viagem perfeita para sua
            próxima aventura.
          </p>
        </div>
      </div>
    </section>
  );
}
