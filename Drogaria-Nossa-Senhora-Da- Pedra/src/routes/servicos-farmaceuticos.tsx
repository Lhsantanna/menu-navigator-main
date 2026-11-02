import { createFileRoute } from "@tanstack/react-router";
import { Activity, HeartPulse, Syringe } from "lucide-react";
import { InfoCard, PageIntro, SiteShell } from "@/components/pharmacy-site";
import { createPageSeo } from "@/lib/seo";
const title = "Serviços Farmacêuticos em Pedra Bela | Pressão, Glicemia e Injetáveis";
const description =
  "Aferição de pressão arterial, teste de glicemia capilar e aplicação de injetáveis na Drogaria Nossa Senhora da Pedra, em Pedra Bela.";
export const Route = createFileRoute("/servicos-farmaceuticos")({
  head: () =>
    createPageSeo({
      path: "/servicos-farmaceuticos",
      title,
      description,
      image: "/images/store/farmaceutico.jpg",
    }),
  component: Page,
});
function Page() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Atendimento próximo"
        title="Serviços farmacêuticos em Pedra Bela"
        description="Cuidados essenciais realizados com atenção. Consulte horários e orientações antes de vir."
        whatsappMessage="Olá! Vim pela página de serviços farmacêuticos. Gostaria de consultar a disponibilidade, os horários e as orientações para um serviço."
      />
      <section className="content-section">
        <div className="site-container info-grid">
          <InfoCard icon={HeartPulse} title="Aferição de pressão arterial">
            Acompanhe sua pressão arterial com praticidade e orientação no atendimento.
          </InfoCard>
          <InfoCard icon={Syringe} title="Aplicação de injetáveis">
            Consulte os documentos, a prescrição e a disponibilidade do serviço.
          </InfoCard>
          <InfoCard icon={Activity} title="Teste de glicemia capilar">
            Verificação de glicemia para acompanhamento, conforme orientação adequada.
          </InfoCard>
        </div>
      </section>
    </SiteShell>
  );
}
