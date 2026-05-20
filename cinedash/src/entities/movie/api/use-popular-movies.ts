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

// const fetchPopularMovies = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   return await response.json();
// };
