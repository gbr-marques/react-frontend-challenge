import { useQuery } from "@tanstack/react-query";
import { tmdbFetch } from "../../../shared/api/tmdb";
import type { ICreditsList } from "../model/types";

export function useCreditsList( id: number | undefined) {
  return useQuery({
    queryKey: ["credits-list"],
    queryFn: () => fetchCreditsList(id),
  });
}

async function fetchCreditsList(id: number | undefined) {

  const data = await tmdbFetch<ICreditsList>(`/movie/${id}/credits`);
  return data;
}
