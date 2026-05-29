import { useEffect, useState } from 'react'
import { AccessibilityPanel } from '../components/AccessibilityPanel'
import { LoadingScreen } from '../components/LoadingScreen'
import { Navbar } from '../components/Navbar'
import { ParticleField } from '../components/ParticleField'
import { AboutSection } from '../sections/AboutSection'
import { AcademicProjectSection } from '../sections/AcademicProjectSection'
import { CoursesSection } from '../sections/CoursesSection'
import { Footer } from '../sections/Footer'
import { HeroSection } from '../sections/HeroSection'
import { ImpactSection } from '../sections/ImpactSection'
import { OpportunitiesSection } from '../sections/OpportunitiesSection'
import { PitchDeckSection } from '../sections/PitchDeckSection'
import { ProfileDiagnosticSection } from '../sections/ProfileDiagnosticSection'
import { StudentDashboardSection } from '../sections/StudentDashboardSection'
import { TestimonialsSection } from '../sections/TestimonialsSection'

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 650)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <div className="mesh-bg custom-scrollbar min-h-screen overflow-hidden text-slate-950 transition-colors duration-500 dark:text-white">
      <a
        href="#conteudo"
        className="fixed left-4 top-4 z-[120] -translate-y-24 rounded-full bg-yellow-300 px-5 py-3 font-black text-black transition focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <LoadingScreen isLoading={isLoading} />
      <ParticleField />
      <Navbar />
      <AccessibilityPanel />
      <main id="conteudo" className="relative z-10" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <AcademicProjectSection />
        <ProfileDiagnosticSection />
        <StudentDashboardSection />
        <CoursesSection />
        <OpportunitiesSection />
        <ImpactSection />
        <PitchDeckSection />
        <TestimonialsSection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
