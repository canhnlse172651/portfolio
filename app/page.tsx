import { Hero } from "@/components/sections/home/Hero";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { SkillsSection } from "@/components/sections/home/SkillsSection";
import { ProjectsSection } from "@/components/sections/home/ProjectsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}
