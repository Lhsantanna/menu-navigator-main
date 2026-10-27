import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDirectory = path.join(projectRoot, "public");
const sitemapPath = path.join(publicDirectory, "sitemap.xml");
const robotsPath = path.join(publicDirectory, "robots.txt");
const configuredUrl = process.env.VITE_SITE_URL?.trim();

let robots = await readFile(robotsPath, "utf8");
robots = robots.replace(/^Sitemap:\s*.*(?:\r?\n|$)/gim, "").trimEnd();

if (!configuredUrl) {
  await rm(sitemapPath, { force: true });
  await writeFile(robotsPath, `${robots}\n`);
  console.warn("VITE_SITE_URL is not set; sitemap and canonical URLs are omitted.");
  process.exit(0);
}

let siteOrigin;
try {
  const siteUrl = new URL(configuredUrl);
  if ((siteUrl.protocol !== "https:" && siteUrl.protocol !== "http:") || siteUrl.username) {
    throw new Error("VITE_SITE_URL must be a public http(s) URL without credentials.");
  }
  siteOrigin = siteUrl.origin;
} catch (error) {
  console.error(`Invalid VITE_SITE_URL: ${error.message}`);
  process.exit(1);
}

const routes = [
  "/",
  "/medicamentos",
  "/higiene-e-beleza",
  "/linha-bebe",
  "/vitaminas-e-bem-estar",
  "/servicos-farmaceuticos",
  "/entrega-e-contato",
];

const urlEntries = routes
  .map((route) => `  <url><loc>${new URL(route, `${siteOrigin}/`).href}</loc></url>`)
  .join("\n");
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  urlEntries,
  "</urlset>",
  "",
].join("\n");

await writeFile(sitemapPath, sitemap);
await writeFile(robotsPath, `${robots}\nSitemap: ${siteOrigin}/sitemap.xml\n`);
console.log(`Generated sitemap.xml for ${siteOrigin} with ${routes.length} routes.`);
