type PageSeoInput = {
  path: string;
  title: string;
  description: string;
  image?: string;
};

function readSiteOrigin() {
  const configuredUrl = import.meta.env.VITE_SITE_URL?.trim();
  if (!configuredUrl) return undefined;

  try {
    const url = new URL(configuredUrl);
    if (url.protocol !== "https:" && url.protocol !== "http:") return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}

export const SITE_ORIGIN = readSiteOrigin();

export function absoluteSiteUrl(path: string) {
  if (!SITE_ORIGIN) return undefined;
  return new URL(path.startsWith("/") ? path : `/${path}`, `${SITE_ORIGIN}/`).href;
}

export function createPageSeo({ path, title, description, image }: PageSeoInput) {
  const canonicalUrl = absoluteSiteUrl(path);
  const socialImageUrl = image ? absoluteSiteUrl(image) : undefined;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(canonicalUrl ? [{ property: "og:url", content: canonicalUrl }] : []),
      ...(socialImageUrl
        ? [
            { property: "og:image", content: socialImageUrl },
            { name: "twitter:image", content: socialImageUrl },
          ]
        : []),
    ],
    links: canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : [],
  };
}
