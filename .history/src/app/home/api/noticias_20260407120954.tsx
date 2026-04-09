function fetchNoticias() {
  return Promise.resolve([
    {
      title: "Máquinas de venda em todo lugar",
      image: "/images/banner.png",
      url: "/noticia/maquinas",
    },
    {
      title: "Trens extremamente pontuais",
      image: "/images/banner.png",
      url: "/noticia/trens",
    },
    {
      title: "Hotéis cápsula únicos",
      image: "/images/banner.png",
      url: "/noticia/capsula",
    },
    {
      title: "Cultura do silêncio em público",
      image: "/images/banner.png",
      url: "/noticia/silencio",
    },
    {
      title: "Banheiros tecnológicos",
      image: "/images/banner.png",
      url: "/noticia/banheiros",
    },
    {
      title: "Ilhas com animais livres",
      image: "/images/banner.png",
      url: "/noticia/ilhas",
    },
  ]);
}
