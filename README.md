# Drogaria Nossa Senhora da Pedra

Site da drogaria, desenvolvido com React, TypeScript, TanStack Start e Vite.
As páginas usam renderização no servidor (SSR) e são servidas por uma aplicação
Node.js.

## Onde alterar o site

Não existe um arquivo `index.html` tradicional para editar. O HTML é criado
pelos componentes React (`.tsx`) e enviado pelo servidor. Para localizar uma
alteração:

| O que você quer mudar | Arquivo ou pasta |
| --- | --- |
| Estrutura HTML comum a todas as páginas, idioma e metadados globais | `src/routes/__root.tsx` |
| Conteúdo, imagens e carrossel da página inicial | `src/routes/index.tsx` |
| Conteúdo de uma categoria ou serviço | O arquivo correspondente em `src/routes/` |
| Cores, fontes, espaçamentos, aparência e responsividade | `src/styles.css` |
| Cabeçalho, menu, rodapé, botão do WhatsApp e mapa | `src/components/pharmacy-site.tsx` |
| Fotos e imagens que aparecem no site | `public/images/` |
| Ícone do navegador e instruções para mecanismos de busca | `public/favicon.png` e `public/robots.txt` |
| Endereço, telefone, categorias e imagens compartilhadas | `src/components/pharmacy-site.tsx` |
| Configuração de desenvolvimento e publicação | `package.json` e `vite.config.ts` |

### Estrutura principal

```text
menu-navigator-main/             Raiz do repositório e da aplicação
├── public/                      Arquivos estáticos publicados sem processamento
│   ├── favicon.png              Ícone do navegador
│   ├── robots.txt               Regras para robôs de busca
│   └── images/                  Fotos da loja, produtos e promoções
├── src/
│   ├── components/
│   │   ├── pharmacy-site.tsx    Cabeçalho, navegação, rodapé e dados compartilhados
│   │   └── ui/                  Componentes visuais reutilizáveis
│   ├── lib/                     Tratamento de erros e funções auxiliares
│   ├── routes/
│   │   ├── __root.tsx           Estrutura HTML global, metadados e layout
│   │   ├── index.tsx            Página inicial
│   │   ├── medicamentos.tsx     Página de medicamentos
│   │   ├── higiene-e-beleza.tsx Página de higiene e beleza
│   │   ├── linha-bebe.tsx       Página da linha bebê
│   │   ├── vitaminas-e-bem-estar.tsx
│   │   ├── servicos-farmaceuticos.tsx
│   │   └── entrega-e-contato.tsx
│   ├── test/                    Testes automatizados
│   ├── router.tsx               Configuração da navegação
│   ├── routeTree.gen.ts         Rotas geradas automaticamente; não editar
│   ├── server.ts                Tratamento HTTP e cabeçalhos de segurança
│   ├── start.ts                 Configuração do servidor TanStack Start
│   └── styles.css               Estilos globais e de todas as páginas
├── package.json                 Comandos, dependências e versão do Node.js
├── package-lock.json            Versões fixas usadas pelo npm ci
├── vite.config.ts               Configuração do desenvolvimento e build Node.js
├── tsconfig.json                Configuração do TypeScript e dos imports
├── vitest.config.ts             Configuração dos testes
└── eslint.config.js             Regras de qualidade do código
```

### Endereços das páginas

| Página | Endereço |
| --- | --- |
| Início | `/` |
| Medicamentos | `/medicamentos` |
| Higiene e beleza | `/higiene-e-beleza` |
| Linha bebê | `/linha-bebe` |
| Vitaminas e bem-estar | `/vitaminas-e-bem-estar` |
| Serviços farmacêuticos | `/servicos-farmaceuticos` |
| Entrega e contato | `/entrega-e-contato` |

Cada arquivo em `src/routes/` define uma página. O endereço segue o nome do
arquivo: por exemplo, `src/routes/linha-bebe.tsx` corresponde a `/linha-bebe`.
O arquivo `src/routes/__root.tsx` é a estrutura HTML compartilhada pelas
páginas. O TanStack Router atualiza `src/routeTree.gen.ts` automaticamente;
não edite esse arquivo manualmente.

## Visualizar durante o desenvolvimento

Requisitos: Node.js 20.19+ ou 22.12+ e npm.

Na pasta raiz do projeto, execute:

```sh
npm ci
npm run dev
```

Abra no navegador o endereço local exibido pelo Vite. Mantenha o comando
`npm run dev` em execução: ao salvar alterações em `src/` ou `public/`, a página
é atualizada automaticamente.

O **Live Server** do VS Code serve arquivos estáticos e não inicia o servidor
Node.js necessário por este projeto; por isso, não há um `index.html` para abrir
com essa extensão. Para iniciar o servidor pelo VS Code, use **Terminal >
Executar Tarefa...** e escolha **Site: iniciar servidor de desenvolvimento**.
Depois, abra no navegador o endereço `Local` exibido no terminal do Vite
(normalmente `http://localhost:8080/`).

## Preparar e testar a versão de produção

```sh
npm test
npm run lint
npm run build
npm start
```

O comando de build gera o servidor Node.js em `.output/server/index.mjs` e os
arquivos públicos em `.output/public`. `npm start` inicia esse servidor. As
pastas `node_modules/` e `.output/` são geradas localmente e não devem ser
enviadas como código-fonte: a instalação e a compilação são feitas no deploy.

## Publicar na Hostinger

O projeto está configurado para hospedagem Hostinger com aplicação Node.js.
No hPanel, crie ou configure uma aplicação apontando para a **raiz do
repositório**, que contém `package.json`, `package-lock.json`, `src/` e `public/`.
Não selecione uma subpasta do projeto como diretório raiz.

Configure:

- **Versão do Node.js:** 20.19+ ou 22.12+.
- **Instalação das dependências:** `npm ci`.
- **Comando de build:** `npm run build`.
- **Comando de inicialização:** `npm start`.

Publique o conteúdo versionado na raiz do GitHub e inicie um novo deploy. Não
envie `node_modules/` nem `.output/`: a Hostinger instala as dependências e
gera o build. Depois da publicação, configure o domínio e o certificado
SSL/HTTPS no hPanel.

Se a aplicação atual da Hostinger foi criada com outra pasta raiz ou outro tipo
de hospedagem, confira/ajuste essa configuração no hPanel para usar a raiz
acima e uma aplicação Node.js. Alterações nos arquivos do projeto, sozinhas, não
publicam o site nem alteram a configuração do painel.

## Segurança e operação

O servidor adiciona os cabeçalhos `X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy` e `Permissions-Policy`. Ative SSL/HTTPS no domínio pela
Hostinger. Os botões de contato encaminham o cliente ao WhatsApp; o site não
processa pagamentos nem armazena dados de conta.
