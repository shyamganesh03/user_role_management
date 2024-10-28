import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { setRole } from "@/store/reducer/userReducer";
import { useEffect, useState } from "react";
import { items } from "@/constants/menuItems";

export function AppSidebar({ userDetails }: any) {
  const dispatch = useDispatch();

  const [menuItems, setItem] = useState(items);

  useEffect(() => {
    if (userDetails?.role === "user") {
      const newItem = items?.filter(
        (item) => item?.title !== "User Management"
      );
      setItem(newItem);
    } else {
      setItem(menuItems);
    }
  }, [userDetails]);

  const handleUserRole = () => {
    dispatch(setRole("admin"));
    setItem(menuItems);
  };

  return (
    <Sidebar className="hidden lg:flex" key={userDetails?.role}>
      <SidebarContent className="py-4 pl-4">
        <SidebarMenu className="mt-10 gap-4">
          {menuItems?.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        {userDetails?.role === "user" && (
          <div className="flex flex-1 flex-col-reverse  pb-4 pr-4">
            <Button
              onClick={handleUserRole}
              variant="ghost"
              className="bg-accent"
            >
              Change Role to Admin
            </Button>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
