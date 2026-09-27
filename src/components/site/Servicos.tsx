import { Scissors, Droplets, Sparkles, Brush } from "lucide-react";
import { Button } from "@/components/ui/button";

export const servicos = [
  {
    icon: Scissors,
    nome: "Corte Masculino",
    preco: "R$ 50",
    duracao: "45 min",
    desc: "Corte na tesoura ou máquina, finalização com pomada e conversa boa.",
  },
  {
    icon: Droplets,
    nome: "Barba Completa com Toalha Quente",
    preco: "R$ 45",
    duracao: "40 min",
    desc: "Toalha quente, óleo pré-barba, navalha e balsamo calmante.",
  },
  {
    icon: Sparkles,
    nome: "Combo Cabelo + Barba",
    preco: "R$ 85",
    duracao: "1h20",
    desc: "A experiência completa do clube, com cerveja artesanal cortesia.",
  },
  {
    icon: Brush,
    nome: "Camuflagem de Cabelos Brancos",
    preco: "R$ 60",
    duracao: "50 min",
    desc: "Tonalização discreta e natural, sem marcar raiz.",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="relative bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="section-label">Serviços e Preços</span>
          <h2 className="mt-4 text-3xl font-semibold uppercase sm:text-4xl">
            A tabela do <span className="text-gradient-gold">clube</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {servicos.map((s) => (
            <div key={s.nome} className="card-premium group rounded-lg p-7">
              <div className="flex items-start gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-md border border-border bg-background/60 transition-colors duration-300 group-hover:border-gold/50">
                  <s.icon className="size-5 text-gold" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold uppercase tracking-wide">{s.nome}</h3>
                    <span className="font-display text-xl text-gold">{s.preco}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <p className="mt-3 font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {s.duracao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="gold" size="xl" asChild>
            <a href="#agendamento">Reservar meu horário</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
