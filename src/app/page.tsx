import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import Testiomonials from "@/components/Testiomonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/80 antialiased ">
      <HeroSection />
      <FeatureCourses />
      <WhyChooseUs/>
      <Testiomonials/>
     
    </main>
  );
}
