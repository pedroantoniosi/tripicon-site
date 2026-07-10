"use client";

import styles from "./plans.module.css";
import Image from "next/image";
import { useState } from "react";
import plans from "@/api/plans";
import Button from "../Button";

export default function TravelPlans() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [expandedDescription, setExpandedDescription] = useState(false);

  return (
    <section className="flex flex-col min-h-[90svh]">
      <h2 className="text-2xl font-bold mb-2">Planos de Viagens</h2>
      <div className="flex flex-row gap-4 py-4">
        {plans.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedPlan(item)}
            className={`text-sm transition-colors bg-neutral-200 px-2 py-05 text-sm rounded-full font-medium ${
              selectedPlan.id === item.id
                ? "text-white bg-neutral-400"
                : "text-black"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="flex-1 relative flex-col w-full p-4">
        <Image
          src={selectedPlan.img}
          alt="Plano"
          fill
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="flex-1 absolute bottom-0 left-0 w-full p-4">
          <div className={`${styles.glassCard}`}>
            <div className="flex flex-row justify-between items-center gap-2 border-b-2 py-4 border-neutral-300">
              <h2 className="text-xl font-semibold text-white">
                {selectedPlan.name}
              </h2>
              <span className="text-white">{selectedPlan.duration}</span>
            </div>

            <div
              className={`flex flex-col gap-2 overflow-hidden ${
                expandedDescription ? "h-auto" : "h-[180px]"
              }`}
            >
              <div className="flex flex-row gap-2 text-neutral-300">
                <i className="bi bi-info-circle-fill"></i>
                <p>Descrição:</p>
              </div>
              <ul className="flex flex-col gap-2">
                <li className="text-neutral-300">{selectedPlan.description}</li>
                {selectedPlan.features.map((feature, index) => (
                  <li key={index} className="text-neutral-300">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <span>{}</span>
            </div>

            <div className="flex justify-end items-center">
              <button
                className="text-white"
                onClick={() => setExpandedDescription(!expandedDescription)}
              >
                {expandedDescription ? "Ler menos" : "Ler mais"}
              </button>
            </div>

            <Button className="">Ver Lugares</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
