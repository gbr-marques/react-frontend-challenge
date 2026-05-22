import { useQuery } from "@tanstack/react-query";
import { tmdbFetch } from "../../../shared/api/tmdb";
import type { IMovie } from "../model/types";

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

  return tmdbFetch<{ results: IMovie[] }>(
    `/search/moie?${params.toString()}&language=pt-BR`,
  );
}
