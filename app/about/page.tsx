import { AboutHero } from "@/components/sections/about/AboutHero";
import { StorySection } from "@/components/sections/about/StorySection";
import { WorkTimelineSection } from "@/components/sections/about/WorkTimelineSection";
import { EducationSection } from "@/components/sections/about/EducationSection";

export const metadata = {
  title: "About | John Carter",
  description: "Learn more about John Carter - web developer with 12+ years of experience.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <EducationSection />
      <WorkTimelineSection />
      <StorySection />
    </>
  );
}
