import { DynamicHeroSection } from "./dynamic-hero-section";

export default function HomeBanner() {
  return (
    <div className="relative w-full min-h-screen">
  <section className="HomeBanner-bg-back relative w-full min-h-screen">
    {/* Black overlay */}
    <div className="absolute inset-0 bg-black opacity-0 z-10"></div>

    {/* Content */}
    <div className="relative z-20 flex items-center justify-center min-h-[80vh] sm:min-h-screen px-4 py-10 ">
      <DynamicHeroSection />
    </div>
  </section>
</div>

  );
}
