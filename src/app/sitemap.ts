import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://captorange.vercel.app/",
      lastModified: new Date(),
    },
  ];
}
