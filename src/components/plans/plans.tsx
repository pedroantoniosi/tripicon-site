import plans from "@/api/plans";

export default function Plans() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto grid  grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {plans.map((plan, index) => {
          const isFeatured = index === 1;

          return (
            <article
              key={plan.id}
              className={[
                "relative flex flex-col rounded-2xl border-2 border-zinc-200 p-8 transition-all shadows-1",
                isFeatured
                  ? "border-neutral-900 bg-neutral-900 text-white shadow-xl"
                  : "border-neutral-200 bg-white text-neutral-900",
              ].join(" ")}
            >
              {/* Badge do plano em destaque */}
              {isFeatured && (
                <span className="absolute right-5 top-5 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-semibold text-white">
                  Popular
                </span>
              )}

              {/* Imagem */}
              <div className="mb-6 flex h- items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={plan.img}
                  alt={plan.name}
                  className="h-50 w-full aspect-video object-cover"
                />
              </div>

              {/* Nome */}
              <h3 className="text-lg font-semibold">{plan.name}</h3>

              {/* Descrição */}
              <p
                className={[
                  "mt-2 min-h-[72px] text-sm leading-6",
                  isFeatured ? "text-neutral-400" : "text-neutral-500",
                ].join(" ")}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span
                      className={[
                        "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                        isFeatured
                          ? "bg-white text-neutral-900"
                          : "bg-neutral-900 text-white",
                      ].join(" ")}
                    >
                      ✓
                    </span>

                    <span
                      className={
                        isFeatured ? "text-neutral-300" : "text-neutral-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botão */}
              <button
                type="button"
                className="mt-8 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-600"
              >
                Escolher plano
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
