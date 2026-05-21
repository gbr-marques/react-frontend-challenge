import { useQuery } from "@tanstack/react-query";
import { tmdbFetch } from "../../../shared/api/tmdb";
import type { IMoviesResponse } from "../model/types";
import { boolean } from "zod";

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

  const data = await tmdbFetch<IMoviesResponse>(
    `/movie/popular?${params.toString()}`,
  );
  return data;
}
