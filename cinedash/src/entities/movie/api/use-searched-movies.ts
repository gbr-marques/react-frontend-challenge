import { useQuery } from "@tanstack/react-query";
import { tmdbFetch } from "../../../shared/api/tmdb";
import type { IPopularMoviesResponse } from "../model/types";

type IParams = {
  query: string;
  page: number;
};

export function useSearchedMovies(searchParams: IParams, enabled: boolean) {
  return useQuery({
    queryKey: ["search", "movies", searchParams],
    queryFn: () => fetchSearchedMovies(searchParams),
    enabled,
  });
}

async function fetchSearchedMovies(searchParams: IParams) {
  const params = new URLSearchParams();

  if (searchParams.query) params.append("query", searchParams.query);
  params.append("page", searchParams.page.toString());

  const data = await tmdbFetch<IPopularMoviesResponse>(
    `/search/moie?${params.toString()}&language=pt-BR`,
  );

  return data;
}
