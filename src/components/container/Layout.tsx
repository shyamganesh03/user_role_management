import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/container/AppSidebar";
import { Outlet } from "react-router-dom";
import { ModeToggle } from "@/lib/components/mode-toggle";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-4 w-full">
        <span className="sr-only">Toggle theme</span>
        <span className="sr-only">Toggle theme</span>
        <div className="flex flex-row justify-between">
          <ModeToggle /> <SidebarTrigger />
        </div>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
