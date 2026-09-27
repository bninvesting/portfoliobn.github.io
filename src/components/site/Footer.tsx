import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Scissors } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border bg-background pt-20 pb-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Scissors className="size-5 text-gold" />
              <span className="font-display text-sm uppercase tracking-[0.25em]">
                Barba <span className="text-gold">&</span> Navalha
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Clube de barbearia premium na Paulista. Tradição na navalha, cuidado no detalhe.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#contato"
                  aria-label="Rede social"
                  className="flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="section-label">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-gold" /> (11) 4002-8922
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-gold" /> contato@barbanavalhaclub.com.br
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" /> Av. Paulista, 1000 — Bela
                Vista, São Paulo/SP
              </li>
            </ul>
          </div>

          <div>
            <h3 className="section-label">Funcionamento</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Clock className="size-4 text-gold" /> Terça a sexta — 09h às 20h
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 text-gold" /> Sábado — 09h às 18h
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 text-gold" /> Domingo e segunda — fechado
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline-gold mt-14" />
        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Barba &amp; Navalha Club — Projeto fictício de portfólio.
        </p>
      </div>
    </footer>
  );
}
