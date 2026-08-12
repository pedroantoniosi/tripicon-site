import tours from "@/api/tours";
import type { Tour } from "@/types/tour";

interface GetToursParams {
  page?: number;
  limit?: number;
  search?: string;
  plan?: string;
  minPrice?: number;
  maxPrice?: number;
  sortOrder?: string;
}

interface GetToursResult {
  data: readonly Tour[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
  };
}

export function getTours({
  page = 1,
  limit = 12,
  search = "",
  plan = "all",
  minPrice,
  maxPrice,
  sortOrder = "default",
}: GetToursParams = {}): GetToursResult {
  let results = [...tours];

  /*
   * BUSCA
   */
  if (search) {
    const searchTerm = search.toLowerCase();

    results = results.filter((tour) => {
      return (
        tour.name.toLowerCase().includes(searchTerm) ||
        tour.location.city.toLowerCase().includes(searchTerm) ||
        tour.location.country.toLowerCase().includes(searchTerm)
      );
    });
  }

  /*
   * PLANO
   */
  if (plan !== "all") {
    results = results.filter((tour) =>
      tour.plans.some((tourPlan) => tourPlan.plan === plan),
    );
  }

  /*
   * PREÇO
   */
  if (minPrice !== undefined || maxPrice !== undefined) {
    results = results.filter((tour) =>
      tour.plans.some((tourPlan) =>
        tourPlan.options.some((option) => {
          const matchesMin = minPrice === undefined || option.price >= minPrice;

          const matchesMax = maxPrice === undefined || option.price <= maxPrice;

          return matchesMin && matchesMax;
        }),
      ),
    );
  }

  /*
   * ORDENAÇÃO
   */
  results.sort((a, b) => {
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

  /*
   * PAGINAÇÃO
   */
  const total = results.length;

  const start = (page - 1) * limit;
  const end = start + limit;

  const data = results.slice(start, end);

  return {
    data,

    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      hasNextPage: end < total,
    },
  };
}
