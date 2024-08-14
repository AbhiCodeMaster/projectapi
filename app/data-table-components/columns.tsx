"use client";

import { ColumnDef } from "@tanstack/react-table";
import { SalesData } from "./schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<SalesData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-0.5"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-0.5"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "productName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product Name" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px] capitalize">{row.getValue("productName")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px] capitalize">{row.getValue("category")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "quantitySold",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity Sold" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px] capitalize">{row.getValue("quantitySold")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "salesAmount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="sales Amount" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px] capitalize">{row.getValue("salesAmount")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "dateOfSale",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date of Sale" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px] capitalize">{row.getValue("dateOfSale")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];