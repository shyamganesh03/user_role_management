"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { items } from "@/constants/menuItems";
import { setRole } from "@/store/reducer/userReducer";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useTheme } from "@/lib/components/theme-provider";

const MobileNav = ({ userDetails }: any) => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const [menuItems, setItem] = React.useState(items);
  const { theme } = useTheme();

  React.useEffect(() => {
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
  };

  return (
    <div className="flex lg:hidden pt-2">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="absolute top-2 left-4 text-base bg-transparent hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <HamburgerMenuIcon
              color={
                theme === "dark" ? "hsl(0,0%,100%)" : "hsl(215 27.9% 16.9%)"
              }
            />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 ">
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
            <div className="flex flex-1 flex-col-reverse pb-4 pr-4">
              <Button
                onClick={handleUserRole}
                variant="ghost"
                className="bg-accent"
              >
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
