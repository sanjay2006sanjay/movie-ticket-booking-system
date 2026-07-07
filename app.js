// CineSphere - Client Application Engine
// Pure Vanilla ESM JavaScript with WCAG 2.2 AA Compliance

// --- MOCK DATABASE ---
let MOVIES = [
  {
    id: "dune-part-three",
    title: "Dune: Part Three",
    tagline: "The universe stands on the edge of destruction as Muad'Dib faces the ultimate prophecy.",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future only he can foresee.",
    rating: "9.2",
    duration: "165 min",
    genre: ["sci-fi", "adventure", "action", "hollywood"],
    language: "English",
    formats: ["IMAX", "3D", "2D"],
    releaseDate: "2026-03-12",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop", // Starry sky desert style
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    quality: "8K UHD",
    trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    cast: [
      { name: "Timothée Chalamet", role: "Paul Atreides", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" },
      { name: "Zendaya Coleman", role: "Chani", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
      { name: "Rebecca Ferguson", role: "Lady Jessica", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" },
      { name: "Javier Bardem", role: "Stilgar", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" }
    ],
    showtimes: {
      "Grand IMAX Screen 1": ["11:30 AM", "3:45 PM", "7:30 PM", "10:45 PM"],
      "CineSphere Luxe 4D": ["1:00 PM", "5:30 PM", "9:00 PM"]
    }
  },
  {
    id: "avengers-secret-wars",
    title: "Avengers: Secret Wars",
    tagline: "The ultimate clash of timelines will decide the fate of all creation.",
    description: "In the culmination of the multiverse saga, heroes from across different realities must unite in Battleworld to face a cosmic threat that could erase all existence.",
    rating: "9.5",
    duration: "180 min",
    genre: ["action", "sci-fi", "superhero", "marvel", "adventure", "hollywood"],
    language: "English",
    formats: ["IMAX", "3D", "2D"],
    releaseDate: "2026-05-01",
    backdrop: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1600&auto=format&fit=crop", // Marvel style glowing grid
    poster: "https://images.unsplash.com/photo-1608889174633-414c36ef2241?q=80&w=600&auto=format&fit=crop",
    quality: "8K UHD",
    trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    cast: [
      { name: "Robert Downey Jr.", role: "Doctor Doom", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
      { name: "Tom Holland", role: "Peter Parker / Spider-Man", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" },
      { name: "Chris Evans", role: "Captain America", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" }
    ],
    showtimes: {
      "Grand IMAX Screen 1": ["10:00 AM", "1:45 PM", "5:30 PM", "9:15 PM"],
      "CineSphere Luxe 4D": ["12:00 PM", "4:00 PM", "8:00 PM"]
    }
  },
  {
    id: "spider-man-beyond-spider-verse",
    title: "Spider-Man: Beyond the Spider-Verse",
    tagline: "Every choice has a thread, and every thread can be broken.",
    description: "Miles Morales travels to the edge of the multiverse to save his father and rewrite his destiny, all while running from the Spider-Society and a vengeful Spot.",
    rating: "9.3",
    duration: "145 min",
    genre: ["animation", "action", "sci-fi", "superhero", "marvel", "adventure", "hollywood"],
    language: "English",
    formats: ["IMAX", "3D", "2D"],
    releaseDate: "2026-04-10",
    backdrop: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1600&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=600&auto=format&fit=crop",
    quality: "4K UHD",
    trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    cast: [
      { name: "Shameik Moore", role: "Miles Morales", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" },
      { name: "Hailee Steinfeld", role: "Gwen Stacy", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" }
    ],
    showtimes: {
      "CineSphere Luxe 4D": ["10:30 AM", "2:00 PM", "6:15 PM", "9:30 PM"],
      "Oceanic Dolby IMAX": ["1:00 PM", "5:00 PM", "9:00 PM"]
    }
  },
  {
    id: "the-batman-two",
    title: "The Batman: Part II",
    tagline: "Gotham is cold, dark, and unyielding. The shadow must stretch further.",
    description: "Bruce Wayne goes deeper into the corrupt underbelly of Gotham City as a new wave of calculated madness threatens to plunge the metropolis into total chaos.",
    rating: "9.1",
    duration: "160 min",
    genre: ["action", "thriller", "superhero", "dc", "drama", "hollywood"],
    language: "English",
    formats: ["IMAX", "2D"],
    releaseDate: "2026-10-02",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    quality: "4K UHD",
    trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    cast: [
      { name: "Robert Pattinson", role: "Bruce Wayne / Batman", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" },
      { name: "Zoë Kravitz", role: "Selina Kyle / Catwoman", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" }
    ],
    showtimes: {
      "Neon Dolby Theater": ["11:00 AM", "3:15 PM", "7:30 PM", "10:45 PM"]
    }
  },
  {
    id: "superman-legacy",
    title: "Superman: Legacy",
    tagline: "Hope has a home, and truth has a protector.",
    description: "A young Kal-El reconciles his heritage with his human upbringing, standing as the ultimate symbol of hope and kindness in a world that has forgotten the power of sincerity.",
    rating: "8.9",
    duration: "135 min",
    genre: ["action", "adventure", "sci-fi", "superhero", "dc", "hollywood"],
    language: "English",
    formats: ["IMAX", "2D"],
    releaseDate: "2026-07-11",
    backdrop: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=1600&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    quality: "8K UHD",
    trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    cast: [
      { name: "David Corenswet", role: "Clark Kent / Superman", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
      { name: "Rachel Brosnahan", role: "Lois Lane", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" }
    ],
    showtimes: {
      "Grand IMAX Screen 1": ["11:00 AM", "3:00 PM", "7:00 PM"]
    }
  },
  {
    id: "avatar-seed-bearer",
    title: "Avatar: The Seed Bearer",
    tagline: "Pandora's roots run deeper than the invaders can reach.",
    description: "Jake Sully and Neytiri encounter a nomadic tribe of Pandora that challenges their connection to Eywa, while RDA launches an offensive to burn out Pandora's core ecosystem.",
    rating: "9.0",
    duration: "170 min",
    genre: ["sci-fi", "adventure", "action", "fantasy", "hollywood"],
    language: "English",
    formats: ["IMAX", "3D", "2D"],
    releaseDate: "2026-12-18",
    backdrop: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1600&auto=format&fit=crop",
    poster: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=600&auto=format&fit=crop",
    quality: "8K UHD",
    trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    cast: [
      { name: "Sam Worthington", role: "Jake Sully", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" },
      { name: "Zoe Saldana", role: "Neytiri", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" }
    ],
    showtimes: {
      "Oceanic Dolby IMAX": ["10:00 AM", "2:00 PM", "6:00 PM", "10:00 PM"]
    }
  },
  {
    id: "cyberpunk-2099",
    title: "Cyberpunk 2099: Neon Horizon",
    tagline: "Enter the cyber-grid where digital consciousness overrides physical reality.",
    description: "In the sprawling vertical metropolis of Neo-Los Angeles, a cybernetically enhanced mercenary uncovers a corporate conspiracy that threatens to overwrite the minds of the entire working class.",
    rating: "8.8",
    duration: "140 min",
    genre: ["sci-fi", "action", "thriller", "hollywood"],
    language: "English",
    formats: ["4DX", "2D"],
    releaseDate: "2026-06-18",
    backdrop: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?q=80&w=1600&auto=format&fit=crop", // Neon grids
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    quality: "4K UHD",
    trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    cast: [
      { name: "Keanu Reeves", role: "Johnny Cyber", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
      { name: "Florence Pugh", role: "Vera 2.0", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" }
    ],
    showtimes: {
      "Neon Dolby Theater": ["10:00 AM", "2:15 PM", "6:30 PM", "9:45 PM"],
      "4DX Matrix Room": ["12:00 PM", "4:30 PM", "8:45 PM"]
    }
  },
  {
    id: "whispering-sands",
    title: "The Whispering Sands",
    tagline: "Secrets buried in the ancient dunes of Arabia begin to rise.",
    description: "An archaeological team uncovers an ancient temple beneath the Rub' al Khali, unlocking an otherworldly force that alters time and memory for everyone in the desert.",
    rating: "8.5",
    duration: "115 min",
    genre: ["drama", "thriller"],
    language: "Arabic",
    formats: ["2D"],
    releaseDate: "2026-07-02",
    backdrop: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=1600&auto=format&fit=crop", // Desert dunes
    poster: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=600&auto=format&fit=crop",
    quality: "4K UHD",
    trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    cast: [
      { name: "Tahar Rahim", role: "Dr. Tarik", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop" },
      { name: "Sofia Boutella", role: "Layla", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop" }
    ],
    showtimes: {
      "Medina Oasis Cinema": ["3:00 PM", "6:00 PM", "9:00 PM"],
      "Al Hamra Screen 2": ["4:30 PM", "8:00 PM"]
    }
  },
  {
    id: "mumbai-chronicles",
    title: "Mumbai Chronicles",
    tagline: "An intense race against time in the heart of Mumbai's underworld.",
    description: "A suspended detective is drawn back into the police force when an anonymous terrorist hacks the local transit grid, forcing him to complete high-risk tasks across the city.",
    rating: "8.9",
    duration: "130 min",
    genre: ["action", "thriller"],
    language: "Hindi",
    formats: ["IMAX", "2D"],
    releaseDate: "2026-05-10",
    backdrop: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1600&auto=format&fit=crop", // Mumbai gateway
    poster: "https://images.unsplash.com/photo-1589483236531-5384ff7442dd?q=80&w=600&auto=format&fit=crop",
    quality: "4K UHD",
    trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    cast: [
      { name: "Ranbir Kapoor", role: "Inspector Dev", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" },
      { name: "Alia Bhatt", role: "Dr. Sneha", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop" }
    ],
    showtimes: {
      "PVR Icon IMAX Lower Parel": ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"],
      "Carnival Cinemas Metro": ["1:15 PM", "5:00 PM", "8:30 PM"]
    }
  },
  {
    id: "midnight-in-paris",
    title: "Midnight in Paris: Again",
    tagline: "Love and artistic nostalgia clash under the French streetlights.",
    description: "An American novelist visiting Paris finds himself mysteriously transported back to the roaring 1920s every night at midnight, meeting his creative idols and questioning his modern-day relationship.",
    rating: "8.1",
    duration: "105 min",
    genre: ["romance", "drama"],
    language: "French",
    formats: ["2D"],
    releaseDate: "2026-04-20",
    backdrop: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop", // Paris Eiffel Tower
    poster: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop",
    quality: "4K UHD",
    trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    cast: [
      { name: "Léa Seydoux", role: "Clara", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop" },
      { name: "Timothée Chalamet", role: "Gilles", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" }
    ],
    showtimes: {
      "Le Grand Rex Room 3": ["2:00 PM", "4:30 PM", "7:00 PM", "9:30 PM"]
    }
  },
  {
    id: "lost-kingdom",
    title: "The Lost Kingdom",
    tagline: "Deep beneath the ocean floor lies a world forgotten by time.",
    description: "A marine biologist and a deep-sea salvage captain discover an underwater trench leading to a subterranean ecosystem containing prehistoric creatures and ruins of a lost civilization.",
    rating: "8.6",
    duration: "150 min",
    genre: ["adventure", "sci-fi"],
    language: "English",
    formats: ["IMAX", "3D"],
    releaseDate: "2026-08-01",
    backdrop: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop", // Undersea / beach style
    poster: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=600&auto=format&fit=crop",
    quality: "4K UHD",
    trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    cast: [
      { name: "Jason Momoa", role: "Captain Arthur", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
      { name: "Amber Heard", role: "Dr. Mera", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" }
    ],
    showtimes: {
      "Oceanic Dolby IMAX": ["12:00 PM", "4:00 PM", "8:00 PM"],
      "Trench 3D Room": ["2:30 PM", "6:30 PM", "10:30 PM"]
    }
  }
];

let FOOD_ITEMS = [
  { id: "combo-popcorn", name: "Popcorn Caramel Combo", type: "veg", price: 350, desc: "Large popcorn with hot caramel glaze & two sodas.", img: "https://images.unsplash.com/photo-1578496479914-7235024c1176?q=80&w=200&auto=format&fit=crop" },
  { id: "combo-burger", name: "Chicken Burger Feast", type: "nonveg", price: 420, desc: "Juicy chicken breast burger, fries & Pepsi.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200&auto=format&fit=crop" },
  { id: "combo-nachos", name: "Vegan Loaded Nachos", type: "vegan", price: 380, desc: "Tortilla chips loaded with vegan cheese, jalapeños & salsa.", img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=200&auto=format&fit=crop" },
  { id: "soda-large", name: "Cold Soda Large", type: "veg", price: 150, desc: "Chilled zero sugar cola fountain drink (650ml).", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=200&auto=format&fit=crop" },
  { id: "hotdog-classic", name: "Classic Pork Hotdog", type: "nonveg", price: 250, desc: "Grilled classic hotdog inside soft bun with mustard.", img: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=200&auto=format&fit=crop" }
];

const REGIONS = {
  "Asia": { currency: "₹", convRate: 1, locale: "en-IN", timezone: "Asia/Kolkata" },
  "North America": { currency: "$", convRate: 0.012, locale: "en-US", timezone: "America/New_York" },
  "Middle East": { currency: "SAR", convRate: 0.045, locale: "ar-SA", timezone: "Asia/Riyadh" },
  "South Africa": { currency: "ZAR", convRate: 0.22, locale: "en-ZA", timezone: "Africa/Johannesburg" },
  "Europe": { currency: "€", convRate: 0.011, locale: "fr-FR", timezone: "Europe/Paris" }
};

const DICTIONARY = {
  en: {
    brand: "CineSphere",
    searchPlaceholder: "Search movies...",
    nowShowing: "Now Showing in ",
    trending: "Trending This Week",
    comingSoon: "Coming Soon",
    login: "Login",
    signup: "Sign Up",
    logout: "Logout",
    bookNow: "Book Now",
    bookTickets: "Book Tickets",
    watchlist: "Watchlist",
    notifications: "Notifications",
    guest: "Guest",
    loyaltyBanner: "CineSphere Gold Rewards",
    proceedToFood: "Proceed to Add-ons",
    proceedToPayment: "Proceed to Payment",
    payNow: "Pay Now"
  },
  hi: {
    brand: "सिनेस्फ़ियर",
    searchPlaceholder: "फ़िल्में खोजें...",
    nowShowing: "अभी सिनेमाघरों में - ",
    trending: "इस सप्ताह के रुझान",
    comingSoon: "जल्द आ रहा है",
    login: "लॉग इन",
    signup: "साइन अप",
    logout: "लॉगआउट",
    bookNow: "टिकट बुक करें",
    bookTickets: "टिकट बुक करें",
    watchlist: "पसंदीदा फ़िल्में",
    notifications: "सूचनाएं",
    guest: "अतिथि",
    loyaltyBanner: "सिनेस्फ़ियर गोल्ड पुरस्कार",
    proceedToFood: "नाश्ता जोड़ें",
    proceedToPayment: "भुगतान पर जाएँ",
    payNow: "अभी भुगतान करें"
  },
  ar: {
    brand: "سينيسفير",
    searchPlaceholder: "ابحث عن أفلام...",
    nowShowing: "يعرض الآن في ",
    trending: "الأكثر شعبية هذا الأسبوع",
    comingSoon: "قريباً",
    login: "تسجيل الدخول",
    signup: "إنشاء حساب",
    logout: "تسجيل الخروج",
    bookNow: "احجز الآن",
    bookTickets: "حجز التذاكر",
    watchlist: "قائمة المشاهدة",
    notifications: "إشعارات",
    guest: "ضيف",
    loyaltyBanner: "مكافآت سينيسفير الذهبية",
    proceedToFood: "الانتقال إلى المأكولات",
    proceedToPayment: "الانتقال إلى الدفع",
    payNow: "ادفع الآن"
  },
  es: {
    brand: "CineSphere",
    searchPlaceholder: "Buscar películas...",
    nowShowing: "En Cartelera en ",
    trending: "Tendencias de la Semana",
    comingSoon: "Próximamente",
    login: "Iniciar Sesión",
    signup: "Registrarse",
    logout: "Cerrar Sesión",
    bookNow: "Reservar",
    bookTickets: "Reservar Entradas",
    watchlist: "Mis Favoritas",
    notifications: "Notificaciones",
    guest: "Invitado",
    loyaltyBanner: "Premios CineSphere Gold",
    proceedToFood: "Añadir Aperitivos",
    proceedToPayment: "Proceder al Pago",
    payNow: "Pagar Ahora"
  },
  fr: {
    brand: "CineSphere",
    searchPlaceholder: "Rechercher des films...",
    nowShowing: "À l'affiche en ",
    trending: "Tendances de la semaine",
    comingSoon: "Bientôt disponible",
    login: "Connexion",
    signup: "S'inscrire",
    logout: "Déconnexion",
    bookNow: "Réserver",
    bookTickets: "Réserver Billets",
    watchlist: "Ma Liste",
    notifications: "Notifications",
    guest: "Invité",
    loyaltyBanner: "CineSphere Récompenses Gold",
    proceedToFood: "Ajouter Snack combos",
    proceedToPayment: "Procéder au Paiement",
    payNow: "Payer Maintenant"
  }
};

// --- CLIENT STATE ---
const State = {
  currentUser: null,
  watchlist: JSON.parse(localStorage.getItem("cinesphere_watchlist") || "[]"),
  currentRegion: "Asia",
  currentLang: "en",
  currentLocation: "Detect Geolocation",
  currentView: "login",
  selectedMovie: null,
  selectedDate: null,
  selectedFormat: "2D",
  selectedPrice: 350,
  selectedTheater: "",
  selectedTime: "",
  selectedSeats: [], // Array of seat objects {row, seatNo, type, price}
  foodSelection: {}, // key: foodId, value: quantity
  lastBrowsedMovieId: localStorage.getItem("cinesphere_last_browsed"),
  loyaltyPoints: parseInt(localStorage.getItem("cinesphere_loyalty_pts") || "120"),
  activeZoom: 1.0,
  audioDescriptionActive: false
};

// --- CORE UTILITIES ---
function announceToScreenReader(message) {
  const announcer = document.getElementById("sr-announcer");
  if (announcer) {
    announcer.textContent = "";
    setTimeout(() => {
      announcer.textContent = message;
    }, 100);
  }
}

// Format currency based on current region
function formatCurrency(amount) {
  const regConfig = REGIONS[State.currentRegion];
  const converted = amount * regConfig.convRate;
  // Intl format helper
  return new Intl.NumberFormat(regConfig.locale, {
    style: "currency",
    currency: getCurrencyCode(State.currentRegion),
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(converted);
}

function getCurrencyCode(region) {
  switch (region) {
    case "Asia": return "INR";
    case "North America": return "USD";
    case "Middle East": return "SAR";
    case "South Africa": return "ZAR";
    case "Europe": return "EUR";
    default: return "USD";
  }
}

// Router dynamic render views
function navigateTo(viewId) {
  const previousView = State.currentView;
  State.currentView = viewId;

  // Toggle active class on pages
  const views = document.querySelectorAll(".view-section");
  views.forEach(view => {
    view.classList.remove("active");
    if (view.id === `view-${viewId}`) {
      view.classList.add("active");
    }
  });

  // Handle background movie scene poster
  const bgImg = document.getElementById("global-bg");
  if (viewId === "login") {
    bgImg.src = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop"; // Classic dark cinema hall
    bgImg.classList.add("loaded");
  } else if (State.selectedMovie && (viewId === "detail" || viewId === "seats" || viewId === "food" || viewId === "payment" || viewId === "confirmation")) {
    bgImg.src = State.selectedMovie.backdrop;
    bgImg.classList.add("loaded");
  } else {
    // default home featured backdrop
    bgImg.src = MOVIES[0].backdrop;
    bgImg.classList.add("loaded");
  }

  // Manage Keyboard Focus (Accessibility)
  // Shift focus to main content container to allow screen reader readings of the new page
  const mainContent = document.getElementById("main-content");
  mainContent.focus();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });

  announceToScreenReader(`Navigated to ${viewId} page.`);
}

// --- LOCAL STORAGE MOCK SYNC ---
function syncLocalStore() {
  localStorage.setItem("cinesphere_watchlist", JSON.stringify(State.watchlist));
  localStorage.setItem("cinesphere_loyalty_pts", State.loyaltyPoints.toString());
  if (State.selectedMovie) {
    localStorage.setItem("cinesphere_last_browsed", State.selectedMovie.id);
  }
}

// --- BACKEND API INTEGRATIONS ---
async function loadDataFromBackend() {
  try {
    const moviesResponse = await fetch("/api/movies");
    if (moviesResponse.ok) {
      const data = await moviesResponse.json();
      if (Array.isArray(data) && data.length > 0) {
        MOVIES = data;
      }
    }
  } catch (err) {
    console.warn("Could not fetch movies from backend API, using default mock data:", err);
  }

  try {
    const foodResponse = await fetch("/api/food");
    if (foodResponse.ok) {
      const data = await foodResponse.json();
      if (Array.isArray(data) && data.length > 0) {
        FOOD_ITEMS = data;
      }
    }
  } catch (err) {
    console.warn("Could not fetch food items from backend API, using default mock data:", err);
  }

  // Load last browsed movie if exits
  if (State.lastBrowsedMovieId) {
    const movie = MOVIES.find(m => m.id === State.lastBrowsedMovieId);
    if (movie) {
      renderRecentlyViewedBanner(movie);
    }
  }

  renderHomeCarousels();
  renderWatchlistDropdown();
}

async function fetchBookingHistory(userName) {
  const historyList = document.getElementById("booking-history-list");
  if (!historyList) return;

  try {
    const response = await fetch("/api/bookings");
    if (response.ok) {
      const bookings = await response.json();
      // Filter bookings for current user
      const userBookings = bookings.filter(b => b.user === userName);

      if (userBookings.length === 0) {
        historyList.innerHTML = `<div class="dropdown-item" style="color: var(--text-muted); font-size: 0.8rem; pointer-events: none;">No bookings found.</div>`;
        return;
      }

      historyList.innerHTML = "";
      userBookings.forEach(b => {
        const item = document.createElement("div");
        item.className = "dropdown-item";
        item.style.flexDirection = "column";
        item.style.alignItems = "flex-start";
        item.style.cursor = "default";
        item.style.borderBottom = "1px solid var(--border-glass)";
        item.style.padding = "6px 12px";
        item.innerHTML = `
          <div style="font-weight: 600; font-size: 0.85rem; color: var(--accent-gold);">${b.movie}</div>
          <div style="font-size: 0.75rem; color: var(--text-secondary);">${b.date} @ ${b.time}</div>
          <div style="font-size: 0.7rem; color: var(--text-muted);">Seats: ${b.seats} | ID: ${b.bookingId}</div>
        `;
        historyList.appendChild(item);
      });
    }
  } catch (err) {
    console.error("Error fetching booking history:", err);
    historyList.innerHTML = `<div class="dropdown-item" style="color: var(--text-muted); font-size: 0.8rem; pointer-events: none;">Failed to load history.</div>`;
  }
}

// --- INITIALIZE & CONTROLS BINDING ---
document.addEventListener("DOMContentLoaded", () => {
  initAccessibilityPreferences();
  initLanguagesAndRegions();
  initRoutingEvents();
  initAuthValidation();
  initSearchAutocomplete();
  initWatchlistAndNotifications();
  initSeatSelectionGrid();
  initFoodOrderingPage();
  initCheckoutFlow();

  // Set default wallpaper
  const bgImg = document.getElementById("global-bg");
  bgImg.src = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop";
  bgImg.classList.add("loaded");

  // Check offline state
  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
  updateOnlineStatus();

  loadDataFromBackend();
});

// Offline Banner Listener
function updateOnlineStatus() {
  const banner = document.getElementById("offline-banner");
  if (navigator.onLine) {
    banner.classList.remove("active");
  } else {
    banner.classList.add("active");
    announceToScreenReader("You are currently offline. Movie listings and history loaded from cache.");
  }
}

// --- ACCESSIBILITY PREFERENCES ---
function initAccessibilityPreferences() {
  // LocalStorage check
  const savedTheme = localStorage.getItem("cinesphere_theme") || "dark";
  const savedContrast = localStorage.getItem("cinesphere_contrast") || "normal";
  const savedFontSize = localStorage.getItem("cinesphere_fontsize") || "medium";

  document.documentElement.setAttribute("data-theme", savedTheme);
  document.documentElement.setAttribute("data-contrast", savedContrast);
  document.documentElement.setAttribute("data-font-size", savedFontSize);

  // Settings dropdown toggles
  const btnSettings = document.getElementById("btn-settings-dropdown");
  const settingsMenu = document.getElementById("settings-menu");

  btnSettings.addEventListener("click", () => {
    const expanded = btnSettings.getAttribute("aria-expanded") === "true";
    btnSettings.setAttribute("aria-expanded", !expanded);
    settingsMenu.classList.toggle("active");
  });

  // Close dropdown on click outside
  document.addEventListener("click", (e) => {
    if (!btnSettings.contains(e.target) && !settingsMenu.contains(e.target)) {
      btnSettings.setAttribute("aria-expanded", "false");
      settingsMenu.classList.remove("active");
    }
  });

  // Settings Items Actions
  document.getElementById("opt-theme-dark").addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("cinesphere_theme", "dark");
    announceToScreenReader("Theme switched to dark cinematic mode");
  });
  document.getElementById("opt-theme-light").addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("cinesphere_theme", "light");
    announceToScreenReader("Theme switched to light modern mode");
  });
  document.getElementById("opt-contrast-toggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-contrast");
    const next = current === "high" ? "normal" : "high";
    document.documentElement.setAttribute("data-contrast", next);
    localStorage.setItem("cinesphere_contrast", next);
    announceToScreenReader(`High contrast mode ${next === 'high' ? 'enabled' : 'disabled'}`);
  });

  document.getElementById("opt-text-medium").addEventListener("click", () => {
    document.documentElement.setAttribute("data-font-size", "medium");
    localStorage.setItem("cinesphere_fontsize", "medium");
    announceToScreenReader("Text size set to standard");
  });
  document.getElementById("opt-text-large").addEventListener("click", () => {
    document.documentElement.setAttribute("data-font-size", "large");
    localStorage.setItem("cinesphere_fontsize", "large");
    announceToScreenReader("Text size set to large 125%");
  });
  document.getElementById("opt-text-xlarge").addEventListener("click", () => {
    document.documentElement.setAttribute("data-font-size", "xlarge");
    localStorage.setItem("cinesphere_fontsize", "xlarge");
    announceToScreenReader("Text size set to extra large 150%");
  });
}

// --- LANGUAGE & REGIONS SWITCHER ---
function initLanguagesAndRegions() {
  const langSelect = document.getElementById("language-select");
  const regionSelect = document.getElementById("region-select");
  const locationBtn = document.getElementById("btn-location-select");
  const locationText = document.getElementById("current-location");

  // Geolocation mock
  locationBtn.addEventListener("click", () => {
    locationText.textContent = "Locating...";
    announceToScreenReader("Requesting geolocation data...");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          locationText.textContent = "Mumbai, IN";
          State.currentLocation = "Mumbai, IN";
          announceToScreenReader("Location successfully set to Mumbai, India.");
          locationBtn.setAttribute("aria-label", `Select location, current: Mumbai, IN`);
        },
        (err) => {
          locationText.textContent = "New York, US";
          State.currentLocation = "New York, US";
          announceToScreenReader("Location permission denied. Defaulted to New York, US.");
          locationBtn.setAttribute("aria-label", `Select location, current: New York, US`);
        }
      );
    } else {
      locationText.textContent = "London, UK";
    }
  });

  // Translate labels on language change
  langSelect.addEventListener("change", () => {
    const lang = langSelect.value;
    State.currentLang = lang;
    document.documentElement.setAttribute("lang", lang);

    // RTL for Arabic
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.removeAttribute("dir");
    }

    translateDOM(lang);
    announceToScreenReader(`Language switched to ${langSelect.options[langSelect.selectedIndex].text}`);
  });

  // Region switcher
  regionSelect.addEventListener("change", () => {
    const region = regionSelect.value;
    State.currentRegion = region;

    // Update labels in region announcements
    const labels = document.querySelectorAll(".active-region-label");
    labels.forEach(lbl => lbl.textContent = region);

    // Redraw showing movie carousels with matching prices/currencies
    renderHomeCarousels();
    if (State.selectedMovie) {
      renderShowtimes();
    }

    announceToScreenReader(`Region changed to ${region}. Currencies and dates updated to ${getCurrencyCode(region)}.`);
  });
}

function translateDOM(lang) {
  const dict = DICTIONARY[lang] || DICTIONARY.en;

  // Header translating
  document.querySelector(".brand-logo").textContent = dict.brand;
  document.getElementById("movie-search").placeholder = dict.searchPlaceholder;
  document.getElementById("btn-proceed-to-food").textContent = dict.proceedToFood;
  document.getElementById("btn-proceed-to-payment").textContent = dict.proceedToPayment;
  document.getElementById("btn-pay-now").textContent = dict.payNow;

  // Tabs translation
  document.getElementById("tab-login").textContent = dict.login;
  document.getElementById("tab-signup").textContent = dict.signup;
  document.getElementById("btn-logout").textContent = dict.logout;

  // Carousels label titles
  document.getElementById("section-now-showing").innerHTML = `${dict.nowShowing} <span class="active-region-label">${State.currentRegion}</span>`;
  document.getElementById("section-trending").textContent = dict.trending;
  document.getElementById("section-coming-soon").textContent = dict.comingSoon;
}

// --- ROUTER ACTIONS ---
function initRoutingEvents() {
  // Brand Logo links to Home page (if logged in, else login page)
  document.getElementById("brand-link").addEventListener("click", (e) => {
    e.preventDefault();
    if (State.currentUser) {
      navigateTo("home");
    } else {
      navigateTo("login");
    }
  });

  // Explore more movies from confirmation goes home
  document.getElementById("btn-conf-home").addEventListener("click", () => {
    navigateTo("home");
  });
}

// --- PAGE 1: AUTHENTICATION VALIDATION & ACTIONS ---
function initAuthValidation() {
  const tabLogin = document.getElementById("tab-login");
  const tabSignup = document.getElementById("tab-signup");
  const formLogin = document.getElementById("form-login");
  const formSignup = document.getElementById("form-signup");

  // Tab switching
  tabLogin.addEventListener("click", () => {
    tabLogin.classList.add("active");
    tabLogin.setAttribute("aria-selected", "true");
    tabLogin.setAttribute("tabindex", "0");
    tabSignup.classList.remove("active");
    tabSignup.setAttribute("aria-selected", "false");
    tabSignup.setAttribute("tabindex", "-1");
    formLogin.classList.add("active");
    formSignup.classList.remove("active");
    announceToScreenReader("Switched to Login Form");
  });

  tabSignup.addEventListener("click", () => {
    tabSignup.classList.add("active");
    tabSignup.setAttribute("aria-selected", "true");
    tabSignup.setAttribute("tabindex", "0");
    tabLogin.classList.remove("active");
    tabLogin.setAttribute("aria-selected", "false");
    tabLogin.setAttribute("tabindex", "-1");
    formSignup.classList.add("active");
    formLogin.classList.remove("active");
    announceToScreenReader("Switched to Sign Up Form");
  });

  // Keyboard navigation between tabs (Left/Right Arrows)
  const tabList = document.querySelector('[role="tablist"]');
  tabList.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      if (tabLogin.classList.contains("active")) {
        tabSignup.click();
        tabSignup.focus();
      } else {
        tabLogin.click();
        tabLogin.focus();
      }
    }
  });

  // Show/Hide password toggles
  setupPwdToggle("btn-toggle-login-pwd", "login-password");
  setupPwdToggle("btn-toggle-signup-pwd", "signup-password");

  function setupPwdToggle(btnId, inputId) {
    const btn = document.getElementById(btnId);
    const input = document.getElementById(inputId);
    btn.addEventListener("click", () => {
      if (input.type === "password") {
        input.type = "text";
        btn.textContent = "Hide";
        btn.setAttribute("aria-label", "Hide password");
      } else {
        input.type = "password";
        btn.textContent = "Show";
        btn.setAttribute("aria-label", "Show password");
      }
    });
  }

  // Real-time inline field validators
  const loginEmail = document.getElementById("login-email");
  const loginPwd = document.getElementById("login-password");

  loginEmail.addEventListener("blur", () => validateEmailOrPhone(loginEmail, "err-login-email"));
  loginPwd.addEventListener("blur", () => validateLength(loginPwd, "err-login-pwd", 6, "Password must be at least 6 characters"));

  // Login Submit
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const isEValid = validateEmailOrPhone(loginEmail, "err-login-email");
    const isPValid = validateLength(loginPwd, "err-login-pwd", 6, "Password must be at least 6 characters");

    if (isEValid && isPValid) {
      // Simulate API submit
      const spinner = document.getElementById("login-spinner");
      const btnTxt = document.getElementById("login-btn-text");
      const btn = document.getElementById("btn-login-submit");

      btn.disabled = true;
      spinner.classList.add("active");
      btnTxt.textContent = "Logging in...";
      announceToScreenReader("Sending authentication credentials...");

      setTimeout(() => {
        spinner.classList.remove("active");
        btn.disabled = false;
        btnTxt.textContent = "Log In";

        // Log in user
        const val = loginEmail.value.trim();
        const userName = val.includes("@") ? val.split("@")[0] : "San J";
        loginUser(userName);
      }, 1500);
    }
  });

  // Sign up Validation
  const sName = document.getElementById("signup-name");
  const sEmail = document.getElementById("signup-email");
  const sPhone = document.getElementById("signup-phone");
  const sPwd = document.getElementById("signup-password");
  const sConfirm = document.getElementById("signup-confirm");
  const sTerms = document.getElementById("signup-terms");

  sName.addEventListener("blur", () => validateLength(sName, "err-signup-name", 3, "Name must be at least 3 characters"));
  sEmail.addEventListener("blur", () => validateRegex(sEmail, "err-signup-email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"));
  sPhone.addEventListener("blur", () => validateRegex(sPhone, "err-signup-phone", /^\d{9,10}$/, "Phone must be 9-10 digits"));
  sPwd.addEventListener("blur", () => validateLength(sPwd, "err-signup-pwd", 8, "Password must be at least 8 characters"));
  sConfirm.addEventListener("blur", () => validateConfirm(sPwd, sConfirm, "err-signup-confirm"));

  formSignup.addEventListener("submit", (e) => {
    e.preventDefault();
    const isV1 = validateLength(sName, "err-signup-name", 3, "Name must be at least 3 characters");
    const isV2 = validateRegex(sEmail, "err-signup-email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format");
    const isV3 = validateRegex(sPhone, "err-signup-phone", /^\d{9,10}$/, "Phone must be 9-10 digits");
    const isV4 = validateLength(sPwd, "err-signup-pwd", 8, "Password must be at least 8 characters");
    const isV5 = validateConfirm(sPwd, sConfirm, "err-signup-confirm");

    let isTermsOk = true;
    const errTerms = document.getElementById("err-signup-terms");
    if (!sTerms.checked) {
      errTerms.textContent = "You must accept the terms & conditions to proceed";
      errTerms.classList.add("active");
      sTerms.setAttribute("aria-invalid", "true");
      isTermsOk = false;
    } else {
      errTerms.classList.remove("active");
      sTerms.removeAttribute("aria-invalid");
    }

    if (isV1 && isV2 && isV3 && isV4 && isV5 && isTermsOk) {
      const spinner = document.getElementById("signup-spinner");
      const btnTxt = document.getElementById("signup-btn-text");
      const btn = document.getElementById("btn-signup-submit");

      btn.disabled = true;
      spinner.classList.add("active");
      btnTxt.textContent = "Creating Account...";
      announceToScreenReader("Sending sign up registration data...");

      setTimeout(() => {
        spinner.classList.remove("active");
        btn.disabled = false;
        btnTxt.textContent = "Create Account";
        loginUser(sName.value.trim());
      }, 1500);
    }
  });

  // Helpers
  function validateLength(input, errId, minLen, errorMsg) {
    const errorEl = document.getElementById(errId);
    if (input.value.trim().length < minLen) {
      errorEl.textContent = errorMsg;
      errorEl.classList.add("active");
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", errId);
      return false;
    } else {
      errorEl.classList.remove("active");
      input.removeAttribute("aria-invalid");
      input.removeAttribute("aria-describedby");
      return true;
    }
  }

  function validateRegex(input, errId, regex, errorMsg) {
    const errorEl = document.getElementById(errId);
    if (!regex.test(input.value.trim())) {
      errorEl.textContent = errorMsg;
      errorEl.classList.add("active");
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", errId);
      return false;
    } else {
      errorEl.classList.remove("active");
      input.removeAttribute("aria-invalid");
      input.removeAttribute("aria-describedby");
      return true;
    }
  }

  function validateEmailOrPhone(input, errId) {
    const val = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{8,15}$/;

    const errorEl = document.getElementById(errId);
    if (emailRegex.test(val) || phoneRegex.test(val)) {
      errorEl.classList.remove("active");
      input.removeAttribute("aria-invalid");
      input.removeAttribute("aria-describedby");
      return true;
    } else {
      errorEl.textContent = "Please enter a valid email or mobile number";
      errorEl.classList.add("active");
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", errId);
      return false;
    }
  }

  function validateConfirm(pwdInput, confirmInput, errId) {
    const errorEl = document.getElementById(errId);
    if (pwdInput.value !== confirmInput.value) {
      errorEl.textContent = "Passwords do not match";
      errorEl.classList.add("active");
      confirmInput.setAttribute("aria-invalid", "true");
      confirmInput.setAttribute("aria-describedby", errId);
      return false;
    } else {
      errorEl.classList.remove("active");
      confirmInput.removeAttribute("aria-invalid");
      confirmInput.removeAttribute("aria-describedby");
      return true;
    }
  }
}

function loginUser(name) {
  State.currentUser = name;
  document.getElementById("user-display-name").textContent = name;
  document.getElementById("profile-greet").textContent = `Welcome, ${name}`;

  // Set up Logout
  document.getElementById("btn-logout").style.display = "block";
  document.getElementById("btn-logout").onclick = () => {
    State.currentUser = null;
    document.getElementById("user-display-name").textContent = "Guest";
    document.getElementById("profile-greet").textContent = "Welcome Guest";

    // Clear booking history UI
    const historyList = document.getElementById("booking-history-list");
    if (historyList) {
      historyList.innerHTML = `<div class="dropdown-item" style="color: var(--text-muted); font-size: 0.8rem; pointer-events: none;">No bookings found.</div>`;
    }

    navigateTo("login");
    announceToScreenReader("Logged out successfully.");
  };

  fetchBookingHistory(name);
  navigateTo("home");
  announceToScreenReader(`Login successful. Welcome back ${name}!`);
}

// --- PAGE 2: HOME PAGE RENDER CAROUSELS & MOVIE CARDS ---
function renderHomeCarousels() {
  const trackNowShowing = document.getElementById("track-now-showing");
  const trackTrending = document.getElementById("track-trending");
  const gridComingSoon = document.getElementById("grid-coming-soon");

  trackNowShowing.innerHTML = "";
  trackTrending.innerHTML = "";
  gridComingSoon.innerHTML = "";

  // Set Hero Movie
  const heroMovie = MOVIES[0]; // Dune
  document.getElementById("hero-title").textContent = heroMovie.title;
  document.getElementById("hero-tagline").textContent = heroMovie.tagline;
  document.getElementById("hero-img").src = heroMovie.backdrop;
  document.getElementById("hero-img").alt = `${heroMovie.title} - ${heroMovie.tagline}`;

  document.getElementById("btn-hero-book").onclick = () => selectMovieDetail(heroMovie.id);
  document.getElementById("btn-hero-play").onclick = () => openTrailerModal(heroMovie);

  // Split movies
  MOVIES.forEach(movie => {
    // Check release date to split into Now Showing (before current date) and Coming Soon
    const releaseTime = new Date(movie.releaseDate).getTime();
    const currTime = new Date("2026-06-25").getTime();

    if (releaseTime <= currTime) {
      // Now Showing
      const card = createMovieCard(movie, true);
      trackNowShowing.appendChild(card);

      // Trending (Mocking by adding alternative sorting)
      const trendCard = createMovieCard(movie, true);
      trackTrending.appendChild(trendCard);
    } else {
      // Coming soon
      const gridCard = createMovieCard(movie, false);
      gridComingSoon.appendChild(gridCard);
    }
  });

  // Apply filters on change
  document.getElementById("filter-genre").onchange = applyFilters;
  document.getElementById("filter-lang").onchange = applyFilters;
  document.getElementById("filter-format").onchange = applyFilters;

  // Bind Carousel Buttons
  setupCarouselScrolls();
}

function createMovieCard(movie, isBookingEnabled) {
  const card = document.createElement("article");
  card.className = "movie-card glass-panel";
  card.setAttribute("role", "group");
  card.setAttribute("aria-label", `${movie.title}, Rating ${movie.rating}, Language ${movie.language}`);

  const isFavorited = State.watchlist.includes(movie.id);
  const qualityClass = movie.quality && movie.quality.includes("8K") ? "quality-8k" : "quality-4k";
  const qualityBadgeHtml = movie.quality ? `<span class="movie-card-quality-badge ${qualityClass}">${movie.quality}</span>` : "";

  card.innerHTML = `
    <div class="movie-card-poster-wrapper">
      <img class="movie-card-poster" src="${movie.poster}" alt="Poster of film ${movie.title}" loading="lazy" width="200" height="270">
      <span class="movie-card-badge">${movie.rating} ⭐</span>
      ${qualityBadgeHtml}
      <button class="movie-card-favorite-btn ${isFavorited ? 'active' : ''}" aria-label="${isFavorited ? 'Remove from Watchlist' : 'Add to Watchlist'}" data-movie-id="${movie.id}">
        ♥
      </button>
    </div>
    <div class="movie-card-info">
      <h4 class="movie-card-title">${movie.title}</h4>
      <div class="movie-card-meta">
        <span>${movie.duration}</span>
        <span class="movie-card-genres">${movie.genre.slice(0, 2).join('/')}</span>
      </div>
      ${isBookingEnabled ?
      `<button class="btn-primary btn-card-book" aria-label="Book tickets for ${movie.title}">Book Now</button>` :
      `<span style="font-size:0.75rem; text-align:center; color: var(--accent-blue); font-weight:600;">Releasing ${formatMovieReleaseDate(movie.releaseDate)}</span>`
    }
    </div>
  `;

  // Favorite button
  const favBtn = card.querySelector(".movie-card-favorite-btn");
  favBtn.onclick = (e) => {
    e.stopPropagation();
    toggleWatchlist(movie.id, favBtn);
  };

  // Click card to go detail
  card.onclick = () => selectMovieDetail(movie.id);

  if (isBookingEnabled) {
    const bookBtn = card.querySelector(".btn-card-book");
    bookBtn.onclick = (e) => {
      e.stopPropagation();
      selectMovieDetail(movie.id);
    };
  }

  return card;
}

function formatMovieReleaseDate(dateStr) {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat(REGIONS[State.currentRegion].locale, { month: "short", day: "numeric", year: "numeric" }).format(date);
}

// Carousel Scroll helper
function setupCarouselScrolls() {
  const outerContainers = document.querySelectorAll(".carousel-outer");
  outerContainers.forEach(container => {
    const prev = container.querySelector(".carousel-btn-prev");
    const next = container.querySelector(".carousel-btn-next");
    const wrapper = container.querySelector(".carousel-track-wrapper");

    prev.onclick = () => {
      wrapper.scrollBy({ left: -300, behavior: "smooth" });
    };
    next.onclick = () => {
      wrapper.scrollBy({ left: 300, behavior: "smooth" });
    };
  });
}

// Filters logic
function applyFilters() {
  const genre = document.getElementById("filter-genre").value;
  const lang = document.getElementById("filter-lang").value;
  const format = document.getElementById("filter-format").value;

  const cards = document.querySelectorAll("#track-now-showing .movie-card");
  let matchesCount = 0;

  cards.forEach(card => {
    const movieObj = MOVIES.find(m => card.getAttribute("aria-label").includes(m.title));
    if (!movieObj) return;

    const genreMatch = genre === "all" || movieObj.genre.includes(genre);
    const langMatch = lang === "all" || movieObj.language.toLowerCase() === lang.toLowerCase();
    const formatMatch = format === "all" || movieObj.formats.includes(format);

    if (genreMatch && langMatch && formatMatch) {
      card.style.display = "flex";
      matchesCount++;
    } else {
      card.style.display = "none";
    }
  });

  announceToScreenReader(`Filtering complete. Found ${matchesCount} matching movies.`);
}

// Watchlist toggle
function toggleWatchlist(movieId, btnElement) {
  const index = State.watchlist.indexOf(movieId);
  const movie = MOVIES.find(m => m.id === movieId);
  if (index > -1) {
    State.watchlist.splice(index, 1);
    btnElement.classList.remove("active");
    btnElement.setAttribute("aria-label", "Add to Watchlist");
    announceToScreenReader(`Removed ${movie.title} from watchlist.`);
  } else {
    State.watchlist.push(movieId);
    btnElement.classList.add("active");
    btnElement.setAttribute("aria-label", "Remove from Watchlist");
    announceToScreenReader(`Added ${movie.title} to watchlist.`);
  }
  syncLocalStore();
  renderWatchlistDropdown();
}

function renderWatchlistDropdown() {
  const countBadge = document.getElementById("watchlist-count");
  const list = document.getElementById("watchlist-items-list");

  countBadge.textContent = State.watchlist.length;
  countBadge.parentElement.setAttribute("aria-label", `Watchlist, ${State.watchlist.length} saved items`);

  if (State.watchlist.length === 0) {
    list.innerHTML = `<div class="dropdown-item" style="color: var(--text-muted);">No movies saved yet. Click the heart icon on any card!</div>`;
    return;
  }

  list.innerHTML = "";
  State.watchlist.forEach(id => {
    const movie = MOVIES.find(m => m.id === id);
    if (!movie) return;

    const item = document.createElement("button");
    item.className = "dropdown-item";
    item.innerHTML = `❤️ <span>${movie.title}</span>`;
    item.onclick = () => {
      selectMovieDetail(movie.id);
      document.getElementById("watchlist-dropdown").classList.remove("active");
    };
    list.appendChild(item);
  });
}

function renderRecentlyViewedBanner(movie) {
  // If we want a dynamic banner on home view
  const heroSection = document.getElementById("view-home");
  let recentBanner = document.getElementById("recently-viewed-banner");

  if (!recentBanner) {
    recentBanner = document.createElement("div");
    recentBanner.id = "recently-viewed-banner";
    recentBanner.className = "loyalty-banner glass-panel";
    recentBanner.style.border = "1px solid var(--accent-blue)";
    recentBanner.style.marginTop = "2rem";

    // Insert after filter bar
    const filters = document.querySelector(".filter-bar");
    filters.parentNode.insertBefore(recentBanner, filters.nextSibling);
  }

  recentBanner.innerHTML = `
    <div style="flex-grow: 1;">
      <span class="loyalty-title" style="color: var(--accent-blue);">Continue where you left off</span>
      <p style="font-size:0.85rem; color: var(--text-secondary);">You were recently looking at details for <strong>${movie.title}</strong>.</p>
    </div>
    <button class="btn-primary" id="btn-recent-resume" style="width: auto; padding: 8px 20px;">Resume Booking</button>
  `;

  document.getElementById("btn-recent-resume").onclick = () => {
    selectMovieDetail(movie.id);
  };
}

// --- SEARCH AUTOCOMPLETE & VOICE ---
function initSearchAutocomplete() {
  const searchInput = document.getElementById("movie-search");
  const resultsDropdown = document.getElementById("search-dropdown");
  const btnVoice = document.getElementById("btn-voice-search");

  let debounceTimer;

  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const val = searchInput.value.trim().toLowerCase();
      if (val.length < 2) {
        resultsDropdown.classList.remove("active");
        return;
      }

      // Filter titles
      const matches = MOVIES.filter(m => m.title.toLowerCase().includes(val));
      renderSearchResults(matches);
    }, 200);
  });

  function renderSearchResults(matches) {
    resultsDropdown.innerHTML = "";
    if (matches.length === 0) {
      resultsDropdown.innerHTML = `<div style="padding: 12px; font-size: 0.85rem; color: var(--text-secondary);">No movies found</div>`;
      resultsDropdown.classList.add("active");
      return;
    }

    matches.forEach((movie, index) => {
      const item = document.createElement("div");
      item.className = "search-result-item";
      item.setAttribute("role", "option");
      item.setAttribute("id", `search-opt-${index}`);
      item.setAttribute("tabindex", "0");
      item.innerHTML = `
        <img class="search-result-img" src="${movie.poster}" alt="">
        <div class="search-result-info">
          <div class="search-result-title">${movie.title}</div>
          <div class="search-result-meta">${movie.genre.join(', ')} • ${movie.duration}</div>
        </div>
        <button class="btn-primary" style="width: auto; font-size: 0.75rem; padding: 4px 10px;" tabindex="-1">Book</button>
      `;

      item.onclick = () => {
        selectMovieDetail(movie.id);
        resultsDropdown.classList.remove("active");
        searchInput.value = "";
      };

      // Keyboard select autocomplete
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          item.click();
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          const next = item.nextElementSibling;
          if (next) next.focus();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          const prev = item.previousElementSibling;
          if (prev) prev.focus();
        }
      });

      resultsDropdown.appendChild(item);
    });

    resultsDropdown.classList.add("active");
    searchInput.setAttribute("aria-controls", "search-dropdown");
  }

  // Keyboard navigation from input
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" && resultsDropdown.classList.contains("active")) {
      const firstOpt = resultsDropdown.querySelector('[role="option"]');
      if (firstOpt) {
        e.preventDefault();
        firstOpt.focus();
      }
    }
  });

  // Close search list on outside click
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !resultsDropdown.contains(e.target)) {
      resultsDropdown.classList.remove("active");
    }
  });

  // Voice Search (Mock Web Speech API)
  btnVoice.addEventListener("click", () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      // API fallback simulation
      announceToScreenReader("Voice search simulation started. Say movie title now.");
      searchInput.value = "Listening...";
      setTimeout(() => {
        searchInput.value = "Dune: Part Three";
        searchInput.dispatchEvent(new Event("input"));
        announceToScreenReader("Voice search matched Dune: Part Three.");
      }, 2000);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = State.currentLang;
    recognition.interimResults = false;

    recognition.onstart = () => {
      btnVoice.style.color = "var(--color-error)";
      searchInput.value = "Listening...";
      announceToScreenReader("Listening for movie name...");
    };

    recognition.onresult = (e) => {
      const resultStr = e.results[0][0].transcript;
      searchInput.value = resultStr;
      searchInput.dispatchEvent(new Event("input"));
      announceToScreenReader(`Voice search search query recognized: ${resultStr}`);
    };

    recognition.onerror = () => {
      btnVoice.style.color = "var(--text-secondary)";
      searchInput.value = "";
      announceToScreenReader("Voice recognition error. Please type manually.");
    };

    recognition.onend = () => {
      btnVoice.style.color = "var(--text-secondary)";
    };

    recognition.start();
  });
}

