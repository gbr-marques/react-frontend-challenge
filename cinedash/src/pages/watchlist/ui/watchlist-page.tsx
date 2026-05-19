import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ResizablePanel,
  ResizablePanelGroup,
} from "../../../components/ui/resizable";
import { ArrowUpDownIcon, SortAscIcon, SortDescIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";

const data = [
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
  },
  {
    firstName: "Kevin",
    lastName: "Vandy",
    age: 27,
    visits: 200,
    progress: 100,
    status: "Single",
  },
];

const columns = [
  {
    accessorKey: "firstName",
    header: "Primeiro nome",
    enableSorting: false,
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "lastName",
    header: "Último nome",
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "age",
    header: "Idade",
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "visits",
    header: "Visitas",
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
];

export function WatchListPage() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(), //row model
    getSortedRowModel: getSortedRowModel(),
  });

  console.log(table.getHeaderGroups());

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
                    {}
                    {}
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
      </section>
    </>
  );
}
