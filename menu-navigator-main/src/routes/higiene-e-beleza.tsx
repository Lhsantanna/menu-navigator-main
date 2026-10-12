import { createFileRoute } from "@tanstack/react-router";
import { assets } from "@/components/pharmacy-site";
import { CategoryPage } from "@/components/category-page";
const title = "Higiene e Beleza em Pedra Bela | Drogaria Nossa Senhora da Pedra";
const description =
  "Produtos de higiene, beleza, cabelo e cuidados com a pele em Pedra Bela. Consulte marcas e disponibilidade pelo WhatsApp.";
export const Route = createFileRoute("/higiene-e-beleza")({
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
      eyebrow="Cuidado pessoal"
      title="Higiene e beleza"
      description="Produtos para sua rotina de cuidados, com variedade para cabelo, pele e higiene pessoal."
      image={assets.beauty}
      imageAlt="Prateleiras de higiene e beleza dentro da drogaria"
      productImages={[
        {
          image: "/images/products/hair-care.jpg",
          imageAlt: "Imagem ilustrativa de shampoo e condicionador para cabelos",
          title: "Cuidados para cabelo",
        },
        {
          image: "/images/products/sun-protection.jpg",
          imageAlt: "Imagem ilustrativa de produtos de proteção solar",
          title: "Proteção solar",
        },
        {
          image: "/images/products/after-sun-care.jpg",
          imageAlt: "Imagem ilustrativa de hidratante e creme pós-sol",
          title: "Hidratação e cuidados pós-sol",
        },
      ]}
      note="Fale com a equipe para confirmar a marca, versão ou tamanho que você procura."
      whatsappMessage="Olá! Vim pela página de higiene e beleza. Gostaria de consultar a disponibilidade de um produto. A marca ou tipo que procuro é:"
    />
  );
}
