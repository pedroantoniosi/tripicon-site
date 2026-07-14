"use client";

import plans from "@/api/plans";

interface PlansFiltersProps {
  selectedPlanId: number;
  onSelectPlan: (id: number) => void;
}

export default function PlansFilters({
  selectedPlanId,
  onSelectPlan,
}: PlansFiltersProps) {
  return (
    <div className="flex justify-center gap-2 overflow-x-scroll snap-x py-4">
      {plans.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelectPlan(item.id)}
          className={`transition-colors bg-neutral-200  py-1 px-2 rounded-full text-sm font-medium  ${
            selectedPlanId === item.id
              ? "bg-neutral-400 text-white"
              : "text-black"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
