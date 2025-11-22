import Hero from "@/components/Hero";
import Features from "@/components/Features";
import InstallGuide from "@/components/InstallGuide";
import Nip05Teaser from "@/components/Nip05Teaser";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <InstallGuide />
      <Nip05Teaser />
      <Footer />
    </main>
  );
}
