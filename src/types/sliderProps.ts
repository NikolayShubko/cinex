import { Film } from "./films";

export interface SliderProps {
  filmData: Film[];
  isLoading: boolean;
  variant?: "content-page";
}
