// src/lib/mapper.ts

// Tipo base usado no seu carousel
export type CarouselItem = {
  id: string | number;
  title: string;
  image: string;
  url: string;

  // opcionais (usados apenas em trips)
  hotel?: string;
  places?: string[];
};

// ================= NEWS =================

type NewsAPI = {
  id: number;
  title: string;
  image: string;
  url: string;
};

export function mapNewsToCarousel(news: NewsAPI[]): CarouselItem[] {
  return news.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.image,
    url: item.url,
  }));
}

// ================= TRIPS =================

type TripAPI = {
  id: number;
  title: string;
  image: string;
  url: string;
  hotel: string;
  places: string[];
};

export function mapTripsToCarousel(trips: TripAPI[]): CarouselItem[] {
  return trips.map((trip) => ({
    id: trip.id,
    title: trip.title,
    image: trip.image,
    url: trip.url,
    hotel: trip.hotel,
    places: trip.places,
  }));
}

// ================= GENERIC (OPCIONAL - PROFISSIONAL) =================

// Permite reutilizar para qualquer API futura
export function mapToCarousel<T>(
  data: T[],
  mapper: (item: T) => CarouselItem,
): CarouselItem[] {
  return data.map(mapper);
}
