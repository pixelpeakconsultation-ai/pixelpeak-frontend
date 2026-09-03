import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  canonical,
  keywords,
  image = "/logo.png",
}) {
  const siteName = "PixelPeak";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}

      {/* Canonical */}
      {canonical && (
        <link
          rel="canonical"
          href={canonical}
        />
      )}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content={description}
      />

      {canonical && (
        <meta
          property="og:url"
          content={canonical}
        />
      )}

      <meta property="og:image" content={image} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta name="twitter:image" content={image} />

      {/* Mobile */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
    </Helmet>
  );
}

export default SEO;