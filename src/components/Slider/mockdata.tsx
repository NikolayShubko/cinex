export interface Film {
  id: number;
  title: string;
  releaseYear: number;
  description: string;
  authors: string; // still a comma-separated string
  cast: string; // still a comma-separated string
  ageRating: string;
  genres: string; // comma-separated string
  durationMinutes: number;
  rating: number;
  language: string;
  type: "Movies" | "Series";
  seasons: number;
  episodes: number;
  coverImageUrl: string;
  filmImageUrl: string;
  videoURL: string;
}

// const mockdata: Film[] = [
//   {
//     id: 1,
//     title: "Inception",
//     year: 2010,
//     description:
//       "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
//     actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
//     ageRating: "PG-13",
//     genres: ["Action", "Sci-Fi", "Thriller"],
//     duration: 148,
//     rating: 8.8,
//     colorLarge:
//       "https://wallpapers.com/images/hd/1920-x-1080-hd-1920-x-1080-vye1sz5gtvtcy5fz.jpg",
//     colorSmall: "#C34227",
//   },
//   {
//     id: 2,
//     title: "The Shawshank Redemption",
//     year: 1994,
//     description:
//       "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
//     actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
//     ageRating: "R",
//     genres: ["Drama"],
//     duration: 142,
//     rating: 9.3,
//     colorLarge:
//       "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?semt=ais_hybrid&w=740",
//     colorSmall: "#2A9BD7",
//   },
//   {
//     id: 3,
//     title: "The Dark Knight",
//     year: 2008,
//     description:
//       "When the menace known as the Joker wreaks havoc, Batman must accept one of the greatest psychological and physical tests.",
//     actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
//     ageRating: "PG-13",
//     genres: ["Action", "Crime", "Drama"],
//     duration: 152,
//     rating: 9.0,
//     colorLarge:
//       "https://wallpapers.com/images/hd/1920-x-1080-hd-yshf5x6cdyz4httf.jpg",
//     colorSmall: "#3A8D36",
//   },
//   {
//     id: 4,
//     title: "Pulp Fiction",
//     year: 1994,
//     description:
//       "The lives of two mob hitmen, a boxer, and others intertwine in four tales of violence and redemption.",
//     actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
//     ageRating: "R",
//     genres: ["Crime", "Drama"],
//     duration: 154,
//     rating: 8.9,
//     colorLarge: "#9C27B0",
//     colorSmall: "#741B91",
//   },
//   {
//     id: 5,
//     title: "Fight Club",
//     year: 1999,
//     description:
//       "An insomniac office worker and a soap maker form an underground fight club with unexpected consequences.",
//     actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
//     ageRating: "R",
//     genres: ["Drama"],
//     duration: 139,
//     rating: 8.8,
//     colorLarge: "#FF9800",
//     colorSmall: "#CC7A00",
//   },
//   {
//     id: 6,
//     title: "Forrest Gump",
//     year: 1994,
//     description:
//       "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and more through the eyes of an Alabama man with a low IQ.",
//     actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
//     ageRating: "PG-13",
//     genres: ["Drama", "Romance"],
//     duration: 142,
//     rating: 8.8,
//     colorLarge: "#3F51B5",
//     colorSmall: "#2F3B8E",
//   },
//   {
//     id: 7,
//     title: "The Matrix",
//     year: 1999,
//     description:
//       "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
//     actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
//     ageRating: "R",
//     genres: ["Action", "Sci-Fi"],
//     duration: 136,
//     rating: 8.7,
//     colorLarge: "#009688",
//     colorSmall: "#00675B",
//   },
//   {
//     id: 8,
//     title: "Gladiator",
//     year: 2000,
//     description:
//       "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
//     actors: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
//     ageRating: "R",
//     genres: ["Action", "Drama"],
//     duration: 155,
//     rating: 8.5,
//     colorLarge: "#795548",
//     colorSmall: "#5B3E2B",
//   },
//   {
//     id: 9,
//     title: "The Lord of the Rings: The Fellowship of the Ring",
//     year: 2001,
//     description:
//       "A meek Hobbit and eight companions set out on a journey to destroy the One Ring.",
//     actors: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
//     ageRating: "PG-13",
//     genres: ["Adventure", "Drama", "Fantasy"],
//     duration: 178,
//     rating: 8.8,
//     colorLarge: "#607D8B",
//     colorSmall: "#455A64",
//   },
//   {
//     id: 10,
//     title: "Interstellar",
//     year: 2014,
//     description:
//       "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
//     ageRating: "PG-13",
//     genres: ["Adventure", "Drama", "Sci-Fi"],
//     duration: 169,
//     rating: 8.6,
//     colorLarge: "#2196F3",
//     colorSmall: "#1769AA",
//   },
//   {
//     id: 11,
//     title: "The Godfather",
//     year: 1972,
//     description:
//       "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
//     actors: ["Marlon Brando", "Al Pacino", "James Caan"],
//     ageRating: "R",
//     genres: ["Crime", "Drama"],
//     duration: 175,
//     rating: 9.2,
//     colorLarge: "#673AB7",
//     colorSmall: "#4527A0",
//   },
//   {
//     id: 12,
//     title: "The Avengers",
//     year: 2012,
//     description:
//       "Earth's mightiest heroes must come together and learn to fight as a team.",
//     actors: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
//     ageRating: "PG-13",
//     genres: ["Action", "Adventure", "Sci-Fi"],
//     duration: 143,
//     rating: 8.0,
//     colorLarge: "#FFC107",
//     colorSmall: "#B28704",
//   },
//   {
//     id: 13,
//     title: "Jurassic Park",
//     year: 1993,
//     description:
//       "During a preview tour, a theme park suffers a major power breakdown, allowing cloned dinosaurs to run amok.",
//     actors: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
//     ageRating: "PG-13",
//     genres: ["Adventure", "Sci-Fi", "Thriller"],
//     duration: 127,
//     rating: 8.1,
//     colorLarge: "#7952B3",
//     colorSmall: "#5B3D8E",
//   },
//   {
//     id: 14,
//     title: "Titanic",
//     year: 1997,
//     description:
//       "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the Titanic.",
//     actors: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
//     ageRating: "PG-13",
//     genres: ["Drama", "Romance"],
//     duration: 195,
//     rating: 7.8,
//     colorLarge: "#FF1744",
//     colorSmall: "#B41133",
//   },
//   {
//     id: 15,
//     title: "The Lion King",
//     year: 1994,
//     description:
//       "Lion prince Simba is cast out of the Pride Lands after the death of his father, and must reclaim his throne.",
//     actors: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
//     ageRating: "G",
//     genres: ["Animation", "Adventure", "Drama"],
//     duration: 88,
//     rating: 8.5,
//     colorLarge: "#4CAF50",
//     colorSmall: "#357A38",
//   },
// ];

export default mockdata;
