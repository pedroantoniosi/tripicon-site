export function fetchNoticias() {
  return Promise.resolve([
    {
      id: 1,
      title: "Máquinas de venda em todo lugar",
      image: "/images/banner.png",
      url: "/noticia/maquinas",
    },
    {
      id: 2,
      title: "Trens extremamente pontuais",
      image: "/images/banner.png",
      url: "/noticia/trens",
    },
    {
      id: 3,
      title: "Hotéis cápsula únicos",
      image: "/images/banner.png",
      url: "/noticia/capsula",
    },
    {
      id: 4,
      title: "Cultura do silêncio em público",
      image: "/images/banner.png",
      url: "/noticia/silencio",
    },
    {
      id: 5,
      title: "Banheiros tecnológicos",
      image: "/images/banner.png",
      url: "/noticia/banheiros",
    },
    {
      id: 6,
      title: "Ilhas com animais livres",
      image: "/images/banner.png",
      url: "/noticia/ilhas",
    },
  ]);
}
