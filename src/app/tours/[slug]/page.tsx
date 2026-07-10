import { notFound } from "next/navigation";
import tours from "@/api/tours"; // ajuste o caminho conforme seu projeto
import Image from "next/image";
import Button from "@/components/Button";

interface TourPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;

  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[350px] md:h-[500px]">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-0 left-0 w-full p-8 text-white">
          <p className="text-lg">
            {tour.city}, {tour.country}
          </p>

          <h1 className="text-5xl font-bold mt-2">{tour.name}</h1>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="max-w-7xl mx-auto p-6 grid lg:grid-cols-[2fr_1fr] gap-10">
        {/* Informações */}
        <div>
          <div className="flex flex-wrap gap-6 mb-8 text-sm">
            <div>
              <span className="font-semibold">⭐ Avaliação</span>
              <p>{tour.rating}/5</p>
            </div>

            <div>
              <span className="font-semibold">🕒 Duração</span>
              <p>{tour.duration}</p>
            </div>

            <div>
              <span className="font-semibold">👥 Grupo</span>
              <p>Até {tour.maxPeople} pessoas</p>
            </div>

            <div>
              <span className="font-semibold">🌎 Idioma</span>
              <p>{tour.language}</p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-4">Sobre este tour</h2>

          <p className="text-neutral-700 leading-8">{tour.description}</p>

          <h2 className="text-3xl font-semibold mt-10 mb-4">Destaques</h2>

          <ul className="space-y-3">
            {tour.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span>✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-semibold mt-10 mb-4">
            O que está incluído
          </h2>

          <ul className="space-y-3">
            {tour.includes.map((item) => (
              <li key={item} className="flex gap-2">
                <span>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card de Reserva */}
        <aside className="sticky top-6 h-fit rounded-3xl shadow-lg border p-6">
          <h3 className="text-4xl font-bold text-primary">R$ {tour.price}</h3>

          <p className="text-neutral-500 mb-6">por pessoa</p>

          <Button className="w-full py-4 ">Reservar Agora</Button>

          <div className="mt-8 space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Duração</span>
              <span>{tour.duration}</span>
            </div>

            <div className="flex justify-between">
              <span>Idioma</span>
              <span>{tour.language}</span>
            </div>

            <div className="flex justify-between">
              <span>Grupo</span>
              <span>{tour.maxPeople} pessoas</span>
            </div>

            <div className="flex justify-between">
              <span>Avaliação</span>
              <span>⭐ {tour.rating}</span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
