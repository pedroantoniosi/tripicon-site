"use client";

import styles from "./plans.module.css";

import Image from "next/image";
import Link from "next/link";
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
            onClick={() => {
              setSelectedPlan(item);
              setExpandedDescription(false);
            }}
            className={`transition-colors bg-neutral-200 px-3 py-2 rounded-full text-sm font-medium ${
              selectedPlan.id === item.id
                ? "bg-neutral-400 text-white"
                : "text-black"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="relative flex-1 w-full p-4">
        <Image
          src={selectedPlan.img}
          alt={selectedPlan.name}
          fill
          className="object-cover rounded-lg"
        />

        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className={styles.glassCard}>
            <div className="flex items-center justify-between gap-2 border-b-2 border-neutral-300 py-4">
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
              <div className="flex items-center gap-2 text-neutral-300">
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
              href={`/explore/${selectedPlan.slug}`}
              aria-label={`Ver lugares do ${selectedPlan.name}`}
              className="block mt-4"
            >
              <Button className="w-full">Ver Lugares</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
