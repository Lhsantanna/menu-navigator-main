# Publicar o site na Hostinger

Este projeto é uma aplicação **Node.js com renderização no servidor (SSR)**. Publique-o pelo fluxo **Node.js Web App** da Hostinger, usando upload de ZIP ou GitHub. Não envie os arquivos para `public_html` como se fosse um site estático: o servidor Node.js precisa iniciar a aplicação.

## Arquivo para envio

Depois de enviar as alterações para o GitHub, baixe o ZIP da branch `main` pelo botão **Code > Download ZIP** e envie esse arquivo à Hostinger. As regras `export-ignore` de `.gitattributes` deixam fora do ZIP os arquivos ZIP antigos, a cópia duplicada do projeto e imagens que não são usadas pela aplicação principal, reduzindo o tamanho sem apagar esses arquivos do repositório.

Não use os arquivos `Drogaria-Nossa-Senhora-Hostinger*.zip` antigos: eles podem ultrapassar o limite de envio. O ZIP baixado do GitHub contém os arquivos de configuração, o código e os recursos necessários para instalar dependências e compilar o site. A Hostinger instala as dependências e gera a versão de produção durante o deploy.

## Passos no hPanel

1. Envie as alterações do projeto para o GitHub e baixe o ZIP da branch `main` após a atualização.
2. Crie/adicione a aplicação pelo recurso **Node.js Web App** e escolha o envio de um arquivo ZIP (ou conecte um repositório GitHub).
3. Envie o ZIP baixado do GitHub.
4. Selecione a raiz do projeto, onde está `package.json`.
5. Configure Node.js **20.19+ ou 22.12+** (ou Node.js 22).
6. Use estes comandos, se o painel pedir:
   - Instalação: `npm ci`
   - Build: `npm run build`
   - Inicialização: `npm start`
7. Conclua o deploy e abra o endereço temporário fornecido pela Hostinger para conferir o site.
8. O domínio informado para este site é `https://drogarianossasenhoradapedra.com`; essa URL já está salva em `.env.production` e será usada no build. Se configurar a variável `VITE_SITE_URL` no painel da Hostinger, use exatamente esse endereço (sem `www`) e faça um novo deploy para gerar as URLs canonical e o `sitemap.xml`.
9. Ative/confirme o SSL/HTTPS do domínio no hPanel.

## O que enviar

- **Pelo fluxo de ZIP do Node.js Web App:** envie o ZIP preparado.
- **Pelo fluxo GitHub:** envie o conteúdo do projeto para a raiz do repositório e conecte esse repositório ao app.
- **Não envie** `node_modules/`, `.git/` ou `.output/`.

Se o formulário de implantação da sua conta mostrar campos diferentes, mantenha o app como Node.js e use o script `start` do `package.json`; o modo de saída correto é o servidor `.output/server/index.mjs`, iniciado por `npm start`.
