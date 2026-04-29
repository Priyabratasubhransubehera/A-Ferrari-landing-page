import { HeroVideoBackground } from './components/HeroVideoBackground';
import { FeaturedModels3D } from './components/FeaturedModels3D';
import { PerformanceStats3D } from './components/PerformanceStats3D';
import { BookTestDrive3D } from './components/BookTestDrive3D';
import { TechFeatures3D } from './components/TechFeatures3D';
import { ScrollTransition } from './components/ScrollTransition';
import { LegacySection } from './components/LegacySection';
import { InteractiveCarSection } from './components/InteractiveCarSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CinematicBreak } from './components/CinematicBreak';
import { ModelsShowcase } from './components/ModelsShowcase';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { LoadingScreen } from './components/LoadingScreen';
import { SoundToggle } from './components/SoundToggle';
import { ScrollProgress } from './components/ScrollProgress';
import { useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      
      <div className="bg-black overflow-x-hidden min-h-screen">
        {/* Smooth scroll behavior */}
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 10px;
          }
          
          ::-webkit-scrollbar-track {
            background: #000;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #FF2800;
            border-radius: 5px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #cc2000;
          }

          /* Perspective for 3D effects */
          .perspective-1000 {
            perspective: 1000px;
          }

          /* Smooth transitions for all interactive elements */
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          /* Glassmorphism utility */
          .glass {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          /* 3D transform optimization */
          .transform-3d {
            transform-style: preserve-3d;
            -webkit-transform-style: preserve-3d;
          }

          /* Hardware acceleration for smooth animations */
          .gpu-accelerated {
            transform: translateZ(0);
            will-change: transform;
          }

          /* Glow effect utility */
          .glow-red {
            box-shadow: 0 0 40px rgba(255, 40, 0, 0.5);
          }

          /* Radial gradient utility */
          .bg-gradient-radial {
            background: radial-gradient(circle, var(--tw-gradient-stops));
          }
        `}</style>

        {!isLoading && (
          <>
            {/* Navbar - Appears on Scroll */}
            <Navbar />

            {/* Scroll Progress */}
            <ScrollProgress />

            {/* Sound Toggle */}
            <SoundToggle />

            {/* Hero Section - Cinematic Video Background */}
            <HeroVideoBackground />

            {/* Featured Models Section - 3D Slider */}
            <FeaturedModels3D />

            {/* Performance Stats - 3D Animated Counters */}
            <PerformanceStats3D />

            {/* Models Showcase - Horizontal Scroll (Swapped Position) */}
            <ModelsShowcase />

            {/* Tech Features - 3D Interactive Cards */}
            <TechFeatures3D />

            {/* Scroll Transition - Red Streak */}
            <ScrollTransition />

            {/* Legacy Section - Timeline Story */}
            <LegacySection />

            {/* Interactive Car Section - Hotspots */}
            <InteractiveCarSection />

            {/* Experience Section - Glassmorphism Cards */}
            <ExperienceSection />

            {/* Cinematic Break - Emotional Pause */}
            <CinematicBreak />

            {/* Book Test Drive - 3D Interactive Form (Swapped Position) */}
            <BookTestDrive3D />

            {/* Final CTA - Journey Call */}
            <FinalCTA />

            {/* Footer */}
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
