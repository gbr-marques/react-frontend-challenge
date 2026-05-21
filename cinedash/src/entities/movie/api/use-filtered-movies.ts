import { useQuery } from "@tanstack/react-query";
import type { IMovie } from "../model/types";
import { tmdbFetch } from "../../../shared/api/tmdb";

type IFilters = {
  year?: string;
  genre?: string;
  rating?: string;
  title?: string;
  page: number
};

export function useFilteredMovies(filters: IFilters) {
  return useQuery({
    queryKey: ["movies", filters],
    queryFn: () => fetchMovies(filters),
  });
}

async function fetchMovies(filters: IFilters) {
  const params = new URLSearchParams();

  if (filters.title) params.append("query", filters.title);
  if (filters.year) params.append("primary_release_year", filters.year);
  if (filters.genre) params.append("with_genres", filters.genre);
  if (filters.rating) params.append("vote_average.gte", filters.rating);
  params.append("page", filters.page.toString());

  return tmdbFetch<{ results: IMovie[] }>(
    `/discover/movie?${params.toString()}&language=pt-BR`,
  );
}
