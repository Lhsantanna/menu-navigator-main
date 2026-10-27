# Publicar o site na Hostinger

Este projeto é uma aplicação **Node.js com renderização no servidor (SSR)**. Publique-o pelo fluxo **Node.js Web App** da Hostinger, usando upload de ZIP ou GitHub. Não envie os arquivos para `public_html` como se fosse um site estático: o servidor Node.js precisa iniciar a aplicação.

## Arquivo pronto para envio

Use `Drogaria-Nossa-Senhora-Hostinger.zip`. Ele contém o código-fonte, as imagens públicas e os arquivos de configuração necessários para a Hostinger instalar dependências e compilar o site.

O ZIP inclui `package.json` e `package-lock.json`, `src/`, `public/`, `scripts/` e configurações do projeto. Não inclui `node_modules/`, `.git/` nem `.output/`: a Hostinger instala as dependências e gera a versão de produção durante o deploy.

## Passos no hPanel

1. Crie/adicione a aplicação pelo recurso **Node.js Web App** e escolha o envio de um arquivo ZIP (ou conecte um repositório GitHub).
2. Envie `Drogaria-Nossa-Senhora-Hostinger.zip`.
3. Selecione a raiz do projeto, onde está `package.json`.
4. Configure Node.js **20.19+ ou 22.12+** (ou Node.js 22).
5. Use estes comandos, se o painel pedir:
   - Instalação: `npm ci`
   - Build: `npm run build`
   - Inicialização: `npm start`
6. Conclua o deploy e abra o endereço temporário fornecido pela Hostinger para conferir o site.
7. Quando comprar e conectar o domínio ao app, configure `VITE_SITE_URL` com a URL pública completa, incluindo `https://` (por exemplo, `https://www.seudominio.com.br`) **antes do build/deploy**. Faça um novo deploy depois de salvar essa variável. Isso gera as URLs canonical e `sitemap.xml` com o domínio correto.
8. Ative/confirme o SSL/HTTPS do domínio no hPanel.

## O que enviar

- **Pelo fluxo de ZIP do Node.js Web App:** envie o ZIP preparado.
- **Pelo fluxo GitHub:** envie o conteúdo do projeto para a raiz do repositório e conecte esse repositório ao app.
- **Não envie** `node_modules/`, `.git/` ou `.output/`.

Se o formulário de implantação da sua conta mostrar campos diferentes, mantenha o app como Node.js e use o script `start` do `package.json`; o modo de saída correto é o servidor `.output/server/index.mjs`, iniciado por `npm start`.
