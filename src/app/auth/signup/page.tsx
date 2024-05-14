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

export default function Signup() {
   return (
      <Card className="mx-auto max-w-sm">
         <CardHeader>
            <CardTitle className="text-xl">S&apos;inscrire</CardTitle>
            <CardDescription>Entrez vos informations</CardDescription>
         </CardHeader>
         <CardContent>
            <div className="grid gap-4">
               <div className="grid gap-2">
                  <Label htmlFor="pseudo">Pseudo</Label>
                  <Input id="pseudo" placeholder="Pseudo" required />
               </div>
               <div className="grid gap-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input
                     id="email"
                     type="email"
                     placeholder="Adresse e-mail"
                     required
                  />
               </div>
               <div className="grid gap-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input id="password" type="password" />
               </div>
               <Button type="submit" className="w-full">
                  Inscription
               </Button>
            </div>
            <div className="mt-4 text-center text-sm">
               Vous avez déjà un compte?{" "}
               <Link href="/auth/login" className="underline">
                  Connexion
               </Link>
            </div>
         </CardContent>
      </Card>
   );
}
