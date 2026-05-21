import { ArrowLeftIcon, ArrowRightIcon, LoaderCircleIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { usePopularMovies } from "../../../entities/movie/api/use-popular-movies";
import type { IMovie } from "../../../entities/movie/model/types";
import MovieCard from "../../../shared/ui/movie-card";
import { useState } from "react";
import MovieCardSkeleton from "../../../shared/ui/movie-card/skeleton";
import { MovieGrid } from "../../movie-grid";

export function PopularMoviesGrid() {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading } = usePopularMovies(true, page);

  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="uppercase font-black text-xl text-white md:text-2xl inter-title">
          Filmes populares
        </h3>
        
        <MovieGrid
          movies={data?.results}
          isLoading={isLoading}
          page={page}
          totalPages={data?.total_pages}
          setPage={setPage}
        />
      </div>
    </>
  );
}
