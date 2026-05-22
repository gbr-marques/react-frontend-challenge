import { Dialog } from "radix-ui";
import { DialogClose, DialogContent } from "../../components/ui/dialog";
import { useMovieTrailers } from "../../entities/movie/api/use-movie-trailers";
import { Button } from "../../components/ui/button";

type Props = {
  movieID: number | undefined;
};

export function TrailerViewer({ movieID }: Props) {
  const { data: videos, isLoading, error, refetch } = useMovieTrailers(movieID);

  return (
    <>
      {videos?.results.slice(0, 1).map((video) => (
        <div className="flex flex-col text-xl gap-4">
          <h5 className=" text-white  font-bold">{video.name}</h5>
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
    </>
  );
}
