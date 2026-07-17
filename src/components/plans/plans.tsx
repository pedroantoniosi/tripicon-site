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
    <div className="relative w-full h-[600px] p-4">
      <Image
        src={plan.img}
        alt={plan.name}
        fill
        className="object-cover rounded-lg"
      />

      <div className="absolute bottom-0 left-0 w-full p-4">
        <div className={styles.glassCard}>
          <div className="flex items-center justify-between gap-2 border-b-2 border-neutral-300 py-4">
            <h2 className="text-xl font-semibold text-white">{plan.name}</h2>

            <span className="text-white">{plan.duration}</span>
          </div>

          <div
            className={`flex flex-col gap-2 overflow-hidden ${
              expandedDescription ? "h-auto" : "h-[180px]"
            }`}
          >
            <div className="flex items-center gap-2 text-neutral-300">
              <i className="bi bi-info-circle-fill"></i>
              <p>Descrição:</p>
            </div>

            <ul className="flex flex-col gap-2">
              <li className="text-neutral-300">{plan.description}</li>

              {plan.features.map((feature, index) => (
                <li key={index} className="text-neutral-300">
                  ✓ {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end items-center mt-2">
            <button
              className="text-white"
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
            <Button className="w-full">Ver Lugares</Button>
          </Link>
        </div>
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
