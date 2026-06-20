import { PortfolioVideoBanner } from "@/components/sections/portfolio/PortfolioVideoBanner";
import { PortfolioShowcase } from "@/components/sections/portfolio/PortfolioShowcase";

export const metadata = {
  title: "Portfolio | John Carter",
  description: "Browse the latest projects by John Carter - web developer.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioVideoBanner />
      <PortfolioShowcase />
    </>
  );
}
