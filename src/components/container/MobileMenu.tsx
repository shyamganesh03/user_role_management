"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { items } from "@/constants/menuItems";
import { setRole } from "@/store/reducer/userReducer";

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);
  const userDetails: any = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const [menuItems, setItem] = React.useState(items);

  React.useEffect(() => {
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

  return (
    <div className="flex px-4 lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <svg
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M3 5H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 12H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 19H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
            <div className="flex flex-col space-y-3">
              {menuItems?.map(
                (item: any) =>
                  item.url && (
                    <MobileLink
                      key={item.url}
                      url={item.url}
                      onOpenChange={setOpen}
                    >
                      {item.title}
                    </MobileLink>
                  )
              )}
            </div>
          </ScrollArea>
          {userDetails?.role === "user" && (
            <div className="flex flex-1 flex-col-reverse  pb-4">
              <Button onClick={handleUserRole} variant="ghost">
                Rest Role
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

interface MobileLinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  url: string;
}

function MobileLink({
  url,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(url.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default MobileNav;
