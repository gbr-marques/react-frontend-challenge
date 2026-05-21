import {
  ArrowLeftIcon,
  ArrowRightIcon,
  LoaderCircleIcon,
  SearchIcon,
} from "lucide-react";
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
        {data?.total_results === 0 && debouncedTitle !== "" ? (
          <div className="h-75 flex items-center justify-center text-xl leading-tight text-center text-white font-bold">
            <span className="w-4/5 flex gap-4 items-center">
              "Nenhum resultado encontrado para o título pesquisado..."
              <SearchIcon size={48} className="stroke-3"></SearchIcon>
            </span>
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
        {debouncedTitle === "" && (
          <div className="h-75 flex items-center justify-center text-xl leading-tight text-center text-white font-bold">
            <span className="w-4/5 flex gap-4 items-center">
              Digite o título do filme para realizar uma pesquisa
              <SearchIcon size={48} className="stroke-3"></SearchIcon>
            </span>{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default MovieSearchGrid;
