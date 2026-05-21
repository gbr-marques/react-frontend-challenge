import { useState } from "react";
import { useDebounce } from "../../shared/lib/use-debounce";
import { useFilteredMovies } from "../../entities/movie/api/use-filtered-movies";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { genres } from "../../shared/model/genres";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import MovieCard from "../../shared/ui/movie-card";
import MovieCardSkeleton from "../../shared/ui/movie-card/skeleton";

const MoviedDiscoveryGrid = () => {
  const [year, setYear] = useState<string>();
  const [genre, setGenre] = useState<string>();
  const [rating, setRating] = useState<string>();

  const [page, setPage] = useState<number>(1);
  // const [title, setTitle] = useState("");

  // const debouncedTitle = useDebounce(title, 500);

  const { data, isLoading, error } = useFilteredMovies({
    year,
    genre,
    rating,
    page
  });

  return (
    <div className="flex flex-col gap-4">
      {/* INPUT */}
      {/* <Input
        className="bg-white h-12 md:w-150"
        type="text"
        placeholder="Pesquise pelo nome do filme..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> */}

      {/* FILTROS */}
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

      {/* GRID */}
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
          disabled={page == 1}
        >
          <ArrowLeftIcon /> Página anterior
        </Button>
        {page}
        <Button
          className="bg-gray-400 h-12 uppercase font-extralight text-gray-800"
          onClick={() => setPage((currentPage) => (currentPage += 1))}
          disabled={page == data?.total_pages}
        >
          Próxima página <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default MoviedDiscoveryGrid;
