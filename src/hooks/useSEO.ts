import { useEffect } from "react";

const SITE_URL = "https://khalid-portfolio-gamma-three.vercel.app";
const SITE_NAME = "Khalid Chliyahe — Portfolio";

type SEOOptions = {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
};

function setMetaByName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaByProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string | null) {
  const el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (href === null) {
    el?.remove();
    return;
  }
  if (el) {
    el.setAttribute("href", href);
    return;
  }
  const created = document.createElement("link");
  created.setAttribute("rel", "canonical");
  created.setAttribute("href", href);
  document.head.appendChild(created);
}

function setOrRemoveMetaByName(name: string, content: string | null) {
  const el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (content === null) {
    el?.remove();
    return;
  }
  if (el) {
    el.setAttribute("content", content);
    return;
  }
  const created = document.createElement("meta");
  created.setAttribute("name", name);
  created.setAttribute("content", content);
  document.head.appendChild(created);
}

function setJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

const JSON_LD_ID = "seo-jsonld";

export function useSEO({ title, description, path, jsonLd, noindex }: SEOOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMetaByName("description", description);
    setCanonical(noindex ? null : url);
    setOrRemoveMetaByName("robots", noindex ? "noindex, nofollow" : null);

    setMetaByProperty("og:title", title);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:url", url);
    setMetaByProperty("og:site_name", SITE_NAME);
    setMetaByProperty("og:locale", "fr_FR");
    setMetaByProperty("og:type", jsonLd?.["@type"] === "Person" ? "profile" : "article");

    setMetaByName("twitter:card", "summary");
    setMetaByName("twitter:title", title);
    setMetaByName("twitter:description", description);

    if (jsonLd) {
      setJsonLd(JSON_LD_ID, jsonLd);
    }
  }, [title, description, path, jsonLd, noindex]);
}

export { SITE_URL };
