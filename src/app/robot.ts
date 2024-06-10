import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://hcpolishclub.org";

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/community", "/contact", "/events", "/faq", "/history", "/leadership", "/member", "/mission", "/resources"],
      disallow: ["/login", "/dashboard", "/dashboard/create-event", "/dashboard/delete-event", "/api", "/api/auth", "/api/events"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
