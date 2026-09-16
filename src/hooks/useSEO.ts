import { useEffect } from "react";

const SITE_URL = "https://khalidchliyahe.vercel.app";
const SITE_NAME = "Khalid Chliyahe — Portfolio";

type SEOOptions = {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>;
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

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
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

export function useSEO({ title, description, path, jsonLd }: SEOOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMetaByName("description", description);
    setCanonical(url);

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
  }, [title, description, path, jsonLd]);
}

export { SITE_URL };
