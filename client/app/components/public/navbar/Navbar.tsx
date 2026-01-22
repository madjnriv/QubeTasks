import React from "react";
import { LogoText } from "../../logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../../ui/sheet";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "../../ui/button";
import { landingNav } from "./navbar-items";
import { Link, NavLink } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const Navbar = React.memo(() => {
  return (
    <div className="flex items-center justify-between p-3">
      <Link to="/">
        <LogoText className="text-2xl font-semibold text-primary" />
      </Link>

      <div className="flex items-center gap-5 lg:hidden">
        <Link to="/sign-in">
          <Button>
            Open App <ArrowUpRight />
          </Button>
        </Link>
        <Sheet>
          <SheetTrigger>
            <Button size={"icon"}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription className="flex flex-col gap-6 p-5 mt-20 text-base">
                {landingNav.map((nav) => (
                  <NavLink key={nav.label} to={`${nav.path}`}>
                    {nav.label}
                  </NavLink>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          {landingNav.map((nav) => (
            <NavigationMenuItem key={nav.label}>
              <NavigationMenuLink asChild>
                <NavLink to={nav.path}>{nav.label}</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Link to="/sign-in" className="hidden lg:block">
        <Button>
          Open App <ArrowUpRight />
        </Button>
      </Link>
    </div>
  );
});
