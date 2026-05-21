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

  const { data, isLoading } = usePopularMovies(displayMode === "popular");

  const movieList = displayMode === "popular" ? data?.results || [] : watchlist;

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex justify-between items-center">
          <h3 className="uppercase font-black text-xl md:text-2xl inter-title">
            {title}
          </h3>
          {showHyperlink && (
            <Link to={hyperlinkRoute} className="text-sm text-grey-400">
              Ver mais...
            </Link>
          )}
        </div>
        <div className="flex gap-2 md:gap-4 overflow-x-scroll pb-4 h-60 md:h-80 w-full">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <MovieCardSkeleton key={i} />
              ))
            : movieList?.map((movie: IMovie) => (
                <MovieCard movie={movie} key={movie.id}></MovieCard>
              ))}
          {movieList.length == 0 && displayMode == "watchlist" && (
            <div className="w-full text-center leading-tight flex flex-col gap-2 md:gap-4 justify-center items-center">
              <h3 className="w-fit! flex text-xl md:text-2xl font-bold items-center justify-center">
                Parece que sua lista está vazia...
              </h3>
              <p>
                Que tal explorar a sessão 'Descobertas' para conhecer alguns filmes que
                possam ser adicionados à ela?
              </p>
              <Button
                onClick={() => navigate({ to: "/discover" })}
                variant={"secondary"}
                className="h-12"
              >
                Descobertas <StarsIcon></StarsIcon>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieHorizontalList;
