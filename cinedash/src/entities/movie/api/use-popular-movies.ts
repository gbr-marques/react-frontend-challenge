import { useQuery } from "@tanstack/react-query";
import { tmdbFetch } from "../../../shared/api/tmdb";
import type { IMoviesResponse } from "../model/types";
import { boolean } from "zod";

export function usePopularMovies(shouldFetch: boolean) {
  return useQuery({
    queryKey: ["popular-movies"],
    queryFn: fetchPopularMovies,
    enabled: shouldFetch,
  });
}

async function fetchPopularMovies() {
  const data = await tmdbFetch<IMoviesResponse>("/movie/popular");
  return data.results;
}
