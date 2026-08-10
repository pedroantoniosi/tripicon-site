import type { PlanSlug } from "./plans";

export type TourDuration = 7 | 14 | 30;

export interface TourPlanPrice {
  readonly duration: TourDuration;
  readonly price: number;
}

export interface TourPlan {
  readonly plan: PlanSlug;
  readonly prices: readonly TourPlanPrice[];
}

export interface TourLocation {
  readonly city: string;
  readonly country: string;
}

export interface Tour {
  readonly id: number;
  readonly name: string;
  readonly slug: string;

  readonly location: TourLocation;

  readonly description: string;

  readonly plans: readonly TourPlan[];

  readonly rating: number;

  readonly image: string;
  readonly imageLandscape: string;

  readonly featured: boolean;

  readonly includes: readonly string[];
  readonly highlights: readonly string[];
}
