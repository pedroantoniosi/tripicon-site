"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import plans from "@/api/plans";
import tours from "@/api/tours";
import type { Tour } from "@/types/tour";

import Button from "@/components/Button";
import Container from "@/components/Container";

export default function TourDetails() {
  const params = useParams();

  /*
   * Pega o slug diretamente da URL.
   *
   * Exemplo:
   * /tours/paris-romantic-escape
   *
   * params.slug === "paris-romantic-escape"
   */
  const slug = params.slug;

  /*
   * Encontra a tour correspondente na API.
   */
  const tour = tours.find((item) => item.slug === slug);

  /*
   * Enquanto a tour não for encontrada,
   * não tenta acessar tour.plans.
   */
  if (!tour) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Tour não encontrada</h1>

          <p className="mt-2 text-neutral-500">
            O destino solicitado não existe.
          </p>
        </div>
      </main>
    );
  }

  return <TourContent tour={tour} />;
}

interface TourContentProps {
  tour: Tour;
}

function TourContent({ tour }: TourContentProps) {
  const router = useRouter();

  /*
   * Primeiro plano disponível nessa tour.
   */
  const [selectedPlan, setSelectedPlan] = useState(tour.plans[0].plan);

  /*
   * Primeira duração do primeiro plano.
   */
  const [selectedDuration, setSelectedDuration] = useState<number>(
    tour.plans[0].options[0].duration,
  );

  /*
   * Plano da TOUR atualmente selecionado.
   */
  const currentTourPlan = useMemo(() => {
    return tour.plans.find((item) => item.plan === selectedPlan);
  }, [tour.plans, selectedPlan]);

  /*
   * Informações gerais do plano na API global.
   */
  const currentPlan = useMemo(() => {
    return plans.find((item) => item.slug === selectedPlan);
  }, [selectedPlan]);

  /*
   * Preço correspondente à duração selecionada.
   */
  const currentPrice = useMemo(() => {
    return currentTourPlan?.options.find(
      (item) => item.duration === selectedDuration,
    );
  }, [currentTourPlan, selectedDuration]);

  /*
   * Proteção contra dados incompletos.
   */
  if (!currentTourPlan || !currentPlan || !currentPrice) {
    return null;
  }

  /*
   * Troca o plano.
   *
   * A duração também é resetada para a primeira
   * duração disponível no novo plano.
   */
  function handlePlanChange(plan: typeof selectedPlan) {
    const newTourPlan = tour.plans.find((item) => item.plan === plan);

    if (!newTourPlan) {
      return;
    }

    setSelectedPlan(plan);

    setSelectedDuration(newTourPlan.options[0].duration);
  }

  /*
   * Troca a duração.
   */
  function handleDurationChange(duration: number) {
    setSelectedDuration(duration);
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative flex h-[350px] items-end md:h-[500px]">
        <Image
          src={tour.imageLandscape}
          alt={tour.name}
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40" />

        <Container className="relative z-10">
          <div className="p-8 text-white">
            <p className="text-lg">
              {tour.location.city}, {tour.location.country}
            </p>

            <h1 className="mt-2 text-5xl font-bold">{tour.name}</h1>
          </div>
        </Container>
      </section>

      <Container className="flex flex-col gap-6 py-12 lg:flex-row">
        {/* CONTEÚDO */}
        <div className="flex-1 flex flex-col gap-8">
          {/* HEADER */}
          <div className="flex flex-col flex-wrap gap-6 text-sm">
            <div className="flex">
              <div>
                <span className="font-semibold">⭐ Avaliação</span>

                <p>{tour.rating}/5</p>
              </div>

              <div>
                <span className="font-semibold">🌎 Destino</span>
                <p>{tour.location.city}</p>
              </div>
            </div>

            {/* DESCRIÇÃO */}
            <section>
              <h2 className="py-2 text-3xl font-semibold">Sobre a viagem</h2>

              <p className="leading-8 text-neutral-700">{tour.description}</p>
            </section>
          </div>

          {/* PLANOS */}
          <section className="my-2">
            <h2 className="py-2 text-3xl font-semibold">Escolha seu plano</h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tour.plans.map((tourPlan) => {
                const planInfo = plans.find(
                  (item) => item.slug === tourPlan.plan,
                );

                if (!planInfo) {
                  return null;
                }

                const isSelected = selectedPlan === tourPlan.plan;

                return (
                  <button
                    key={tourPlan.plan}
                    type="button"
                    onClick={() => handlePlanChange(tourPlan.plan)}
                    className={`rounded-2xl border p-5 text-left transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5 ring-2 ring-primary"
                        : "border-neutral-200 hover:border-primary"
                    }`}
                  >
                    <span className="block text-lg font-semibold">
                      {planInfo.name}
                    </span>

                    <span className="block text-sm text-neutral-500">
                      A partir de R${" "}
                      {tourPlan.options[0].price.toLocaleString("pt-BR")}
                    </span>

                    <span className="block text-xs text-neutral-400">
                      {tourPlan.options.length} opções de duração
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* PLANO SELECIONADO */}
          <section className="my-2 ">
            <div className=" flex items-center gap-3">
              <h2 className="py-2 text-3xl font-semibold">
                {currentPlan.name}
              </h2>

              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Selecionado
              </span>
            </div>

            <p className="leading-8 text-neutral-700 mb-4">
              {currentPlan.description}
            </p>

            {/* FEATURES */}
            <div className=" flex flex-col gap-4  ">
              <h3 className="text-xl font-semibold">O que está incluso</h3>

              <ul className="space-y-3">
                {currentPlan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="font-semibold text-primary">✓</span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* DURAÇÕES */}
          <section className="">
            <h2 className="mb-4 text-3xl font-semibold">Escolha a duração</h2>

            <div className="flex flex-wrap gap-3">
              {currentTourPlan.options.map((option) => {
                const isSelected = selectedDuration === option.duration;

                return (
                  <button
                    key={option.duration}
                    type="button"
                    onClick={() => handleDurationChange(option.duration)}
                    className={`rounded-xl border px-5 py-3 transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5 ring-2 ring-primary"
                        : "border-neutral-200 hover:border-primary"
                    }`}
                  >
                    <span className="font-semibold">
                      {option.duration} dias
                    </span>

                    <span className="ml-3 text-neutral-500">
                      R$ {option.price.toLocaleString("pt-BR")}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* DESTAQUES */}
          <section className="my-2">
            <h2 className="mb-4 text-3xl font-semibold">Destaques</h2>

            <ul className="space-y-3">
              {tour.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span>✔</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* CARD */}
        <aside className="w-full lg:w-[380px]">
          <div className="sticky top-8 rounded-3xl border border-neutral-200 p-6 shadow-sm">
            <p className="text-sm text-neutral-500">Plano selecionado</p>

            <h3 className="mt-1 text-2xl font-semibold">{currentPlan.name}</h3>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Duração</span>

                <span className="font-medium">
                  {currentPrice.duration} dias
                </span>
              </div>

              <div className="flex justify-between">
                <span>Destino</span>

                <span>{tour.location.city}</span>
              </div>
            </div>

            <div className="mt-8 border-t pt-6">
              <p className="text-sm text-neutral-500">Valor da viagem</p>

              <h4 className="text-4xl font-bold text-black">
                R$ {currentPrice.price.toLocaleString("pt-BR")}
              </h4>
            </div>

            <Button
              className="mt-6 w-full py-4"
              onClick={() => {
                console.log("Clicou");
                router.push(
                  `/checkout?tour=${tour.slug}&plan=${selectedPlan}&duration=${selectedDuration}`,
                );
              }}
            >
              Reservar Agora
            </Button>
          </div>
        </aside>
      </Container>
    </main>
  );
}
