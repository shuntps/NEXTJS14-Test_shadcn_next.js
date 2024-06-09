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
                  <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                  <DropdownMenuItem>
                     <Link href="/auth/login">Connexion</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                     <Link href="/auth/signup">S&apos;inscrire</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Déconnexion</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                     <Link href="/dashboard">Tableau de bord</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Paramètres</DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
      </header>
   );
}
