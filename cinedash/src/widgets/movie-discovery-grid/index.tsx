import { useState } from "react";
import { useFilteredMovies } from "../../entities/movie/api/use-filtered-movies";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { genres } from "../../shared/model/genres";
import { StarIcon } from "lucide-react";
import { MovieGrid } from "../movie-grid";
import { Button } from "../../components/ui/button";

const MoviedDiscoveryGrid = () => {
  const [year, setYear] = useState<string>();
  const [genre, setGenre] = useState<string>();
  const [rating, setRating] = useState<string>();

  const [page, setPage] = useState<number>(1);

  const { data, isLoading, error, refetch } = useFilteredMovies({
    year,
    genre,
    rating,
    page,
  });

  return (
    <div className="flex flex-col gap-4">
      <h3 className="uppercase font-black text-xl text-white md:text-2xl inter-title">
        Filtros avançados
      </h3>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
        <legend className="text-gray-400 text-sm">Filtrar por:</legend>

        <div className="flex gap-2">
          <Select onValueChange={setGenre}>
            <SelectTrigger className="w-full max-w-48 bg-gray-300 h-12!">
              <SelectValue placeholder="GÊNERO" />
            </SelectTrigger>

            <SelectContent className="bg-gray-300">
              <SelectGroup>
                {genres.map((g) => (
                  <SelectItem key={g.id} value={String(g.id)}>
                    {g.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select onValueChange={setYear}>
            <SelectTrigger className="w-full max-w-48 bg-gray-300 h-12!">
              <SelectValue placeholder="ANO" />
            </SelectTrigger>

            <SelectContent className="bg-gray-300">
              <SelectGroup>
                {Array.from({ length: 2026 - 1950 + 1 }, (_, i) => {
                  const year = 2026 - i;

                  return (
                    <SelectItem key={year} value={String(year)}>
                      {year}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select onValueChange={setRating}>
            <SelectTrigger className="w-full max-w-48 bg-gray-300 h-12!">
              <SelectValue placeholder="AVALIAÇÃO" />
            </SelectTrigger>

            <SelectContent className="bg-gray-300">
              <SelectGroup>
                {Array.from({ length: 10 }, (_, i) => {
                  const value = i + 1;

                  return (
                    <SelectItem key={value} value={String(value)}>
                      <StarIcon className="fill-foreground" />
                      {value}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

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
  );
};

export default MoviedDiscoveryGrid;
