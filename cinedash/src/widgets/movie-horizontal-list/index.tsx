import { Button } from "../../components/ui/button";

const MovieHorizontalList = () => {
  return (
    <>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex justify-between">
            <h3 className="uppercase font-black text-xl">Filmes populares</h3>
            <Button variant="link" className="text-muted-foreground">Ver mais...</Button>
        </div>
        <div className="flex gap-2 overflow-scroll pb-4">
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
            <div className="h-42 min-w-30 rounded-sm bg-[#202020] border border-[#4D4D4D]"></div>
        </div>
      </div>
    </>
  );
};

export default MovieHorizontalList;
