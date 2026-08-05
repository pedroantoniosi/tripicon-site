"use client";

import styles from "./plans.module.css";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import plans from "@/api/plans";
import Button from "../Button";
import PlansFilters from "./PlansFilters";

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  const [expandedDescription, setExpandedDescription] = useState(false);

  return (
    <div className=" w-full p-4 bg-white rounded-xl border-2 shadow-lg border-zinc-200">
      <div className="relative h-100 w-full">
        <Image
          src={plan.img}
          alt={plan.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className=" bottom-0 left-0 w-full p-4 ">
        <div className="flex items-center justify-between gap-2 border-b-2 border-neutral-300 py-4">
          <h2 className="text-xl font-bold text-black">{plan.name}</h2>

          <span className="text-black">{plan.duration}</span>
        </div>

        <div
          className={`flex flex-col gap-2 overflow-hidden ${
            expandedDescription ? "h-auto" : "h-[180px]"
          }`}
        >
          <div className="flex items-center gap-2 text-neutral-800">
            <p className="font-semibold">Detalhes:</p>
          </div>

          <ul className="flex flex-col gap-2">
            <li className="text-neutral-800">{plan.description}</li>

            {plan.features.map((feature, index) => (
              <li key={index} className="text-neutral-800">
                ✓ {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end items-center mt-2">
          <button
            className="text-black"
            onClick={() => setExpandedDescription(!expandedDescription)}
          >
            {expandedDescription ? "Ler menos" : "Ler mais"}
          </button>
        </div>

        <Link
          href={`/explore/${plan.slug}`}
          aria-label={`Ver lugares do ${plan.name}`}
          className="block mt-4"
        >
          <Button className="w-full" variant="secondary">
            Ver Lugares
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function TravelPlans() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  function handleSelectPlan(id: number) {
    const plan = plans.find((plan) => plan.id === id);

    if (!plan) return;

    setSelectedPlan(plan);
  }

  return (
    <div className="flex flex-col ">
      {/* Mobile */}
      <div className="md:hidden">
        <PlansFilters
          selectedPlanId={selectedPlan.id}
          onSelectPlan={handleSelectPlan}
        />

        <PlanCard plan={selectedPlan} />
      </div>

      {/* Desktop */}
      <div className="max-md:hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}
