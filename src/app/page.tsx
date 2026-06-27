import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TrainingPrograms from "@/components/sections/TrainingPrograms";
import GroundTraining from "@/components/sections/GroundTraining";
import Instructors from "@/components/sections/Instructors";
import TrainingProcess from "@/components/sections/TrainingProcess";
import Facilities from "@/components/sections/Facilities";
import PlacementAssistance from "@/components/sections/PlacementAssistance";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <TrainingPrograms />
        <GroundTraining />
        <Instructors />
        <TrainingProcess />
        <Facilities />
        <PlacementAssistance />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
