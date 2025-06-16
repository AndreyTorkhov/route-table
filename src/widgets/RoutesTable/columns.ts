import type { ColumnDef } from "@tanstack/react-table";
import type { Route } from "@/entities/route/model/types";
import { compareIp } from "@/shared/lib/ipSort";

export const columns: ColumnDef<Route>[] = [
  {
    header: "Адрес назначения",
    accessorFn: (row) => `${row.address}/${row.mask}`,
    id: "destination",
    sortingFn: (a, b) => {
      const [ipA] = a.original.address.split("/");
      const [ipB] = b.original.address.split("/");
      return compareIp(ipA, ipB);
    },
  },
  {
    header: "Шлюз",
    accessorKey: "gateway",
    sortingFn: (a, b) => compareIp(a.original.gateway, b.original.gateway),
  },
  {
    header: "Интерфейс",
    accessorKey: "interface",
    sortingFn: "alphanumeric",
  },
];
