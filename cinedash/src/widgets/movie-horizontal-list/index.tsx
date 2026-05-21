import { usePopularMovies } from "../../entities/movie/api/use-popular-movies";
import MovieCard from "../../shared/ui/movie-card";
import type { IMovie } from "../../entities/movie/model/types";
import { Link, useNavigate } from "@tanstack/react-router";
import MovieCardSkeleton from "../../shared/ui/movie-card/skeleton";
import { useState } from "react";
import { useWatchlistStore } from "../../features/watchlist/use-watchlist-store";
import { SearchIcon, StarsIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

type Props = {
  title: string;
  displayMode: "popular" | "watchlist";
  showHyperlink: boolean;
  hyperlinkRoute?: string;
};

const MovieHorizontalList = ({
  title,
  displayMode,
  showHyperlink,
  hyperlinkRoute,
}: Props) => {
  const { watchlist } = useWatchlistStore();

  const navigate = useNavigate();

  const { data, isLoading, error, refetch } = usePopularMovies(
    displayMode === "popular",
  );

  const movieList = displayMode === "popular" ? data?.results || [] : watchlist;

  const isWatchlistEmpty =
    displayMode === "watchlist" && movieList.length === 0;

  const hasPopularError = displayMode === "popular" && error;

  const isPopularLoading = displayMode === "popular" && isLoading;

  return (
    <>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex justify-between items-baseline">
          <h3 className="uppercase font-black text-xl md:text-2xl inter-title">
            {title}
          </h3>
          {showHyperlink && (
            <Link
              to={hyperlinkRoute}
              className="text-xs md:text-sm text-gray-400"
            >
              Ver mais...
            </Link>
          )}
        </div>
        <div className="flex gap-2 md:gap-4 overflow-x-auto pb-4 h-60 md:h-80 w-full [mask-image:linear-gradient(to_right,black_90%,transparent)]">
          {isWatchlistEmpty && (
            <div className="flex w-full flex-col items-center justify-center gap-2 p-4 text-center leading-tight md:gap-4">
              <h3 className="text-xl font-bold md:text-2xl">
                Parece que sua lista está vazia...
              </h3>

              <p>
                Que tal explorar a sessão "Descobertas" para conhecer alguns
                filmes que possam ser adicionados à ela?
              </p>

              <Button
                onClick={() => navigate({ to: "/discover" })}
                variant="secondary"
                className="h-12"
              >
                Descobertas <StarsIcon />
              </Button>
            </div>
          )}

          {isPopularLoading &&
            Array.from({ length: 8 }).map((_, i) => (
              <MovieCardSkeleton key={i} />
            ))}

          {!isPopularLoading &&
            !hasPopularError &&
            movieList.map((movie: IMovie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}

          {hasPopularError && (
            <div className="flex w-full flex-col items-center justify-center gap-2 p-4 text-center leading-tight md:gap-4">
              <h3 className="text-xl font-bold md:text-2xl">Ops...</h3>

              <p>Ocorreu um erro ao buscar os filmes do momento.</p>

              <Button
                onClick={() => refetch()}
                variant="secondary"
                className="h-12"
              >
                Tentar novamente
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieHorizontalList;
