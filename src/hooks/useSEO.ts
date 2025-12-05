import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonicalPath?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  structuredData?: object;
}

export function useSEO({ 
  title, 
  description, 
  keywords, 
  author = "Divyesh Bondapalli",
  canonicalPath, 
  ogTitle, 
  ogDescription, 
  ogImage = "/logo.jpeg", 
  ogUrl,
  twitterCard = "summary_large_image",
  structuredData 
}: SEOOptions) {
  useEffect(() => {
    // Basic meta tags
    if (title) document.title = title;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }

    if (keywords) {
      let meta = document.querySelector('meta[name="keywords"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'keywords');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', keywords);
    }

    if (author) {
      let meta = document.querySelector('meta[name="author"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'author');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', author);
    }

    // Canonical URL
    if (canonicalPath) {
      const url = `${window.location.origin}${canonicalPath}`;
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: ogTitle || title },
      { property: 'og:description', content: ogDescription || description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: ogUrl || window.location.href },
      { property: 'og:type', content: 'website' }
    ];

    ogTags.forEach(({ property, content }) => {
      if (content) {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      }
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:title', content: ogTitle || title },
      { name: 'twitter:description', content: ogDescription || description },
      { name: 'twitter:image', content: ogImage }
    ];

    twitterTags.forEach(({ name, content }) => {
      if (content) {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', name);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      }
    });

    // JSON-LD structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, author, canonicalPath, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, structuredData]);
}
