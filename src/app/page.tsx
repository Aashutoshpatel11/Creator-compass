import HeroSection from "@/components/HeroSection";
import FeaturedCard from "@/components/FeaturedCard";
import { div } from "framer-motion/client";
import Image from "next/image";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import FeaturedWebinar from "@/components/FeaturedWebinar";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
      <div className="" >
        <HeroSection />
        <FeaturedCard />
        <WhyChooseUs />
        <TestimonialCards />
        <FeaturedWebinar />
        <Instructors />
      </div>
  );
}
