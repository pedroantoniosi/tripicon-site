const tours = [
  {
    id: 1,
    name: "Bangkok Explorer",
    slug: "bangkok-explorer",

    plans: ["basic", "family"],

    city: "Bangkok",
    country: "Thailand",
    description:
      "Explore os templos históricos, mercados flutuantes e a vibrante vida noturna da capital tailandesa.",
    price: 1299,
    duration: "5 dias",
    rating: 4.8,
    maxPeople: 20,
    language: "Inglês",
    image: "/assets/img/home/tours/1-bangkok.jfif",
    featured: true,
    includes: [
      "Hotel 4 estrelas",
      "Café da manhã",
      "Transfer aeroporto",
      "Passeio pelos templos",
    ],
    highlights: ["Grand Palace", "Wat Arun", "Mercado Flutuante"],
  },
  {
    id: 2,
    name: "Dubai Luxury Experience",
    slug: "dubai-luxury-experience",

    plans: ["premium"],

    city: "Dubai",
    country: "United Arab Emirates",
    description:
      "Conheça os arranha-céus mais famosos do mundo, safári no deserto e experiências de luxo.",
    price: 2499,
    duration: "6 dias",
    rating: 4.9,
    maxPeople: 15,
    language: "Inglês",
    image: "/assets/img/home/tours/2-dubai.jfif",
    featured: true,
    includes: [
      "Hotel 5 estrelas",
      "Transfer",
      "Safári no deserto",
      "Ingressos turísticos",
    ],
    highlights: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall"],
  },
  {
    id: 3,
    name: "London Heritage Tour",
    slug: "london-heritage-tour",

    plans: ["basic", "family"],

    city: "London",
    country: "United Kingdom",
    description:
      "Descubra os marcos históricos da capital britânica e sua rica cultura.",
    price: 1899,
    duration: "5 dias",
    rating: 4.7,
    maxPeople: 25,
    language: "Inglês",
    image: "/assets/img/home/tours/3-london.jfif",
    featured: false,
    includes: ["Hotel", "City Tour", "Café da manhã"],
    highlights: ["Big Ben", "London Eye", "Tower Bridge"],
  },
  {
    id: 4,
    name: "Paris Romantic Escape",
    slug: "paris-romantic-escape",

    plans: ["basic", "family", "premium"],

    city: "Paris",
    country: "France",
    description:
      "Viva a magia da Cidade Luz visitando seus monumentos mais icônicos.",
    price: 1999,
    duration: "5 dias",
    rating: 4.9,
    maxPeople: 20,
    language: "Francês / Inglês",
    image: "/assets/img/home/tours/4-paris.jfif",
    featured: true,
    includes: ["Hotel 4 estrelas", "Café da manhã", "Passeio de barco"],
    highlights: ["Torre Eiffel", "Museu do Louvre", "Arco do Triunfo"],
  },
  {
    id: 5,
    name: "Rio de Janeiro",
    slug: "rio-adventure",

    plans: ["basic"],

    city: "Rio de Janeiro",
    country: "Brazil",
    description:
      "Praias, cultura e paisagens incríveis em uma das cidades mais famosas do mundo.",
    price: 899,
    duration: "4 dias",
    rating: 4.8,
    maxPeople: 30,
    language: "Português",
    image: "/assets/img/home/tours/5-rio.jfif",
    featured: true,
    includes: ["Hotel", "Transfer", "Passeio turístico"],
    highlights: ["Cristo Redentor", "Pão de Açúcar", "Copacabana"],
  },
  {
    id: 6,
    name: "Rome Ancient Wonders",
    slug: "rome-ancient-wonders",

    plans: ["family", "premium"],

    city: "Rome",
    country: "Italy",
    description:
      "Viaje pela história visitando monumentos que marcaram o Império Romano.",
    price: 1799,
    duration: "5 dias",
    rating: 4.8,
    maxPeople: 20,
    language: "Italiano / Inglês",
    image: "/assets/img/home/tours/6-rome.jfif",
    featured: false,
    includes: ["Hotel", "Passeio guiado", "Ingressos"],
    highlights: ["Coliseu", "Fórum Romano", "Fontana di Trevi"],
  },
  {
    id: 7,
    name: "Istanbul Crossroads",
    slug: "istanbul-crossroads",

    plans: ["basic", "family"],

    city: "Istanbul",
    country: "Turkey",
    description:
      "Conheça a cidade que conecta Europa e Ásia com sua rica herança cultural.",
    price: 1399,
    duration: "5 dias",
    rating: 4.7,
    maxPeople: 20,
    language: "Turco / Inglês",
    image: "/assets/img/home/tours/7-Istanbul.jfif",
    featured: false,
    includes: ["Hotel", "Transfer", "Passeio guiado"],
    highlights: ["Mesquita Azul", "Santa Sofia", "Grande Bazar"],
  },
  {
    id: 8,
    name: "Singapore Future City",
    slug: "singapore-future-city",

    plans: ["premium"],

    city: "Singapore",
    country: "Singapore",
    description:
      "Conheça uma das cidades mais modernas e organizadas do planeta.",
    price: 2299,
    duration: "5 dias",
    rating: 4.9,
    maxPeople: 15,
    language: "Inglês",
    image: "/assets/img/home/tours/8-singapore.jfif",
    featured: true,
    includes: ["Hotel", "Transfer", "Passeios"],
    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"],
  },
  {
    id: 9,
    name: "Tokyo Discovery",
    slug: "tokyo-discovery",

    plans: ["premium"],

    city: "Tokyo",
    country: "Japan",
    description:
      "Tradição e tecnologia reunidas em uma das metrópoles mais fascinantes do mundo.",
    price: 2799,
    duration: "7 dias",
    rating: 4.9,
    maxPeople: 15,
    language: "Japonês / Inglês",
    image: "/assets/img/home/tours/9-tokyo.jfif",
    featured: true,
    includes: ["Hotel", "Passeios guiados", "Transfer"],
    highlights: ["Shibuya", "Templo Senso-ji", "Tokyo Skytree"],
  },
  {
    id: 10,
    name: "Cancún Paradise",
    slug: "cancun-paradise",

    plans: ["family", "premium"],

    city: "Cancún",
    country: "Mexico",
    description:
      "Praias paradisíacas, resorts luxuosos e águas cristalinas do Caribe.",
    price: 1699,
    duration: "5 dias",
    rating: 4.8,
    maxPeople: 25,
    language: "Espanhol / Inglês",
    image: "/assets/img/home/tours/10-cancun.jfif",
    featured: true,
    includes: ["Resort All Inclusive", "Transfer", "Passeios"],
    highlights: ["Zona Hoteleira", "Isla Mujeres", "Chichén Itzá"],
  },
];

export default tours;
