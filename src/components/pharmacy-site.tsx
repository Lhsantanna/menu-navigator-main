import { Link, useRouterState } from "@tanstack/react-router";
import {
  Baby,
  ChevronRight,
  Clock3,
  ExternalLink,
  HeartPulse,
  House,
  Instagram,
  MapPin,
  MapPinned,
  Menu,
  PackageCheck,
  Pill,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Truck,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const WHATSAPP_NUMBER = "5511974132953";
export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Drogaria Nossa Senhora da Pedra. Gostaria de falar com a equipe sobre atendimento em Pedra Bela.";
export const WHATSAPP_URL = getWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

const pageWhatsAppMessages: Record<string, string> = {
  "/": "Olá! Vim pelo site da Drogaria Nossa Senhora da Pedra. Gostaria de saber sobre produtos e atendimento em Pedra Bela.",
  "/medicamentos":
    "Olá! Vim pela página de medicamentos. Gostaria de consultar a disponibilidade de um medicamento.",
  "/higiene-e-beleza":
    "Olá! Vim pela página de higiene e beleza. Gostaria de consultar marcas e disponibilidade de produtos.",
  "/linha-bebe":
    "Olá! Vim pela página da linha bebê. Gostaria de consultar fraldas, tamanhos e produtos infantis disponíveis.",
  "/vitaminas-e-bem-estar":
    "Olá! Vim pela página de vitaminas e bem-estar. Gostaria de consultar a disponibilidade de um produto.",
  "/servicos-farmaceuticos":
    "Olá! Vim pela página de serviços farmacêuticos. Gostaria de consultar horários e orientações sobre os serviços.",
  "/entrega-e-contato":
    "Olá! Vim pela página de entrega e contato. Gostaria de consultar a entrega em Pedra Bela ou região. Meu endereço/bairro é:",
};

const PHARMACY_ADDRESS = "Rua Cesila, 162, Centro, Pedra Bela - SP, 12990-000";
const encodedPharmacyAddress = encodeURIComponent(PHARMACY_ADDRESS);
export const PHARMACY_MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodedPharmacyAddress}&z=17&output=embed`;
export const PHARMACY_MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodedPharmacyAddress}`;

export const assets = {
  logo: "/images/store/logo.jpg",
  facade: "/images/store/facade.jpg",
  baby: "/images/store/baby-aisle.jpg",
  beauty: "/images/store/beauty-aisle.jpg",
  medicine: "/images/store/medicine-counter.jpg",
};

const menuItems = [
  { label: "Início", to: "/" as const, icon: House },
  { label: "Medicamentos", to: "/medicamentos" as const, icon: Pill },
  { label: "Higiene e beleza", to: "/higiene-e-beleza" as const, icon: Sparkles },
  { label: "Linha bebê", to: "/linha-bebe" as const, icon: Baby },
  { label: "Vitaminas e bem-estar", to: "/vitaminas-e-bem-estar" as const, icon: HeartPulse },
  { label: "Serviços farmacêuticos", to: "/servicos-farmaceuticos" as const, icon: Stethoscope },
  { label: "Entrega e contato", to: "/entrega-e-contato" as const, icon: Truck },
];

export const categories = [
  {
    title: "Medicamentos",
    description: "Medicamentos, genéricos e itens para os cuidados do dia a dia.",
    to: "/medicamentos" as const,
    icon: Pill,
  },
  {
    title: "Higiene e beleza",
    description: "Cuidados pessoais, cabelos, pele, proteção solar e mais.",
    to: "/higiene-e-beleza" as const,
    icon: Sparkles,
  },
  {
    title: "Linha bebê",
    description: "Leites, fraldas, cremes e cuidados para os pequenos.",
    to: "/linha-bebe" as const,
    icon: Baby,
  },
  {
    title: "Vitaminas e bem-estar",
    description: "Vitaminas, suplementos, repelentes e produtos de cuidado.",
    to: "/vitaminas-e-bem-estar" as const,
    icon: HeartPulse,
  },
];

function trackWhatsApp() {
  if (typeof window === "undefined") return;
  const analyticsWindow = window as typeof window & { gtag?: (...args: unknown[]) => void };
  analyticsWindow.gtag?.("event", "clique_whatsapp_pedra_bela");
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.437-9.884 9.892-9.884 2.64.001 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 7.004c-.003 5.45-4.437 9.884-9.889 9.884m8.413-18.297A11.815 11.815 0 0 0 12.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.688 1.448h.005c6.56 0 11.895-5.335 11.898-11.893a11.821 11.821 0 0 0-3.489-8.413Z" />
    </svg>
  );
}

