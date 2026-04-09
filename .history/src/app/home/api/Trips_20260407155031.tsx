export function fetchTrips() {
  return Promise.resolve([
    {
      id: 1,
      title: "Tóquio",
      image: "/images/banner.png",
      url: "/trip/toquio",
      places: [
        "Shibuya Crossing",
        "Templo Senso-ji",
        "Tokyo Tower",
        "Akihabara",
        "Palácio Imperial",
      ],
    },
    {
      id: 2,
      title: "Kyoto",
      image: "/images/banner.png",
      url: "/trip/kyoto",
      places: [
        "Kinkaku-ji (Pavilhão Dourado)",
        "Fushimi Inari Taisha",
        "Arashiyama Bamboo Grove",
        "Templo Kiyomizu-dera",
        "Gion (bairro das gueixas)",
      ],
    },
    {
      id: 3,
      title: "Osaka",
      image: "/images/banner.png",
      url: "/trip/osaka",
      places: [
        "Castelo de Osaka",
        "Dotonbori",
        "Universal Studios Japan",
        "Aquário Kaiyukan",
        "Shinsekai",
      ],
    },
    {
      id: 4,
      title: "Hiroshima",
      image: "/images/banner.png",
      url: "/trip/hiroshima",
      places: [
        "Parque Memorial da Paz",
        "Museu da Bomba Atômica",
        "Ilha de Miyajima",
        "Torii flutuante de Itsukushima",
        "Castelo de Hiroshima",
      ],
    },
    {
      id: 5,
      title: "Nara",
      image: "/images/banner.png",
      url: "/trip/nara",
      places: [
        "Parque de Nara",
        "Templo Todai-ji",
        "Grande Buda de Nara",
        "Santuário Kasuga Taisha",
        "Monte Wakakusa",
      ],
    },
  ]);
}