function initWatchlistAndNotifications() {
  // Watchlist drawer
  const btnWatchlist = document.getElementById("btn-watchlist");
  const watchlistDropdown = document.getElementById("watchlist-dropdown");

  btnWatchlist.addEventListener("click", () => {
    const expanded = btnWatchlist.getAttribute("aria-expanded") === "true";
    btnWatchlist.setAttribute("aria-expanded", !expanded);
    watchlistDropdown.classList.toggle("active");
  });

  // Notification drawer
  const btnNotif = document.getElementById("btn-notifications");
  const notifDropdown = document.getElementById("notif-dropdown");

  btnNotif.addEventListener("click", () => {
    const expanded = btnNotif.getAttribute("aria-expanded") === "true";
    btnNotif.setAttribute("aria-expanded", !expanded);
    notifDropdown.classList.toggle("active");
    // Clear notifications count
    document.getElementById("notif-count").style.display = "none";
  });

  // Profile dropdown
  const btnProfile = document.getElementById("btn-profile");
  const profileDropdown = document.getElementById("profile-dropdown");

  btnProfile.addEventListener("click", () => {
    profileDropdown.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!btnWatchlist.contains(e.target) && !watchlistDropdown.contains(e.target)) {
      watchlistDropdown.classList.remove("active");
    }
    if (!btnNotif.contains(e.target) && !notifDropdown.contains(e.target)) {
      notifDropdown.classList.remove("active");
    }
    if (!btnProfile.contains(e.target) && !profileDropdown.contains(e.target)) {
      profileDropdown.classList.remove("active");
    }
  });

  renderWatchlistDropdown();
}

