import { Hero } from "@/components/landing/Hero";
import { PopularDestinations } from "@/components/landing/PopularDestinations";
import { FeaturedStays } from "@/components/landing/FeaturedStays";
import { Benefits } from "@/components/landing/Benefits";
import { CTA } from "@/components/landing/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <FeaturedStays />
      <Benefits />
      <CTA />
    </>
  );
}
