"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  BellIcon,
  Bitcoin,
  CircleUserIcon,
  Cloud,
  Cpu,
  MenuIcon,
  SearchIcon,
} from "lucide-react";
import Main from "./main";
import { useState } from "react";
import Weather from "./weather";
import { Chat } from "./chat";
import { cn } from "@/lib/utils";

export function Dashboard() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold"
              prefetch={false}
            >
              <Cpu className="h-6 w-6" />
              <span className="">UI-AI</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                onClick={() => setClicked(true)}
                href="/"
                className={cn("items-center flex gap-1 font-semibold px-3 py-2 hover:bg-gray-200 rounded-lg transition-all", clicked ? "bg-gray-200" : "bg-gray-50")}
              >
                <Cloud className="h-4 w-4" />
                Weather
              </Link>

              <Link
                onClick={() => setClicked(false)}
                href="/"
                className={cn("items-center flex gap-1 font-semibold px-3 py-2 hover:bg-gray-200 rounded-lg transition-all mt-1", clicked ? "bg-gray-50" : "bg-gray-200")}
              >
                <Bitcoin className="h-4 w-4" />
                Crypto
              </Link>
            </nav>
            <div className="px-4 mt-[440px]">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-1 text-medium mt-6 font-medium">
                <Link
                  onClick={() => setClicked(true)}
                  href="/"
                  className={cn("items-center flex gap-1 font-semibold px-3 py-2 hover:bg-gray-200 rounded-lg transition-all", clicked ? "bg-gray-200" : "bg-gray-50")}
                >
                  <Cloud className="h-4 w-4" />
                  Weather
                </Link>
                <Link
                  onClick={() => setClicked(false)}
                  href="/"
                  className={cn("items-center flex gap-1 font-semibold px-3 py-2 hover:bg-gray-200 rounded-lg transition-all mt-1", clicked ? "bg-gray-50" : "bg-gray-200")}
                >
                  <Bitcoin className="h-4 w-4" />
                  Crypto
                </Link>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUserIcon className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {clicked ? <Weather /> : <Chat />}
        </main>
      </div>
    </div>
  );
}
