import { DataTable } from "@/components/common/DataTable";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { userColumns, UserListType } from "@/constants/columns";
import { Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserManagement = () => {
  const userDetails: any = useSelector((state: any) => state.user);
  const [userList, setUserDetails] = useState<UserListType[]>([]);

  useEffect(() => {
    setUserDetails([
      {
        username: userDetails?.username || "",
        role: userDetails?.role || "",
        menu: "",
      },
    ]);
  }, [userDetails]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tableColumns = useMemo(() => {
    return userColumns({
      dispatch,
      navigate,
    });
  }, [userDetails]);

  return (
    <div className="h-screen w-full p-4">
      <div className=" flex flex-row w-full justify-between mb-10">
        <Label>User Management</Label>
        <Button>
          <Plus />
          <Label>Add New User</Label>
        </Button>
      </div>
      <DataTable columns={tableColumns} data={userList} />
    </div>
  );
};

export default UserManagement;
