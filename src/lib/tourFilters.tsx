import type { Tour } from "@/types/tour";

export interface TourFilters {
  search: string;
  plan: string;
  minPrice: string;
  maxPrice: string;
  sortOrder: string;
}

export function filterTours(
  tours: readonly Tour[],
  filters: TourFilters,
): Tour[] {
  const { search, plan, minPrice, maxPrice, sortOrder } = filters;

  const searchTerm = search.toLowerCase();

  const filtered = tours.filter((tour) => {
    const searchMatch =
      tour.name.toLowerCase().includes(searchTerm) ||
      tour.location.city.toLowerCase().includes(searchTerm) ||
      tour.location.country.toLowerCase().includes(searchTerm);

    const planMatch =
      plan === "all"
        ? true
        : tour.plans.some((tourPlan) => tourPlan.plan === plan);

    const minimum =
      minPrice === ""
        ? true
        : tour.plans.some((tourPlan) =>
            tourPlan.options.some((option) => option.price >= Number(minPrice)),
          );

    const maximum =
      maxPrice === ""
        ? true
        : tour.plans.some((tourPlan) =>
            tourPlan.options.some((option) => option.price <= Number(maxPrice)),
          );

    return searchMatch && planMatch && minimum && maximum;
  });

  return filtered.sort((a, b) => {
    const priceA = a.plans[0].options[0].price;
    const priceB = b.plans[0].options[0].price;

    if (sortOrder === "price-asc") {
      return priceA - priceB;
    }

    if (sortOrder === "price-desc") {
      return priceB - priceA;
    }

    return 0;
  });
}
