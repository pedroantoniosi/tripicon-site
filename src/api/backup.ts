import type { Tour } from "@/types/tour";

const tours = [
  {
    id: 1,
    name: "Bangkok Explorer",
    slug: "bangkok-explorer",

    location: {
      city: "Bangkok",
      country: "Thailand",
    },

    description:
      "Explore os templos históricos, mercados flutuantes e a vibrante vida noturna da capital tailandesa.",

    plans: [
      {
        plan: "basic",
        options: [
          { duration: 7, price: 1299 },
          { duration: 14, price: 2299 },
          { duration: 30, price: 4399 },
        ],
      },
      {
        plan: "family",
        options: [
          { duration: 7, price: 1699 },
          { duration: 14, price: 2899 },
          { duration: 30, price: 5499 },
        ],
      },
    ],

    rating: 4.8,

    image: "/assets/img/home/tours/1-bangkok.jfif",
    imageLandscape: "/assets/img/home/tours-landscape/01-bangkok.webp",

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

    location: {
      city: "Dubai",
      country: "United Arab Emirates",
    },

    description:
      "Conheça os arranha-céus mais famosos do mundo, safári no deserto e experiências de luxo.",

    plans: [
      {
        plan: "premium",
        options: [
          { duration: 7, price: 6499 },
          { duration: 14, price: 10999 },
          { duration: 30, price: 19999 },
        ],
      },
    ],

    rating: 4.9,

    image: "/assets/img/home/tours/2-dubai.jfif",
    imageLandscape: "/assets/img/home/tours-landscape/2-dubai.webp",

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

    location: {
      city: "London",
      country: "United Kingdom",
    },

    description:
      "Descubra os marcos históricos da capital britânica, sua arquitetura icônica e a rica cultura inglesa.",

    plans: [
      {
        plan: "basic",
        options: [
          { duration: 7, price: 1899 },
          { duration: 14, price: 3299 },
          { duration: 30, price: 6299 },
        ],
      },
      {
        plan: "family",
        options: [
          { duration: 7, price: 2499 },
          { duration: 14, price: 4299 },
          { duration: 30, price: 7999 },
        ],
      },
    ],

    rating: 4.7,

    image: "/assets/img/home/tours/3-london.jfif",
    imageLandscape: "/assets/img/home/tours-landscape/3-london.webp",

    featured: false,

    includes: ["Hotel", "City Tour", "Café da manhã", "Transfer aeroporto"],

    highlights: ["Big Ben", "London Eye", "Tower Bridge"],
  },

  {
    id: 4,
    name: "Paris Romantic Escape",
    slug: "paris-romantic-escape",

    location: {
      city: "Paris",
      country: "France",
    },

    description:
      "Viva a magia da Cidade Luz visitando seus monumentos mais icônicos, museus e bairros históricos.",

    plans: [
      {
        plan: "basic",
        options: [
          { duration: 7, price: 1999 },
          { duration: 14, price: 3499 },
          { duration: 30, price: 6799 },
        ],
      },
      {
        plan: "family",
        options: [
          { duration: 7, price: 2599 },
          { duration: 14, price: 4499 },
          { duration: 30, price: 8499 },
        ],
      },
      {
        plan: "premium",
        options: [
          { duration: 7, price: 3899 },
          { duration: 14, price: 6799 },
          { duration: 30, price: 12499 },
        ],
      },
    ],

    rating: 4.9,

    image: "/assets/img/home/tours/4-paris.jfif",
    imageLandscape: "/assets/img/home/tours-landscape/4-paris.webp",

    featured: true,

    includes: [
      "Hotel 4 estrelas",
      "Café da manhã",
      "Passeio de barco",
      "Ingressos turísticos",
    ],

    highlights: ["Torre Eiffel", "Museu do Louvre", "Arco do Triunfo"],
  },

  {
    id: 5,
    name: "Rio Adventure",
    slug: "rio-adventure",

    location: {
      city: "Rio de Janeiro",
      country: "Brazil",
    },

    description:
      "Praias, cultura e paisagens incríveis em uma das cidades mais famosas do mundo.",

    plans: [
      {
        plan: "basic",
        options: [
          { duration: 7, price: 899 },
          { duration: 14, price: 1499 },
          { duration: 30, price: 2899 },
        ],
      },
      {
        plan: "family",
        options: [
          { duration: 7, price: 1199 },
          { duration: 14, price: 1999 },
          { duration: 30, price: 3799 },
        ],
      },
      {
        plan: "premium",
        options: [
          { duration: 7, price: 1799 },
          { duration: 14, price: 2999 },
          { duration: 30, price: 5599 },
        ],
      },
    ],

    rating: 4.8,

    image: "/assets/img/home/tours/5-rio.jfif",
    imageLandscape: "/assets/img/home/tours-landscape/5-rio.webp",

    featured: true,

    includes: ["Hotel", "Transfer", "Passeio turístico", "Café da manhã"],

    highlights: ["Cristo Redentor", "Pão de Açúcar", "Copacabana"],
  },

  {
    id: 6,
    name: "Rome Ancient Wonders",
    slug: "rome-ancient-wonders",

    location: {
      city: "Rome",
      country: "Italy",
    },

    description:
      "Viaje pela história visitando monumentos que marcaram o Império Romano e descubra a cultura italiana.",

    plans: [
      {
        plan: "family",
        options: [
          { duration: 7, price: 2199 },
          { duration: 14, price: 3799 },
          { duration: 30, price: 7299 },
        ],
      },
      {
        plan: "premium",
        options: [
          { duration: 7, price: 3299 },
          { duration: 14, price: 5699 },
          { duration: 30, price: 10499 },
        ],
      },
    ],

    rating: 4.8,

    image: "/assets/img/home/tours/6-rome.jfif",
    imageLandscape: "/assets/img/home/tours-landscape/6-rome.webp",

    featured: false,

    includes: ["Hotel", "Passeio guiado", "Ingressos", "Café da manhã"],

    highlights: ["Coliseu", "Fórum Romano", "Fontana di Trevi"],
  },

  {
    id: 7,
    name: "Istanbul Crossroads",
    slug: "istanbul-crossroads",

    location: {
      city: "Istanbul",
      country: "Turkey",
    },

    description:
      "Conheça a cidade que conecta Europa e Ásia com sua rica herança cultural, histórica e gastronômica.",

    plans: [
      {
        plan: "basic",
        options: [
          { duration: 7, price: 1399 },
          { duration: 14, price: 2399 },
          { duration: 30, price: 4599 },
        ],
      },
      {
        plan: "family",
        options: [
          { duration: 7, price: 1799 },
          { duration: 14, price: 3099 },
          { duration: 30, price: 5899 },
        ],
      },
    ],

    rating: 4.7,

    image: "/assets/img/home/tours/7-Istanbul.jfif",
    imageLandscape: "/assets/img/home/tours-landscape/7-istanbul.webp",

    featured: false,

    includes: ["Hotel", "Transfer", "Passeio guiado", "Café da manhã"],

    highlights: ["Mesquita Azul", "Santa Sofia", "Grande Bazar"],
  },

  {
    id: 8,
    name: "Singapore Future City",
    slug: "singapore-future-city",

    location: {
      city: "Singapore",
      country: "Singapore",
    },

    description:
      "Conheça uma das cidades mais modernas e organizadas do planeta, combinando tecnologia, natureza e arquitetura futurista.",

    plans: [
      {
        plan: "premium",
        options: [
          { duration: 7, price: 5299 },
          { duration: 14, price: 8999 },
          { duration: 30, price: 16999 },
        ],
      },
    ],

    rating: 4.9,

    image: "/assets/img/home/tours/8-singapore.jfif",
    imageLandscape: "/assets/img/home/tours-landscape/8-singapore.webp",

    featured: true,

    includes: ["Hotel", "Transfer", "Passeios", "Café da manhã"],

    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"],
  },

  {
    id: 9,
    name: "Tokyo Discovery",
    slug: "tokyo-discovery",

    location: {
      city: "Tokyo",
      country: "Japan",
    },

    description:
      "Tradição e tecnologia reunidas em uma das metrópoles mais fascinantes do mundo.",

    plans: [
      {
        plan: "premium",
        options: [
          { duration: 7, price: 5799 },
          { duration: 14, price: 9899 },
          { duration: 30, price: 18499 },
        ],
      },
    ],

    rating: 4.9,

    image: "/assets/img/home/tours/9-tokyo.jfif",
    imageLandscape: "/assets/img/home/tours-landscape/9-tokyo.webp",

    featured: true,

    includes: ["Hotel", "Passeios guiados", "Transfer", "Café da manhã"],

    highlights: ["Shibuya", "Templo Senso-ji", "Tokyo Skytree"],
  },

  {
    id: 10,
    name: "Cancún Paradise",
    slug: "cancun-paradise",

    location: {
      city: "Cancún",
      country: "Mexico",
    },

    description:
      "Praias paradisíacas, resorts luxuosos e águas cristalinas do Caribe.",

    plans: [
      {
        plan: "family",
        options: [
          { duration: 7, price: 2399 },
          { duration: 14, price: 4099 },
          { duration: 30, price: 7699 },
        ],
      },
      {
        plan: "premium",
        options: [
          { duration: 7, price: 3499 },
          { duration: 14, price: 5999 },
          { duration: 30, price: 10999 },
        ],
      },
    ],

    rating: 4.8,

    image: "/assets/img/home/tours/10-cancun.jfif",
    imageLandscape: "/assets/img/home/tours-landscape/10-cancun.webp",

    featured: true,

    includes: ["Resort All Inclusive", "Transfer", "Passeios", "Café da manhã"],

    highlights: ["Zona Hoteleira", "Isla Mujeres", "Chichén Itzá"],
  },
] satisfies readonly Tour[];

export default tours;
