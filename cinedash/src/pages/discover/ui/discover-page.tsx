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
      <section className="min-h-[75dvh] bg-[#1D242A] p-4 py-8 flex flex-col gap-8">
        <div className="text-white text-center leading-tight flex flex-col items-center gap-4 ">
          <h1 className="text-2xl md:text-4xl">Navegue por novas histórias </h1>
          <p className="md:max-w-200 lg:max-w-250">
            Descubra produções populares, acompanhe novidades e avalie títulos
            para compor o catálogo ideal.
          </p>
        </div>
        <Tabs className="flex flex-col gap-4">
          <TabsList className="bg-gray-300! w-full! md:w-auto">
            <TabsTrigger value="popular">Os mais populares</TabsTrigger>
            <TabsTrigger value="search">Buscar por título</TabsTrigger>
            <TabsTrigger value="filters">Filtros avançados</TabsTrigger>
          </TabsList>
          <TabsContent value="popular">
            <PopularMoviesGrid></PopularMoviesGrid>
          </TabsContent>
          <TabsContent value="search">
            <MovieSearchGrid></MovieSearchGrid>
          </TabsContent>
          <TabsContent value="filters">
            <MoviedDiscoveryGrid></MoviedDiscoveryGrid>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
