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
import {
  StarIcon,
} from "lucide-react";
import { MovieGrid } from "../movie-grid";

const MoviedDiscoveryGrid = () => {
  const [year, setYear] = useState<string>();
  const [genre, setGenre] = useState<string>();
  const [rating, setRating] = useState<string>();

  const [page, setPage] = useState<number>(1);

  const { data, isLoading, error } = useFilteredMovies({
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
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 p-2 md:p-4 border border-gray-400 rounded-sm">
        <legend className="text-gray-400 text-sm">Filtrar por:</legend>

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

      {data?.total_results === 0 ? (
        <span>Nenhum filme encontrado para os filtros escolhidos...</span>
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
