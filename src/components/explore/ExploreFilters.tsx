"use client";
interface ExploreFiltersProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;

  minPrice: string;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;

  maxPrice: string;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;

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
  totalResults,
}: ExploreFiltersProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-16">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-4xl font-bold">Explore nossos destinos</h2>

          <p className="text-neutral-500 mt-2">
            {totalResults} viagens encontradas
          </p>
        </div>

        <input
          type="text"
          placeholder="Pesquisar destino..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-xl px-5 py-3 outline-none focus:border-primary"
        />

        <div className="flex gap-4">
          <select
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
            className="border rounded-xl px-4 py-3"
          >
            <option value="all">Planos</option>
            <option value="basic">Básico</option>
            <option value="family">Família</option>
            <option value="premium">Premium</option>
          </select>

          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Preço mínimo"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="border rounded-xl px-4 py-3 flex-1"
            />
            <input
              type="number"
              placeholder="Preço máximo"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border rounded-xl px-4 py-3 flex-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
