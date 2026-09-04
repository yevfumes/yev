import type { MetadataRoute } from "next";

const BASE_URL = "https://www.yevfumes.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/learn",
    "/formula-library",
    "/consultations",
    "/materials",
    "/about",
    "/waitlist",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
