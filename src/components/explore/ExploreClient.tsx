"use client";

import { useMemo, useState } from "react";

import type { Tour } from "@/types/tour";
import { filterTours } from "@/lib/tourFilters";

import ExploreFilters from "./ExploreFilters";
import ExplorePagination from "@/components/explore/ExplorePagination";
import TourLayout from "./TourLayout";

interface ExploreClientProps {
  tours: readonly Tour[];
}

const TOURS_PER_PAGE = 12;

export default function ExploreClient({ tours }: ExploreClientProps) {
  const [search, setSearch] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const [page, setPage] = useState(1);

  // Reseta a página quando a pesquisa muda
  function handleSearchChange(value: string) {
    setSearch(value);
    setPage(1);
  }

  // Reseta a página quando o plano muda
  function handlePlanChange(value: string) {
    setSelectedPlan(value);
    setPage(1);
  }

  // Reseta a página quando o preço mínimo muda
  function handleMinPriceChange(value: string) {
    setMinPrice(value);
    setPage(1);
  }

  // Reseta a página quando o preço máximo muda
  function handleMaxPriceChange(value: string) {
    setMaxPrice(value);
    setPage(1);
  }

  // Reseta a página quando a ordenação muda
  function handleSortChange(value: string) {
    setSortOrder(value);
    setPage(1);
  }

  // Aplica os filtros
  const filteredTours = useMemo(() => {
    return filterTours(tours, {
      search,
      plan: selectedPlan,
      minPrice,
      maxPrice,
      sortOrder,
    });
  }, [tours, search, selectedPlan, minPrice, maxPrice, sortOrder]);

  // Calcula o número de páginas
  const totalPages = Math.ceil(filteredTours.length / TOURS_PER_PAGE);

  // Calcula o índice inicial
  const startIndex = (page - 1) * TOURS_PER_PAGE;

  // Calcula o índice final
  const endIndex = startIndex + TOURS_PER_PAGE;

  // Obtém somente as tours da página atual
  const visibleTours = filteredTours.slice(startIndex, endIndex);

  console.log("PAGINAÇÃO", {
    page,
    totalTours: filteredTours.length,
    startIndex,
    endIndex,
    visibleTours: visibleTours.length,
    ids: visibleTours.map((tour) => tour.id),
  });

  return (
    <div>
      <ExploreFilters
        search={search}
        selectedPlan={selectedPlan}
        minPrice={minPrice}
        maxPrice={maxPrice}
        sortOrder={sortOrder}
        totalResults={filteredTours.length}
        onSearchChange={handleSearchChange}
        onPlanChange={handlePlanChange}
        onMinPriceChange={handleMinPriceChange}
        onMaxPriceChange={handleMaxPriceChange}
        onSortChange={handleSortChange}
      />

      {/* Tours da página atual */}
      <TourLayout tours={visibleTours} />

      {/* Paginação */}
      <div className="mx-auto overflow-hidden p-1">
        <ExplorePagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
