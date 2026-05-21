import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { usePopularMovies } from "../../../entities/movie/api/use-popular-movies";
import type { IMovie } from "../../../entities/movie/model/types";
import MovieCard from "../../../shared/ui/movie-card";
import { useState } from "react";

export function PopularMoviesGrid() {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading } = usePopularMovies(true, page);

  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="uppercase font-black text-xl text-white md:text-2xl inter-title">
          Filmes populares
        </h3>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 w-full">
          {data.results?.map((movie: IMovie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <Button
            className="bg-gray-400 h-12 uppercase font-extralight text-gray-800"
            disabled={page == 1}
            onClick={() => setPage((currtentPage) => (currtentPage -= 1))}
          >
            <ArrowLeftIcon /> Página anterior
          </Button>
          {page}
          <Button
            className="bg-gray-400 h-12 uppercase font-extralight text-gray-800"
            disabled={page == data.total_pages}
            onClick={() => setPage((currtentPage) => (currtentPage += 1))}
          >
            Próxima página <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </>
  );
}
