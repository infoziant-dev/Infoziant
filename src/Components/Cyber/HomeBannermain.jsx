import './home.css'

import { DynamicHeroSection } from "./dynamic-hero-section";

export default function HomeBanner() {

  return (
    <div className="text-white cls" style={{
      minHeight: '100vh!important',
      minWidth: '100%!important',
      maxWidth: '100%!important',
      margin: 0,
      padding: '5rem 0 7rem 0',
      backgroundColor: '#080808', // Darker background for more impact
      backgroundImage: `
        radial-gradient(rgba(35, 35, 35, 0.4) 2px, transparent 2px),
        linear-gradient(45deg, rgba(0, 0, 0, 0.7) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.7) 75%, rgba(0, 0, 0, 0.7)),
        linear-gradient(-45deg, rgba(0, 0, 0, 0.7) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.7) 75%, rgba(0, 0, 0, 0.7))
      `,
      backgroundSize: '20px 30px, 60px 60px, 60px 60px',
      backgroundPosition: '0 0, 0 0, 0 0',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'inset 0 0 120px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.8)',
      animation: 'shine 8s ease-in-out infinite',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '4px',
      zIndex: 10,
    }}>
      <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 20 }}>
        <DynamicHeroSection />
      </div>
    </div>
  );
}
