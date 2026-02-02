

import HeroSection from "@/components/ui/landing/HeroSection";
import EventOverview from "@/components/ui/landing/EventOverview";
import ScheduleSection from "@/components/ui/landing/ScheduleSection";
import OrganizerInfo from "@/components/ui/landing/OrganizerInfo";
import Footer from "@/components/ui/landing/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EventOverview />
      <ScheduleSection />
      <OrganizerInfo />
      <Footer />
    </>
  );
}
