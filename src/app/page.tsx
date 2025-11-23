import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WhyOnChain from "@/components/WhyOnChain";
import InstallGuide from "@/components/InstallGuide";
import Nip05Teaser from "@/components/Nip05Teaser";
import LearnMore from "@/components/LearnMore";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <HowItWorks />
      <WhyOnChain />
      <InstallGuide />
      <Nip05Teaser />
      <LearnMore />
      <Footer />
    </main>
  );
}
