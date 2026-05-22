import { useQuery } from "@tanstack/react-query";
import { tmdbFetch } from "../../../shared/api/tmdb";
import type { IPopularMoviesResponse } from "../model/types";

export function usePopularMovies(shouldFetch: boolean, page: number = 1) {
  return useQuery({
    queryKey: ["popular-movies", page],
    queryFn: () => fetchPopularMovies(page),
    enabled: shouldFetch,
  });
}

async function fetchPopularMovies(page: number) {
  const params = new URLSearchParams();

  params.append("page", page.toString());

  const data = await tmdbFetch<IPopularMoviesResponse>(
    `/movie/popular?${params.toString()}`,
  );
  return data;
}
