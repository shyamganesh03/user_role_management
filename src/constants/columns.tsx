import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { setRole } from "@/store/reducer/userReducer";

export type UserListType = {
  username: string;
  role: string;
  menu: any;
};

export type invoiceListType = {
  name: string;
  amount: string;
};

export const userColumns: any = ({ dispatch, navigate }: any) => [
  {
    accessorKey: "username",
    header: "User Name",
    cell: ({ row }: any) => {
      const value = row.original.username || "-";
      return <div className="font-medium">{value}</div>;
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }: any) => {
      const value = row.original.role || "-";

      return <div className="font-medium">{value}</div>;
    },
  },
  {
    accessorKey: "menu",
    header: "Menu",
    cell: () => {
      return (
        <div className="w-[100px]">
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-accent">
              <MoreHorizontal className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Change Role</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  dispatch(setRole("user"));
                  navigate("/invoice");
                }}
                className="cursor-pointer"
              >
                user
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export const invoiceColumns: ColumnDef<invoiceListType>[] = [
  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => {
      const value = row.original.name || "-";

      return <div className="font-medium">{value}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: "Total Price",
    cell: ({ row }) => {
      const value = row.original.amount || "-";

      return <div className="font-medium">{value}</div>;
    },
  },
];
