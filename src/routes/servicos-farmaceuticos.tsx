import { createFileRoute } from "@tanstack/react-router";
import { Activity, HeartPulse, Syringe } from "lucide-react";
import { InfoCard, PageIntro, SiteShell } from "@/components/pharmacy-site";
const title = "Serviços Farmacêuticos em Pedra Bela | Pressão, Glicemia e Injeção";
const description =
  "Aferição de pressão, teste de glicemia e aplicação de injeções na Drogaria Nossa Senhora da Pedra, em Pedra Bela.";
export const Route = createFileRoute("/servicos-farmaceuticos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
          <InfoCard icon={HeartPulse} title="Aferição de pressão">
            Acompanhe sua pressão arterial com praticidade e orientação no atendimento.
          </InfoCard>
          <InfoCard icon={Syringe} title="Aplicação de injeções">
            Consulte os documentos, a prescrição e a disponibilidade do serviço.
          </InfoCard>
          <InfoCard icon={Activity} title="Teste de glicemia">
            Verificação de glicemia para acompanhamento, conforme orientação adequada.
          </InfoCard>
        </div>
      </section>
    </SiteShell>
  );
}
