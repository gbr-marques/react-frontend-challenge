import { useState } from "react";
import { Button } from "../../components/ui/button";
import { usePopularMovies } from "../../entities/movie/api/use-popular-movies";
import MovieCard from "../../shared/ui/movie-card";
import type { TMovie } from "../../entities/movie/model/types";

const MovieHorizontalList = () => {
  const { data, isLoading } = usePopularMovies();

  if (isLoading) {
    console.log("Carregando filmes...");
  }

  return (
    <>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex justify-between">
          <h3 className="uppercase font-black text-xl md:text-2xl">
            Filmes populares
          </h3>
          <Button variant="link" className="text-muted-foreground">
            Ver mais...
          </Button>
        </div>
        <div className="flex gap-2 md:gap-4 overflow-x-scroll pb-4 h-60 md:h-80 w-full">
          {isLoading ? (
            <p>Carregando filmes...</p>
          ) : (
            data?.map((movie: TMovie) => (
              <MovieCard movie={movie} key={movie.id}></MovieCard>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default MovieHorizontalList;
