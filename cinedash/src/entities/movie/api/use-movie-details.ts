import { useQuery } from "@tanstack/react-query";
import { tmdbFetch } from "../../../shared/api/tmdb";
import type { IMovie } from "../model/types";

export function useMovieDetails( id: string) {
  return useQuery({
    queryKey: ["movie-details"],
    queryFn: () => fetchMovieDetails(id),
  });
}

async function fetchMovieDetails(id: string) {
  const data = await tmdbFetch<IMovie>(`/movie/${id}`);
  return data;
}
