import { MessageCircleQuestion } from "lucide-react";
import { PageIntro, SiteShell, WhatsAppButton } from "@/components/pharmacy-site";

type ProductImage = {
  image: string;
  imageAlt: string;
  title: string;
};

export function CategoryPage({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  note,
  whatsappMessage,
  productImages = [],
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  note: string;
  whatsappMessage: string;
  productImages?: ProductImage[];
}) {
  return (
    <SiteShell>
      <PageIntro
        eyebrow={eyebrow}
        title={title}
        description={description}
        whatsappMessage={whatsappMessage}
        categoryImage
        {...(image ? { image } : {})}
        {...(imageAlt ? { imageAlt } : {})}
      />
      <section className="content-section">
        <div className="site-container content-grid">
          <div>
            <p className="eyebrow">Encontre na drogaria</p>
            <h2 className="section-title">Opções para o seu dia a dia</h2>
            <div className="category-product-grid">
              {productImages.map((product) => (
                <article className="category-product-card" key={product.title}>
                  <div className="category-product-image">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      width="1400"
                      height="1400"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3>{product.title}</h3>
                </article>
              ))}
            </div>
            <p className="category-product-note">
              Imagens ilustrativas; não confirmam marca, estoque, preço ou promoção.
            </p>
          </div>
          <aside className="contact-panel">
            <MessageCircleQuestion className="h-8 w-8" />
            <h2>Quer confirmar a disponibilidade?</h2>
            <p>{note}</p>
            <WhatsAppButton message={whatsappMessage} />
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
