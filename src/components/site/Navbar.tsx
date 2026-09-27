import { useEffect, useState } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#inicio" className="group flex items-center gap-2">
          <Scissors className="size-5 text-gold transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-display text-sm uppercase tracking-[0.25em] text-foreground">
            Barba <span className="text-gold">&</span> Navalha
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative font-display text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <Button variant="gold" size="sm" asChild>
            <a href="#agendamento">Agendar</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="cursor-pointer text-gold transition-opacity hover:opacity-70 md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <Button variant="gold" size="sm" asChild onClick={() => setOpen(false)}>
              <a href="#agendamento">Agendar Horário</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
