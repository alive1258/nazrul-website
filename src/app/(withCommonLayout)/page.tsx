import HeroSection from "@/src/components/Ui/HomePage/HeroSection/HeroSection";
import About from "@/src/components/Ui/HomePage/About/About";
import Achievements from "@/src/components/Ui/HomePage/Achievements/Achievements";
import VisionMission from "@/src/components/Ui/HomePage/VisionMission/VisionMission";
import Education from "@/src/components/Ui/HomePage/Education/Education";
import Experience from "@/src/components/Ui/HomePage/Experience/Experience";
import Services from "@/src/components/Ui/HomePage/Services/Services";
import Gallery from "@/src/components/Ui/HomePage/Gallery/Gallery";
import VideoGallery from "@/src/components/Ui/HomePage/VideoGallery/VideoGallery";
import Blog from "@/src/components/Ui/HomePage/Blog/Blog";
import FAQ from "@/src/components/Ui/HomePage/FAQ/FAQ";
import Contact from "@/src/components/Ui/HomePage/Contact/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Achievements />
      <VisionMission />
      <Education />
      <Experience />
      <Services />
      <Gallery />
      <VideoGallery />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}
