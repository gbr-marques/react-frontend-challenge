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

export function WatchListPage() {
  const { watchlist, removeMovie } = useWatchlistStore();

  const navigate = useNavigate();

  const columns = [
    {
      accessorKey: "poster_path",
      header: "Poster",
      cell: (props: any) => (
        <div className=" w-fit flex justify-center p-2">
          {" "}
          <img
            src={`https://image.tmdb.org/t/p/w500/${props.getValue()}`}
            alt="Poster do filme"
            className="h-32 aspect-[65/98]! rounded-sm border border-[#1d242aea] shadow-lg"
          />{" "}
        </div>
      ),
      enableSorting: false,
    },
    {
      accessorKey: "title",
      header: "Título",
      cell: (props: any) => <div className="min-w-75">{props.getValue()}</div>,
    },
    {
      accessorKey: "release_date",
      header: "Ano de lançamento",
      cell: (props: any) => (
        <p className="text-center min-w-full">
          {moment(props.getValue()).year()}
        </p>
      ),
    },
    {
      accessorKey: "genres",
      header: "Gêneros",
      cell: (props: any) => (
        <div className="flex flex-wrap gap-1 p-2">
          {props.getValue().map((genre: IGenre) => (
            <Badge className="rounded-xs text-gray-400">{genre.name}</Badge>
          ))}
        </div>
      ),
    },
    {
      accessorKey: "vote_average",
      header: "Avaliações",
      cell: (props: any) => (
        <span className="flex gap-2 justify-center text-gray-400">
          {props.getValue().toString().slice(0, 3)}{" "}
          <StarIcon className="text-yellow-300 fill-yellow-300 h-5"></StarIcon>
        </span>
      ),
    },
    {
      header: "Ações",
      cell: ({ row }: { row: Row<IMovie> }) => {
        const movie = row.original;

        return (
          <div className="flex gap-2 w-full justify-center">
            <Button
              className="cursor-pointer"
              onClick={() => removeMovie(movie.id)}
            >
              <XIcon />
            </Button>

            <Button
              className="cursor-pointer"
              onClick={() =>
                navigate({
                  to: `/details/${movie.id}`,
                })
              }
            >
              <SquareArrowOutUpRight />
            </Button>
          </div>
        );
      },
    },
  ];

  const data = watchlist;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(), //row model
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <section className="min-h-[75dvh] bg-[#1D242A] p-4 py-8 flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-8 max-w-400">
          <div className="text-white text-center leading-tight font-extralight flex flex-col items-center gap-4 ">
            <h1 className="text-2xl md:text-4xl bg">
              Filmes que chamaram atenção
            </h1>
            <p className="md:max-w-200 lg:max-w-250">
              Nesta seção, você encontra os filmes salvos pela curadoria para
              acompanhamento e análise. Organize títulos promissores, revisite
              descobertas importantes e acompanhe produções que podem integrar o
              catálogo da plataforma.
            </p>
          </div>
          <table className="table border border-gray-400 rounded-xl">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr className="tr" key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th className="th" key={header.id}>
                      {header.column.columnDef.header?.toString()}
                      {header.column.getCanSort() && (
                        <Button
                          variant={"link"}
                          className="text-gray-400"
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {header.column.getIsSorted() == false ? (
                            <ArrowUpDownIcon></ArrowUpDownIcon>
                          ) : header.column.getIsSorted() == "asc" ? (
                            <SortAscIcon></SortAscIcon>
                          ) : (
                            <SortDescIcon></SortDescIcon>
                          )}
                        </Button>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr className="tr" key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td className="td" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between">
            <Button
              disabled={!table.getCanPreviousPage()}
              onClick={() => {
                table.previousPage();
              }}
              className="bg-gray-400 h-12 uppercase font-extralight text-gray-800"
            >
              <ArrowLeftIcon></ArrowLeftIcon> Página anterior
            </Button>
            <Button
              disabled={!table.getCanNextPage()}
              onClick={() => {
                table.nextPage();
              }}
              className="bg-gray-400 h-12 uppercase font-extralight text-gray-800"
            >
              Próxima página <ArrowRightIcon></ArrowRightIcon>
            </Button>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}
