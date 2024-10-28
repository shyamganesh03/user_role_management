import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/container/AppSidebar";
import { Outlet } from "react-router-dom";
import { ModeToggle } from "@/lib/components/mode-toggle";
import MobileNav from "./MobileMenu";
import { useSelector } from "react-redux";

export default function Layout() {
  const userDetails: any = useSelector((state: any) => state.user);

  return (
    <SidebarProvider>
      <AppSidebar key={userDetails?.role} userDetails={userDetails} />
      <MobileNav key={userDetails?.role} userDetails={userDetails} />
      <main className="lg:p-4 w-full">
        <span className="sr-only">Toggle theme</span>
        <span className="sr-only">Toggle theme</span>
        <div className="flex flex-row-reverse pt-4 pr-4 lg:flex-row justify-between lg:pt-0 lg:pr-0">
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
