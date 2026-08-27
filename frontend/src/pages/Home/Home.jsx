import Hero from "../../components/home/Hero/Hero";
import ServicesSection from "../../components/home/Services/Services";
import Reviews from "../../components/home/Reviews/Reviews";
import FAQ from "../../components/home/FAQ/FAQ";
import CTA from "../../components/home/CTA/CTA";

function Home() {
  return (
    <>
      <Hero />

      <ServicesSection />

      <Reviews />

      <FAQ />

      <CTA />
    </>
  );
}

export default Home;