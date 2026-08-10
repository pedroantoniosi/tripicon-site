"use client";

import Container from "../Container";

interface ExploreFiltersProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;

  minPrice: string;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;

  maxPrice: string;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;

  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;

  totalResults: number;
}

export default function ExploreFilters({
  search,
  setSearch,
  selectedPlan,
  setSelectedPlan,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  sortOrder,
  setSortOrder,
  totalResults,
}: ExploreFiltersProps) {
  return (
    <section>
      <div>
        <h1>Explore nossos destinos</h1>

        <p className="mt-2 text-neutral-500">
          {totalResults} viagens encontradas
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <input
          type="text"
          placeholder="Pesquisar destino..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-xl border px-5 py-3 outline-none focus:border-primary"
        />
        <div className="flex gap-4">
          <select
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
            className="rounded-xl border px-4 py-3"
          >
            <option value="all">Planos</option>
            <option value="basic">Básico</option>
            <option value="family">Família</option>
            <option value="premium">Premium</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="rounded-xl border px-4 py-3"
          >
            <option value="default">Ordenar por</option>
            <option value="price-asc">Menor preço</option>
            <option value="price-desc">Maior preço</option>
          </select>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Preço mínimo"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="flex-1 rounded-xl border px-4 py-3"
            />
            <input
              type="number"
              placeholder="Preço máximo"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="flex-1 rounded-xl border px-4 py-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
