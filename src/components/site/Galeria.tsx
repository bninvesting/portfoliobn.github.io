import fade from "@/assets/galeria-fade.jpg";
import pompadour from "@/assets/galeria-pompadour.jpg";
import barba from "@/assets/galeria-barba.jpg";

const fotos = [
  { src: fade, titulo: "Fade Navalhado", legenda: "Transição limpa, acabamento na navalha" },
  { src: pompadour, titulo: "Pompadour Clássico", legenda: "Volume alto com laterais baixas" },
  { src: barba, titulo: "Barba Lenhador", legenda: "Aparo desenhado e hidratação" },
];

export function Galeria() {
  return (
    <section id="galeria" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="section-label">Galeria</span>
          <h2 className="mt-4 text-3xl font-semibold uppercase sm:text-4xl">
            Trabalhos da <span className="text-gradient-gold">cadeira</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fotos.map((f) => (
            <figure
              key={f.titulo}
              className="group relative overflow-hidden rounded-lg border border-border transition-colors duration-300 hover:border-gold/50"
            >
              <img
                src={f.src}
                alt={f.titulo}
                loading="lazy"
                width={800}
                height={1008}
                className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-lg uppercase tracking-wide text-foreground">
                  {f.titulo}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {f.legenda}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
