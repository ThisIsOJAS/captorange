import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechStackMarquee } from "@/components/sections/TechStackMarquee";
import { Services } from "@/components/sections/Services";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Stats } from "@/components/sections/Stats";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { DeveloperProfile } from "@/components/sections/DeveloperProfile";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/ui/Footer";
import { FloatingElements } from "@/components/ui/FloatingElements";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="px-4 md:px-12 lg:px-24 xl:px-32">
          <Hero />
        </div>
        <TechStackMarquee />
        <div className="px-4 md:px-12 lg:px-24 xl:px-32">
          <Services />
          <FeaturedProject />
        </div>
        <Stats />
        <div className="px-4 md:px-12 lg:px-24 xl:px-32">
          <ProjectsGrid />
          <DeveloperProfile />
          <CTA />
        </div>
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
