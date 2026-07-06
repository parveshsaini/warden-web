import { About } from "@/components/site/about";
import { Benchmarks } from "@/components/site/benchmarks";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { HowItWorks } from "@/components/site/how-it-works";
import { Install } from "@/components/site/install";
import { Mascot } from "@/components/site/mascot";
import { Navbar } from "@/components/site/navbar";
import { Pillars } from "@/components/site/pillars";
import { Problem } from "@/components/site/problem";
import { UseCases } from "@/components/site/use-cases";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Pillars />
        <HowItWorks />
        <Benchmarks />
        <Install />
        <UseCases />
        <Mascot />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
