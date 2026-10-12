import { createFileRoute } from "@tanstack/react-router";
import { assets } from "@/components/pharmacy-site";
import { CategoryPage } from "@/components/category-page";
const title = "Linha Bebê em Pedra Bela | Drogaria Nossa Senhora da Pedra";
const description =
  "Fraldas, leites, cremes para assadura e cuidados Johnson’s baby em Pedra Bela. Consulte disponibilidade pelo WhatsApp.";
export const Route = createFileRoute("/linha-bebe")({
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
    <CategoryPage
      eyebrow="Cuidado desde os primeiros dias"
      title="Linha bebê"
      description="Itens essenciais para a rotina dos pequenos e para a tranquilidade da família."
      image={assets.baby}
      imageAlt="Corredor da drogaria com produtos da linha infantil"
      productImages={[
        {
          image: "/images/products/baby-nutrition.jpg",
          imageAlt: "Imagem ilustrativa de produto de nutrição infantil",
          title: "Nutrição infantil",
        },
        {
          image: "/images/products/baby-hygiene.jpg",
          imageAlt: "Imagem ilustrativa de shampoo e sabonete para higiene infantil",
          title: "Shampoo e sabonete infantil",
        },
      ]}
      note="Informe a marca, fase ou tamanho desejado para receber uma resposta mais rápida."
      whatsappMessage="Olá! Vim pela página da linha bebê. Gostaria de consultar fraldas, tamanhos ou produtos infantis. Estou procurando:"
    />
  );
}
