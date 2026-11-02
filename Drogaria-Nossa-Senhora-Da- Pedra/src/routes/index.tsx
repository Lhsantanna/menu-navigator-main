import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Megaphone, Pause, Play, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import {
  assets,
  PharmacyLocationMap,
  SiteShell,
  TrustStrip,
  getWhatsAppUrl,
  WhatsAppIcon,
  WhatsAppButton,
} from "@/components/pharmacy-site";
import { absoluteSiteUrl, createPageSeo } from "@/lib/seo";

const title = "Farmácia em Pedra Bela - SP | Entrega Rápida | Drogaria Nossa Senhora da Pedra";
const description =
  "Farmácia em Pedra Bela com entrega, horários amplos e atendimento pelo WhatsApp. Medicamentos, higiene, linha bebê, vitaminas e serviços farmacêuticos.";

function getDiscountWhatsAppUrl(productName: string) {
  return getWhatsAppUrl(
    `Olá! Vi o destaque promocional de ${productName} no site da Drogaria Nossa Senhora da Pedra. Gostaria de consultar o preço promocional, o desconto e a disponibilidade em Pedra Bela.`,
  );
}

const promotionGroups = [
  {
    id: "baby",
    label: "Linha bebê",
    products: [
      {
        title: "Cuidados para assaduras",
        image: "/images/products/linha-bebe/baby-cremes-assadura.jpg",
        imageAlt: "Produtos de cuidado para assaduras na rotina do bebê",
      },
      {
        title: "Shampoo infantil Huggies Kids",
        image: "/images/products/linha-bebe/huggies-shampoo.jpg",
        imageAlt: "Shampoos infantis Huggies Kids",
      },
      {
        title: "Talco Johnson's Baby",
        image: "/images/products/linha-bebe/johnsons-po-bebe.jpg",
        imageAlt: "Talco infantil Johnson's Baby",
      },
      {
        title: "Colônia Johnson's Baby",
        image: "/images/products/linha-bebe/johnsons-colonia.jpg",
        imageAlt: "Colônia infantil Johnson's Baby",
      },
      {
        title: "Creme Desitin para assaduras",
        image: "/images/products/linha-bebe/desitin-assaduras.jpg",
        imageAlt: "Creme Desitin para prevenção de assaduras",
      },
    ],
  },
  {
    id: "sun",
    label: "Protetores solares",
    products: [
      {
        title: "Proteção solar para o dia a dia",
        image: "/images/products/protecao-solar/protecao-diaria.jpg",
        imageAlt: "Sugestões de protetor solar para a rotina diária",
      },
      {
        title: "Proteção solar para o fim de semana",
        image: "/images/products/protecao-solar/protecao-fim-de-semana.jpg",
        imageAlt: "Sugestões de protetor solar para o fim de semana",
      },
      {
        title: "Proteção solar para toda a família",
        image: "/images/products/protecao-solar/protecao-familia.jpg",
        imageAlt: "Opções de proteção solar para toda a família",
      },
      {
        title: "Protetores Eudora e ISDIN",
        image: "/images/products/protecao-solar/eudora-isdin-fps.jpg",
        imageAlt: "Protetores solares Eudora e ISDIN",
      },
      {
        title: "Protetor solar Neutrogena",
        image: "/images/products/protecao-solar/neutrogena-sport.jpg",
        imageAlt: "Protetores solares Neutrogena",
      },
      {
        title: "Kit Actine e Neutrogena",
        image: "/images/products/protecao-solar/kit-actine-neutrogena.jpg",
        imageAlt: "Kit com produtos Actine e Neutrogena",
      },
    ],
  },
  {
    id: "beauty",
    label: "Higiene e beleza",
    products: [
      {
        title: "Cuidados para cabelo",
        image: "/images/products/hair-care.jpg",
        imageAlt: "Sugestões de produtos para cuidados com o cabelo",
      },
      {
        title: "Cuidados faciais Actine",
        image: "/images/products/actine-pele-acne.jpg",
        imageAlt: "Produtos Actine para cuidados com a pele",
      },
      {
        title: "Cuidados pós-sol Calamed",
        image: "/images/products/calamad-pos-sol.jpg",
        imageAlt: "Produtos Calamed para cuidado e hidratação pós-sol",
      },
      {
        title: "Cuidado e hidratação pós-sol",
        image: "/images/products/after-sun-care.jpg",
        imageAlt: "Opções de hidratante e cuidado para a pele após o sol",
      },
      {
        title: "Protetor facial Neostrata Minesol",
        image: "/images/products/protecao-solar/neostrata-minesol.jpg",
        imageAlt: "Protetor solar facial Neostrata Minesol",
      },
    ],
  },
].map((group) => ({
  ...group,
  products: group.products.map((product) => ({
    ...product,
    groupId: group.id,
    groupLabel: group.label,
  })),
}));