// --- PAGE 3: MOVIE DETAIL PAGE & SHOWTIMES SELECT ---
function selectMovieDetail(movieId) {
  const movieObj = MOVIES.find(m => m.id === movieId);
  if (!movieObj) return;

  State.selectedMovie = movieObj;
  syncLocalStore();

  // Populate detail page content
  document.getElementById("detail-title").textContent = movieObj.title;
  document.getElementById("detail-hero-img").src = movieObj.backdrop;
  document.getElementById("detail-hero-img").alt = `Main banner background scene of film ${movieObj.title}`;

  // Meta list with quality badge
  const metaList = document.getElementById("detail-meta-list");
  const qualityClass = movieObj.quality && movieObj.quality.includes("8K") ? "quality-8k" : "quality-4k";
  metaList.innerHTML = `
    <li class="detail-meta-item">${movieObj.duration}</li>
    <li class="detail-meta-item">${movieObj.language}</li>
    <li class="detail-meta-item">${movieObj.genre.join(', ')}</li>
    <li class="detail-meta-item" style="color:var(--accent-gold); font-weight:700;">⭐ ${movieObj.rating} / 10</li>
    <li class="detail-meta-item quality-badge ${qualityClass}">${movieObj.quality || '4K UHD'}</li>
  `;

  // Synopsis with readmore
  const synopsisEl = document.getElementById("detail-synopsis");
  const btnSynopsis = document.getElementById("btn-synopsis-toggle");

  synopsisEl.textContent = movieObj.description.substring(0, 160) + "...";
  btnSynopsis.style.display = "inline-block";
  btnSynopsis.onclick = () => {
    if (btnSynopsis.textContent === "Read more") {
      synopsisEl.textContent = movieObj.description;
      btnSynopsis.textContent = "Read less";
    } else {
      synopsisEl.textContent = movieObj.description.substring(0, 160) + "...";
      btnSynopsis.textContent = "Read more";
    }
  };

  // Cast list
  const castList = document.getElementById("cast-list");
  castList.innerHTML = "";
  movieObj.cast.forEach(actor => {
    const card = document.createElement("div");
    card.className = "cast-card glass-panel";
    card.innerHTML = `
      <img class="cast-img" src="${actor.img}" alt="${actor.name}" loading="lazy">
      <div class="cast-name">${actor.name}</div>
      <div class="cast-role">${actor.role}</div>
    `;
    castList.appendChild(card);
  });

  // Close modal video if open
  const modalPlayer = document.getElementById("modal-video-player");
  if (modalPlayer) {
    modalPlayer.pause();
    modalPlayer.src = "";
    document.getElementById("trailer-dialog").classList.remove("active");
  }

  // Video trailer set up and autoplay muted (WCAG compliant + bypass autoplay policies)
  const video = document.getElementById("trailer-video");
  video.src = movieObj.trailer || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4";
  video.muted = true;
  video.autoplay = true;
  video.load();

  // Unmute overlay control
  const btnUnmute = document.getElementById("btn-unmute-trailer");
  if (btnUnmute) {
    btnUnmute.style.display = "inline-flex";
    btnUnmute.onclick = () => {
      video.muted = false;
      btnUnmute.style.display = "none";
      announceToScreenReader("Trailer audio unmuted.");
    };
  }

  // Auto-hide unmute button if user unmutes via video native controls
  video.onvolumechange = () => {
    if (!video.muted && btnUnmute) {
      btnUnmute.style.display = "none";
    }
  };

  video.play().then(() => {
    announceToScreenReader(`Autoplaying trailer for ${movieObj.title} (muted).`);
  }).catch(err => {
    console.log("Autoplay blocked:", err);
    announceToScreenReader(`Trailer loaded for ${movieObj.title}. Click play to start.`);
  });

  const btnAD = document.getElementById("btn-audio-description");
  btnAD.onclick = () => {
    State.audioDescriptionActive = !State.audioDescriptionActive;
    btnAD.setAttribute("aria-pressed", State.audioDescriptionActive);
    btnAD.innerHTML = `📣 Audio Description: ${State.audioDescriptionActive ? 'On' : 'Off'}`;
    announceToScreenReader(`Audio Description narrative ${State.audioDescriptionActive ? 'activated' : 'deactivated'}.`);
  };

  // Video Quality Dropdown Selector
  const qualitySelect = document.getElementById("video-quality-select");
  if (qualitySelect) {
    if (movieObj.quality && movieObj.quality.includes("8K")) {
      qualitySelect.value = "8k";
    } else if (movieObj.quality && movieObj.quality.includes("4K")) {
      qualitySelect.value = "4k";
    } else {
      qualitySelect.value = "1080p";
    }

    qualitySelect.onchange = () => {
      const targetQual = qualitySelect.value.toUpperCase();
      announceToScreenReader(`Re-buffering video quality stream to ${targetQual}.`);

      // Keep track of playback time to avoid restarting the trailer
      const currentPlaybackTime = video.currentTime;
      const isPaused = video.paused;

      // Simulate network request/re-buffering
      const originalSrc = video.src;
      video.style.filter = "blur(5px)";

      setTimeout(() => {
        video.style.filter = "none";
        video.currentTime = currentPlaybackTime;
        if (!isPaused) {
          video.play().catch(e => console.log(e));
        }
        announceToScreenReader(`Successfully loaded trailer in ${targetQual} resolution.`);
      }, 600);
    };
  }

  // Render Date buttons
  renderShowtimeDatePicker();

  navigateTo("detail");
}

