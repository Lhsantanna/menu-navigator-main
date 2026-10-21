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
          image: "/images/products/linha-bebe/baby-cremes-assadura.jpg",
          imageAlt: "Produtos para cuidado de assaduras na rotina do bebê",
          title: "Cuidados para assaduras",
        },
        {
          image: "/images/products/linha-bebe/huggies-shampoo.jpg",
          imageAlt: "Shampoos infantis Huggies Kids",
          title: "Shampoo infantil",
        },
        {
          image: "/images/products/linha-bebe/johnsons-po-bebe.jpg",
          imageAlt: "Talco infantil Johnson's Baby",
          title: "Talco infantil",
        },
        {
          image: "/images/products/linha-bebe/johnsons-colonia.jpg",
          imageAlt: "Colônia Johnson's Baby",
          title: "Colônia infantil",
        },
        {
          image: "/images/products/linha-bebe/johnsons-shampoo-cabelos-claros.jpg",
          imageAlt: "Shampoo infantil para cabelos claros",
          title: "Shampoo para cabelos claros",
        },
        {
          image: "/images/products/linha-bebe/johnsons-sabonete-camomila.jpg",
          imageAlt: "Sabonete infantil Johnson's Baby de camomila",
          title: "Sabonete infantil de camomila",
        },
        {
          image: "/images/products/linha-bebe/johnsons-sabonete-recem-nascido.jpg",
          imageAlt: "Sabonete Johnson's Baby para recém-nascido",
          title: "Sabonete para recém-nascido",
        },
        {
          image: "/images/products/linha-bebe/johnsons-derma-protect.jpg",
          imageAlt: "Sabonete líquido infantil Dermaprotect",
          title: "Sabonete líquido Dermaprotect",
        },
        {
          image: "/images/products/linha-bebe/johnsons-condicionador.jpg",
          imageAlt: "Condicionador Johnson's Baby",
          title: "Condicionador infantil",
        },
        {
          image: "/images/products/linha-bebe/desitin-assaduras.jpg",
          imageAlt: "Creme Desitin para prevenção de assaduras",
          title: "Creme para assaduras",
        },
        {
          image: "/images/products/repelente-bebe-passeio.jpg",
          imageAlt: "Repelentes infantis para passeios ao ar livre",
          title: "Repelente infantil",
        },
      ]}
      note="Informe a marca, fase ou tamanho desejado para receber uma resposta mais rápida."
      whatsappMessage="Olá! Vim pela página da linha bebê. Gostaria de consultar fraldas, tamanhos ou produtos infantis. Estou procurando:"
    />
  );
}
