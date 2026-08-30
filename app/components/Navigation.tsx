"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import BrandLogo from "./BrandLogo";

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#principes", label: "Principes" },
    { href: "#methode", label: "Méthode" },
    { href: "#references", label: "Références" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b bg-background/95 shadow-sm backdrop-blur" : "bg-background/80 backdrop-blur"
      }`}
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="inline-flex h-10 items-center rounded-md"
            aria-label="Neatch - Accueil"
          >
            <BrandLogo priority className="h-6 w-auto sm:h-7" />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Button asChild key={link.href} variant="ghost" size="sm">
                <a href={hrefFor(link.href)}>{link.label}</a>
              </Button>
            ))}
            <Button asChild size="sm">
              <a href={hrefFor("#contact")}>Échanger avec Lionel</a>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Ouvrir le menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-background">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="mt-8 grid gap-2">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Button asChild variant="ghost" className="justify-start">
                      <a href={hrefFor(link.href)}>{link.label}</a>
                    </Button>
                  </SheetClose>
                ))}
                <Separator className="my-2" />
                <SheetClose asChild>
                  <Button asChild className="mt-4">
                    <a href={hrefFor("#contact")}>Échanger avec Lionel</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
