import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppShowcase from "@/components/AppShowcase";
import HowItWorks from "@/components/HowItWorks";
import WhySwitch from "@/components/WhySwitch";
import FAQ from "@/components/FAQ";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AppShowcase />
      <HowItWorks />
      <WhySwitch />
      <FAQ />
      <Download />
      <Footer />
    </main>
  );
}
