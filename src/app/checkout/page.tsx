"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import tours from "@/api/tours";
import plans from "@/api/plans";

import Container from "@/components/Container";
import Button from "@/components/Button";

type PaymentMethod = "card" | "pix";

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  /*
   * Dados recebidos da página da tour
   */
  const tourSlug = searchParams.get("tour");
  const planSlug = searchParams.get("plan");
  const durationParam = searchParams.get("duration");

  const duration = Number(durationParam);

  // Reconstrói a tour selecionada.

  const tour = useMemo(() => {
    return tours.find((item) => item.slug === tourSlug);
  }, [tourSlug]);

  //Plano selecionado dentro da tour.

  const tourPlan = useMemo(() => {
    return tour?.plans.find((item) => item.plan === planSlug);
  }, [tour, planSlug]);

  // Informações gerais do plano
  const plan = useMemo(() => {
    return plans.find((item) => item.slug === planSlug);
  }, [planSlug]);

  // Preço da duração selecionada.
  const price = useMemo(() => {
    return tourPlan?.options.find((item) => item.duration === duration);
  }, [tourPlan, duration]);

  // UserData
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [document, setDocument] = useState("");

  // Pagamento
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  //  Checkout
  const [isConfirmed, setIsConfirmed] = useState(false);

  const [error, setError] = useState("");

  // Verificação da URL
  if (!tour || !tourPlan || !plan || !price) {
    return (
      <main className="min-h-screen bg-neutral-50">
        <Container className="py-20">
          <div className="mx-auto max-w-xl rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
            <h1 className="text-2xl font-bold">Pedido inválido</h1>

            <p className="mt-3 text-neutral-500">
              Não foi possível encontrar os dados da viagem selecionada.
            </p>
          </div>
        </Container>
      </main>
    );
  }

  // Confirmação
  function handleSubmit() {
    setError("");

    /*
     * Validação dos dados pessoais.
     */
    if (!name.trim() || !email.trim() || !phone.trim() || !document.trim()) {
      setError("Preencha todos os dados do viajante.");

      return;
    }

    // Verificação  de Cartão
    if (paymentMethod === "card") {
      if (
        !cardNumber.trim() ||
        !cardName.trim() ||
        !cardExpiry.trim() ||
        !cardCvv.trim()
      ) {
        setError("Preencha todos os dados do cartão.");

        return;
      }
    }
    setIsConfirmed(true);
  }

  // Confirmação do Pedido
  if (isConfirmed) {
    return (
      <main className="min-h-screen bg-neutral-50">
        <Container className="py-20">
          <div className="mx-auto max-w-2xl rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
              ✓
            </div>

            <h1 className="mt-6 text-3xl font-bold">Pedido confirmado!</h1>

            <p className="mt-3 text-neutral-600">
              Sua solicitação de viagem foi registrada com sucesso.
            </p>

            <div className="mt-8 rounded-2xl bg-neutral-50 p-6 text-left">
              <div className="flex justify-between">
                <span className="text-neutral-500">Destino</span>

                <span className="font-semibold">{tour.name}</span>
              </div>

              <div className="mt-4 flex justify-between">
                <span className="text-neutral-500">Plano</span>

                <span className="font-semibold">{plan.name}</span>
              </div>

              <div className="mt-4 flex justify-between">
                <span className="text-neutral-500">Duração</span>

                <span className="font-semibold">{duration} dias</span>
              </div>

              <div className="mt-4 flex justify-between border-t pt-4">
                <span className="text-neutral-500">Total</span>

                <span className="text-xl font-bold">
                  R$ {price.price.toLocaleString("pt-BR")}
                </span>
              </div>
            </div>

            {paymentMethod === "pix" && (
              <div className="mt-6 rounded-2xl border border-neutral-200 p-6">
                <p className="font-semibold">Pagamento via PIX</p>

                <p className="mt-2 text-sm text-neutral-500">
                  O código PIX será disponibilizado após a criação do pagamento.
                </p>
              </div>
            )}

            <Button
              className="mt-8 w-full py-4"
              onClick={() => (window.location.href = "/")}
            >
              Voltar para o início
            </Button>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="border-b bg-white">
        <Container className="py-5">
          <h1 className="text-2xl font-bold">Finalizar pedido</h1>

          <p className="mt-1 text-sm text-neutral-500">
            Revise sua viagem e confirme o pagamento.
          </p>
        </Container>
      </header>

      <Container className="py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            {/* Tour */}
            <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-neutral-500">
                    1. Viagem selecionada
                  </p>

                  <h2 className="mt-1 text-2xl font-bold">{tour.name}</h2>

                  <p className="mt-1 text-sm text-neutral-500">
                    {tour.location.city}, {tour.location.country}
                  </p>
                </div>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm">
                  {duration} dias
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs text-neutral-500">Plano</p>

                  <p className="mt-1 font-semibold">{plan.name}</p>
                </div>

                <div>
                  <p className="text-xs text-neutral-500">Duração</p>

                  <p className="mt-1 font-semibold">{duration} dias</p>
                </div>
              </div>
            </section>

            {/* Dados do Usuário */}
            <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-neutral-500">2. Dados do viajante</p>

              <h2 className="mt-1 text-2xl font-bold">Seus dados</h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Nome completo</label>

                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Digite seu nome completo"
                    className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">E-mail</label>

                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="seu@email.com"
                    className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Telefone</label>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="(00) 00000-0000"
                    className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">CPF</label>

                  <input
                    type="text"
                    value={document}
                    onChange={(event) => setDocument(event.target.value)}
                    placeholder="000.000.000-00"
                    className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
            </section>

            {/* Pagamento */}
            <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-neutral-500">3. Pagamento</p>

              <h2 className="mt-1 text-2xl font-bold">
                Escolha o método de pagamento
              </h2>

              {/* Métodos */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`rounded-2xl border p-5 text-left transition ${
                    paymentMethod === "card"
                      ? "border-primary bg-primary/5 ring-2 ring-primary"
                      : "border-neutral-200 hover:border-primary"
                  }`}
                >
                  <span className="text-2xl">💳</span>

                  <p className="mt-3 font-semibold">Cartão de crédito</p>

                  <p className="mt-1 text-sm text-neutral-500">
                    Pague com seu cartão.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("pix")}
                  className={`rounded-2xl border p-5 text-left transition ${
                    paymentMethod === "pix"
                      ? "border-primary bg-primary/5 ring-2 ring-primary"
                      : "border-neutral-200 hover:border-primary"
                  }`}
                >
                  <span className="text-2xl">▣</span>

                  <p className="mt-3 font-semibold">PIX</p>

                  <p className="mt-1 text-sm text-neutral-500">
                    Pagamento instantâneo.
                  </p>
                </button>
              </div>

              {paymentMethod === "card" && (
                <div className="mt-6 space-y-5">
                  <div>
                    <label className="text-sm font-medium">
                      Número do cartão
                    </label>

                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(event) => setCardNumber(event.target.value)}
                      placeholder="0000 0000 0000 0000"
                      maxLength={19}
                      className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      Nome no cartão
                    </label>

                    <input
                      type="text"
                      value={cardName}
                      onChange={(event) => setCardName(event.target.value)}
                      placeholder="NOME COMPLETO"
                      className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Validade</label>

                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(event) => setCardExpiry(event.target.value)}
                        placeholder="MM/AA"
                        maxLength={5}
                        className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium">CVV</label>

                      <input
                        type="password"
                        value={cardCvv}
                        onChange={(event) => setCardCvv(event.target.value)}
                        placeholder="123"
                        maxLength={4}
                        className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "pix" && (
                <div className="mt-6 rounded-2xl bg-neutral-50 p-5">
                  <p className="font-semibold">Pagamento via PIX</p>

                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    Ao confirmar o pedido, o sistema deverá gerar um QR Code PIX
                    através do seu gateway de pagamento.
                  </p>
                </div>
              )}
            </section>

            {/* Erro */}
            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}
          </div>

          {/* Resumo do Pedido */}
          <aside>
            <div className="sticky top-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-neutral-500">Resumo do pedido</p>

              <h2 className="mt-1 text-2xl font-bold">{tour.name}</h2>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-neutral-500">Plano</span>

                  <span className="font-medium">{plan.name}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-neutral-500">Duração</span>

                  <span className="font-medium">{duration} dias</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-neutral-500">Destino</span>

                  <span className="font-medium">{tour.location.city}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-neutral-500">Pagamento</span>

                  <span className="font-medium">
                    {paymentMethod === "card" ? "Cartão" : "PIX"}
                  </span>
                </div>
              </div>

              <div className="mt-6 border-t pt-6">
                <div className="flex items-end justify-between">
                  <span className="text-neutral-500">Total</span>

                  <span className="text-3xl font-bold">
                    R$ {price.price.toLocaleString("pt-BR")}
                  </span>
                </div>
              </div>

              <Button className="mt-6 w-full py-4" onClick={handleSubmit}>
                {paymentMethod === "pix"
                  ? "Gerar pagamento PIX"
                  : "Confirmar e pagar"}
              </Button>

              <p className="mt-4 text-center text-xs leading-5 text-neutral-400">
                Ao confirmar, você concorda com os termos da reserva e autoriza
                o processamento do pagamento.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
