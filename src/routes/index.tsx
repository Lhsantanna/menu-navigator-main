import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Stethoscope, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import {
  assets,
  PharmacyLocationMap,
  SiteShell,
  TrustStrip,
  getWhatsAppUrl,
  WhatsAppButton,
} from "@/components/pharmacy-site";

const title = "Farmácia em Pedra Bela - SP | Entrega Rápida | Drogaria Nossa Senhora da Pedra";
const description =
  "Farmácia em Pedra Bela com entrega, horários amplos e atendimento pelo WhatsApp. Medicamentos, higiene, linha bebê, vitaminas e serviços farmacêuticos.";

// Mensagem preenchida automaticamente quando o cliente consulta um produto pelo WhatsApp.
function getProductWhatsAppUrl(productName: string) {
  return getWhatsAppUrl(
    `Olá! Encontrei ${productName} no site da Drogaria Nossa Senhora da Pedra, em Pedra Bela. Gostaria de consultar a disponibilidade e o preço.`,
  );
}

// Edite estes itens para alterar os cartões e as imagens do carrossel inicial.
const promotions: {
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  title: string;
  whatsappUrl: string;
}[] = [
  {
    category: "Higiene infantil",
    description: "Consulte opções de shampoo e sabonete infantil disponíveis na loja.",
    image: "/images/dia-das-criancas/johnsons-baby.webp",
    imageAlt: "Imagem ilustrativa de produtos de higiene para bebês",
    title: "Higiene para os pequenos",
    whatsappUrl: getProductWhatsAppUrl("itens de higiene infantil"),
  },
  {
    category: "Nutrição infantil",
    description: "Consulte com a equipe as opções adequadas e disponíveis para cada fase.",
    image: "/images/dia-das-criancas/fraldas-premium.webp",
    imageAlt: "Imagem ilustrativa de fraldas infantis",
    title: "Nutrição infantil",
    whatsappUrl: getProductWhatsAppUrl("produtos de nutrição infantil"),
  },
];

