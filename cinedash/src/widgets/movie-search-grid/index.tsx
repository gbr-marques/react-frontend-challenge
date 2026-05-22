import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { useDebounce } from "../../shared/lib/use-debounce";
import { useSearchedMovies } from "../../entities/movie/api/use-searched-movies";
import type { IMovie } from "../../entities/movie/model/types";
import { MovieGrid } from "../movie-grid";
import { Button } from "../../components/ui/button";

const MovieSearchGrid = () => {
  const [page, setPage] = useState<number>(1);
  const [title, setTitle] = useState("");

  const debouncedTitle = useDebounce(title, 1000);

  const { data, isLoading, error, refetch } = useSearchedMovies(
    {
      query: debouncedTitle,
      page,
    },
    debouncedTitle !== "",
  );

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

        {debouncedTitle === "" ? (
          <div className="h-75 flex items-center justify-center text-xl leading-tight text-center text-white font-bold">
            <span className="w-fit! text-center flex gap-4 items-center justify-center">
              Digite o título do filme para realizar uma pesquisa
              <SearchIcon size={48} className="stroke-3"></SearchIcon>
            </span>{" "}
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
};

export default MovieSearchGrid;
