import { Separator } from "../../../components/ui/separator";
import MoviedDiscoveryGrid from "../../../widgets/movie-discovery-grid";
import MovieHorizontalList from "../../../widgets/movie-horizontal-list";

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
        <MovieHorizontalList></MovieHorizontalList>
        <Separator></Separator>
        <MoviedDiscoveryGrid></MoviedDiscoveryGrid>
      </section>
    </>
  );
}