function openTrailerModal(movie) {
  const dialog = document.getElementById("trailer-dialog");
  const player = document.getElementById("modal-video-player");

  // Pause main page trailer if playing
  const mainVideo = document.getElementById("trailer-video");
  if (mainVideo) {
    mainVideo.pause();
  }

  player.src = movie.trailer || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4";
  dialog.classList.add("active");
  player.play();

  // Focus trap on modal dialog
  dialog.focus();

  const btnClose = document.getElementById("btn-close-dialog");
  const btnModalAD = document.getElementById("btn-modal-audio-description");

  btnClose.onclick = () => {
    player.pause();
    player.src = "";
    dialog.classList.remove("active");
    // Resume main video if details page active
    if (State.currentView === "detail" && mainVideo) {
      mainVideo.play().catch(e => console.log(e));
    }
  };

  btnModalAD.onclick = () => {
    State.audioDescriptionActive = !State.audioDescriptionActive;
    btnModalAD.setAttribute("aria-pressed", State.audioDescriptionActive);
    btnModalAD.innerHTML = `📣 AD: ${State.audioDescriptionActive ? 'On' : 'Off'}`;
  };

  // Close dialog on ESC key
  dialog.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      btnClose.click();
    }
  });
}

function renderShowtimeDatePicker() {
  const datePicker = document.getElementById("detail-date-picker");
  datePicker.innerHTML = "";

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let baseDate = new Date();

  // Set up date selections
  for (let i = 0; i < 7; i++) {
    const futureDate = new Date(baseDate);
    futureDate.setDate(baseDate.getDate() + i);

    const btn = document.createElement("button");
    btn.className = `date-btn ${i === 0 ? 'active' : ''}`;
    btn.setAttribute("role", "option");
    btn.setAttribute("aria-selected", i === 0 ? "true" : "false");

    // Custom formatted text based on regional locale
    const num = futureDate.getDate();
    const dayName = days[futureDate.getDay()];
    btn.innerHTML = `
      <span class="date-day">${dayName}</span>
      <span class="date-num">${num}</span>
    `;

    if (i === 0) {
      // Default set
      State.selectedDate = futureDate;
    }

    btn.onclick = () => {
      // Clear active classes
      const dateBtns = datePicker.querySelectorAll(".date-btn");
      dateBtns.forEach(d => {
        d.classList.remove("active");
        d.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      State.selectedDate = futureDate;
      renderShowtimes();
    };

    datePicker.appendChild(btn);
  }

  // Draw default showtimes
  renderShowtimes();
}

function renderShowtimes() {
  const container = document.getElementById("theaters-list");
  container.innerHTML = "";

  const movie = State.selectedMovie;
  if (!movie) return;

  // Build listings
  Object.keys(movie.showtimes).forEach(theater => {
    const card = document.createElement("div");
    card.className = "theater-card";

    let timesHtml = "";
    movie.showtimes[theater].forEach((time, index) => {
      // Price model based on standard time
      const price = index % 2 === 0 ? 350 : 500;
      const format = index % 2 === 0 ? "2D" : "IMAX 2D";
      const isSoldOut = index === 3; // simulated sold out slot

      timesHtml += `
        <button class="time-btn ${isSoldOut ? 'sold-out' : ''}" 
                data-theater="${theater}" 
                data-time="${time}" 
                data-price="${price}" 
                data-format="${format}" 
                ${isSoldOut ? 'disabled aria-disabled="true" aria-label="Showtime at ' + time + ' sold out"' : 'aria-label="Book ' + format + ' showtime at ' + time + ' for ' + formatCurrency(price) + '"'}>
          <span style="font-weight:700;">${time}</span>
          <span class="time-format">${format}</span>
          <span class="time-price">${formatCurrency(price)}</span>
        </button>
      `;
    });

    card.innerHTML = `
      <h4 class="theater-name">📍 ${theater}</h4>
      <div class="showtimes-grid">
        ${timesHtml}
      </div>
    `;

    // Click triggers booking selection
    const timeBtns = card.querySelectorAll(".time-btn:not(.sold-out)");
    timeBtns.forEach(btn => {
      btn.onclick = () => {
        State.selectedTheater = btn.dataset.theater;
        State.selectedTime = btn.dataset.time;
        State.selectedPrice = parseFloat(btn.dataset.price);
        State.selectedFormat = btn.dataset.format;

        // Reset seat selected state
        State.selectedSeats = [];
        document.getElementById("btn-proceed-to-food").disabled = true;

        startSeatSelection();
      };
    });

    container.appendChild(card);
  });
}

// --- PAGE 4: SEAT SELECTION ENGINE ---
function startSeatSelection() {
  document.getElementById("summary-movie-title").textContent = State.selectedMovie.title;

  // Format show time details
  const formattedDate = new Intl.DateTimeFormat(REGIONS[State.currentRegion].locale, { weekday: 'long', month: 'short', day: 'numeric' }).format(State.selectedDate);
  document.getElementById("summary-movie-date").textContent = `${formattedDate} @ ${State.selectedTime}`;
  document.getElementById("summary-movie-format").textContent = `${State.selectedFormat} - ${State.selectedTheater}`;

  // Reset pricing summary
  document.getElementById("summary-selected-count").textContent = "0 seats selected";
  document.getElementById("summary-seats-badges").innerHTML = "";
  document.getElementById("summary-total-price").textContent = formatCurrency(0);

  // Redraw Seat Map Grid
  renderSeatMap();

  navigateTo("seats");
}

function renderSeatMap() {
  const mapGrid = document.getElementById("seats-grid-map");
  mapGrid.innerHTML = "";

  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const colsCount = 10;

  // Track map buttons for arrow nav
  const gridButtons = [];

  rows.forEach((row, rowIndex) => {
    const rowEl = document.createElement("div");
    rowEl.className = "seat-row";

    // Left Label
    const leftLabel = document.createElement("span");
    leftLabel.className = "seat-row-label";
    leftLabel.textContent = row;
    rowEl.appendChild(leftLabel);

    const rowButtons = [];

    for (let c = 1; c <= colsCount; c++) {
      // Determine seat class type
      let type = "standard";
      let priceMultiplier = 1.0;

      if (rowIndex < 2) {
        type = "premium";
        priceMultiplier = 1.4; // 40% premium charge
      } else if (rowIndex === 7) {
        type = "couple";
        priceMultiplier = 1.8;
      } else if (rowIndex === 6 && (c === 1 || c === 10)) {
        type = "accessible";
        priceMultiplier = 1.0;
      }

      // If couple, we merge columns 2 by 2 to span double width
      if (type === "couple" && c % 2 === 0) {
        // Couple seat takes two slots, render only on odd index
        continue;
      }

      const seatBtn = document.createElement("button");
      seatBtn.className = `seat ${type}`;
      seatBtn.setAttribute("role", "button");

      const seatNo = type === "couple" ? `${c}-${c + 1}` : c;
      const baseSeatPrice = State.selectedPrice * priceMultiplier;

      // Mock occupied state (simulate 25% seats filled randomly)
      const isOccupied = (rowIndex + c) % 4 === 1;

      seatBtn.dataset.row = row;
      seatBtn.dataset.seat = seatNo;
      seatBtn.dataset.price = baseSeatPrice;
      seatBtn.dataset.type = type;

      if (isOccupied) {
        seatBtn.disabled = true;
        seatBtn.setAttribute("aria-disabled", "true");
        seatBtn.setAttribute("aria-label", `Row ${row} Seat ${seatNo} - Occupied`);
        seatBtn.innerHTML = `✖`;
      } else {
        seatBtn.setAttribute("aria-pressed", "false");

        let label = `Row ${row} Seat ${seatNo} - ${type.charAt(0).toUpperCase() + type.slice(1)} - Available - ${formatCurrency(baseSeatPrice)}`;
        if (type === "accessible") {
          label = `Row ${row} Seat ${seatNo} - Wheelchair Accessible - Available - ${formatCurrency(baseSeatPrice)}`;
          seatBtn.innerHTML = `♿`;
        } else {
          seatBtn.innerHTML = seatNo;
        }

        seatBtn.setAttribute("aria-label", label);

        // Grid navigation focus rules (Roving tab index)
        // Set only standard Seat A1 as tabindex 0, all others are -1. Tab to enter grid.
        if (rowIndex === 0 && c === 1) {
          seatBtn.setAttribute("tabindex", "0");
        } else {
          seatBtn.setAttribute("tabindex", "-1");
        }

        seatBtn.onclick = () => toggleSeatSelect(seatBtn, row, seatNo, baseSeatPrice, type);
      }

      rowEl.appendChild(seatBtn);
      rowButtons.push(seatBtn);
    }

    // Right Label
    const rightLabel = leftLabel.cloneNode(true);
    rowEl.appendChild(rightLabel);

    mapGrid.appendChild(rowEl);
    gridButtons.push(rowButtons);
  });

  // Seat map keyboard navigation helper (4-way direction focusing)
  setupSeatKeyboardGrid(gridButtons);
}

function setupSeatKeyboardGrid(gridButtons) {
  const rowsCount = gridButtons.length;

  gridButtons.forEach((row, rIdx) => {
    row.forEach((btn, cIdx) => {
      btn.addEventListener("keydown", (e) => {
        let nextRow = rIdx;
        let nextCol = cIdx;
        let handled = false;

        switch (e.key) {
          case "ArrowUp":
            nextRow = Math.max(0, rIdx - 1);
            handled = true;
            break;
          case "ArrowDown":
            nextRow = Math.min(rowsCount - 1, rIdx + 1);
            handled = true;
            break;
          case "ArrowLeft":
            // Respect RTL layouts
            if (document.documentElement.dir === "rtl") {
              nextCol = Math.min(gridButtons[rIdx].length - 1, cIdx + 1);
            } else {
              nextCol = Math.max(0, cIdx - 1);
            }
            handled = true;
            break;
          case "ArrowRight":
            if (document.documentElement.dir === "rtl") {
              nextCol = Math.max(0, cIdx - 1);
            } else {
              nextCol = Math.min(gridButtons[rIdx].length - 1, cIdx + 1);
            }
            handled = true;
            break;
          case "Home":
            nextCol = 0;
            handled = true;
            break;
          case "End":
            nextCol = gridButtons[rIdx].length - 1;
            handled = true;
            break;
        }

        if (handled) {
          e.preventDefault();
          // Find matching button to focus
          const targetBtn = gridButtons[nextRow][Math.min(nextCol, gridButtons[nextRow].length - 1)];
          if (targetBtn) {
            // Remove tabindex from current focus
            btn.setAttribute("tabindex", "-1");
            targetBtn.setAttribute("tabindex", "0");
            targetBtn.focus();
          }
        }
      });
    });
  });
}

function toggleSeatSelect(btn, row, seatNo, price, type) {
  const seatId = `${row}-${seatNo}`;
  const index = State.selectedSeats.findIndex(s => s.id === seatId);

  // Maximum seat check
  const MAX_SEATS = 6;

  if (index > -1) {
    // Deselect
    State.selectedSeats.splice(index, 1);
    btn.classList.remove("selected");
    btn.setAttribute("aria-pressed", "false");
    announceToScreenReader(`Seat ${row}-${seatNo} deselected.`);
  } else {
    // Select
    if (State.selectedSeats.length >= MAX_SEATS) {
      announceToScreenReader(`Max seat limit reached. You can book at most ${MAX_SEATS} seats at once.`);
      alert(`Limit reached: You can select a maximum of ${MAX_SEATS} tickets per booking.`);
      return;
    }

    State.selectedSeats.push({ id: seatId, row, seatNo, price, type });
    btn.classList.add("selected");
    btn.setAttribute("aria-pressed", "true");
    announceToScreenReader(`Seat ${row}-${seatNo} selected. Class: ${type}. Price: ${formatCurrency(price)}.`);
  }

  // Update summary sidebar details
  updateSeatSummary();
}

function updateSeatSummary() {
  const count = State.selectedSeats.length;
  const countText = document.getElementById("summary-selected-count");
  const badgesContainer = document.getElementById("summary-seats-badges");
  const priceText = document.getElementById("summary-total-price");
  const proceedBtn = document.getElementById("btn-proceed-to-food");

  countText.textContent = `${count} seat${count === 1 ? '' : 's'} selected`;
  badgesContainer.innerHTML = "";

  let totalSum = 0;
  State.selectedSeats.forEach(s => {
    totalSum += s.price;
    const badge = document.createElement("span");
    badge.className = "seat-badge";
    badge.textContent = `${s.row}-${s.seatNo}`;
    badgesContainer.appendChild(badge);
  });

  priceText.textContent = formatCurrency(totalSum);
  proceedBtn.disabled = count === 0;

  // Screen reader polite update
  const seatNames = State.selectedSeats.map(s => `${s.row}-${s.seatNo}`).join(', ');
  const liveText = count > 0 ?
    `${count} seats selected: ${seatNames}. Current Subtotal is ${formatCurrency(totalSum)}.` :
    "No seats selected.";

  document.getElementById("seats-live-region").textContent = liveText;
}

// Seat map Zooming tools
function initSeatSelectionGrid() {
  const zoomIn = document.getElementById("btn-zoom-in");
  const zoomOut = document.getElementById("btn-zoom-out");
  const container = document.getElementById("seats-zoom-container");

  zoomIn.onclick = () => {
    State.activeZoom = Math.min(1.5, State.activeZoom + 0.1);
    container.style.transform = `scale(${State.activeZoom})`;
    announceToScreenReader(`Zoomed map in. Scale: ${Math.round(State.activeZoom * 100)}%`);
  };

  zoomOut.onclick = () => {
    State.activeZoom = Math.max(0.7, State.activeZoom - 0.1);
    container.style.transform = `scale(${State.activeZoom})`;
    announceToScreenReader(`Zoomed map out. Scale: ${Math.round(State.activeZoom * 100)}%`);
  };

  // Next: Proceed to Snacks page
  document.getElementById("btn-proceed-to-food").onclick = () => {
    // Reset snack counters
    State.foodSelection = {};
    renderFoodGrid();
    updateFoodTotal();
    navigateTo("food");
  };
}

// --- PAGE 4.5: FOOD & BEVERAGE ADD-ONS ---
function initFoodOrderingPage() {
  // Filters binding
  const filterBtns = document.querySelectorAll(".food-filter-btn");
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const type = btn.dataset.type;
      renderFoodGrid(type);
    };
  });

  // Skip foods button
  document.getElementById("btn-skip-food").onclick = () => {
    State.foodSelection = {}; // Clear snack choices
    startCheckoutPayment();
  };

  // Proceed to checkout payment
  document.getElementById("btn-proceed-to-payment").onclick = () => {
    startCheckoutPayment();
  };
}

