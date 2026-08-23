import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import HvacTraining from "@/components/home/HvacTraining";
import TrainingJourney from "@/components/home/TrainingJourney";
import Eligibility from "@/components/home/Eligibility";
import FAQ from "@/components/home/FAQ";
import Registration from "@/components/home/Registration";
import Footer from "@/components/home/Footer";
import AuthorizedPartners from "@/components/home/AuthorizedPartners";
import Contact from "@/components/home/Contact";


export default function Home() {
  return (
    <>
      <main className="space-y-8 sm:space-y-10 lg:space-y-12">
        <Hero />
        <AuthorizedPartners />
        <Benefits />
        <HvacTraining />
        <TrainingJourney />
        <Eligibility />
        <FAQ />
        <Contact />
        <Registration />
      </main>

      <Footer />
    </>
  );
}