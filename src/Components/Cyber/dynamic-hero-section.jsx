
import { useState, useEffect } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { CodeIllustration } from "./illustrations/code-illustration"
import { SecurityIllustration } from "./illustrations/security-illustration"
import { AssessmentIllustration } from "./illustrations/assessment-illustration"
import { TestingIllustration } from "./illustrations/testing-illustration"
import { CampusIllustration } from "./illustrations/campus-illustration"


const services = [
  {
    id: 1,
    head: "Software",
    title: "businesses with",
    subtitle: "scalable and robust",
    last:"software solutions",
    description: "From web to enterprise systems, we turn ideas into high-performing applications.",
    illustration: <CodeIllustration />,
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: 2,
    head: "Cyber Security",
    title: "organizations with",
    subtitle: "smarter, stronger",
    last:"digital security",
    description: "Safeguarding data, infrastructure, and trust in an evolving threat landscape.",
    illustration: <SecurityIllustration />,
    color: "from-blue-500 to-indigo-600",
  },
  {
  id: 3,
  head: "Assessment",
  title: "teams with",
  subtitle: "clear and measurable",
  last: "insights",
  description: "Driving improvement through focused evaluations and feedback.",
  illustration: <AssessmentIllustration />,
  color: "from-red-500 to-orange-600",
}

,
  {
    id: 4,
    title: "products with",
    subtitle: "reliable, high-quality",
    last:"testing practices",
    description: "Ensuring flawless performance through functional, manual, and automated testing.",
    illustration: <TestingIllustration />,
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 5,
    title: "students with",
    subtitle: "skills, training, and placement",
    last:"support",
    description: "Bridging the gap between education and employment with career-aligned learning.",
    illustration: <CampusIllustration />,
    color: "from-violet-500 to-indigo-600",
  },
]

export function DynamicHeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [fadeState, setFadeState] = useState("in")
  const currentService = services[currentIndex]

  const goToSlide = (index) => {
    if (isAnimating) return
    setIsAnimating(true)

    // Start fade out
    setFadeState("out")

    // Change slide after fade out
    setTimeout(() => {
      setCurrentIndex(index)
      setFadeState("in")
    }, 300)

    // Reset animation lock after complete transition
    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }

  const goToPrevious = () => {
    if (isAnimating) return
    const newIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    if (isAnimating) return
    const newIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, isAnimating])

  return (
    <section className="container mx-auto md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-8">
          <div className={`transition-opacity duration-300 ${fadeState === "out" ? "opacity-0" : "opacity-100"}`}>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${currentService.color}`}>
               Empowering
              </span>
              <br />
              {currentService.title}
              <br />
              <span className="relative">
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${currentService.color}`}>
                  {currentService.subtitle}
                </span>
                <br />
          
          </span> 
              
              {currentService.last}
            </h1>
          </div>
          <p
            className={`text-gray-400 text-lg md:text-xl max-w-lg transition-opacity duration-300 ${fadeState === "out" ? "opacity-0" : "opacity-100"}`}
          >
            {currentService.description}
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-opacity duration-300 ${fadeState === "out" ? "opacity-0" : "opacity-100"}`}
          >
            <button className={`px-4 py-2 rounded-md text-lg bg-gradient-to-r ${currentService.color} hover:opacity-90 text-white flex items-center`}>
              Explore Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="px-4 py-2 rounded-md text-lg border border-gray-700 text-gray-300 hover:bg-gray-800">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Service Illustrations */}
        <div className="relative">
          {/* Corner Brackets */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-teal-400" />
          <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-teal-400" />
          <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-teal-400" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-teal-400" />

          {/* Glowing Effect */}
          <div
            className={`absolute -inset-0.5 bg-gradient-to-r ${currentService.color} opacity-20 blur-sm rounded-lg transition-colors duration-500`}
          />

          {/* Illustration Container */}
          <div className="relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 p-6 h-[500px] flex items-center justify-center">
            <div
              className={`w-full h-full flex items-center justify-center transition-opacity duration-300 ${fadeState === "out" ? "opacity-0" : "opacity-100"}`}
            >
              {currentService.illustration}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={
                  "w-3 h-3 rounded-full transition-all " +
                  (currentIndex === index ? "bg-teal-400 w-8" : "bg-gray-400/50 hover:bg-gray-400")
                }
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
