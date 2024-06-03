export default async function sitemap() {
  const baseUrl = "https://hcpolishclub.org";
  return [
    { url: "https://hcpolishclub.org", lastModified: new Date() },
    { url: "https://hcpolishclub.org/events", lastModified: new Date() },
  ];
}
