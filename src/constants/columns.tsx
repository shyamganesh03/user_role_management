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
import { useDispatch } from "react-redux";
import { setRole } from "@/store/reducer/userReducer";
import { useNavigate } from "react-router-dom";

export type UserListType = {
  username: string;
  role: string;
  menu: any;
};

export type invoiceListType = {
  name: string;
  amount: string;
};

export const userColumns: ColumnDef<UserListType>[] = [
  {
    accessorKey: "username",
    header: "User Name",
    cell: ({ row }) => {
      const value = row.original.username || "-";

      return <div className="font-medium">{value}</div>;
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const value = row.original.role || "-";

      return <div className="font-medium">{value}</div>;
    },
  },
  {
    accessorKey: "menu",
    header: "Menu",
    cell: () => {
      const dispatch = useDispatch();
      const navigate = useNavigate();

      return (
        <div className="w-[100px]">
          <DropdownMenu>
            <DropdownMenuTrigger>
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
