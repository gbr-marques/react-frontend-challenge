import { useQuery } from "@tanstack/react-query";
import { tmdbFetch } from "../../../shared/api/tmdb";
import type { TMoviesResponse } from "../model/types";

export function usePopularMovies() {
  return useQuery({
    queryKey: ["popular-movies"],
    queryFn: fetchPopularMovies,
  });
}

async function fetchPopularMovies() {
  const data = await tmdbFetch<TMoviesResponse>("/movie/popular");
  return data.results;
}

// const fetchPopularMovies = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   return await response.json();
// };
