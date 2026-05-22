import {
  BookmarkIcon,
  Star,
  StarIcon,
  StarsIcon,
  VideoIcon,
} from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Route } from "../../../routes/details/$id";
import { useMovieDetails } from "../../../entities/movie/api/use-movie-details";
import moment from "moment";
import { CastList } from "../../../widgets/cast-list";
import { DetailsSkeleton } from "./details-skeleton";
import { useWatchlistStore } from "../../../stores/watchlist/use-watchlist-store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { TrailerViewer } from "../../../widgets/trailer-viewer";

export function DetailsPage() {
  const { id } = Route.useParams();

  const { data: movie, isLoading, error, refetch } = useMovieDetails(id);

  const { addMovie, removeMovie, isFavorite } = useWatchlistStore();

  return (
    <>
      <section
        className="min-h-[75dvh] p-4 md:p-24 py-8 flex flex-col gap-8 items-center bg-cover bg-center"
        style={{
          backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(29, 36, 42, 0.70) 0px,
            #1D242A ${window.innerWidth < 768 ? "250px" : "400px"}
          ),
          url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})
        `,
        }}
      >
        {!error &&
          (isLoading ? (
            <DetailsSkeleton />
          ) : (
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt="Poster do filme"
                className="w-40 max-w-100 md:w-2/5 h-full rounded-sm border border-[#1d242aea] shadow-lg"
              />
              <div className="flex flex-col gap-2 max-w-150">
                <div className="flex items-end gap-2">
                  <h1 className="text-white text-3xl georgia font-bold">
                    {movie?.title}
                  </h1>
                  <span className="text-gray-400 text-md font-extralight">
                    {moment(movie?.release_date).year()}
                  </span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="flex">
                    {Array.from({
                      length: Math.round(Number(movie?.vote_average)),
                    }).map(() => (
                      <Star className="text-yellow-300 fill-yellow-300 h-5"></Star>
                    ))}
                  </span>
                  <span className="text-sm text-gray-400 leading-tight">
                    {movie?.vote_average.toString().slice(0, 3)}
                  </span>
                </div>
                <span className="text-gray-400 font-extralight text-xl georgia-title">
                  {movie?.tagline}
                </span>
                <span className="text-xs font-extralight text-gray-400 flex gap-1">
                  {movie?.genres.map((genre) => (
                    <Badge className="bg-[#485568] rounded-xs font-extralight">
                      {genre.name}
                    </Badge>
                  ))}
                </span>
                <p className="leading-tight text-white">{movie?.overview}</p>
                <div className="flex flex-col gap-2">
                  <h5 className="font-black uppercase text-white inter-title">
                    Elenco
                  </h5>
                  <CastList movieID={movie?.id}></CastList>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="font-black uppercase text-white inter-title">
                    Ações
                  </h5>
                  <div className="flex gap-2">
                    <Button
                      onClick={() =>
                        isFavorite(movie?.id)
                          ? removeMovie(movie?.id)
                          : addMovie(movie!)
                      }
                      className="cursor-pointer h-12 uppercase font-extralight bg bg-[#F98635] text-white"
                    >
                      <BookmarkIcon
                        className={`${isFavorite(movie?.id) ? "fill-white" : ""}`}
                      ></BookmarkIcon>
                      {!isFavorite(movie?.id)
                        ? "Adicionar aos favoritos"
                        : "Remover dos favoritos"}
                    </Button>
                    <Dialog>
                      <DialogTrigger>
                        <Button className="h-12 uppercase font-extralight bg-gray-400 text-gray-800">
                          <VideoIcon></VideoIcon> Assistir trailer
                        </Button>
                      </DialogTrigger>
                      <DialogContent
                        showCloseButton={false}
                        className="bg-[#14181c] w-6xl!"
                      >
                        <TrailerViewer movieID={movie?.id}></TrailerViewer>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {error && (
          <div className="flex w-full h-150 text-white flex-col items-center justify-center gap-2 p-4 text-center leading-tight md:gap-4">
            <h3 className="text-xl font-bold md:text-2xl">Ops...</h3>

            <p>Ocorreu um erro ao buscar os detalhes desse filme.</p>

            <Button
              onClick={() => refetch()}
              variant="secondary"
              className="h-12"
            >
              Tentar novamente
            </Button>
          </div>
        )}
      </section>
    </>
  );
}