function renderFoodGrid(filterType = "all") {
  const container = document.getElementById("food-items-grid");
  container.innerHTML = "";

  FOOD_ITEMS.forEach(food => {
    if (filterType !== "all" && food.type !== filterType) {
      return;
    }

    const qty = State.foodSelection[food.id] || 0;

    const card = document.createElement("article");
    card.className = "food-card glass-panel";
    card.innerHTML = `
      <img class="food-img" src="${food.img}" alt="${food.name} combo snack option" loading="lazy">
      <div class="food-info">
        <div>
          <div class="food-name">
            ${food.name}
            <span style="font-size:0.7rem; padding: 2px 6px; border-radius:10px; background:rgba(255,255,255,0.05);">
              ${food.type === 'veg' ? '🟢 Veg' : food.type === 'nonveg' ? '🔴 Non-Veg' : '🌱 Vegan'}
            </span>
          </div>
          <p style="font-size:0.75rem; color:var(--text-secondary); margin-top:2px;">${food.desc}</p>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
          <span class="food-price">${formatCurrency(food.price)}</span>
          <div class="food-stepper">
            <button class="btn-step btn-food-dec" aria-label="Decrease ${food.name} quantity">-</button>
            <span class="step-val" id="qty-${food.id}" aria-live="polite">${qty}</span>
            <button class="btn-step btn-food-inc" aria-label="Increase ${food.name} quantity">+</button>
          </div>
        </div>
      </div>
    `;

    card.querySelector(".btn-food-dec").onclick = () => updateFoodQty(food.id, -1);
    card.querySelector(".btn-food-inc").onclick = () => updateFoodQty(food.id, 1);

    container.appendChild(card);
  });
}

