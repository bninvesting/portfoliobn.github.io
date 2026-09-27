import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-barbearia.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      <img
        src={heroImg}
        alt="Interior de barbearia premium com cadeiras de couro e luz âmbar"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-[image:var(--gradient-fade-dark)]" />
      <div className="absolute inset-0 bg-background/25" />

      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-5 pt-24 pb-20 text-center">
        <span className="section-label">Desde 2020 · São Paulo</span>
        <div className="hairline-gold my-6 max-w-xs" />
        <h1 className="font-display text-4xl leading-[1.05] font-semibold uppercase sm:text-6xl md:text-7xl">
          Estilo Tradicional,
          <br />
          <span className="text-gradient-gold">Atendimento Moderno</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Cuidar da barba e do cabelo é um ritual. Navalha afiada, toalha quente e profissionais que
          entendem do ofício — tudo em um ambiente feito para você relaxar.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button variant="gold" size="xl" asChild>
            <a href="#agendamento">Agendar Horário</a>
          </Button>
          <Button variant="goldOutline" size="xl" asChild>
            <a href="#servicos">Ver Serviços</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
