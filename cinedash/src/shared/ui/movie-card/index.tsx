import { BookmarkIcon, SquareArrowOutUpRight } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../../components/ui/hover-card";
import { Separator } from "../../../components/ui/separator";
import { Toggle } from "../../../components/ui/toggle";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import type { IMovie } from "../../../entities/movie/model/types";
import { useWatchlistStore } from "../../../features/watchlist/use-watchlist-store";

type Props = {
  movie: IMovie;
};

export function MovieCard({ movie }: Props) {
  const navigate = useNavigate();

  const { isFavorite, addMovie, removeMovie } = useWatchlistStore();

  return (
    <>
      <HoverCard openDelay={50} closeDelay={50}>
        <HoverCardTrigger className="min-w-fit! aspect-[65/98]!">
          <img
            onClick={() => navigate({ to: `/details/${movie?.id}` })}
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={`Pôster do filme ${movie?.title}`}
            className="h-full rounded-sm border border-[#4D4D4D] shadow-lg text-white text-xs leading-tight text-center"
          />
        </HoverCardTrigger>
        <HoverCardContent className="bg-[#14181ce0] text-white flex flex-col gap-2 items-center max-w-45 text-center -mt-62.5 backdrop-blur-sm">
          <h5 className="text-lg font-bold">{movie?.title}</h5>
          <p className="text-sm line-clamp-5 font-extralight leading-tight">
            {movie?.overview}
          </p>
          <Separator></Separator>
          <div className="flex gap-2">
            <Button
              variant={"ghost"}
              onClick={() =>
                !isFavorite(movie.id) ? addMovie(movie) : removeMovie(movie?.id)
              }
            >
              <BookmarkIcon
                className={`${isFavorite(movie?.id) ? "fill-white" : ""}`}
              />
            </Button>
            <Button
              onClick={() => navigate({ to: `/details/${movie?.id}` })}
              variant={"ghost"}
            >
              <SquareArrowOutUpRight></SquareArrowOutUpRight>
            </Button>
          </div>
        </HoverCardContent>
      </HoverCard>
    </>
  );
}

export default MovieCard;
