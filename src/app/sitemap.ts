export default async function sitemap() {
  const baseUrl = "https://hcpolishclub.org";
  return [
    { url: "https://hcpolishclub.org", lastModified: new Date() },
    { url: "https://hcpolishclub.org/community", lastModified: new Date() },
    { url: "https://hcpolishclub.org/contact", lastModified: new Date() },
    { url: "https://hcpolishclub.org/events", lastModified: new Date() },
    { url: "https://hcpolishclub.org/faq", lastModified: new Date() },
    { url: "https://hcpolishclub.org/history", lastModified: new Date() },
    { url: "https://hcpolishclub.org/leadership", lastModified: new Date() },
    { url: "https://hcpolishclub.org/member", lastModified: new Date() },
    { url: "https://hcpolishclub.org/mission", lastModified: new Date() },
    { url: "https://hcpolishclub.org/resources", lastModified: new Date() },
  ];
}
