import { LayoutDashboard, NotebookIcon, Users2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "@/store/reducer/userReducer";
import { useEffect, useState } from "react";

const userDetails: any = useSelector((state: any) => state.user);

const dispatch = useDispatch();

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "User Management",
    url: "/user-management",
    icon: Users2,
  },
  {
    title: "Invoices",
    url: "/invoice",
    icon: NotebookIcon,
  },
];

const [menuItems, setItem] = useState(items);

useEffect(() => {
  if (userDetails?.role === "user") {
    const newItem = items?.filter((item) => item?.title !== "Invoice");

    setItem(newItem);
  } else {
    setItem(menuItems);
  }
}, [userDetails]);

const handleUserRole = () => {
  dispatch(setRole("admin"));
};

export function AppSidebar() {
  return (
    <Sidebar>
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
          <div className="flex flex-1 flex-col-reverse  pb-4">
            <Button onClick={handleUserRole} variant="ghost">
              Rest Role
            </Button>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
