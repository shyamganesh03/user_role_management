import { DataTable } from "@/components/common/DataTable";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { userColumns, UserListType } from "@/constants/columns";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

const UserManagement = () => {
  const userDetails: any = useSelector((state: any) => state);
  const [userList, _] = useState<UserListType[]>([
    {
      username: userDetails?.username || "",
      role: userDetails?.role || "",
      menu: "",
    },
  ]);

  return (
    <div className="h-screen w-full p-4">
      <div className=" flex flex-row w-full justify-between mb-10">
        <Label>User Management</Label>
        <Button>
          <Plus />
          <Label>Add New User</Label>
        </Button>
      </div>
      <DataTable columns={userColumns} data={userList} />
    </div>
  );
};

export default UserManagement;
