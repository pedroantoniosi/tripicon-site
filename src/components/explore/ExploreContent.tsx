"use client";

import { useMemo, useState } from "react";

import type { Tour } from "@/types/tour";

import ExploreFilters from "./ExploreFilters";
import TourLayout from "./TourLayout";

interface ExploreClientProps {
  tours: readonly Tour[];
}

export default function ExploreClient({ tours }: ExploreClientProps) {
  const [search, setSearch] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const filteredTours = useMemo(() => {
    const filtered = tours.filter((tour) => {
      const searchTerm = search.toLowerCase();

      const searchMatch =
        tour.name.toLowerCase().includes(searchTerm) ||
        tour.location.city.toLowerCase().includes(searchTerm) ||
        tour.location.country.toLowerCase().includes(searchTerm);

      const planMatch =
        selectedPlan === "all"
          ? true
          : tour.plans.some((plan) => plan.plan === selectedPlan);

      const minimum =
        minPrice === ""
          ? true
          : tour.plans.some((plan) =>
              plan.prices.some((price) => price.price >= Number(minPrice)),
            );

      const maximum =
        maxPrice === ""
          ? true
          : tour.plans.some((plan) =>
              plan.prices.some((price) => price.price <= Number(maxPrice)),
            );

      return searchMatch && planMatch && minimum && maximum;
    });

    return filtered.sort((a, b) => {
      const priceA = a.plans[0].prices[0].price;
      const priceB = b.plans[0].prices[0].price;

      if (sortOrder === "price-asc") {
        return priceA - priceB;
      }

      if (sortOrder === "price-desc") {
        return priceB - priceA;
      }

      return 0;
    });
  }, [tours, search, selectedPlan, minPrice, maxPrice, sortOrder]);

  return (
    <>
      <ExploreFilters
        search={search}
        setSearch={setSearch}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        totalResults={filteredTours.length}
      />

      <TourLayout tours={filteredTours} />
    </>
  );
}
