import {
  ArrowLeftIcon,
  ArrowRightIcon,
  LoaderCircleIcon,
} from "lucide-react";
import MovieCardSkeleton from "../../shared/ui/movie-card/skeleton";
import MovieCard from "../../shared/ui/movie-card";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { useDebounce } from "../../shared/lib/use-debounce";
import { useSearchedMovies } from "../../entities/movie/api/use-searched-movies";
import type { IMovie } from "../../entities/movie/model/types";

const MovieSearchGrid = () => {
  const [page, setPage] = useState<number>(1);
  const [title, setTitle] = useState("");

  const debouncedTitle = useDebounce(title, 1000);

  const { data, isLoading, error } = useSearchedMovies({
    query: debouncedTitle,
    page,
  });

  return (
    <>
      <div className="flex flex-col gap-4">
        <Input
          className="bg-white h-12 md:w-150"
          type="text"
          placeholder="Pesquise pelo nome do filme..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 w-full">
          {isLoading
            ? Array.from({ length: 20 }).map((_, i) => (
                <MovieCardSkeleton></MovieCardSkeleton>
              ))
            : data.results?.map((movie: IMovie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
        </div>

        {/* PAGINAÇÃO */}
        <div className="flex items-center justify-between">
          <Button
            className="bg-gray-400 h-12 uppercase font-extralight text-gray-800"
            onClick={() => setPage((currentPage) => (currentPage -= 1))}
            disabled={page == 1 || isLoading}
          >
            {isLoading ? (
              <LoaderCircleIcon className="animate-spin"></LoaderCircleIcon>
            ) : (
              <ArrowLeftIcon />
            )}
            Página anterior
          </Button>
          {page}
          <Button
            className="bg-gray-400 h-12 uppercase font-extralight text-gray-800"
            onClick={() => setPage((currentPage) => (currentPage += 1))}
            disabled={page == data?.total_pages || isLoading}
          >
            Próxima página{" "}
            {isLoading ? (
              <LoaderCircleIcon className="animate-spin"></LoaderCircleIcon>
            ) : (
              <ArrowRightIcon />
            )}
          </Button>
        </div>
      </div>
    </>
  );
};

export default MovieSearchGrid;
