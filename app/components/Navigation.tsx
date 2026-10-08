"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { siteNavigation } from "../data/navigation";
import BrandLogo from "./BrandLogo";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const isHome = usePathname() === "/";
  const hrefFor = (hash: string) => isHome ? hash : `/${hash}`;

  return (
    <nav className="sticky top-0 z-50 border-b bg-background" aria-label="Navigation principale">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href={hrefFor("#main-content")} className="inline-flex h-10 items-center rounded-md" aria-label="Neatch — Accueil">
            <BrandLogo priority className="h-6 w-auto sm:h-7" />
          </Link>
          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <Button asChild variant="ghost" size="sm"><a href={hrefFor("#main-content")}>Accueil</a></Button>
            <Button asChild size="sm"><a href={hrefFor("#contact")}>Discuter d’un programme</a></Button>
          </div>
          <div className="ml-auto lg:ml-0"><ThemeToggle /></div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Ouvrir le menu"><Menu /></Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader><SheetTitle>Explorer NEATCH</SheetTitle></SheetHeader>
              <div className="mt-6 grid gap-1">
                <SheetClose asChild><Button asChild variant="ghost" className="justify-start"><a href={hrefFor("#main-content")}>Accueil</a></Button></SheetClose>
                <Separator className="my-2" />
                {siteNavigation.map(link => (
                  <SheetClose asChild key={link.href}>
                    <Button asChild variant="ghost" className="justify-start">
                      <a href={hrefFor(link.href)}><span className="font-mono text-xs text-muted-foreground">{link.number}</span>{link.label}</a>
                    </Button>
                  </SheetClose>
                ))}
                <Separator className="my-2" />
                <SheetClose asChild><Button asChild variant="ghost" className="justify-start"><Link href="/legal">Mentions légales</Link></Button></SheetClose>
                <SheetClose asChild><Button asChild className="mt-3"><a href={hrefFor("#contact")}>Discuter d’un programme</a></Button></SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden border-t py-2 lg:block">
          <ol className="grid grid-cols-5 gap-x-2 gap-y-1">
            {siteNavigation.map(link => (
              <li key={link.href}><Button asChild variant="ghost" size="sm" className="w-full justify-start"><a href={hrefFor(link.href)}><span className="font-mono text-xs text-muted-foreground">{link.number}</span>{link.label}</a></Button></li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
}
