export interface Tour {
  readonly id: number;

  name: string;
  slug: string;

  location: TourLocation;

  description: string;

  plans: readonly TourPlan[];

  price: number;

  duration: string;

  rating: number;

  maxPeople: number;

  language: string;

  image: string;
  imageLandscape: string;

  featured: boolean;

  includes: readonly string[];

  highlights: readonly string[];
}

export interface TourLocation {
  city: string;
  country: string;
}

export type TourPlan = "basic" | "family" | "premium";
