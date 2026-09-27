import { Flame, Beer, Award } from "lucide-react";

const pilares = [
  {
    icon: Flame,
    title: "Toalha Quente",
    text: "O ritual clássico de barbear com toalha quente, óleos essenciais e navalha afiada.",
  },
  {
    icon: Beer,
    title: "Cerveja Artesanal",
    text: "Sua bebida gelada por conta da casa enquanto o barbeiro cuida dos detalhes.",
  },
  {
    icon: Award,
    title: "Profissionais Qualificados",
    text: "Time formado em barbearia clássica, com atualização constante em técnicas modernas.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Sobre Nós</span>
          <h2 className="mt-4 text-3xl font-semibold uppercase sm:text-4xl">
            Uma casa feita para <span className="text-gradient-gold">o ofício</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            O Barba &amp; Navalha Club nasceu em 2020, quando três amigos barbeiros decidiram
            resgatar o ritmo lento das barbearias antigas sem abrir mão do conforto de hoje. Em uma
            sala de pé-direito alto na Paulista, montamos um clube onde o corte é conversa, e a
            cadeira é o melhor lugar da cidade para desacelerar por uma hora.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pilares.map((p) => (
            <div key={p.title} className="card-premium rounded-lg p-8 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                <p.icon className="size-6 text-gold" />
              </div>
              <h3 className="mt-6 text-lg font-semibold uppercase tracking-wide">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