function updateFoodQty(foodId, change) {
  const curr = State.foodSelection[foodId] || 0;
  const next = Math.max(0, curr + change);

  if (next === 0) {
    delete State.foodSelection[foodId];
  } else {
    State.foodSelection[foodId] = next;
  }

  // Update item indicator
  const el = document.getElementById(`qty-${foodId}`);
  if (el) el.textContent = next;

  const item = FOOD_ITEMS.find(f => f.id === foodId);
  announceToScreenReader(`Popcorn pack quantity updated. ${item.name} quantity set to ${next}.`);

  updateFoodTotal();
}

function updateFoodTotal() {
  let ticketsCost = State.selectedSeats.reduce((sum, s) => sum + s.price, 0);
  let foodsCost = 0;

  Object.keys(State.foodSelection).forEach(id => {
    const food = FOOD_ITEMS.find(f => f.id === id);
    const qty = State.foodSelection[id];
    foodsCost += food.price * qty;
  });

  const total = ticketsCost + foodsCost;
  document.getElementById("food-total-cost").textContent = formatCurrency(total);
}

// --- PAGE 5: SECURE PAYMENT & UPI MODES ---
function startCheckoutPayment() {
  const movie = State.selectedMovie;

  // Checkout Summaries
  document.getElementById("pay-summary-movie").textContent = movie.title;

  const formattedDate = new Intl.DateTimeFormat(REGIONS[State.currentRegion].locale, { weekday: 'long', month: 'short', day: 'numeric' }).format(State.selectedDate);
  document.getElementById("pay-summary-date").textContent = `${formattedDate} @ ${State.selectedTime}`;
  document.getElementById("pay-summary-theater").textContent = `${State.selectedTheater}`;

  const seatsText = State.selectedSeats.map(s => `${s.row}-${s.seatNo}`).join(', ');
  document.getElementById("pay-summary-seats").textContent = seatsText;

  // Snacks Summary text
  const snacksList = [];
  let foodCostSum = 0;
  Object.keys(State.foodSelection).forEach(id => {
    const food = FOOD_ITEMS.find(f => f.id === id);
    const qty = State.foodSelection[id];
    snacksList.push(`${food.name} (x${qty})`);
    foodCostSum += food.price * qty;
  });
  document.getElementById("pay-summary-food").textContent = snacksList.length > 0 ? snacksList.join(', ') : "None";

  // Calculations
  const baseCost = State.selectedSeats.reduce((sum, s) => sum + s.price, 0);
  const gstRate = 0.18; // 18% taxes
  const taxes = (baseCost + foodCostSum) * gstRate;
  const grandTotal = baseCost + foodCostSum + taxes;

  document.getElementById("pay-fare-base").textContent = formatCurrency(baseCost);
  document.getElementById("pay-fare-food").textContent = formatCurrency(foodCostSum);
  document.getElementById("pay-fare-tax").textContent = formatCurrency(taxes);
  document.getElementById("pay-fare-total").textContent = formatCurrency(grandTotal);

  // Reset payment form validations & panels
  document.getElementById("form-payment").reset();
  const forms = document.querySelectorAll(".payment-form-section");
  forms.forEach(f => f.classList.remove("active"));
  document.getElementById("payment-sec-card").classList.add("active");
  document.getElementById("otp-verification-screen").style.display = "none";
  document.getElementById("btn-pay-now").style.display = "block";

  // Update dynamic checkout values
  State.checkoutBase = baseCost;
  State.checkoutFood = foodCostSum;
  State.checkoutTax = taxes;
  State.checkoutTotal = grandTotal;

  navigateTo("payment");
}

