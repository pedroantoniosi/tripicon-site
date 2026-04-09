export function fetchTrips() {
  return Promise.resolve([
    {
      id: 1,
      title: "Tóquio",
      image: "/images/banner.png",
      url: "/trip/toquio",
      hotel: "Hotel Gracery Shinjuku",
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
      hotel: "Hotel The Celestine Kyoto Gion",
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
      hotel: "Hotel Nikko Osaka",
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
      hotel: "RIHGA Royal Hotel Hiroshima",
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
      hotel: "Nara Hotel",
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
