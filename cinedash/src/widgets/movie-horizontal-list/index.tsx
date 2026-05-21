import { usePopularMovies } from "../../entities/movie/api/use-popular-movies";
import MovieCard from "../../shared/ui/movie-card";
import type { IMovie } from "../../entities/movie/model/types";
import { Link } from "@tanstack/react-router";
import HorizontalListSkeleton from "./ui/skeleton";

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
  const { data, isLoading } = usePopularMovies(displayMode === "popular");

  return (
    <>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex justify-between items-center">
          <h3 className="uppercase font-black text-xl md:text-2xl inter-title">{title}</h3>
          {showHyperlink && (
            <Link to={hyperlinkRoute} className="text-sm text-grey-400">
              Ver mais...
            </Link>
          )}
        </div>
        <div className="flex gap-2 md:gap-4 overflow-x-scroll pb-4 h-60 md:h-80 w-full">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <HorizontalListSkeleton key={i} />
              ))
            : data?.results.map((movie: IMovie) => (
                <MovieCard movie={movie} key={movie.id}></MovieCard>
              ))}
        </div>
      </div>
    </>
  );
};

export default MovieHorizontalList;
