import { Star, Quote } from "lucide-react";

const depoimentos = [
  {
    nome: "Rafael Moreira",
    iniciais: "RM",
    texto:
      "Melhor barbearia que já frequentei em SP. O ritual da toalha quente é outro nível e o Carlos acerta o fade sempre na primeira.",
  },
  {
    nome: "Diego Antunes",
    iniciais: "DA",
    texto:
      "Cheguei pelo Instagram e virei cliente fixo. Ambiente impecável, cerveja gelada e uma resenha que faz o horário passar voando.",
  },
  {
    nome: "Thiago Nakamura",
    iniciais: "TN",
    texto:
      "Atendimento pontual e cuidadoso. O Gustavo entendeu o formato do meu rosto e sugeriu um corte que eu nunca teria pedido. Perfeito.",
  },
];

export function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="section-label">Depoimentos</span>
          <h2 className="mt-4 text-3xl font-semibold uppercase sm:text-4xl">
            Quem senta na <span className="text-gradient-gold">cadeira</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d) => (
            <figure key={d.nome} className="card-premium relative rounded-lg p-8">
              <Quote className="absolute right-6 top-6 size-8 text-gold/20" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
                “{d.texto}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-display text-sm text-gold">
                  {d.iniciais}
                </div>
                <div>
                  <p className="font-display text-sm uppercase tracking-wide">{d.nome}</p>
                  <p className="text-xs text-muted-foreground">Cliente desde 2022</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