const discountHighlights = promotionGroups.flatMap((group) => group.products);

function getPromotionGroupStartIndex(groupId: string) {
  return promotionGroups
    .slice(
      0,
      promotionGroups.findIndex((group) => group.id === groupId),
    )
    .reduce((total, group) => total + group.products.length, 0);
}

function getActivePromotionGroup(activeIndex: number) {
  let groupStartIndex = 0;

  for (const group of promotionGroups) {
    const groupEndIndex = groupStartIndex + group.products.length;
    if (activeIndex < groupEndIndex) {
      return { group, groupStartIndex };
    }
    groupStartIndex = groupEndIndex;
  }

  throw new Error(`No promotion group found for index ${activeIndex}`);
}

const PROMOTION_DURATION_MS = 4500;

export const Route = createFileRoute("/")({
  head: () => ({
    ...createPageSeo({ path: "/", title, description, image: assets.heroFacade }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Pharmacy",
          "@id": absoluteSiteUrl("/") ? `${absoluteSiteUrl("/")}#pharmacy` : undefined,
          name: "Drogaria Nossa Senhora da Pedra",
          url: absoluteSiteUrl("/"),
          image: absoluteSiteUrl(assets.heroFacade),
          logo: absoluteSiteUrl(assets.logo),
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
  const [carouselFocusPaused, setCarouselFocusPaused] = useState(false);
  const { group: activePromotionGroup, groupStartIndex } = getActivePromotionGroup(activePromotion);
  const isCarouselPaused = carouselPaused || carouselFocusPaused;

  useEffect(() => {
    if (isCarouselPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActivePromotion((current) => (current + 1) % discountHighlights.length);
    }, PROMOTION_DURATION_MS);

    return () => window.clearInterval(interval);
  }, [isCarouselPaused]);

  return (
    <SiteShell>
      <section className="home-hero">
        <div className="home-hero-visual">
          <img
            src={assets.heroFacade}
            alt="Fachada acessível da Drogaria Nossa Senhora da Pedra em Pedra Bela"
            className="home-hero-image"
            width="768"
            height="1029"
            loading="eager"
            fetchPriority="high"
          />
          <div className="home-hero-overlay" />
        </div>
        <div className="site-container home-hero-content">
          <p className="hero-kicker">Ofertas e cuidado perto de você</p>
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

      <section id="ofertas-especiais" className="content-section discount-highlight-section">
        <div className="site-container">
          <div
            className="promotion-carousel"
            role="region"
            aria-roledescription="carrossel"
            aria-label="Produtos em destaque com descontos"
            onFocusCapture={() => setCarouselFocusPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setCarouselFocusPaused(false);
              }
            }}
          >
            <div className="promotion-banner">
              <span className="promotion-banner-icon">
                <Megaphone aria-hidden="true" />
              </span>
              <div>
                <h2>Ofertas especiais</h2>
                <p>Economize nas suas compras sem sair de Pedra Bela!</p>
              </div>
            </div>
            <div className="promotion-group-tabs" aria-label="Categorias em oferta">
              {promotionGroups.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  className={`promotion-group-tab ${activePromotionGroup.id === group.id ? "promotion-group-tab-active" : ""}`}
                  aria-pressed={activePromotionGroup.id === group.id}
                  onClick={() => setActivePromotion(getPromotionGroupStartIndex(group.id))}
                >
                  {group.label}
                  <span>{group.products.length}</span>
                </button>
              ))}
            </div>
            <div className="promotion-window">
              <div
                className="promotion-track"
                style={{ transform: `translateX(-${activePromotion * 100}%)` }}
                aria-live="polite"
              >
                {discountHighlights.map((product, index) => (
                  <article
                    key={`${product.groupId}-${product.title}`}
                    className="promotion-slide"
                    aria-roledescription="slide"
                    aria-label={`${product.title}, oferta ${index + 1} de ${discountHighlights.length}`}
                    aria-hidden={index !== activePromotion}
                  >
                    <div className="promotion-visual">
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        width="768"
                        height="1365"
                        loading={index === activePromotion ? "eager" : "lazy"}
                        decoding="async"
                      />
                      <span className="promotion-badge">{product.groupLabel}</span>
                    </div>
                    <div
                      key={`${product.title}-${index === activePromotion ? "active" : "inactive"}`}
                      className="promotion-details"
                    >
                      <p className="promotion-category">Oferta especial</p>
                      <h3>{product.title}</h3>
                      <p>Um cuidado especial para você e sua família, com condição promocional.</p>
                      <div className="promotion-offer">
                        <span>PREÇO PROMOCIONAL</span>
                        <strong>Consulte pelo WhatsApp</strong>
                        <small>Desconto e disponibilidade sujeitos à confirmação.</small>
                      </div>
                      <a
                        href={getDiscountWhatsAppUrl(product.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="promotion-link"
                        onClick={() => {
                          if (typeof window === "undefined") return;
                          const analyticsWindow = window as typeof window & {
                            gtag?: (...args: unknown[]) => void;
                          };
                          analyticsWindow.gtag?.("event", "clique_whatsapp_pedra_bela");
                        }}
                        tabIndex={index === activePromotion ? 0 : -1}
                      >
                        <WhatsAppIcon />
                        Consultar oferta <ChevronRight aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
              <button
                type="button"
                className="promotion-arrow promotion-arrow-overlay promotion-arrow-previous"
                aria-label="Oferta anterior"
                onClick={() =>
                  setActivePromotion(
                    (current) =>
                      (current - 1 + discountHighlights.length) % discountHighlights.length,
                  )
                }
              >
                <ChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                className="promotion-arrow promotion-arrow-overlay promotion-arrow-next"
                aria-label="Próxima oferta"
                onClick={() =>
                  setActivePromotion((current) => (current + 1) % discountHighlights.length)
                }
              >
                <ChevronRight aria-hidden="true" />
              </button>
              <div className="promotion-progress" aria-hidden="true">
                <span
                  key={`${activePromotion}-${carouselPaused ? "paused" : "playing"}`}
                  className="promotion-progress-value"
                  style={{ animationPlayState: isCarouselPaused ? "paused" : "running" }}
                />
              </div>
            </div>
            <div className="promotion-controls">
              <div
                className="promotion-dots"
                role="group"
                aria-label={`Ofertas de ${activePromotionGroup.label}`}
              >
                {activePromotionGroup.products.map((product, index) => (
                  <button
                    key={product.title}
                    type="button"
                    className={`promotion-dot ${groupStartIndex + index === activePromotion ? "promotion-dot-active" : ""}`}
                    aria-label={`Mostrar oferta: ${product.title}`}
                    aria-current={groupStartIndex + index === activePromotion ? "true" : undefined}
                    onClick={() => setActivePromotion(groupStartIndex + index)}
                  />
                ))}
              </div>
              <div className="promotion-position" aria-live="polite">
                Oferta {activePromotion + 1} de {discountHighlights.length}
              </div>
              <button
                type="button"
                className="promotion-play-toggle"
                aria-label={
                  carouselPaused ? "Retomar ofertas automáticas" : "Pausar ofertas automáticas"
                }
                aria-pressed={carouselPaused}
                onClick={() => {
                  setCarouselPaused((paused) => !paused);
                  setCarouselFocusPaused(false);
                }}
              >
                {carouselPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
                <span>{carouselPaused ? "Reproduzir" : "Pausar"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="service-band">
        <div className="site-container service-band-grid">
          <div>
            <p className="eyebrow eyebrow-light">Cuidados essenciais</p>
            <h2>Serviços Farmacêuticos</h2>
            <p>
              Oferecemos aplicação de injetáveis, aferição de pressão arterial e teste de glicemia
              capilar.
            </p>
            <Link to="/servicos-farmaceuticos" className="light-link">
              Conheça os serviços <ChevronRight />
            </Link>
          </div>
          <img
            className="service-pharmacist"
            src="/images/store/farmaceutico.jpg"
            width="1194"
            height="1600"
            loading="lazy"
            decoding="async"
            alt="Farmacêutico na Drogaria Nossa Senhora da Pedra"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>
      </section>

      <section className="content-section">
        <div className="site-container delivery-row">
          <div className="delivery-icon">
            <Truck />
          </div>
          <div>
            <h2 className="section-title">
              Oferecemos entrega de medicamentos em Pedra Bela e região.
            </h2>
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
