"use client";

import styles from "./plans.module.css";

import { useState } from "react";
import plans from "@/api/plans";

export default function TravelPlans() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [expandedDescription, setExpandedDescription] = useState(false);

  return (
    <section className="plansContainer">
      <h2 className="text-2xl font-bold mb-4">Planos de Viagens</h2>

      <div className="flex flex-row gap-4 mb-4">
        {plans.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedPlan(item)}
            className={`transition-colors ${
              selectedPlan.id === item.id ? "text-primary" : "text-white"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div
        className={`${styles.plansContent}  flex flex-col justify-end gap-4 rounded-lg p-4 rounded-xl overflow-hidden`}
      >
        <div className={`${styles.glassCard} flex flex-col gap-4`}>
          <div className="flex flex-row justify-between items-center gap-2 border-b-2 py-4 border-neutral-300">
            <h2 className="text-xl font-semibold">{selectedPlan.name}</h2>
            <span>{selectedPlan.duration}</span>
          </div>

          <div
            className={`flex flex-col gap-2 overflow-hidden ${
              expandedDescription ? "h-auto" : "h-[180px]"
            }`}
          >
            <div className="flex flex-row gap-2">
              <i className="bi bi-info-circle-fill"></i>
              <p>Descrição:</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li>{selectedPlan.description}</li>
              {selectedPlan.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
            <span>{}</span>
          </div>

          <div className="flex justify-end items-center">
            <button
              onClick={() => setExpandedDescription(!expandedDescription)}
            >
              {expandedDescription ? "Ler menos" : "Ler mais"}
            </button>
          </div>

          <button className="bg-primary rounded-full py-1">Ver Lugares</button>
        </div>
      </div>
    </section>
  );
}
