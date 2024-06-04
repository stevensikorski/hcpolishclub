import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://hcpolishclub.org";

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/contact", "/events", "/faq", "/leadership"],
      disallow: ["/dashboard"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