const celebrationConfetti = Array.from({ length: 14 }, (_, index) => ({
  color: ["#FFD93D", "#A0D8F0", "#FF8FA3"][index % 3],
  delay: `${index * 0.35}s`,
  duration: `${3 + (index % 4)}s`,
  left: `${(index * 13 + 7) % 100}%`,
}));
// Tempo de exibição de cada promoção no carrossel.
const PROMOTION_DURATION_MS = 3000;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Pharmacy",
          name: "Drogaria Nossa Senhora da Pedra",
          telephone: "+5511974132953",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Cesila, 162 - Centro",
            addressLocality: "Pedra Bela",
            addressRegion: "SP",
            postalCode: "12990-000",
            addressCountry: "BR",
          },
          geo: { "@type": "GeoCoordinates", latitude: -22.7908, longitude: -46.4458 },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "08:00",
              closes: "20:30",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "08:00",
              closes: "13:00",
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [activePromotion, setActivePromotion] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);

  useEffect(() => {
    if (carouselPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActivePromotion((current) => (current + 1) % promotions.length);
    }, PROMOTION_DURATION_MS);

    return () => window.clearInterval(interval);
  }, [carouselPaused]);

  return (
    <SiteShell>
      <section className="home-hero">
        <img
          src={assets.facade}
          alt="Fachada acessível da Drogaria Nossa Senhora da Pedra em Pedra Bela"
          className="home-hero-image"
        />
        <div className="home-hero-overlay" />
        <div className="site-container home-hero-content">
          <p className="hero-kicker">Cuidado perto de você • Especial Dia das Crianças</p>
          <h1>Sua Farmácia de Confiança em Pedra Bela - SP</h1>
          <p>
            Medicamentos, cuidados pessoais e atendimento próximo, com entrega em Pedra Bela e
            região.
          </p>
          <WhatsAppButton message="Olá! Vim pelo site da Drogaria Nossa Senhora da Pedra. Gostaria de consultar um produto ou tirar uma dúvida com a equipe em Pedra Bela." />
        </div>
      </section>
      <div className="site-container">
        <TrustStrip />
      </div>

      <section className="content-section children-day-section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Especial de Dia das Crianças</p>
              <h2 className="section-title">Produtos infantis em destaque em Pedra Bela</h2>
            </div>
            <p>
              Neste especial de Dia das Crianças, conheça opções de fraldas e higiene infantil
              disponíveis na Drogaria Nossa Senhora da Pedra. Consulte marcas, tamanhos, preços e
              disponibilidade pelo WhatsApp.
            </p>
          </div>
          <div
            className="promotion-carousel"
            aria-label="Carrossel de produtos infantis em destaque"
            onMouseEnter={() => setCarouselPaused(true)}
            onMouseLeave={() => setCarouselPaused(false)}
            onFocusCapture={() => setCarouselPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setCarouselPaused(false);
              }
            }}
          >
            <div className="promotion-window">
              <div
                className="promotion-track"
                style={{ transform: `translateX(-${activePromotion * 100}%)` }}
                aria-live="polite"
              >
                {promotions.map((promotion, index) => (
                  <article
                    key={promotion.title}
                    className="promotion-slide"
                    aria-roledescription="slide"
                    aria-label={`${promotion.title}, destaque ${index + 1} de ${promotions.length}`}
                    aria-hidden={index !== activePromotion}
                  >
                    <div className="promotion-visual promotion-visual-children">
                      <div className="promotion-confetti-layer" aria-hidden="true">
                        {celebrationConfetti.map((particle, particleIndex) => (
                          <span
                            key={particleIndex}
                            className="promotion-confetti"
                            style={{
                              left: particle.left,
                              backgroundColor: particle.color,
                              animationDelay: particle.delay,
                              animationDuration: particle.duration,
                            }}
                          />
                        ))}
                        <span className="promotion-float promotion-float-star" aria-hidden="true">
                          ★
                        </span>
                        <span className="promotion-float promotion-float-heart" aria-hidden="true">
                          💛
                        </span>
                        <span
                          className="promotion-float promotion-float-blue-heart"
                          aria-hidden="true"
                        >
                          💙
                        </span>
                      </div>
                      <div className="promotion-product-image">
                        <img
                          src={promotion.image}
                          alt={promotion.imageAlt}
                          width="1920"
                          height="1280"
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                      </div>
                      <span className="promotion-badge">
                        <span className="promotion-badge-pulse" aria-hidden="true" />
                        Especial Dia das Crianças
                      </span>
                    </div>
                    <div className="promotion-details">
                      <p className="promotion-category">{promotion.category}</p>
                      <h3>{promotion.title}</h3>
                      <p>{promotion.description}</p>
                      <p className="promotion-image-note">
                        Fotos ilustrativas. Marcas, tamanhos, preços e disponibilidade devem ser
                        confirmados pelo WhatsApp.
                      </p>
                      <a
                        href={promotion.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          if (typeof window === "undefined") return;
                          const analyticsWindow = window as typeof window & {
                            gtag?: (...args: unknown[]) => void;
                          };
                          analyticsWindow.gtag?.("event", "clique_whatsapp_pedra_bela");
                        }}
                        className="promotion-link"
                        tabIndex={index === activePromotion ? 0 : -1}
                      >
                        Consultar no WhatsApp <ChevronRight />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
              <div className="promotion-progress" aria-hidden="true">
                <span
                  key={`${activePromotion}-${carouselPaused ? "paused" : "playing"}`}
                  className="promotion-progress-value"
                  style={{ animationPlayState: carouselPaused ? "paused" : "running" }}
                />
              </div>
            </div>
            <div className="promotion-controls">
              <div className="promotion-dots" aria-label="Selecionar produto em destaque">
                {promotions.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    className={`promotion-dot ${index === activePromotion ? "promotion-dot-active" : ""}`}
                    aria-label={`Mostrar ${item.title}`}
                    aria-current={index === activePromotion ? "true" : undefined}
                    onClick={() => setActivePromotion(index)}
                  />
                ))}
              </div>
              <div className="promotion-arrows">
                <button
                  type="button"
                  className="promotion-arrow"
                  aria-label="Produto anterior"
                  onClick={() =>
                    setActivePromotion(
                      (current) => (current - 1 + promotions.length) % promotions.length,
                    )
                  }
                >
                  <ChevronLeft />
                </button>
                <button
                  type="button"
                  className="promotion-arrow"
                  aria-label="Próximo produto"
                  onClick={() => setActivePromotion((current) => (current + 1) % promotions.length)}
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-band">
        <div className="site-container service-band-grid">
          <div>
            <p className="eyebrow eyebrow-light">Cuidados essenciais</p>
            <h2>Serviços Farmacêuticos (Injeção, Pressão e Glicemia)</h2>
            <p>
              Conte com nossa equipe para aferição de pressão, aplicação de injeções e teste de
              glicemia.
            </p>
            <Link to="/servicos-farmaceuticos" className="light-link">
              Conheça os serviços <ChevronRight />
            </Link>
          </div>
          <Stethoscope />
        </div>
      </section>

      <section className="content-section">
        <div className="site-container delivery-row">
          <div className="delivery-icon">
            <Truck />
          </div>
          <div>
            <p className="eyebrow">Conveniência local</p>
            <h2 className="section-title">Entrega de Remédios em Pedra Bela e Região</h2>
            <p className="section-copy">
              Consulte pelo WhatsApp a cobertura da entrega em Pedra Bela e região. Para
              medicamentos sujeitos a prescrição, envie sua receita para orientação.
            </p>
            <WhatsAppButton message="Olá! Gostaria de consultar a entrega em Pedra Bela ou região. Meu endereço/bairro é:" />
          </div>
          <PharmacyLocationMap />
        </div>
      </section>
    </SiteShell>
  );
}
