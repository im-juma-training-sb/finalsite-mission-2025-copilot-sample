import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { GoalsSection } from "@/components/goals-section"
import { VisionSection } from "@/components/vision-section"
import { ImpactSection } from "@/components/impact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <GoalsSection />
        <VisionSection />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  )
}
