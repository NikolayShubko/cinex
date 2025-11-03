export interface Film {
  id: number;
  title: string;
  releaseYear: number;
  description: string;
  authors: string;
  cast: string;
  ageRating: string;
  genres: string;
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
