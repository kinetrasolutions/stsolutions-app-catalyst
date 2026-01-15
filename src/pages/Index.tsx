import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import Sectors from "@/components/Sectors";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CookieBar from "@/components/CookieBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Sectors />
        <HowItWorks />
        <About />
        <CTA />
      </main>
      <Footer />
      <CookieBar />
    </div>
  );
};

export default Index;
