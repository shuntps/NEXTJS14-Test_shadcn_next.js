import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login() {
   return (
      <Card className="mx-auto max-w-sm">
         <CardHeader>
            <CardTitle className="text-2xl">SHT Lab</CardTitle>
            <CardDescription>Veuillez vous connecter</CardDescription>
         </CardHeader>
         <CardContent>
            <div className="grid gap-4">
               <div className="grid gap-2">
                  <Label htmlFor="email">Courriel</Label>
                  <Input
                     id="email"
                     type="email"
                     placeholder="Adresse courriel"
                     required
                  />
               </div>
               <div className="grid gap-2">
                  <div className="flex items-center">
                     <Label htmlFor="password">Mot de passe</Label>
                     <Link
                        href="#"
                        className="ml-auto inline-block text-sm underline"
                     >
                        Mot de passe perdu?
                     </Link>
                  </div>
                  <Input
                     id="password"
                     type="password"
                     placeholder="Mot de passe"
                     required
                  />
               </div>
               <Button type="submit" className="w-full">
                  Connexion
               </Button>
               <Button variant="outline" className="w-full">
                  Continuer avec Google
               </Button>
            </div>
            <div className="mt-4 text-center text-sm">
               Vous n&apos;avez pas de compte?{" "}
               <Link href="#" className="underline">
                  Inscrivez-vous
               </Link>
            </div>
         </CardContent>
      </Card>
   );
}
