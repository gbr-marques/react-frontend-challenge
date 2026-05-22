import { useQuery } from "@tanstack/react-query";
import type { IGenresResponse } from "../model/types";
import { tmdbFetch } from "../../../shared/api/tmdb";

export function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenres,
  })
}

async function fetchGenres() {
  const data = await tmdbFetch<IGenresResponse[]>("/genre/movie/list");
  return data;
}

