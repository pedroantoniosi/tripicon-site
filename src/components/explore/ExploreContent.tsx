"use client";

import { useMemo, useState } from "react";

import ExploreFilters from "./ExploreFilters";
import TourLayout from "./TourLayout";

interface Tour {
  id: number;
  name: string;
  slug: string;
  city: string;
  country: string;
  description: string;
  price: number;
  duration: string;
  rating: number;
  maxPeople: number;
  language: string;
  image: string;
  featured: boolean;
  plans: string[];
  includes: string[];
  highlights: string[];
}

interface ExploreClientProps {
  tours: Tour[];
}

export default function ExploreClient({ tours }: ExploreClientProps) {
  const [search, setSearch] = useState("");

  const [selectedPlan, setSelectedPlan] = useState("all");

  const [minPrice, setMinPrice] = useState("");

  const [maxPrice, setMaxPrice] = useState("");

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const searchMatch =
        tour.name.toLowerCase().includes(search.toLowerCase()) ||
        tour.city.toLowerCase().includes(search.toLowerCase()) ||
        tour.country.toLowerCase().includes(search.toLowerCase());

      const planMatch =
        selectedPlan === "all" ? true : tour.plans.includes(selectedPlan);

      const minimum = minPrice === "" ? true : tour.price >= Number(minPrice);

      const maximum = maxPrice === "" ? true : tour.price <= Number(maxPrice);

      return searchMatch && planMatch && minimum && maximum;
    });
  }, [tours, search, selectedPlan, minPrice, maxPrice]);

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
        totalResults={filteredTours.length}
      />

      <TourLayout tours={filteredTours} />
    </>
  );
}
