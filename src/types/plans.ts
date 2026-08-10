export const PLAN_SLUGS = ["basic", "family", "premium"] as const;

export type PlanSlug = (typeof PLAN_SLUGS)[number];

export interface Plans {
  readonly id: number;
  readonly slug: PlanSlug;
  readonly name: string;
  readonly img: string;
  readonly description: string;
  readonly features: readonly string[];
}
