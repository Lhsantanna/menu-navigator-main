import { createFileRoute } from "@tanstack/react-router";
import { assets } from "@/components/pharmacy-site";
import { CategoryPage } from "@/components/category-page";
import { createPageSeo } from "@/lib/seo";
const title = "Medicamentos em Pedra Bela - SP | Drogaria Nossa Senhora da Pedra";
const description =
  "Consulte medicamentos e genéricos na Drogaria Nossa Senhora da Pedra, no Centro de Pedra Bela, com atendimento pelo WhatsApp.";
export const Route = createFileRoute("/medicamentos")({
  head: () =>
    createPageSeo({
      path: "/medicamentos",
      title,
      description,
      image: assets.medicine,
    }),
  component: Page,
});
function Page() {
  return (
    <CategoryPage
      eyebrow="Medicamentos em Pedra Bela"
      title="Medicamentos e genéricos"
      description="Consulte opções e disponibilidade com atendimento próximo e responsável."
      image={assets.medicine}
      imageAlt="Balcão e prateleiras de medicamentos da drogaria"
      productImages={[
        {
          image: "/images/products/tylenol-paracetamol-750mg.jpg",
          imageAlt: "Imagem ilustrativa de embalagem de paracetamol 750 mg",
          title: "Paracetamol 750 mg",
        },
        {
          image: "/images/products/eno-sal-de-fruta.jpg",
          imageAlt: "Imagem ilustrativa de embalagem de sal de fruta efervescente",
          title: "Sal de fruta efervescente",
        },
        {
          image: "/images/products/dorflex-analgesico.jpg",
          imageAlt: "Imagem ilustrativa de embalagem de analgesico",
          title: "Dorflex - analgesico",
        },
        {
          image: "/images/products/cimegripe.jpg",
          imageAlt: "Imagem ilustrativa de embalagem de antigripal",
          title: "Cimegripe",
        },
        {
          image: "/images/products/neosaldina.jpg",
          imageAlt: "Imagem ilustrativa de embalagem de analgesico e antitermico",
          title: "Neosaldina",
        },
        {
          image: "/images/products/generico-500mg-embalagem-clara.jpg",
          imageAlt: "Imagem ilustrativa de embalagem generica de 500 mg",
          title: "Medicamento generico 500 mg",
        },
        {
          image: "/images/products/amoxicilina-generica-500mg.jpg",
          imageAlt: "Imagem ilustrativa de embalagem de amoxicilina 500 mg",
          title: "Amoxicilina 500 mg",
        },
        {
          image: "/images/products/dipirona-generica-500mg.jpg",
          imageAlt: "Imagem ilustrativa de embalagem de dipirona 500 mg",
          title: "Dipirona 500 mg",
        },
        {
          image: "/images/products/dorflex-comprimidos.jpg",
          imageAlt: "Imagem ilustrativa de embalagem de comprimidos analgesicos",
          title: "Dorflex - comprimidos",
        },
      ]}
      note="Informe o nome do medicamento. Se houver exigência de receita, nossa equipe orientará sobre o envio pelo WhatsApp."
      whatsappMessage="Olá! Vim pela página de medicamentos. Gostaria de consultar a disponibilidade de um medicamento. Posso informar o nome e, se necessário, enviar a receita para orientação."
    />
  );
}
