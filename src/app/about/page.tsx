import Container from "@/components/Container";
import React from "react";

const articles = [
  {
    id: 1,
    title: "Descubra Destinos Inesquecíveis",
    text: "Na TripIcon, acreditamos que viajar vai muito além de conhecer novos lugares. Cada destino representa uma oportunidade de viver experiências únicas, explorar diferentes culturas e criar memórias que permanecem para toda a vida. Nossa missão é conectar você aos melhores passeios, atrações e aventuras, tornando cada viagem mais simples, segura e inesquecível.",
    image: "/assets/img/home/offers.png",
  },
  {
    id: 2,
    title: "Planejamento Simples e Inteligente",
    text: "Criamos uma plataforma intuitiva para que você encontre tudo o que precisa em um só lugar. Com informações detalhadas, recomendações cuidadosamente selecionadas e uma experiência de navegação moderna, a TripIcon facilita o planejamento da sua próxima aventura, permitindo que você dedique mais tempo para aproveitar a viagem e menos tempo organizando cada detalhe.",
    image: "/assets/img/home/offers.png",
  },
  {
    id: 3,
    title: "Transformando Viagens em Experiências",
    text: "Nossa paixão é inspirar pessoas a explorar o mundo com confiança. Trabalhamos para reunir destinos incríveis, passeios de qualidade e experiências autênticas em uma única plataforma, ajudando viajantes a descobrir novas possibilidades. Na TripIcon, cada viagem é uma oportunidade de viver histórias, criar conexões e colecionar momentos inesquecíveis.",
    image: "/assets/img/home/offers.png",
  },
];

export default function page() {
  return (
    <>
      <Container className="flex  flex-col  gap-32 py-16">
        {articles.map((item, index) => (
          <section
            key={item.id}
            className={`flex gap-4 justify-around items-center ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="caption flex flex-col gap-4">
              <h2 className="text-black text-4xl">{item.title}</h2>
              <p className="text-zinc-700 max-w-150">{item.text}</p>
            </div>

            <img
              src={item.image}
              alt=""
              className="max-w-100 aspect-square rounded-2xl"
            />
          </section>
        ))}
      </Container>
    </>
  );
}
