import {
  Bookmark,
  BookmarkIcon,
  SquareArrowOutUpRight,
  View,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../../components/ui/hover-card";
import { Separator } from "../../../components/ui/separator";
import { Toggle } from "../../../components/ui/toggle";
import { Button } from "../../../components/ui/button";

const MovieCard = () => {
  return (
    <>
      <HoverCard openDelay={50} closeDelay={50}>
        <HoverCardTrigger>
          <img
            src="https://posterhouse.org/wp-content/uploads/2021/05/moonlight_0.jpg"
            alt="Poster do filme"
            className="w-40 md:w-50 rounded-sm border border-[#4D4D4D] shadow-lg"
          />
        </HoverCardTrigger>
        <HoverCardContent className="bg-[#14181ce0] text-white flex flex-col gap-2 items-center max-w-45 text-center -mt-62.5 backdrop-blur-sm">
          <h5 className="text-lg font-bold">Titulo do filme</h5>
          <p className="text-sm line-clamp-5 font-extralight leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            esse vitae totam saepe sed accusamus, soluta similique, magni
            fugiat, dolorum numquam quis. Illum ex tempora hic incidunt minima?
            Delectus, voluptatem?
          </p>
          <Separator></Separator>
          <div className="flex gap-2">
            <Toggle>
              <BookmarkIcon className="group-data-[state=on]/toggle:fill-foreground" />
            </Toggle>
            <Button variant={"ghost"}>
              <SquareArrowOutUpRight></SquareArrowOutUpRight>
            </Button>
          </div>
        </HoverCardContent>
      </HoverCard>
    </>
  );
};

export default MovieCard;
