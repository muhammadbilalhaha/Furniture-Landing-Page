import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import TrustStrip from "../sections/TrustStrip";
import Inspiration from "../sections/Inspiration";
import BeautifySpace from "../sections/BeautifySpace";
import BrowseRange from "../sections/BrowseRange";
import HowItWorks from "../sections/HowItWorks";
import Newsletter from "../sections/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Inspiration />
        <BeautifySpace />
        <BrowseRange />
        <HowItWorks />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}