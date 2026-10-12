# Drogaria Nossa Senhora da Pedra

Site da drogaria com páginas próprias para cada categoria, carrossel infantil,
consulta pelo WhatsApp, endereço, horários e informações dos serviços.

## Funcionalidades atuais

- Página inicial com fachada, apresentação da drogaria e carrossel de destaques
  infantis com avanço automático, controles e animações.
- Menu responsivo com navegação para páginas próprias de cada categoria.
- Catálogo visual para medicamentos, linha bebê, higiene e beleza, e vitaminas
  e bem-estar. As imagens de produtos são ilustrativas; disponibilidade, marca
  e preço devem ser confirmados pelo WhatsApp.
- Páginas de serviços farmacêuticos e de entrega/contato.
- Atendimento por WhatsApp, endereço, mapa, horários e Instagram no rodapé.
- Metadados de página e dados estruturados locais para apoiar a indexação.
- Animações de entrada ao rolar a página, com respeito à preferência de
  movimento reduzido do dispositivo.

| Página                 | Caminho                   |
| ---------------------- | ------------------------- |
| Início                 | `/`                       |
| Medicamentos           | `/medicamentos`           |
| Higiene e beleza       | `/higiene-e-beleza`       |
| Linha bebê             | `/linha-bebe`             |
| Vitaminas e bem-estar  | `/vitaminas-e-bem-estar`  |
| Serviços farmacêuticos | `/servicos-farmaceuticos` |
| Entrega e contato      | `/entrega-e-contato`      |

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm

## Desenvolvimento local

```sh
npm ci
npm run dev
```

## Build e execução

```sh
npm run build
npm start
```

O build cria o servidor Node.js em `.output/server/index.mjs` e os arquivos
públicos de produção em `.output/public`.

## Publicação na Hostinger

Crie no hPanel uma aplicação Node.js e configure:

- **Node.js:** 20.19+ ou 22.12+
- **Instalação:** `npm ci`
- **Build:** `npm run build`
- **Inicialização:** `npm start`

Envie o conteúdo da pasta raiz do projeto — a que contém `package.json` — para a
aplicação. Mantenha `package.json`, `package-lock.json`, `public/`, `src/` e os
arquivos de configuração mencionados abaixo. Não envie `node_modules/`,
`.output/` ou `.wrangler/`; são dependências ou artefatos temporários. O build é
gerado na hospedagem. Configure SSL/HTTPS no hPanel antes de divulgar o site.

## O que são as pastas e os arquivos

### Código e conteúdo usados pelo site

```text
public/
  favicon.png             Ícone do site
  robots.txt               Regras básicas para robôs de busca
  images/
    dia-das-criancas/      Imagens usadas no carrossel infantil
    products/              Imagens organizadas por categoria de produto
    store/                 Logo e fotografias da drogaria
src/
  components/              Layout, navegação, WhatsApp e componentes compartilhados
  routes/                  Páginas; cada rota é uma página indexável do site
  lib/                     Utilitários e tratamento de erros
  router.tsx               Configuração do TanStack Router
  routeTree.gen.ts         Árvore de rotas gerada automaticamente
  server.ts                Entrada HTTP e cabeçalhos de segurança
  start.ts                 Middlewares do TanStack Start
  styles.css               Estilos responsivos, animações e apresentação
```

Mantenha todo `src/` e `public/`: as rotas, imagens e integrações entre
componentes fazem parte do site. Não edite `src/routeTree.gen.ts` manualmente; o
TanStack Router o atualiza a partir dos arquivos em `src/routes/`.

### Configuração necessária para instalar, testar e publicar

```text
package.json             Dependências, comandos e versão mínima de Node
package-lock.json        Versões fixadas para a instalação com npm ci
vite.config.ts           Build do servidor Node.js da Hostinger
tsconfig.json            Configuração do TypeScript e alias de imports
vitest.config.ts         Configuração dos testes automatizados
eslint.config.js         Configuração do ESLint
.gitignore               Evita enviar artefatos e arquivos locais ao Git
```

### Arquivos de desenvolvimento e integração

- `src/components/ui/`: componentes compartilhados do site. São código-fonte e
  fazem parte de `src/`.
- `components.json`: configuração para gerar ou editar componentes compatíveis
  com shadcn/ui. Não é carregada pelo site publicado.
- `@lovable.dev/vite-tanstack-config`: dependência de desenvolvimento usada
  apenas para configurar o Vite e gerar o servidor de produção. Ela não conecta
  o site a uma conta Lovable nem é necessária durante a execução do servidor.
- `src/test/`: testes; necessário para desenvolver e validar o projeto, não para
  a execução normal do servidor.

`node_modules/` contém dependências instaladas localmente, `.output/` é criado
por `npm run build` e `.wrangler/` pode ser criado por ferramentas de deploy.
Esses diretórios não são código-fonte nem precisam ser copiados para a
Hostinger.

## Segurança e operação

O servidor adiciona os cabeçalhos `X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy` e `Permissions-Policy`. Na data da última revisão, `npm audit
--omit=dev` não reportou vulnerabilidades nas dependências de produção. Esse
resultado não substitui atualizações regulares nem uma auditoria completa.

Ative SSL/HTTPS e redirecionamento para HTTPS no painel da hospedagem antes de
publicar. HSTS e Content Security Policy (CSP) ainda não estão configurados.
O site direciona solicitações ao WhatsApp e não implementa contas de usuário,
pagamento ou armazenamento próprio de dados.

## Validação

```sh
npm test
npm run lint
npm run build
```

O ESLint pode mostrar avisos de Fast Refresh em exports compartilhados de
`pharmacy-site.tsx`; não são erros de compilação.