function initCheckoutFlow() {
  const form = document.getElementById("form-payment");
  const payRadios = document.getElementsByName("pay-method");
  const btnPay = document.getElementById("btn-pay-now");

  // Radio button selections switches form display panels
  payRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      const mode = radio.value;
      const sections = document.querySelectorAll(".payment-form-section");
      sections.forEach(s => s.classList.remove("active"));

      const targetSec = document.getElementById(`payment-sec-${mode}`);
      if (targetSec) targetSec.classList.add("active");

      announceToScreenReader(`Payment method set to ${radio.nextElementSibling.querySelector('span').textContent}`);
    });
  });

  // Credit Card Inputs Auto-formatting (Group 4 numbers)
  const cardNum = document.getElementById("card-num");
  cardNum.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let matches = val.match(/\d{4,16}/g);
    let match = matches && matches[0] || '';
    let parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      e.target.value = parts.join(' ');
    } else {
      e.target.value = val;
    }
  });

  // Card Expiry auto slash MM/YY
  const cardExpiry = document.getElementById("card-expiry");
  cardExpiry.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length >= 2) {
      e.target.value = val.slice(0, 2) + "/" + val.slice(2, 4);
    } else {
      e.target.value = val;
    }
  });

  // Submit payment form
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const selectedMode = Array.from(payRadios).find(r => r.checked).value;

    let isFormOk = true;

    if (selectedMode === "card") {
      isFormOk = validateCardDetails();
    } else if (selectedMode === "upi") {
      isFormOk = validateUPIDetails();
    }

    if (isFormOk) {
      btnPay.style.display = "none";
      triggerOTPScreen();
    }
  });

  function validateCardDetails() {
    const num = document.getElementById("card-num");
    const expiry = document.getElementById("card-expiry");
    const cvv = document.getElementById("card-cvv");

    let isN = validateField(num, "err-pay-card-num", num.value.replace(/\s/g, '').length === 16, "Card number must be 16 digits");
    let isE = validateField(expiry, "err-pay-expiry", expiry.value.length === 5, "Expiry date must be MM/YY");
    let isC = validateField(cvv, "err-pay-cvv", cvv.value.length === 3, "CVV must be 3 digits");

    return isN && isE && isC;
  }

  function validateUPIDetails() {
    const upi = document.getElementById("upi-id");
    const upiRegex = /^[\w.-]+@[\w.-]+$/;
    return validateField(upi, "err-pay-upi", upiRegex.test(upi.value.trim()), "Invalid UPI address handle format");
  }

  function validateField(input, errId, condition, errorMsg) {
    const errorEl = document.getElementById(errId);
    if (!condition) {
      errorEl.textContent = errorMsg;
      errorEl.classList.add("active");
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", errId);
      return false;
    } else {
      errorEl.classList.remove("active");
      input.removeAttribute("aria-invalid");
      input.removeAttribute("aria-describedby");
      return true;
    }
  }

  // OTP Digits Focus Advance
  const digits = document.querySelectorAll(".otp-digit");
  digits.forEach((digit, index) => {
    digit.addEventListener("input", (e) => {
      const val = e.target.value;
      if (val.length === 1) {
        // move focus to next digit
        const next = digits[index + 1];
        if (next) {
          next.disabled = false;
          next.focus();
        }
      }
    });

    digit.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") {
        digit.value = "";
        const prev = digits[index - 1];
        if (prev) {
          prev.focus();
        }
      }
    });
  });

  // Verify OTP & Complete booking
  document.getElementById("btn-verify-otp").onclick = () => {
    // Check if all digits entered
    let allOk = true;
    digits.forEach(d => {
      if (d.value.trim().length === 0) allOk = false;
    });

    if (!allOk) {
      alert("Please enter the complete 6-digit verification code.");
      return;
    }

    // Complete Booking
    finalizeBookingReservation();
  };
}

