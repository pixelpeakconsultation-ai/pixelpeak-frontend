import { Helmet } from "react-helmet-async";

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PixelPeak",
    description:
      "PixelPeak is a digital marketing and web development agency helping businesses grow through websites, SEO, paid advertising, social media marketing, and digital strategy.",
    url: "https://frontend-orcin-zeta-52.vercel.app",
    logo: "https://frontend-orcin-zeta-52.vercel.app/logo.png",
    sameAs: [
      "https://www.instagram.com/pixelpeak_marketing/",
      "https://www.tiktok.com/@pixel.peak00",
      "https://www.facebook.com/share/1JsBkrrFaP/",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export default OrganizationSchema;