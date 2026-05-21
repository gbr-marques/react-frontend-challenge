import { Separator } from "../../../components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import MoviedDiscoveryGrid from "../../../widgets/movie-discovery-grid";
import MovieHorizontalList from "../../../widgets/movie-horizontal-list";
import MovieSearchGrid from "../../../widgets/movie-search-grid";
import { PopularMoviesGrid } from "../../../widgets/popular-movies-grid/ui/popular-movies-grid";

export function DiscoverPage() {
  return (
    <>
      <section className="min-h-[75dvh] bg-[#1D242A] p-4 py-8 flex flex-col items-center gap-8">
        <div className="w-full max-w-[1350px] flex flex-col gap-8">
          <div className="text-white text-center leading-tight flex flex-col items-center gap-4 ">
            <h1 className="text-2xl md:text-4xl georgia font-bold">
              Navegue por novas histórias
            </h1>
            <p className="md:max-w-200 lg:max-w-250">
              Descubra produções populares, acompanhe novidades e avalie títulos
              para compor o catálogo ideal.
            </p>
          </div>
          <Tabs defaultValue="popular" className="flex flex-col items-center gap-4">
            <TabsList className="bg-gray-300! w-full! md:w-fit! md:flex md:gap-2 ">
              <TabsTrigger className="text-xs md:text-sm" value="popular">Os mais populares</TabsTrigger>
              <TabsTrigger className="text-xs md:text-sm" value="search">Buscar por título</TabsTrigger>
              <TabsTrigger className="text-xs md:text-sm" value="filters">Filtros avançados</TabsTrigger>
            </TabsList>
            <TabsContent className="w-full" value="popular">
              <PopularMoviesGrid></PopularMoviesGrid>
            </TabsContent>
            <TabsContent className="w-full" value="search">
              <MovieSearchGrid></MovieSearchGrid>
            </TabsContent>
            <TabsContent className="w-full" value="filters">
              <MoviedDiscoveryGrid></MoviedDiscoveryGrid>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
