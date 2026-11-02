import { createFileRoute } from "@tanstack/react-router";
import { Clock3, MapPin, Truck } from "lucide-react";
import { InfoCard, PageIntro, SiteShell } from "@/components/pharmacy-site";
import { createPageSeo } from "@/lib/seo";
const title = "Entrega e Contato | Farmácia em Pedra Bela - SP";
const description =
  "Consulte entrega de medicamentos em Pedra Bela e região pelo WhatsApp. Veja o endereço e os horários da drogaria.";
export const Route = createFileRoute("/entrega-e-contato")({
  head: () =>
    createPageSeo({
      path: "/entrega-e-contato",
      title,
      description,
      image: "/images/store/facade.jpg",
    }),
  component: Page,
});
function Page() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Fale com a gente"
        title="Entrega e contato em Pedra Bela"
        description="Atendemos Pedra Bela e região. Envie sua lista ou foto da receita pelo WhatsApp para consultar a disponibilidade e a área de entrega."
        whatsappMessage="Olá! Vim pela página de entrega e contato. Gostaria de consultar a entrega em Pedra Bela ou região. Meu endereço/bairro é:"
      />
      <section className="content-section">
        <div className="site-container info-grid">
          <InfoCard icon={Truck} title="Entrega em domicílio">
            Consulte a cobertura para Pedra Bela e região, além do prazo e da disponibilidade no seu
            endereço.
          </InfoCard>
          <InfoCard icon={MapPin} title="Visite a drogaria">
            Rua Cesila, 162 — Centro. Próximo ao Supermercado Amandrey.
          </InfoCard>
          <InfoCard icon={Clock3} title="Horário de atendimento">
            Segunda a sábado, 08:00 às 20:30. Domingo, 08:00 às 13:00.
          </InfoCard>
        </div>
      </section>
    </SiteShell>
  );
}
