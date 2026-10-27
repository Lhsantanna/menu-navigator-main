import { createFileRoute } from "@tanstack/react-router";
import { assets } from "@/components/pharmacy-site";
import { CategoryPage } from "@/components/category-page";
import { createPageSeo } from "@/lib/seo";
const title = "Higiene e Beleza em Pedra Bela | Drogaria Nossa Senhora da Pedra";
const description =
  "Produtos de higiene, beleza, cabelo e cuidados com a pele em Pedra Bela. Consulte marcas e disponibilidade pelo WhatsApp.";
export const Route = createFileRoute("/higiene-e-beleza")({
  head: () =>
    createPageSeo({
      path: "/higiene-e-beleza",
      title,
      description,
      image: assets.beauty,
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
          image: "/images/products/protecao-solar/protecao-diaria.jpg",
          imageAlt: "Sugestões de protetor solar para a rotina diária",
          title: "Proteção solar para o dia a dia",
        },
        {
          image: "/images/products/protecao-solar/protecao-fim-de-semana.jpg",
          imageAlt: "Sugestões de protetor solar para o fim de semana",
          title: "Proteção solar para o fim de semana",
        },
        {
          image: "/images/products/protecao-solar/protecao-familia.jpg",
          imageAlt: "Sugestões de protetor solar para toda a família",
          title: "Proteção solar para toda a família",
        },
        {
          image: "/images/products/protecao-solar/eudora-isdin-fps.jpg",
          imageAlt: "Protetores solares Eudora e ISDIN",
          title: "Protetores Eudora e ISDIN",
        },
        {
          image: "/images/products/protecao-solar/neutrogena-sport.jpg",
          imageAlt: "Protetores solares Neutrogena",
          title: "Proteção solar Neutrogena",
        },
        {
          image: "/images/products/protecao-solar/neostrata-minesol.jpg",
          imageAlt: "Protetor solar facial Neostrata Minesol",
          title: "Proteção solar facial Neostrata",
        },
        {
          image: "/images/products/protecao-solar/kit-actine-neutrogena.jpg",
          imageAlt: "Sugestão de kit com produtos Actine e Neutrogena",
          title: "Kit Actine e Neutrogena",
        },
        {
          image: "/images/products/calamad-pos-sol.jpg",
          imageAlt: "Produtos Calamed para cuidado e hidratação pós-sol",
          title: "Cuidado pós-sol",
        },
        {
          image: "/images/products/actine-pele-acne.jpg",
          imageAlt: "Produtos Actine para cuidados com a pele",
          title: "Cuidados faciais",
        },
      ]}
      note="Fale com a equipe para confirmar a marca, versão ou tamanho que você procura."
      whatsappMessage="Olá! Vim pela página de higiene e beleza. Gostaria de consultar a disponibilidade de um produto. A marca ou tipo que procuro é:"
    />
  );
}
