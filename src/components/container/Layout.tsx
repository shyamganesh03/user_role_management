import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/container/AppSidebar";
import { Outlet } from "react-router-dom";
import { ModeToggle } from "@/lib/components/mode-toggle";
import MobileNav from "./MobileMenu";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <MobileNav />
      <main className="lg:p-4 w-full">
        <span className="sr-only">Toggle theme</span>
        <span className="sr-only">Toggle theme</span>
        <div className="flex flex-row-reverse lg:flex-row justify-between">
          <div className="hidden lg:flex">
            <SidebarTrigger />
          </div>
          <ModeToggle />
        </div>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
