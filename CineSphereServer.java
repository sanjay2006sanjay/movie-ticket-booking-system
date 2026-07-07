import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.*;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class CineSphereServer {

    private static final int PORT = 8080;
    private static final String BOOKINGS_FILE = "bookings.json";
    private static final Path WORKSPACE_DIR = Paths.get("").toAbsolutePath().normalize();

    public static void main(String[] args) {
        try {
            HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);
            System.out.println("CineSphere Backend Server starting on port " + PORT + "...");

            // Register API Handlers
            server.createContext("/api/movies", new MoviesHandler());
            server.createContext("/api/food", new FoodHandler());
            server.createContext("/api/book", new BookHandler());
            server.createContext("/api/bookings", new BookingsListHandler());

            // Register Static File Handler
            server.createContext("/", new StaticFileHandler());

            server.setExecutor(null); // default executor
            server.start();
            System.out.println("CineSphere Backend Server is running at http://localhost:" + PORT);
        } catch (IOException e) {
            System.err.println("Failed to start CineSphere server: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // --- HELPER TO SEND JSON RESPONSES ---
    private static void sendJsonResponse(HttpExchange exchange, int statusCode, String responseJson) throws IOException {
        byte[] bytes = responseJson.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", "application/json; charset=utf-8");
        exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
        exchange.sendResponseHeaders(statusCode, bytes.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(bytes);
        }
    }

    // --- API HANDLER: GET MOVIES ---
    private static class MoviesHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (!"GET".equalsIgnoreCase(exchange.getRequestMethod())) {
                exchange.sendResponseHeaders(405, -1); // Method Not Allowed
                return;
            }

            String moviesJson = """
            [
              {
                "id": "dune-part-three",
                "title": "Dune: Part Three",
                "tagline": "The universe stands on the edge of destruction as Muad'Dib faces the ultimate prophecy.",
                "description": "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future only he can foresee.",
                "rating": "9.2",
                "duration": "165 min",
                "genre": ["sci-fi", "adventure", "action", "hollywood"],
                "language": "English",
                "formats": ["IMAX", "3D", "2D"],
                "releaseDate": "2026-03-12",
                "backdrop": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop",
                "poster": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
                "quality": "8K UHD",
                "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
                "cast": [
                  { "name": "Timothée Chalamet", "role": "Paul Atreides", "img": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" },
                  { "name": "Zendaya Coleman", "role": "Chani", "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
                  { "name": "Rebecca Ferguson", "role": "Lady Jessica", "img": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" },
                  { "name": "Javier Bardem", "role": "Stilgar", "img": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" }
                ],
                "showtimes": {
                  "Grand IMAX Screen 1": ["11:30 AM", "3:45 PM", "7:30 PM", "10:45 PM"],
                  "CineSphere Luxe 4D": ["1:00 PM", "5:30 PM", "9:00 PM"]
                }
              },
              {
                "id": "avengers-secret-wars",
                "title": "Avengers: Secret Wars",
                "tagline": "The ultimate clash of timelines will decide the fate of all creation.",
                "description": "In the culmination of the multiverse saga, heroes from across different realities must unite in Battleworld to face a cosmic threat that could erase all existence.",
                "rating": "9.5",
                "duration": "180 min",
                "genre": ["action", "sci-fi", "superhero", "marvel", "adventure", "hollywood"],
                "language": "English",
                "formats": ["IMAX", "3D", "2D"],
                "releaseDate": "2026-05-01",
                "backdrop": "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1600&auto=format&fit=crop",
                "poster": "https://images.unsplash.com/photo-1608889174633-414c36ef2241?q=80&w=600&auto=format&fit=crop",
                "quality": "8K UHD",
                "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
                "cast": [
                  { "name": "Robert Downey Jr.", "role": "Doctor Doom", "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
                  { "name": "Tom Holland", "role": "Peter Parker / Spider-Man", "img": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" },
                  { "name": "Chris Evans", "role": "Captain America", "img": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" }
                ],
                "showtimes": {
                  "Grand IMAX Screen 1": ["10:00 AM", "1:45 PM", "5:30 PM", "9:15 PM"],
                  "CineSphere Luxe 4D": ["12:00 PM", "4:00 PM", "8:00 PM"]
                }
              },
              {
                "id": "spider-man-beyond-spider-verse",
                "title": "Spider-Man: Beyond the Spider-Verse",
                "tagline": "Every choice has a thread, and every thread can be broken.",
                "description": "Miles Morales travels to the edge of the multiverse to save his father and rewrite his destiny, all while running from the Spider-Society and a vengeful Spot.",
                "rating": "9.3",
                "duration": "145 min",
                "genre": ["animation", "action", "sci-fi", "superhero", "marvel", "adventure", "hollywood"],
                "language": "English",
                "formats": ["IMAX", "3D", "2D"],
                "releaseDate": "2026-04-10",
                "backdrop": "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1600&auto=format&fit=crop",
                "poster": "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=600&auto=format&fit=crop",
                "quality": "4K UHD",
                "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                "cast": [
                  { "name": "Shameik Moore", "role": "Miles Morales", "img": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" },
                  { "name": "Hailee Steinfeld", "role": "Gwen Stacy", "img": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" }
                ],
                "showtimes": {
                  "CineSphere Luxe 4D": ["10:30 AM", "2:00 PM", "6:15 PM", "9:30 PM"],
                  "Oceanic Dolby IMAX": ["1:00 PM", "5:00 PM", "9:00 PM"]
                }
              },
              {
                "id": "the-batman-two",
                "title": "The Batman: Part II",
                "tagline": "Gotham is cold, dark, and unyielding. The shadow must stretch further.",
                "description": "Bruce Wayne goes deeper into the corrupt underbelly of Gotham City as a new wave of calculated madness threatens to plunge the metropolis into total chaos.",
                "rating": "9.1",
                "duration": "160 min",
                "genre": ["action", "thriller", "superhero", "dc", "drama", "hollywood"],
                "language": "English",
                "formats": ["IMAX", "2D"],
                "releaseDate": "2026-10-02",
                "backdrop": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop",
                "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
                "quality": "4K UHD",
                "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                "cast": [
                  { "name": "Robert Pattinson", "role": "Bruce Wayne / Batman", "img": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" },
                  { "name": "Zoë Kravitz", "role": "Selina Kyle / Catwoman", "img": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" }
                ],
                "showtimes": {
                  "Neon Dolby Theater": ["11:00 AM", "3:15 PM", "7:30 PM", "10:45 PM"]
                }
              },
              {
                "id": "superman-legacy",
                "title": "Superman: Legacy",
                "tagline": "Hope has a home, and truth has a protector.",
                "description": "A young Kal-El reconciles his heritage with his human upbringing, standing as the ultimate symbol of hope and kindness in a world that has forgotten the power of sincerity.",
                "rating": "8.9",
                "duration": "135 min",
                "genre": ["action", "adventure", "sci-fi", "superhero", "dc", "hollywood"],
                "language": "English",
                "formats": ["IMAX", "2D"],
                "releaseDate": "2026-07-11",
                "backdrop": "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=1600&auto=format&fit=crop",
                "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
                "quality": "8K UHD",
                "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                "cast": [
                  { "name": "David Corenswet", "role": "Clark Kent / Superman", "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
                  { "name": "Rachel Brosnahan", "role": "Lois Lane", "img": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" }
                ],
                "showtimes": {
                  "Grand IMAX Screen 1": ["11:00 AM", "3:00 PM", "7:00 PM"]
                }
              },
              {
                "id": "avatar-seed-bearer",
                "title": "Avatar: The Seed Bearer",
                "tagline": "Pandora's roots run deeper than the invaders can reach.",
                "description": "Jake Sully and Neytiri encounter a nomadic tribe of Pandora that challenges their connection to Eywa, while RDA launches an offensive to burn out Pandora's core ecosystem.",
                "rating": "9.0",
                "duration": "170 min",
                "genre": ["sci-fi", "adventure", "action", "fantasy", "hollywood"],
                "language": "English",
                "formats": ["IMAX", "3D", "2D"],
                "releaseDate": "2026-12-18",
                "backdrop": "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1600&auto=format&fit=crop",
                "poster": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=600&auto=format&fit=crop",
                "quality": "8K UHD",
                "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                "cast": [
                  { "name": "Sam Worthington", "role": "Jake Sully", "img": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" },
                  { "name": "Zoe Saldana", "role": "Neytiri", "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" }
                ],
                "showtimes": {
                  "Oceanic Dolby IMAX": ["10:00 AM", "2:00 PM", "6:00 PM", "10:00 PM"]
                }
              },
              {
                "id": "cyberpunk-2099",
                "title": "Cyberpunk 2099: Neon Horizon",
                "tagline": "Enter the cyber-grid where digital consciousness overrides physical reality.",
                "description": "In the sprawling vertical metropolis of Neo-Los Angeles, a cybernetically enhanced mercenary uncovers a corporate conspiracy that threatens to overwrite the minds of the entire working class.",
                "rating": "8.8",
                "duration": "140 min",
                "genre": ["sci-fi", "action", "thriller", "hollywood"],
                "language": "English",
                "formats": ["4DX", "2D"],
                "releaseDate": "2026-06-18",
                "backdrop": "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?q=80&w=1600&auto=format&fit=crop",
                "poster": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
                "quality": "4K UHD",
                "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "cast": [
                  { "name": "Keanu Reeves", "role": "Johnny Cyber", "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
                  { "name": "Florence Pugh", "role": "Vera 2.0", "img": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" }
                ],
                "showtimes": {
                  "Neon Dolby Theater": ["10:00 AM", "2:15 PM", "6:30 PM", "9:45 PM"],
                  "4DX Matrix Room": ["12:00 PM", "4:30 PM", "8:45 PM"]
                }
              },
              {
                "id": "whispering-sands",
                "title": "The Whispering Sands",
                "tagline": "Secrets buried in the ancient dunes of Arabia begin to rise.",
                "description": "An archaeological team uncovers an ancient temple beneath the Rub' al Khali, unlocking an otherworldly force that alters time and memory for everyone in the desert.",
                "rating": "8.5",
                "duration": "115 min",
                "genre": ["drama", "thriller"],
                "language": "Arabic",
                "formats": ["2D"],
                "releaseDate": "2026-07-02",
                "backdrop": "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=1600&auto=format&fit=crop",
                "poster": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=600&auto=format&fit=crop",
                "quality": "4K UHD",
                "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
                "cast": [
                  { "name": "Tahar Rahim", "role": "Dr. Tarik", "img": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop" },
                  { "name": "Sofia Boutella", "role": "Layla", "img": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop" }
                ],
                "showtimes": {
                  "Medina Oasis Cinema": ["3:00 PM", "6:00 PM", "9:00 PM"],
                  "Al Hamra Screen 2": ["4:30 PM", "8:00 PM"]
                }
              },
              {
                "id": "mumbai-chronicles",
                "title": "Mumbai Chronicles",
                "tagline": "An intense race against time in the heart of Mumbai's underworld.",
                "description": "A suspended detective is drawn back into the police force when an anonymous terrorist hacks the local transit grid, forcing him to complete high-risk tasks across the city.",
                "rating": "8.9",
                "duration": "130 min",
                "genre": ["action", "thriller"],
                "language": "Hindi",
                "formats": ["IMAX", "2D"],
                "releaseDate": "2026-05-10",
                "backdrop": "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1600&auto=format&fit=crop",
                "poster": "https://images.unsplash.com/photo-1589483236531-5384ff7442dd?q=80&w=600&auto=format&fit=crop",
                "quality": "4K UHD",
                "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                "cast": [
                  { "name": "Ranbir Kapoor", "role": "Inspector Dev", "img": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" },
                  { "name": "Alia Bhatt", "role": "Dr. Sneha", "img": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop" }
                ],
                "showtimes": {
                  "PVR Icon IMAX Lower Parel": ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"],
                  "Carnival Cinemas Metro": ["1:15 PM", "5:00 PM", "8:30 PM"]
                }
              },
              {
                "id": "midnight-in-paris",
                "title": "Midnight in Paris: Again",
                "tagline": "Love and artistic nostalgia clash under the French streetlights.",
                "description": "An American novelist visiting Paris finds himself mysteriously transported back to the roaring 1920s every night at midnight, meeting his creative idols and questioning his modern-day relationship.",
                "rating": "8.1",
                "duration": "105 min",
                "genre": ["romance", "drama"],
                "language": "French",
                "formats": ["2D"],
                "releaseDate": "2026-04-20",
                "backdrop": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop",
                "poster": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop",
                "quality": "4K UHD",
                "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                "cast": [
                  { "name": "Léa Seydoux", "role": "Clara", "img": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop" },
                  { "name": "Timothée Chalamet", "role": "Gilles", "img": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" }
                ],
                "showtimes": {
                  "Le Grand Rex Room 3": ["2:00 PM", "4:30 PM", "7:00 PM", "9:30 PM"]
                }
              },
              {
                "id": "lost-kingdom",
                "title": "The Lost Kingdom",
                "tagline": "Deep beneath the ocean floor lies a world forgotten by time.",
                "description": "A marine biologist and a deep-sea salvage captain discover an underwater trench leading to a subterranean ecosystem containing prehistoric creatures and ruins of a lost civilization.",
                "rating": "8.6",
                "duration": "150 min",
                "genre": ["adventure", "sci-fi"],
                "language": "English",
                "formats": ["IMAX", "3D"],
                "releaseDate": "2026-08-01",
                "backdrop": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
                "poster": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=600&auto=format&fit=crop",
                "quality": "4K UHD",
                "trailer": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                "cast": [
                  { "name": "Jason Momoa", "role": "Captain Arthur", "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
                  { "name": "Amber Heard", "role": "Dr. Mera", "img": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" }
                ],
                "showtimes": {
                  "Oceanic Dolby IMAX": ["12:00 PM", "4:00 PM", "8:00 PM"],
                  "Trench 3D Room": ["2:30 PM", "6:30 PM", "10:30 PM"]
                }
              }
            ]
            """;
            sendJsonResponse(exchange, 200, moviesJson);
        }
    }

    // --- API HANDLER: GET FOOD ---
    private static class FoodHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (!"GET".equalsIgnoreCase(exchange.getRequestMethod())) {
                exchange.sendResponseHeaders(405, -1);
                return;
            }

            String foodJson = """
            [
              { "id": "combo-popcorn", "name": "Popcorn Caramel Combo", "type": "veg", "price": 350, "desc": "Large popcorn with hot caramel glaze & two sodas.", "img": "https://images.unsplash.com/photo-1578496479914-7235024c1176?q=80&w=200&auto=format&fit=crop" },
              { "id": "combo-burger", "name": "Chicken Burger Feast", "type": "nonveg", "price": 420, "desc": "Juicy chicken breast burger, fries & Pepsi.", "img": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200&auto=format&fit=crop" },
              { "id": "combo-nachos", "name": "Vegan Loaded Nachos", "type": "vegan", "price": 380, "desc": "Tortilla chips loaded with vegan cheese, jalapeños & salsa.", "img": "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=200&auto=format&fit=crop" },
              { "id": "soda-large", "name": "Cold Soda Large", "type": "veg", "price": 150, "desc": "Chilled zero sugar cola fountain drink (650ml).", "img": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=200&auto=format&fit=crop" },
              { "id": "hotdog-classic", "name": "Classic Pork Hotdog", "type": "nonveg", "price": 250, "desc": "Grilled classic hotdog inside soft bun with mustard.", "img": "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=200&auto=format&fit=crop" }
            ]
            """;
            sendJsonResponse(exchange, 200, foodJson);
        }
    }

    // --- API HANDLER: POST BOOK ---
    private static class BookHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
                exchange.getResponseHeaders().set("Access-Control-Allow-Methods", "POST, OPTIONS");
                exchange.getResponseHeaders().set("Access-Control-Allow-Headers", "Content-Type");
                exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
                exchange.sendResponseHeaders(204, -1);
                return;
            }

            if (!"POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                exchange.sendResponseHeaders(405, -1);
                return;
            }

            // Read request body
            StringBuilder requestBody = new StringBuilder();
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(exchange.getRequestBody(), StandardCharsets.UTF_8))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    requestBody.append(line);
                }
            }

            String newBooking = requestBody.toString();
            synchronized (CineSphereServer.class) {
                try {
                    File file = new File(BOOKINGS_FILE);
                    StringBuilder fileContent = new StringBuilder();
                    if (file.exists() && file.length() > 0) {
                        try (BufferedReader fr = new BufferedReader(new FileReader(file, StandardCharsets.UTF_8))) {
                            String line;
                            while ((line = fr.readLine()) != null) {
                                fileContent.append(line);
                            }
                        }
                    }

                    String content = fileContent.toString().trim();
                    String finalJson;
                    if (content.isEmpty() || "[]".equals(content)) {
                        finalJson = "[" + newBooking + "]";
                    } else if (content.endsWith("]")) {
                        // Append to the list
                        finalJson = content.substring(0, content.length() - 1) + "," + newBooking + "]";
                    } else {
                        finalJson = "[" + newBooking + "]";
                    }

                    try (FileWriter fw = new FileWriter(file, StandardCharsets.UTF_8)) {
                        fw.write(finalJson);
                    }
                } catch (Exception e) {
                    System.err.println("Error writing booking: " + e.getMessage());
                    sendJsonResponse(exchange, 500, "{\"success\": false, \"error\": \"" + e.getMessage() + "\"}");
                    return;
                }
            }

            sendJsonResponse(exchange, 200, "{\"success\": true}");
        }
    }

    // --- API HANDLER: GET BOOKINGS LIST ---
    private static class BookingsListHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (!"GET".equalsIgnoreCase(exchange.getRequestMethod())) {
                exchange.sendResponseHeaders(405, -1);
                return;
            }

            File file = new File(BOOKINGS_FILE);
            String bookingsJson = "[]";
            if (file.exists() && file.length() > 0) {
                StringBuilder sb = new StringBuilder();
                try (BufferedReader fr = new BufferedReader(new FileReader(file, StandardCharsets.UTF_8))) {
                    String line;
                    while ((line = fr.readLine()) != null) {
                        sb.append(line);
                    }
                }
                bookingsJson = sb.toString();
            }

            sendJsonResponse(exchange, 200, bookingsJson);
        }
    }

    // --- STATIC FILE HANDLER ---
    private static class StaticFileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (!"GET".equalsIgnoreCase(exchange.getRequestMethod())) {
                exchange.sendResponseHeaders(405, -1);
                return;
            }

            String pathStr = exchange.getRequestURI().getPath();
            // Default path mapping
            if (pathStr.equals("/") || pathStr.isEmpty()) {
                pathStr = "/index.html";
            }

            // Clean up and prevent directory traversal
            Path resolvedPath = WORKSPACE_DIR.resolve(pathStr.substring(1)).normalize();
            if (!resolvedPath.startsWith(WORKSPACE_DIR)) {
                String error = "403 Forbidden";
                exchange.sendResponseHeaders(403, error.length());
                try (OutputStream os = exchange.getResponseBody()) {
                    os.write(error.getBytes());
                }
                return;
            }

            File file = resolvedPath.toFile();
            if (!file.exists() || file.isDirectory()) {
                String error = "404 Not Found";
                exchange.sendResponseHeaders(404, error.length());
                try (OutputStream os = exchange.getResponseBody()) {
                    os.write(error.getBytes());
                }
                return;
            }

            // Set Content-Type based on extension
            String name = file.getName().toLowerCase();
            String contentType = "application/octet-stream";
            if (name.endsWith(".html") || name.endsWith(".htm")) {
                contentType = "text/html; charset=utf-8";
            } else if (name.endsWith(".css")) {
                contentType = "text/css; charset=utf-8";
            } else if (name.endsWith(".js")) {
                contentType = "application/javascript; charset=utf-8";
            } else if (name.endsWith(".json")) {
                contentType = "application/json; charset=utf-8";
            } else if (name.endsWith(".svg")) {
                contentType = "image/svg+xml; charset=utf-8";
            } else if (name.endsWith(".png")) {
                contentType = "image/png";
            } else if (name.endsWith(".jpg") || name.endsWith(".jpeg")) {
                contentType = "image/jpeg";
            } else if (name.endsWith(".vtt")) {
                contentType = "text/vtt; charset=utf-8";
            } else if (name.endsWith(".mp4")) {
                contentType = "video/mp4";
            }

            exchange.getResponseHeaders().set("Content-Type", contentType);
            exchange.sendResponseHeaders(200, file.length());

            try (FileInputStream fis = new FileInputStream(file);
                 OutputStream os = exchange.getResponseBody()) {
                byte[] buffer = new byte[8192];
                int read;
                while ((read = fis.read(buffer)) != -1) {
                    os.write(buffer, 0, read);
                }
            }
        }
    }
}
