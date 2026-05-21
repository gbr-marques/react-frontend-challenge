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
import { Button } from "../../components/ui/button";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type Row,
  type SortingOptions,
  type SortingState,
} from "@tanstack/react-table";
import type { IGenre, IMovie } from "../../entities/movie/model/types";
import moment from "moment";
import { useNavigate } from "@tanstack/react-router";
import { useWatchlistStore } from "../../features/watchlist/use-watchlist-store";
import { Badge } from "../../components/ui/badge";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";

const WatchlistTable = () => {
  const { watchlist, removeMovie } = useWatchlistStore();

  const navigate = useNavigate();

  const data = watchlist;

  type SortOption =
  | 'title_asc'
  | 'title_desc'
  | 'release_date_asc'
  | 'release_date_desc'
  | 'vote_average_asc'
  | 'vote_average_desc'

  const columns = [
    {
      accessorKey: "poster_path",
      header: "Pôster",
      cell: (props: any) => (
        <div className=" w-fit flex justify-center p-2">
          {" "}
          <img
            src={`https://image.tmdb.org/t/p/w500/${props.getValue()}`}
            alt="Poster do filme"
            className="h-24 aspect-[65/98]! rounded-sm border border-[#1d242aea] shadow-lg"
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
        <div className="flex flex-wrap gap-1 p-2 max-w-64">
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

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      sorting
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(), //row model
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <Select
        value={sorting[0]?.id ?? ""}
        onValueChange={(value: SortOption) => {
          setSorting([
            {
              id: value,
              desc: false,
            },
          ]);
        }}
      >
        <SelectTrigger className="w-full max-w-64 bg-gray-300 h-12">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>

        <SelectContent className="bg-gray-300">
          <SelectItem value="title">Título</SelectItem>

          <SelectItem value="release_date">Ano de lançamento</SelectItem>

          <SelectItem value="genres">Gêneros</SelectItem>

          <SelectItem value="vote_average">Nota</SelectItem>
        </SelectContent>
      </Select>
      <table className="table border border-gray-400 rounded-xl max-w-[90dvw]!">
        <thead className="bg-[#181d22] text-gray-300 ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-3 text-left text-sm font-extrabold whitespace-nowrap"
                >
                  <div className="flex items-center gap-2">
                    {header.column.columnDef.header?.toString()}

                    {header.column.getCanSort() && (
                      <Button
                        variant="link"
                        className="text-gray-400 p-0 h-auto"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {header.column.getIsSorted() === false ? (
                          <ArrowUpDownIcon className="h-4 w-4" />
                        ) : header.column.getIsSorted() === "asc" ? (
                          <SortAscIcon className="h-4 w-4" />
                        ) : (
                          <SortDescIcon className="h-4 w-4" />
                        )}
                      </Button>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-700 bg-[#0f1316]">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-[#1D242A] transition-colors">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-4 py-3 text-sm text-gray-300 whitespace-nowrap"
                >
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
    </>
  );
};

export default WatchlistTable;
