import { Button } from "../../components/ui/button";
import MovieCard from "../../shared/ui/movie-card";

const MovieHorizontalList = () => {
  return (
    <>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex justify-between">
            <h3 className="uppercase font-black text-xl md:text-2xl">Filmes populares</h3>
            <Button variant="link" className="text-muted-foreground">Ver mais...</Button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-4">
            <MovieCard></MovieCard>
            {/* <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div> */}
        </div>
      </div>
    </>
  );
};

export default MovieHorizontalList;
