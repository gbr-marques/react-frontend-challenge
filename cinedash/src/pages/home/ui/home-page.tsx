import MovieHorizontalList from "../../../widgets/movie-horizontal-list";

const HomePage = () => {
  return (
    <>
      <section className="min-h-[75dvh] bg-[#1D242A] p-4 py-8 flex flex-col gap-8">
        <div className="text-white text-center leading-tight flex flex-col gap-4">
          <h1 className="text-2xl">
            Bem-vindo, curador! Pronto para descobrir novos filmes?
          </h1>
          <p>
            Esta é a homepage do CineDash, uma plataforma de curadoria e
            descoberta de filmes desenvolvida para auxiliar equipes de streaming
            na análise, organização e seleção de títulos. Aqui você pode
            explorar tendências, descobrir novos filmes e acompanhar informações
            relevantes para a construção de catálogos cinematográficos.
          </p>
        </div>
        <MovieHorizontalList></MovieHorizontalList>
        <MovieHorizontalList></MovieHorizontalList>
      </section>
    </>
  );
};

export default HomePage;
