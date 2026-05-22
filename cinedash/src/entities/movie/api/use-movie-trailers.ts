import { useQuery } from "@tanstack/react-query";
import { tmdbFetch } from "../../../shared/api/tmdb";
import type { IMovieVideosResponse } from "../model/types";

export function useMovieTrailers(movieID: number | undefined) {
  return useQuery({
    queryKey: ["trailers", movieID],
    queryFn: () => fetchMovieTrailers(movieID),
  });
}

async function fetchMovieTrailers(movieID: number | undefined = 0) {

  const data = await tmdbFetch<IMovieVideosResponse>(
    `/movie/${movieID}/videos`,
  );

  return data;
}
