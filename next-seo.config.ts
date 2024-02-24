const description =
  "Snaqe, your new personal clothing tool";
const title = "SNAQE";
const url = "https://snaqe.vercel.app";

const seo = {
  title,
  titleTemplate: "%s | Snaqe",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
  twitter: {
    handle: "@snaqe",
    site: "@snaqe",
  },
};

export { seo as defaultSEO, url as defaultUrl };
