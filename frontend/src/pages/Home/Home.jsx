import Hero from "../../components/home/Hero/Hero";
import ServicesSection from "../../components/home/Services/Services";
import Reviews from "../../components/home/Reviews/Reviews";
import FAQ from "../../components/home/FAQ/FAQ";
import CTA from "../../components/home/CTA/CTA";
import SEO from "../../components/common/SEO/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Digital Marketing & Web Development Agency"
        description="PixelPeak is a digital marketing and web development agency helping businesses grow through modern websites, SEO, social media marketing, branding, and digital solutions."
        canonical="https://YOUR-DOMAIN.com/"
        keywords="digital marketing agency, web development agency, SEO services, social media marketing, website development, website design, branding, digital marketing, PixelPeak"
      />

      <Hero />

      <ServicesSection />

      <Reviews />

      <FAQ />

      <CTA />
    </>
  );
}

export default Home;