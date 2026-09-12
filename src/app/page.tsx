import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ContrastRings from "@/components/ContrastRings";
import SvaOverview from "@/components/SvaOverview";
import SvaBreakdown from "@/components/SvaBreakdown";
import Metrics from "@/components/Metrics";
import Sectors from "@/components/Sectors";
import ConnectSection from "@/components/ConnectSection";
import Projects from "@/components/Projects";
import TrustBand from "@/components/TrustBand";
import WhyNow from "@/components/WhyNow";
import PerformanceMatrix from "@/components/PerformanceMatrix";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ContrastRings
          eyebrow="EL NÚCLEO CERONIX"
          heading="Un sistema. Tres capas en equilibrio."
          text="Cada anillo representa una capa del ecosistema girando en sincronía: Web Hub, Motor SVA y MVP Ignition. Ninguna funciona sola — juntas sostienen el crecimiento."
        />
        <SvaOverview />
        <SvaBreakdown />
        <Metrics />
        <Sectors />
        <ConnectSection />
        <Projects />
        <TrustBand />
        <WhyNow />
        <ContrastRings
          eyebrow="EL RESULTADO"
          heading="De la fricción al equilibrio."
          text="Negocios que antes dependían de procesos manuales y publicidad constante, hoy operan con un sistema que se sostiene solo — captando, cualificando y cerrando sin pausa."
          reverse
        />
        <PerformanceMatrix />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
