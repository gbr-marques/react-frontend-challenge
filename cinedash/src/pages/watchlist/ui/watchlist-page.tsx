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
  XIcon,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useWatchlistStore } from "../../../features/watchlist/use-watchlist-store";
import type { IGenre, IMovie } from "../../../entities/movie/model/types";
import { useNavigate } from "@tanstack/react-router";

export function WatchListPage() {
  const { watchlist, removeMovie } = useWatchlistStore();

  const navigate = useNavigate();

  const columns = [
    {
      accessorKey: "title",
      header: "Título",
      cell: (props: any) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "release_date",
      header: "Ano de lançamento",
      cell: (props: any) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "genres",
      header: "Gêneros",
      cell: (props: any) => (
        <p>{props.getValue().map((genre: IGenre) => genre.name)}</p>
      ),
    },
    {
      accessorKey: "vote_average",
      header: "Média de avaliações",
      cell: (props: any) => <p>{props.getValue()}</p>,
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
      <section className="min-h-[75dvh] bg-[#1D242A] p-4 py-8 flex flex-col gap-8">
        <div className="text-white text-center leading-tight font-extralight flex flex-col items-center gap-4 ">
          <h1 className="text-2xl md:text-4xl bg">
            Filmes que chamaram atenção
          </h1>
          <p className="md:max-w-200 lg:max-w-250">
            Nesta seção, você encontra os filmes salvos pela curadoria para
            acompanhamento e análise. Organize títulos promissores, revisite
            descobertas importantes e acompanhe produções que podem integrar o
            catálogo da plataforma.
            {watchlist.toString()}
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
      </section>
    </>
  );
}
