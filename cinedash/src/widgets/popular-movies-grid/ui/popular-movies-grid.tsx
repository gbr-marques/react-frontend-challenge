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

  const { data, isLoading, error, refetch } = usePopularMovies(true, page);

  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <h3 className="uppercase font-black text-xl text-white md:text-2xl inter-title">
          Filmes populares
        </h3>

        {data?.total_results === 0 ? (
          <div className="flex h-150 w-full flex-col items-center justify-center gap-2 p-4 text-center leading-tight text-white md:gap-4">
            <h3 className="text-xl font-bold md:text-2xl">
              Nenhum filme encontrado
            </h3>

            <p>Não encontramos resultados para os filtros escolhidos.</p>
          </div>
        ) : error ? (
          <div className="flex h-150 w-full flex-col items-center justify-center gap-2 p-4 text-center leading-tight text-white md:gap-4">
            <h3 className="text-xl font-bold md:text-2xl">Ops...</h3>

            <p>Ocorreu um erro ao buscar os filmes.</p>

            <Button
              onClick={() => refetch()}
              variant="secondary"
              className="h-12"
            >
              Tentar novamente
            </Button>
          </div>
        ) : (
          <MovieGrid
            movies={data?.results}
            isLoading={isLoading}
            page={page}
            totalPages={data?.total_pages}
            setPage={setPage}
          />
        )}
      </div>
    </>
  );
}