let otpInterval;
function triggerOTPScreen() {
  const otpScreen = document.getElementById("otp-verification-screen");
  otpScreen.style.display = "block";
  announceToScreenReader("Security OTP prompt triggered. SMS code sent.");

  // Focus A11y
  const firstDigit = document.querySelector(".otp-digit");
  firstDigit.focus();

  // Reset digits
  const digits = document.querySelectorAll(".otp-digit");
  digits.forEach((d, i) => {
    d.value = "";
    if (i > 0) d.disabled = true;
  });

  // Timer simulation
  let count = 59;
  const timerText = document.getElementById("otp-timer-count");
  timerText.textContent = count;

  clearInterval(otpInterval);
  otpInterval = setInterval(() => {
    count--;
    timerText.textContent = count;
    if (count <= 0) {
      clearInterval(otpInterval);
      announceToScreenReader("OTP code expired. Please click resend.");
    }
  }, 1000);
}

// --- PAGE 6: RESERVATION SUCCESS & CONFIRMATION ---
function finalizeBookingReservation() {
  clearInterval(otpInterval);

  // Generate Booking details
  const movie = State.selectedMovie;
  const formattedDate = new Intl.DateTimeFormat(REGIONS[State.currentRegion].locale, { weekday: 'long', month: 'short', day: 'numeric' }).format(State.selectedDate);
  const seatsText = State.selectedSeats.map(s => `${s.row}-${s.seatNo}`).join(', ');

  const randId = "CIN-2026-" + Math.random().toString(36).substring(2, 8).toUpperCase();

  // Populate ticket elements
  document.getElementById("conf-movie-title").textContent = movie.title;
  document.getElementById("conf-movie-format").textContent = `${State.selectedFormat}`;
  document.getElementById("conf-theater").textContent = `${State.selectedTheater}`;
  document.getElementById("conf-date").textContent = formattedDate;
  document.getElementById("conf-time").textContent = State.selectedTime;
  document.getElementById("conf-seats").textContent = seatsText;
  document.getElementById("conf-booking-id").textContent = randId;
  document.getElementById("conf-poster").src = movie.poster;

  const snacksList = [];
  Object.keys(State.foodSelection).forEach(id => {
    const food = FOOD_ITEMS.find(f => f.id === id);
    const qty = State.foodSelection[id];
    snacksList.push(`${food.name} (x${qty})`);
  });
  document.getElementById("conf-food").textContent = snacksList.length > 0 ? snacksList.join(', ') : "None";

  // Customize QR code title
  document.getElementById("conf-qr-code").setAttribute("aria-label", `QR code for booking ID ${randId}. Show this at the theater entrance.`);

  // Update loyalty points
  // Add 10 points per ticket booked
  const earned = State.selectedSeats.length * 10;
  State.loyaltyPoints = Math.min(200, State.loyaltyPoints + earned);
  document.getElementById("loyalty-current-val").textContent = State.loyaltyPoints;
  document.getElementById("loyalty-pt-text").textContent = State.loyaltyPoints;
  document.getElementById("loyalty-progress").setAttribute("aria-valuenow", State.loyaltyPoints.toString());
  document.getElementById("loyalty-progress").style.width = `${(State.loyaltyPoints / 200) * 100}%`;

  const bookingPayload = {
    bookingId: randId,
    movie: movie.title,
    format: State.selectedFormat,
    theater: State.selectedTheater,
    date: formattedDate,
    time: State.selectedTime,
    seats: seatsText,
    food: snacksList.length > 0 ? snacksList.join(', ') : "None",
    price: State.checkoutTotal || 0,
    user: State.currentUser || "Guest"
  };

  // POST booking to backend
  fetch("/api/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bookingPayload)
  }).then(response => {
    if (response.ok) {
      console.log("Booking saved successfully to backend");
      if (State.currentUser) {
        fetchBookingHistory(State.currentUser);
      }
    } else {
      console.error("Backend failed to save booking");
    }
  }).catch(err => {
    console.error("Network error saving booking:", err);
  });

  syncLocalStore();

  // Bind Share Buttons
  document.getElementById("btn-share-whatsapp").onclick = () => {
    const text = `I just booked tickets for ${movie.title} at CineSphere! Seat: ${seatsText}, Show: ${State.selectedTime}. Code: ${randId}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  };

  document.getElementById("btn-share-email").onclick = () => {
    const subject = `Your CineSphere Ticket Confirmation - ${movie.title}`;
    const body = `Show: ${movie.title}\nSeat: ${seatsText}\nTime: ${State.selectedTime}\nBooking ID: ${randId}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  document.getElementById("btn-share-copy").onclick = () => {
    const dummyUrl = window.location.href + `?booking=${randId}`;
    navigator.clipboard.writeText(dummyUrl).then(() => {
      alert("Ticket link copied to clipboard!");
      announceToScreenReader("Booking URL copied to clipboard.");
    });
  };

  // PDF Download simulation
  document.getElementById("btn-download-ticket").onclick = () => {
    announceToScreenReader("Starting PDF Ticket download...");
    alert("Ticket download started. Save the file CIN-Ticket-Receipt.pdf to your device.");
  };

  // Navigate to confirmation page
  navigateTo("confirmation");
  announceToScreenReader("Booking confirmed. Thank you for booking with CineSphere.");
}
