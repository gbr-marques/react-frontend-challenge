import {
  BookmarkIcon,
  Star,
  StarIcon,
  StarsIcon,
  VideoIcon,
} from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";

export function DetailsPage() {
  return (
    <>
      <section className="min-h-[75dvh] bg-[#1D242A] p-4 md:p-24 py-8 flex flex-col gap-8 items-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <img
            src="https://posterhouse.org/wp-content/uploads/2021/05/moonlight_0.jpg"
            alt="Poster do filme"
            className="w-40 max-w-100 md:w-2/5 h-full rounded-sm border border-[#4D4D4D] shadow-lg"
          />
          <div className="flex flex-col gap-3 max-w-150">
            <div className="flex items-end gap-2">
              <h1 className="text-white text-3xl">Star Wars</h1>
              <span className="text-gray-400 text-xs">1977 - 2h12m</span>
            </div>
            <div className="flex items-end gap-2">
              <span className="flex">
                <Star className="text-yellow-300 fill-yellow-300 h-5"></Star>
                <Star className="text-yellow-300 fill-yellow-300 h-5"></Star>
                <Star className="text-yellow-300 fill-yellow-300 h-5"></Star>
                <Star className="text-yellow-300 fill-yellow-300 h-5"></Star>
                <Star className="text-yellow-300 fill-yellow-300 h-5"></Star>
                <Star className="text-yellow-300 fill-yellow-300 h-5"></Star>
                <Star className="text-yellow-300 fill-yellow-300 h-5"></Star>
                <Star className="text-yellow-300 fill-yellow-300 h-5"></Star>
              </span>
              <span className="text-sm text-gray-400 leading-tight">8.1</span>
            </div>
            <span className="text-gray-400 font-extralight text-xl">
              A long time ago in a galaxy far, far away...
            </span>
            <span className="text-xs font-extralight text-gray-400">
              Ação/Aventura/Ficção Científica
            </span>
            <p className="leading-tight text-white">
              Princess Leia is captured and held hostage by the evil Imperial
              forces in their effort to take over the galactic Empire.
              Venturesome Luke Skywalker and dashing captain Han Solo team
              together with the loveable robot duo R2-D2 and C-3PO to rescue the
              beautiful princess and restore peace and justice in the Empire.
            </p>
            <div className="flex flex-col gap-2">
              <h5 className="font-black uppercase text-white">Elenco</h5>
              <div className="flex flex-wrap gap-1">
                <Badge className="bg-[#485568] rounded-xs">Mark Hammill</Badge>
                <Badge className="bg-[#485568] rounded-xs">Harrison Ford</Badge>
                <Badge className="bg-[#485568] rounded-xs">
                  James Earl Jones
                </Badge>
                <Badge className="bg-[#485568] rounded-xs">
                  Carrie Fischer
                </Badge>
                <Badge className="bg-[#485568] rounded-xs">Alec Guiness</Badge>
                <Badge className="bg-[#485568] rounded-xs">Peter Mayhew</Badge>
                <Badge className="bg-[#485568] rounded-xs">David Prowse</Badge>
                <Badge className="bg-[#485568] rounded-xs">Kenny Baker</Badge>
                <Badge className="bg-[#485568] rounded-xs">
                  Anthony Daniels
                </Badge>
                <Badge className="bg-[#485568] rounded-xs">Peter Cushing</Badge>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-black uppercase text-white">Ações</h5>
              <div className="flex gap-2">
                <Button className="h-12 uppercase font-extralight bg bg-orange-500">
                  <BookmarkIcon></BookmarkIcon> Adicionar aos favoritos
                </Button>
                <Button className="h-12 uppercase font-extralight bg-gray-400 text-gray-800">
                  <VideoIcon></VideoIcon> Assistir trailer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
