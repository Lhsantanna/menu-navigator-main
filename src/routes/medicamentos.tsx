import { createFileRoute } from "@tanstack/react-router";
import { assets } from "@/components/pharmacy-site";
import { CategoryPage } from "@/components/category-page";
const title = "Medicamentos em Pedra Bela - SP | Drogaria Nossa Senhora da Pedra";
const description =
  "Consulte medicamentos e genéricos na Drogaria Nossa Senhora da Pedra, no Centro de Pedra Bela, com atendimento pelo WhatsApp.";
export const Route = createFileRoute("/medicamentos")({
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
      eyebrow="Medicamentos em Pedra Bela"
      title="Medicamentos e genéricos"
      description="Consulte opções e disponibilidade com atendimento próximo e responsável."
      image={assets.medicine}
      imageAlt="Balcão e prateleiras de medicamentos da drogaria"
      productImages={[
        {
          image: "/images/products/nasal-care.jpg",
          imageAlt: "Imagem ilustrativa de descongestionante nasal",
          title: "Cuidado nasal",
        },
        {
          image: "/images/products/pain-relief.jpg",
          imageAlt: "Imagem ilustrativa de analgésico e anti-inflamatório",
          title: "Analgésico e anti-inflamatório",
        },
        {
          image: "/images/products/antigripal.jpg",
          imageAlt: "Imagem ilustrativa de produto antigripal",
          title: "Antigripal",
        },
        {
          image: "/images/products/antacid.jpg",
          imageAlt: "Imagem ilustrativa de antiácido efervescente",
          title: "Antiácido efervescente",
        },
      ]}
      note="Informe o nome do medicamento. Se houver exigência de receita, nossa equipe orientará sobre o envio pelo WhatsApp."
      whatsappMessage="Olá! Vim pela página de medicamentos. Gostaria de consultar a disponibilidade de um medicamento. Posso informar o nome e, se necessário, enviar a receita para orientação."
    />
  );
}
