import { ArrowLeftIcon, ArrowRightIcon, LoaderCircleIcon } from "lucide-react";
import MovieCardSkeleton from "../../shared/ui/movie-card/skeleton";
import MovieCard from "../../shared/ui/movie-card";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { useDebounce } from "../../shared/lib/use-debounce";
import { useSearchedMovies } from "../../entities/movie/api/use-searched-movies";
import type { IMovie } from "../../entities/movie/model/types";
import { MovieGrid } from "../movie-grid";

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
        <h3 className="uppercase font-black text-xl text-white md:text-2xl inter-title">
          Busca por título
        </h3>
        <Input
          className="bg-white h-12 md:w-150"
          type="text"
          placeholder="Pesquise pelo nome do filme..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {data?.total_results === 0 ? (
          <span>
            {debouncedTitle === ""
              ? "Digite o título do filme para realizar uma pesquisa..."
              : "Nenhum resultado encontrado para o título pesquisado..."}
          </span>
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
};

export default MovieSearchGrid;
