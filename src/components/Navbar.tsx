import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { Button } from "./ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type Props = {};

export default function Navbar({}: Props) {
   return (
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
         <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
               href="/"
               className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
               <h1 className="flex w-40 text-2xl">SHT Lab</h1>
            </Link>
            <Link
               href="/"
               className=" w-36 text-foreground transition-colors hover:text-foreground"
            >
               Tableau de bord
            </Link>
         </nav>
         <Sheet>
            <SheetTrigger asChild>
               <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
               >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu de navigation</span>
               </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <nav className="grid gap-6 text-lg font-medium">
                  <Link
                     href="/"
                     className="flex items-center gap-2 text-lg font-semibold"
                  >
                     <h1 className="text-2xl">SHT Lab</h1>
                  </Link>
                  <Link href="#" className="hover:text-foreground h-full">
                     Tableau de bord
                  </Link>
               </nav>
            </SheetContent>
         </Sheet>
         <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
               <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                     type="search"
                     placeholder="Rechercher..."
                     className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  />
               </div>
            </form>
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Button
                     variant="secondary"
                     size="icon"
                     className="rounded-full"
                  >
                     <CircleUser className="h-5 w-5" />
                     <span className="sr-only">Menu utilisateur</span>
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                     <Link href="/auth/login">Mon compte</Link>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Paramètres</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                     <Link href="/auth/logout">Déconnexion</Link>
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
      </header>
   );
}
