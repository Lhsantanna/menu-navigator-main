import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { createPageSeo } from "@/lib/seo";
const title = "Vitaminas e Bem-estar em Pedra Bela | Drogaria Nossa Senhora da Pedra";
const description =
  "Vitaminas B12, D e C, suplementos, repelentes, protetores solares e cremes em Pedra Bela. Consulte pelo WhatsApp.";
export const Route = createFileRoute("/vitaminas-e-bem-estar")({
  head: () =>
    createPageSeo({
      path: "/vitaminas-e-bem-estar",
      title,
      description,
      image: "/images/products/vitamin-c-b12.jpg",
    }),
  component: Page,
});
function Page() {
  return (
    <CategoryPage
      eyebrow="Rotina de cuidado"
      title="Vitaminas e bem-estar"
      description="Itens para complementar seus hábitos de cuidado e proteção em todas as estações."
      image="/images/products/vitamin-c-b12.jpg"
      imageAlt="Vitaminas C e B12, opções da seção de vitaminas e bem-estar"
      productImages={[
        {
          image: "/images/products/repellent.jpg",
          imageAlt: "Imagem ilustrativa de produtos repelentes",
          title: "Repelentes",
        },
        {
          image: "/images/products/vitamin-c-b12.jpg",
          imageAlt: "Imagem ilustrativa de suplemento de vitaminas C e B12",
          title: "Vitaminas C e B12",
        },
        {
          image: "/images/products/vitamin-d3.jpg",
          imageAlt: "Imagem ilustrativa de suplemento de vitamina D3",
          title: "Vitamina D3",
        },
        {
          image: "/images/products/whey-creatine.jpg",
          imageAlt: "Imagem ilustrativa de whey protein e creatina",
          title: "Suplementos esportivos",
        },
      ]}
      note="Conte o que procura para verificarmos as opções disponíveis. Suplementos não substituem orientação profissional."
      whatsappMessage="Olá! Vim pela página de vitaminas e bem-estar. Gostaria de consultar a disponibilidade de um produto. Estou procurando:"
    />
  );
}
