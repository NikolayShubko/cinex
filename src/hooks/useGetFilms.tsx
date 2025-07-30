import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import api from "../components/api/api";
import { useAppDispatch } from "./reduxHooks";
import { setFilm } from "../store/selectedFilm/slice";
import { Film } from "../components/Slider/mockdata";

function useGetFilms(endpoint: string): [Film[] | null, boolean] {
  const [films, setFilms] = useState<Film[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getFilms = async () => {
      const data = await api.get(endpoint);
      setFilms(data.data);
      dispatch(setFilm(data.data[0]));
      setIsLoading(false);
    };
    getFilms();
  }, [endpoint]);

  return [films, isLoading];
}

export default useGetFilms;
