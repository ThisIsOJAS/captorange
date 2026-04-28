export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://captorange.vercel.app/sitemap.xml",
  };
}
