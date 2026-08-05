import { notFound } from "next/navigation";
import tours from "@/api/tours"; // ajuste o caminho conforme seu projeto
import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";

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
      <section className="relative flex items-end h-[350px] md:h-[500px] bg-green-500">
        <Image
          src={tour.imageLandscape}
          alt={tour.name}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <Container className="z-50">
          <div className="p-8 text-white">
            <p className="text-lg">
              {tour.city}, {tour.country}
            </p>
            <h1 className="text-5xl font-bold mt-2">{tour.name}</h1>
          </div>
        </Container>
      </section>

      <Container className="flex justify-between">
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

          <h2 className="text-3xl font-semibold mb-4">Detalhes:</h2>

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
            O que o pacote inclui:
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
        <aside className="w-100 flex flex-col gap-8">
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

          <h3 className="text-3xl font-semibold text-black">R$ {tour.price}</h3>

          <Button className="w-full py-4 ">Reservar Agora</Button>
        </aside>
      </Container>
    </main>
  );
}
