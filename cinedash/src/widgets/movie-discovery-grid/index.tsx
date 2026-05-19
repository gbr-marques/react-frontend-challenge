import {
  ArrowLeftIcon,
  ArrowRightIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import { Input } from "../../components/ui/input";
import { Toggle } from "../../components/ui/toggle";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import MovieCard from "../../shared/ui/movie-card";
import { Button } from "../../components/ui/button";

const MoviedDiscoveryGrid = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 justify-between">
            <Input
              className="bg-white h-12 md:w-150"
              type="text"
              placeholder="Pesquise pelo nome do filme..."
            ></Input>
            <Toggle>
              <SlidersHorizontalIcon className="text-gray-500"></SlidersHorizontalIcon>
              <span className="text-gray-400 hidden md:block">
                Exibir filtros
              </span>
            </Toggle>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 p-2 md:p-4 border border-gray-400 rounded-sm">
            <legend className="text-gray-400 text-sm">Filtrar por:</legend>
            <div className="flex gap-2 md:gap-4">
              <Select>
                <SelectTrigger className="w-full max-w-48 bg-gray-300 h-12!">
                  <SelectValue placeholder="GÊNERO" />
                </SelectTrigger>
                <SelectContent className="bg-gray-300">
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full max-w-48 bg-gray-300 h-12!">
                  <SelectValue placeholder="ANO" />
                </SelectTrigger>
                <SelectContent className="bg-gray-300">
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full max-w-48 bg-gray-300 h-12!">
                  <SelectValue placeholder="AVALIAÇÂO" />
                </SelectTrigger>
                <SelectContent className="bg-gray-300">
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2  w-full">
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
        </div>
        <div className="flex items-center justify-between">
          <Button className="bg-gray-400 h-12 uppercase font-extralight text-gray-800">
            <ArrowLeftIcon></ArrowLeftIcon> Página anterior
          </Button>
          <Button className="bg-gray-400 h-12 uppercase font-extralight text-gray-800">
            Próxima página <ArrowRightIcon></ArrowRightIcon>
          </Button>
        </div>
      </div>
    </>
  );
};

export default MoviedDiscoveryGrid;
