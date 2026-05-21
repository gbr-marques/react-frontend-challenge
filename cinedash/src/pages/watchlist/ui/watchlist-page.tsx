import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type Row,
} from "@tanstack/react-table";
import {
  ResizablePanel,
  ResizablePanelGroup,
} from "../../../components/ui/resizable";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpDownIcon,
  SortAscIcon,
  SortDescIcon,
  SquareArrowOutUpRight,
  StarIcon,
  XIcon,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useWatchlistStore } from "../../../features/watchlist/use-watchlist-store";
import type { IGenre, IMovie } from "../../../entities/movie/model/types";
import { useNavigate } from "@tanstack/react-router";
import moment from "moment";
import { Badge } from "../../../components/ui/badge";
import WatchlistTable from "../../../widgets/watchlist-table";

export function WatchListPage() {

  return (
    <>
      <section className="min-h-[75dvh] bg-[#1D242A] p-4 py-8 flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-8 w-full max-w-[1350px]">
          <div className="text-white text-center leading-tight font-extralight flex flex-col items-center gap-4 ">
            <h1 className="text-2xl md:text-4xl bg font-bold georgia">
              Filmes que chamaram atenção
            </h1>
            <p className="md:max-w-200 lg:max-w-250">
              Nesta seção, você encontra os filmes salvos pela curadoria para
              acompanhamento e análise. Organize títulos promissores, revisite
              descobertas importantes e acompanhe produções que podem integrar o
              catálogo da plataforma.
            </p>
          </div>
          <WatchlistTable></WatchlistTable>
        </div>
      </section>
    </>
  );
}
