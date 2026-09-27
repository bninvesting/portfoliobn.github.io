import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Sobre } from "@/components/site/Sobre";
import { Servicos } from "@/components/site/Servicos";
import { Galeria } from "@/components/site/Galeria";
import { Agendamento } from "@/components/site/Agendamento";
import { Depoimentos } from "@/components/site/Depoimentos";
import { Footer } from "@/components/site/Footer";

const title = "Barba & Navalha Club — Barbearia Premium na Paulista";
const description =
  "Barbearia premium em São Paulo: corte, barba com toalha quente e cerveja artesanal cortesia. Agende seu horário online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Galeria />
        <Agendamento />
        <Depoimentos />
      </main>
      <Footer />
    </div>
  );
}
