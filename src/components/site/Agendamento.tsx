import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { servicos } from "./Servicos";

const barbeiros = ["Carlos", "Gustavo", "Felipe"];
const horarios = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:30", "18:00", "19:00"];

export function Agendamento() {
  const [nome, setNome] = useState("");
  const [servico, setServico] = useState("");
  const [barbeiro, setBarbeiro] = useState("");
  const [data, setData] = useState<Date | undefined>(undefined);
  const [hora, setHora] = useState("");
  const [aberto, setAberto] = useState(false);

  const completo = Boolean(nome && servico && barbeiro && data && hora);

  const dataFormatada = data ? format(data, "dd 'de' MMMM", { locale: ptBR }) : "";

  return (
    <section id="agendamento" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center">
          <span className="section-label">Agendamento</span>
          <h2 className="mt-4 text-3xl font-semibold uppercase sm:text-4xl">
            Reserve sua <span className="text-gradient-gold">cadeira</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            Escolha o serviço, o barbeiro e o melhor horário. Confirmação na hora.
          </p>
        </div>

        <div className="card-premium mt-12 rounded-lg p-6 hover:translate-y-0 hover:shadow-[var(--shadow-deep)] sm:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nome" className="font-display uppercase tracking-[0.15em] text-xs">
                  Seu nome
                </Label>
                <Input
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Como devemos te chamar?"
                  className="h-11 bg-background/60"
                />
              </div>

              <div className="space-y-2">
                <Label className="font-display uppercase tracking-[0.15em] text-xs">Serviço</Label>
                <Select value={servico} onValueChange={setServico}>
                  <SelectTrigger className="h-11 bg-background/60">
                    <SelectValue placeholder="Selecione o serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {servicos.map((s) => (
                      <SelectItem key={s.nome} value={s.nome}>
                        {s.nome} — {s.preco}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="font-display uppercase tracking-[0.15em] text-xs">Barbeiro</Label>
                <Select value={barbeiro} onValueChange={setBarbeiro}>
                  <SelectTrigger className="h-11 bg-background/60">
                    <SelectValue placeholder="Escolha o profissional" />
                  </SelectTrigger>
                  <SelectContent>
                    {barbeiros.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="font-display uppercase tracking-[0.15em] text-xs">
                  Horários disponíveis
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  {horarios.map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => setHora(h)}
                      className={cn(
                        "cursor-pointer rounded-md border px-2 py-2 font-display text-sm tracking-wide transition-all duration-300",
                        hora === h
                          ? "border-gold bg-gold/15 text-gold"
                          : "border-border text-muted-foreground hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold",
                      )}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="font-display uppercase tracking-[0.15em] text-xs">Data</Label>
              <div className="rounded-md border border-border bg-background/60 p-2">
                <Calendar
                  mode="single"
                  selected={data}
                  onSelect={setData}
                  locale={ptBR}
                  disabled={{ before: new Date() }}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <Button
              variant="gold"
              size="xl"
              disabled={!completo}
              onClick={() => setAberto(true)}
              className="w-full sm:w-auto"
            >
              <CalendarCheck /> Confirmar Agendamento
            </Button>
            {!completo && (
              <p className="text-xs text-muted-foreground">
                Preencha nome, serviço, barbeiro, data e horário para confirmar.
              </p>
            )}
          </div>
        </div>
      </div>

      <Dialog open={aberto} onOpenChange={setAberto}>
        <DialogContent className="max-w-md border-gold/30 bg-surface text-center">
          <div className="flex flex-col items-center p-2">
            <div className="flex size-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
              <CheckCircle2 className="size-8 text-gold" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold uppercase">Sucesso!</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {nome}, seu horário com <span className="text-gold">{barbeiro}</span> foi reservado
              para <span className="text-gold">{dataFormatada}</span> às{" "}
              <span className="text-gold">{hora}</span>.
            </p>
            <div className="hairline-gold my-6" />
            <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {servico}
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Av. Paulista, 1000 — chegue 10 minutos antes e peça sua cerveja cortesia.
            </p>
            <Button variant="goldOutline" className="mt-8" onClick={() => setAberto(false)}>
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