export function WhatsAppButton({
  compact = false,
  message = DEFAULT_WHATSAPP_MESSAGE,
}: {
  compact?: boolean;
  message?: string;
}) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsApp}
      className={compact ? "whatsapp-button whatsapp-button-compact" : "whatsapp-button"}
    >
      <WhatsAppIcon />
      <span>Consultar no WhatsApp</span>
    </a>
  );
}

export function PharmacyLocationMap() {
  return (
    <section className="location-map-panel" aria-labelledby="location-map-title">
      <div className="location-map-heading">
        <div>
          <p className="eyebrow">Estamos no Centro</p>
          <h2 id="location-map-title">Rua Cesila, 162</h2>
          <p>Próximo ao Supermercado Amandrey</p>
        </div>
      </div>
      <div className="location-map-frame">
        <iframe
          title="Mapa clicável da região da Rua Cesila, 162 em Pedra Bela"
          src={PHARMACY_MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        className="location-map-link"
        href={PHARMACY_MAP_DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MapPinned aria-hidden="true" />
        Abrir rota no Google Maps
        <ExternalLink aria-hidden="true" />
      </a>
    </section>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const whatsappMessage = pageWhatsAppMessages[pathname] ?? DEFAULT_WHATSAPP_MESSAGE;
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const selector = [
      ".home-hero",
      ".trust-strip",
      ".content-section",
      ".section-heading",
      ".promotion-carousel",
      ".promotion-controls",
      ".page-intro",
      ".service-band",
      ".category-card",
      ".info-card",
      ".item-list li",
      ".promotion-slide",
      ".location-map-panel",
      ".contact-panel",
      ".address-box",
      ".footer",
    ].join(", ");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("scroll-reveal-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    let sequence = 0;

    function observeRevealTargets(root: ParentNode) {
      if (root instanceof Element && root.matches(selector)) {
        registerRevealTarget(root);
      }
      root.querySelectorAll(selector).forEach(registerRevealTarget);
    }

    function registerRevealTarget(target: Element) {
      if (target.hasAttribute("data-scroll-reveal")) return;
      target.setAttribute("data-scroll-reveal", "");
      if (target instanceof HTMLElement) {
        target.style.setProperty("--scroll-reveal-delay", `${(sequence % 4) * 75}ms`);
      }
      sequence += 1;
      revealObserver.observe(target);
    }

    function revealVisibleTargets() {
      document.querySelectorAll("[data-scroll-reveal]").forEach((target) => {
        const bounds = target.getBoundingClientRect();
        if (bounds.top > window.innerHeight + 120 || bounds.bottom < -120) return;
        target.classList.add("scroll-reveal-visible");
        revealObserver.unobserve(target);
      });
    }

    observeRevealTargets(document.body);
    revealVisibleTargets();
    document.documentElement.classList.add("scroll-reveal-ready");

    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            observeRevealTargets(node);
            revealVisibleTargets();
          }
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", revealVisibleTargets, { passive: true });
    window.addEventListener("resize", revealVisibleTargets);

    return () => {
      mutationObserver.disconnect();
      revealObserver.disconnect();
      window.removeEventListener("scroll", revealVisibleTargets);
      window.removeEventListener("resize", revealVisibleTargets);
      document.documentElement.classList.remove("scroll-reveal-ready");
    };
  }, []);

  return (
    <div className="children-month-theme min-h-screen bg-background text-foreground">
      <div className="notice-bar">
        Entrega rápida em Pedra Bela <span aria-hidden="true">•</span> Aberto Seg–Sáb até 20:30 e
        Dom até 13:00
        <span className="children-month-note">
          <Baby aria-hidden="true" />
          Especial Dia das Crianças
        </span>
      </div>
      <header className="site-header">
        <div className="site-container flex h-full items-center justify-between gap-4">
          <Link
            to="/"
            resetScroll
            onClick={(event) => {
              if (pathname === "/") {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            aria-label="Drogaria Nossa Senhora da Pedra — início"
            className="brand-link"
          >
            <img src={assets.logo} alt="Drogaria Nossa Senhora da Pedra" className="brand-logo" />
            <span className="hidden sm:block">
              <strong>Drogaria Nossa Senhora</strong>
              <small>da Pedra • Pedra Bela — SP</small>
            </span>
          </Link>
          <button
            className="menu-button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="pharmacy-navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span>Menu</span>
          </button>
        </div>
      </header>

      {open && (
        <button className="menu-scrim" aria-label="Fechar menu" onClick={() => setOpen(false)} />
      )}
      <aside
        id="pharmacy-navigation"
        className={`menu-panel ${open ? "menu-panel-open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="font-semibold">Navegue pela drogaria</span>
          <button className="icon-button" onClick={() => setOpen(false)} aria-label="Fechar menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-3" aria-label="Menu principal">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.to;
            return item.to === "/" ? (
              <Link
                key={item.to}
                to="/"
                resetScroll
                onClick={(event) => {
                  setOpen(false);
                  if (pathname === "/") {
                    event.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`menu-link ${active ? "menu-link-active" : ""}`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
                <ChevronRight className="ml-auto h-4 w-4" />
              </Link>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={`menu-link ${active ? "menu-link-active" : ""}`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
                <ChevronRight className="ml-auto h-4 w-4" />
              </Link>
            );
          })}
        </nav>
        <div className="p-5 pt-2">
          <WhatsAppButton compact message={whatsappMessage} />
        </div>
      </aside>

      <main>{children}</main>
      <Footer />
      <a
        href={getWhatsAppUrl(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsApp}
        className="floating-whatsapp"
        aria-label="Consultar no WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

function Footer() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <footer className="footer">
      <div className="site-container grid gap-9 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.2fr_1fr]">
        <div>
          <img src={assets.logo} alt="Drogaria Nossa Senhora da Pedra" className="footer-logo" />
          <p className="mt-4 max-w-sm text-sm text-footer-muted">
            Cuidado, fé e saúde para você. Atendimento próximo e responsável em Pedra Bela.
          </p>
        </div>
        <div>
          <h2 className="footer-title">Navegue</h2>
          <nav className="footer-links" aria-label="Links do rodapé">
            <Link
              to="/"
              resetScroll
              onClick={(event) => {
                if (pathname === "/") {
                  event.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              Início
            </Link>
            <Link to="/medicamentos">Medicamentos</Link>
            <Link to="/linha-bebe">Linha bebê</Link>
            <Link to="/servicos-farmaceuticos">Serviços farmacêuticos</Link>
            <Link to="/entrega-e-contato">Entrega e contato</Link>
          </nav>
        </div>
        <div>
          <h2 className="footer-title">Endereço e contato</h2>
          <address className="footer-copy not-italic">
            Drogaria Nossa Senhora da Pedra
            <br />
            Rua Cesila, 162 — Centro
            <br />
            Pedra Bela — SP, CEP 12990-000
            <br />
            Próximo ao Supermercado Amandrey
            <br />
            <a href="tel:+5511974132953">(11) 97413-2953</a>
            <br />
            <a href={PHARMACY_MAP_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
              Ver rota no Google Maps
            </a>
            <br />
            <a
              href="https://www.instagram.com/farmaciapedrabela/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acompanhe a Drogaria Nossa Senhora da Pedra no Instagram"
              className="inline-flex items-center gap-1"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              @farmaciapedrabela
            </a>
          </address>
        </div>
        <div>
          <h2 className="footer-title">Atendimento</h2>
          <p className="footer-copy">
            Segunda a sábado
            <br />
            <strong>08:00 às 20:30</strong>
            <br />
            Domingo
            <br />
            <strong>08:00 às 13:00</strong>
          </p>
          <p className="footer-copy footer-safety-note">
            Medicamentos devem ser utilizados conforme a bula e a orientação de um profissional
            habilitado. Produtos, preços e condições promocionais sujeitos à disponibilidade e
            confirmação no atendimento.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Drogaria Nossa Senhora da Pedra <span>•</span> Todos os
          direitos reservados.
        </p>
        <p>
          Desenvolvido por <strong>lhsoludev</strong>
        </p>
      </div>
    </footer>
  );
}

export function TrustStrip() {
  return (
    <div className="trust-strip">
      <div>
        <Clock3 />
        <span>
          <strong>Horário amplo</strong>Seg–Sáb até 20:30
        </span>
      </div>
      <div>
        <Truck />
        <span>
          <strong>Entrega local</strong>Pedra Bela e região
        </span>
      </div>
      <div>
        <ShieldCheck />
        <span>
          <strong>Atendimento próximo</strong>Cuidado e confiança
        </span>
      </div>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  whatsappMessage,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  whatsappMessage?: string;
}) {
  return (
    <section className="page-intro">
      <div className="site-container page-intro-grid">
        <div className="py-12 md:py-16">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-title">{title}</h1>
          <p className="page-lead">{description}</p>
          <div className="mt-7">
            <WhatsAppButton message={whatsappMessage} />
          </div>
        </div>
        {image && (
          <img
            src={image}
            alt={imageAlt ?? "Interior da Drogaria Nossa Senhora da Pedra"}
            className="page-intro-image"
          />
        )}
      </div>
    </section>
  );
}

export function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="info-card">
      <div className="info-card-icon">
        <Icon />
      </div>
      <h2>{title}</h2>
      <p>{children}</p>
    </article>
  );
}

export { Baby, HeartPulse, MapPin, PackageCheck, Pill, Sparkles, Stethoscope, Truck };
