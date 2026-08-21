import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import TrainingJourney from "@/components/home/TrainingJourney";
import Eligibility from "@/components/home/Eligibility";
import FAQ from "@/components/home/FAQ";
import Registration from "@/components/home/Registration";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Benefits />
        <TrainingJourney />
        <Eligibility />
        <FAQ />
        <Registration />
      </main>

      <Footer />
    </>
  );
}