import portfolioData from "@/app/data/portfolioData";

function getSitemap() {
  const map = [
    {
      url: "https://twelveletter.co/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://twelveletter.co/about-us",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://twelveletter.co/contact-us",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://twelveletter.co/terms-and-conditions",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: "https://twelveletter.co/service/digital-marketing",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://twelveletter.co/service/web-design-and-development",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://twelveletter.co/service/graphic-design-expertise",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://twelveletter.co/service/content-creation",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://twelveletter.co/service/in-house-photoshoot",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  const homepage = "https://twelveletter.co/";
  portfolioData.forEach((category) => {
    // Add a URL for the category page
    map.push({
      url: `${homepage}${category.categorySlug}`,
      lastModified: new Date(),
      changeFrequency: "monthly", // Adjust based on how often these pages are updated
      priority: 0.8, // Adjust based on importance
    });

    // Add URLs for portfolio items within the category
    category.portfolioItems.forEach((item) => {
      map.push({
        url: `${homepage}${category.categorySlug}/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly", // Adjust based on how often these pages are updated
        priority: 0.5, // Adjust based on importance
      });
    });
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${map
        .map(
          (item) => `
              <url>
                <loc>${item.url}</loc>
                <lastmod>${item.lastModified.toISOString()}</lastmod>
                <changefreq>${item.changeFrequency}</changefreq>
                <priority>${item.priority}</priority>
              </url>
            `
        )
        .join("")}
      </urlset>
    `;
}

export async function GET() {
  return new Response(getSitemap(), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
