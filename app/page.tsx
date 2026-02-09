import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VideoHero from "@/components/home/VideoHero";
import GetInTouch from "@/components/home/GetInTouch";
import LiveImpactTracker from "@/components/home/LiveImpactTracker";
import MissionVisionRoadmap from "@/components/home/roadmap";

export default function Home() {
  return (
    <main className="min-h-screen">
      <VideoHero />
      <MissionVisionRoadmap />
      <GetInTouch />
    </main>
  );
}
