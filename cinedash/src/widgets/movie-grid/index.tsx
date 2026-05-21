import { ArrowLeftIcon, ArrowRightIcon, LoaderCircleIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import MovieCard from "../../shared/ui/movie-card";
import MovieCardSkeleton from "../../shared/ui/movie-card/skeleton";
import type { IMovie } from "../../entities/movie/model/types";

type Props = {
  movies?: IMovie[];
  isLoading: boolean;
  page: number;
  totalPages?: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export function MovieGrid({
  movies,
  isLoading,
  page,
  totalPages,
  setPage,
}: Props) {
  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 w-full">
        {isLoading
          ? Array.from({ length: 20 }).map((_, i) => (
              <MovieCardSkeleton key={i} />
            ))
          : movies?.map((movie: IMovie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
      </div>

      <div className="flex items-center justify-between">
        <Button
          className="bg-gray-400 h-12 uppercase font-extralight text-gray-800"
          disabled={page === 1 || isLoading}
          onClick={() => setPage((currentPage: number) => currentPage - 1)}
        >
          {isLoading ? (
            <LoaderCircleIcon className="animate-spin" />
          ) : (
            <ArrowLeftIcon />
          )}
          Página anterior
        </Button>

        {page}

        <Button
          className="bg-gray-400 h-12 uppercase font-extralight text-gray-800"
          disabled={page === totalPages || isLoading}
          onClick={() => setPage((currentPage: number) => currentPage + 1)}
        >
          Próxima página
          {isLoading ? (
            <LoaderCircleIcon className="animate-spin" />
          ) : (
            <ArrowRightIcon />
          )}
        </Button>
      </div>
    </>
  );
}
