import portfolioData from "@/app/data/portfolioData";

export default function sitemap() {
  const homepage = "https://twelveletter.co/";
  // Start with your predefined static sitemap entries
  const map = [
    {
      url: homepage,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${homepage}about-us`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${homepage}contact-us`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${homepage}terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${homepage}service/digital-marketing`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${homepage}service/web-design-and-development`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${homepage}service/graphic-design-expertise`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${homepage}service/content-creation`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${homepage}service/in-house-photoshoot`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  // Add dynamic entries from portfolioData
  portfolioData.forEach((category) => {
    // Add a URL for the category page
    map.push({
      url: `${homepage}${category.categorySlug}`,
      lastModified: new Date(),
      changeFrequency: "monthly", // Adjust based on how often these pages are updated
      priority: 0.8,
    });

    // Add URLs for portfolio items within the category
    category.portfolioItems.forEach((item) => {
      map.push({
        url: `${homepage}${category.categorySlug}/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly", // Adjust based on how often these pages are updated
        priority: 0.5,
      });
    });
  });

  // Return the complete sitemap
  return map;
}
