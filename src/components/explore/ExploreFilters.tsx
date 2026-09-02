"use client";

interface ExploreFiltersProps {
  search: string;
  selectedPlan: string;
  minPrice: string;
  maxPrice: string;
  sortOrder: string;

  totalResults: number;

  onSearchChange: (value: string) => void;
  onPlanChange: (value: string) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export default function ExploreFilters({
  search,
  selectedPlan,
  minPrice,
  maxPrice,
  sortOrder,
  totalResults,
  onSearchChange,
  onPlanChange,
  onMinPriceChange,
  onMaxPriceChange,
  onSortChange,
}: ExploreFiltersProps) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Explore nossos destinos</h1>

        <p className="mt-2 text-neutral-500">
          {totalResults} viagens encontradas
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Pesquisar destino..."
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          className="rounded-xl border px-5 py-3 outline-none focus:border-primary "
        />

        <div className="flex gap-4">
          <select
            value={selectedPlan}
            onChange={(event) => onPlanChange(event.target.value)}
            className="rounded-xl border px-4 py-3"
          >
            <option value="all">Planos</option>
            <option value="basic">Básico</option>
            <option value="family">Família</option>
            <option value="premium">Premium</option>
          </select>

          <select
            value={sortOrder}
            onChange={(event) => onSortChange(event.target.value)}
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
              onChange={(event) => onMinPriceChange(event.target.value)}
              className="flex-1 rounded-xl border px-4 py-3"
            />

            <input
              type="number"
              placeholder="Preço máximo"
              value={maxPrice}
              onChange={(event) => onMaxPriceChange(event.target.value)}
              className="flex-1 rounded-xl border px-4 py-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
