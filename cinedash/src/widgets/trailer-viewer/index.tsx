import { DialogClose } from "../../components/ui/dialog";
import { useMovieTrailers } from "../../entities/movie/api/use-movie-trailers";
import { Button } from "../../components/ui/button";
import { Skeleton } from "../../components/ui/skeleton";

type Props = {
  movieID: number | undefined;
};

export function TrailerViewer({ movieID }: Props) {
  const { data: videos, isLoading, error, refetch } = useMovieTrailers(movieID);

  return (
    <>
      <div className="flex flex-col gap-4">
        {isLoading && (
          <Skeleton className="aspect-video! bg-[#2b363f]"></Skeleton>
        )}
        {error && (
          <div className="flex flex-col items-center gap-2">
            <h5 className=" text-white text-xl font-bold">Ops...</h5>
            <p className="text-white">
              Ocorreu um erro ao buscar os trailers do filme.
            </p>
            <Button variant={"secondary"} onClick={() => refetch()}>
              Tentar novamente
            </Button>
          </div>
        )}
        {!isLoading &&
          !error &&
          videos?.results.slice(0, 1).map((video) => (
            <div className="flex flex-col  gap-4">
              <h5 className=" text-white text-xl font-bold">{video.name}</h5>
              <iframe
                key={video.id}
                width="100%"
                height="220"
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                allowFullScreen
                className="rounded-sm"
              />
              <DialogClose>
                <Button
                  type="button"
                  className="bg-gray-400 text-bg-gray-500 h-12 uppercase font-extralight text-white"
                >
                  Fechar
                </Button>
              </DialogClose>
            </div>
          ))}
      </div>
    </>
  );
}
